// Load paragraph from sessionStorage
function loadParagraph() {
    const paragraphData = sessionStorage.getItem('selectedParagraph');
    
    if (!paragraphData) {
        window.location.href = 'paragraphs.html';
        return;
    }
    
    const paragraph = JSON.parse(paragraphData);
    
    // Set title
    document.getElementById('pageTitle').textContent = paragraph.title;
    document.getElementById('paragraphTitle').textContent = paragraph.title;
    
    // Set category and difficulty badges
    const categoryBadge = document.getElementById('categoryBadge');
    const difficultyBadge = document.getElementById('difficultyBadge');
    
    const categoryColors = {
        'Technology': 'bg-blue-100 text-blue-800',
        'Education': 'bg-green-100 text-green-800',
        'Environment': 'bg-emerald-100 text-emerald-800',
        'Health': 'bg-pink-100 text-pink-800',
        'Psychology': 'bg-purple-100 text-purple-800'
    };
    
    const difficultyColors = {
        'Beginner': 'bg-green-200 text-green-900',
        'Intermediate': 'bg-yellow-200 text-yellow-900',
        'Advanced': 'bg-red-200 text-red-900'
    };
    
    categoryBadge.className = `px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[paragraph.category] || 'bg-gray-100 text-gray-800'}`;
    categoryBadge.textContent = paragraph.category;
    
    difficultyBadge.className = `px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[paragraph.difficulty] || 'bg-gray-200 text-gray-900'}`;
    difficultyBadge.textContent = paragraph.difficulty;
    
    // Make words clickable
    const content = makeWordsClickable(paragraph.content);
    document.getElementById('paragraphContent').innerHTML = content;
}

// Convert text to clickable words
function makeWordsClickable(text) {
    // Split by spaces and punctuation while preserving them
    const words = text.split(/(\s+|[.,!?;:])/);
    
    return words.map(word => {
        // Check if it's an actual word (not space or punctuation)
        if (/^[a-zA-Z]+$/.test(word)) {
            return `<span class="clickable-word" ondblclick="showWordPopup('${word.toLowerCase()}', event)">${word}</span>`;
        }
        return word;
    }).join('');
}

// Show word popup
function showWordPopup(word, event) {
    const popup = document.getElementById('wordPopup');
    
    // Position popup based on screen size
    if (window.innerWidth > 640) {
        // Desktop: position near cursor
        let x = event.clientX + 10;
        let y = event.clientY + 10;
        
        // Keep popup within viewport
        if (x + 500 > window.innerWidth) {
            x = window.innerWidth - 520;
        }
        if (y + 400 > window.innerHeight) {
            y = window.innerHeight - 420;
        }
        
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.style.transform = 'none';
    } else {
        // Mobile: center on screen
        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
    }
    
    // Show popup
    popup.classList.add('show');
    
    // Set word
    document.getElementById('popupWord').textContent = word;
    
    // Reset content with loading state
    document.getElementById('banglaMeaning').innerHTML = '<span class="loading-spinner"></span> Loading...';
    document.getElementById('englishMeaning').innerHTML = '<span class="loading-spinner"></span> Loading...';
    document.getElementById('exampleSentence').innerHTML = '<span class="loading-spinner"></span> Loading...';
    document.getElementById('audioSection').style.display = 'none';
    
    // Fetch word details
    fetchWordDetails(word);
}

// Close popup
function closePopup() {
    const popup = document.getElementById('wordPopup');
    popup.classList.remove('show');
}

// Fetch word details from APIs
async function fetchWordDetails(word) {
    try {
        // Fetch from Dictionary API
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        
        if (data.title === "No Definitions Found") {
            throw new Error('Word not found');
        }
        
        const wordData = data[0];
        
        // Extract meaning
        let meaning = 'No meaning found';
        let example = 'No example available';
        
        if (wordData.meanings && wordData.meanings.length > 0) {
            const firstMeaning = wordData.meanings[0];
            if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
                meaning = firstMeaning.definitions[0].definition;
                example = firstMeaning.definitions[0].example || 'No example available';
            }
        }
        
        // Update English meaning
        document.getElementById('englishMeaning').innerHTML = `<strong>${meaning}</strong>`;
        
        // Update example
        if (example !== 'No example available') {
            document.getElementById('exampleSentence').innerHTML = `<em>"${example}"</em>`;
        } else {
            document.getElementById('exampleSentence').innerHTML = '<span class="error-message">No example available</span>';
        }
        
        // Extract audio
        let audioUrl = '';
        if (wordData.phonetics && wordData.phonetics.length > 0) {
            for (let phonetic of wordData.phonetics) {
                if (phonetic.audio) {
                    audioUrl = phonetic.audio;
                    break;
                }
            }
        }
        
        // Show audio if available
        if (audioUrl) {
            document.getElementById('audioSection').style.display = 'block';
            document.getElementById('audioPlayer').src = audioUrl;
        }
        
        // Translate to Bengali
        translateToBengali(meaning);
        
    } catch (error) {
        console.error('Dictionary API Error:', error);
        document.getElementById('englishMeaning').innerHTML = '<span class="error-message"><i class="fas fa-exclamation-triangle"></i> Word not found in dictionary</span>';
        document.getElementById('exampleSentence').innerHTML = '<span class="error-message">No example available</span>';
        document.getElementById('banglaMeaning').innerHTML = '<span class="error-message">Unable to translate</span>';
    }
}

// Translate meaning to Bengali
async function translateToBengali(meaning) {
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(meaning)}&langpair=en|bn`);
        const data = await response.json();
        
        if (data.responseStatus === 200 && data.responseData && data.responseData.translatedText) {
            const banglaMeaning = data.responseData.translatedText;
            document.getElementById('banglaMeaning').innerHTML = `<strong>${banglaMeaning}</strong>`;
        } else {
            throw new Error('Translation failed');
        }
        
    } catch (error) {
        console.error('Translation API Error:', error);
        document.getElementById('banglaMeaning').innerHTML = '<span class="error-message"><i class="fas fa-exclamation-triangle"></i> Translation unavailable</span>';
    }
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('wordPopup');
    if (!popup.contains(e.target) && !e.target.classList.contains('clickable-word')) {
        closePopup();
    }
});

// Close popup on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Make popup draggable (only on desktop)
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;

const popup = document.getElementById('wordPopup');

popup.addEventListener('mousedown', (e) => {
    // Only allow dragging on desktop
    if (window.innerWidth <= 640) {
        return;
    }
    
    if (e.target.classList.contains('popup-close') || e.target.tagName === 'AUDIO') {
        return;
    }
    isDragging = true;
    initialX = e.clientX - popup.offsetLeft;
    initialY = e.clientY - popup.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && window.innerWidth > 640) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        // Keep popup within viewport
        currentX = Math.max(0, Math.min(currentX, window.innerWidth - popup.offsetWidth));
        currentY = Math.max(0, Math.min(currentY, window.innerHeight - popup.offsetHeight));
        
        popup.style.left = currentX + 'px';
        popup.style.top = currentY + 'px';
        popup.style.transform = 'none';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Initialize page
document.addEventListener('DOMContentLoaded', loadParagraph);
