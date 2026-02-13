// Global variables
let allWords = [];
let filteredWords = [];
let wordTypes = [];
let currentPage = 1;
const itemsPerPage = 50;
let wordApiCache = {}; // Cache for API responses

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeWords();
});

// Initialize words data from JavaScript file
function initializeWords() {
    try {
        console.log('Loading data from WORDS_DATA...');
        
        // Get data from WORDS_DATA global object
        wordTypes = WORDS_DATA.wordTypes;
        allWords = WORDS_DATA.allWords;
        
        console.log('WordTypes:', wordTypes.length);
        console.log('AllWords:', allWords.length);
        
        // Update UI
        document.getElementById('totalCount').textContent = allWords.length;
        document.getElementById('loadingState').classList.add('hidden');
        
        // Populate filter dropdown
        populateTypeFilter();
        
        // Filter and display words
        filterWords();
        
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('loadingState').innerHTML = '<p class="text-red-600 py-4">Error loading data. Check console.</p>';
    }
}

// Fetch data from Dictionary API
async function fetchDictionaryData(word) {
    // Check cache first
    if (wordApiCache[word.toLowerCase()]) {
        return wordApiCache[word.toLowerCase()];
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
        
        if (!response.ok) {
            throw new Error('Word not found');
        }

        const data = await response.json();
        const wordData = data[0];

        // Extract relevant information
        const meanings = wordData.meanings[0];
        const definitions = meanings.definitions.slice(0, 3); // Get first 3 definitions
        const examples = definitions.filter(d => d.example).map(d => d.example);
        const synonyms = meanings.synonyms.slice(0, 6); // First 6 synonyms
        const antonyms = meanings.antonyms.slice(0, 6); // First 6 antonyms
        const audio = wordData.phonetics.find(p => p.audio)?.audio || null;
        const phonetic = wordData.phonetic || '';

        const extractedData = {
            partOfSpeech: meanings.partOfSpeech,
            definitions: definitions.map(d => d.definition),
            examples: examples.length > 0 ? examples : [],
            synonyms: synonyms,
            antonyms: antonyms,
            audio: audio,
            phonetic: phonetic
        };

        // Cache the result
        wordApiCache[word.toLowerCase()] = extractedData;
        return extractedData;
    } catch (error) {
        console.error('Error fetching dictionary data:', error);
        return null;
    }
}

// Populate type filter dropdown
function populateTypeFilter() {
    const select = document.getElementById('typeFilter');
    wordTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type.id;
        option.textContent = type.name;
        select.appendChild(option);
    });
}

// Filter words based on search, type, and ID
function filterWords() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeId = document.getElementById('typeFilter').value;
    const idFilter = document.getElementById('idFilter').value;
    
    filteredWords = allWords.filter(word => {
        const typeMatch = !typeId || word.typeId == typeId;
        const idMatch = !idFilter || word.id >= parseInt(idFilter);
        const searchMatch = !searchTerm || 
            word.word.toLowerCase().includes(searchTerm) ||
            word.banglaMeaning.toLowerCase().includes(searchTerm);
        
        return typeMatch && idMatch && searchMatch;
    });
    
    currentPage = 1;
    updateDisplay();
}

// Update display
function updateDisplay() {
    updateTable();
    updatePagination();
    updateResultsInfo();
}

// Update results info
function updateResultsInfo() {
    const resultsInfo = document.getElementById('resultsInfo');
    if (filteredWords.length === 0) {
        resultsInfo.innerHTML = '<i class="fas fa-info-circle mr-1"></i>No words found';
    } else {
        resultsInfo.innerHTML = `<i class="fas fa-info-circle mr-1"></i>Showing ${filteredWords.length} word(s)`;
    }
}

// Update table content
function updateTable() {
    const tbody = document.getElementById('wordsTableBody');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageWords = filteredWords.slice(startIndex, endIndex);
    
    if (pageWords.length === 0) {
        tbody.innerHTML = '';
        document.getElementById('emptyState').classList.remove('hidden');
        return;
    }
    
    document.getElementById('emptyState').classList.add('hidden');
    
    tbody.innerHTML = pageWords.map((word, index) => {
        const rowNumber = startIndex + index + 1;
        const wordType = wordTypes.find(t => t.id === word.typeId);
        return `
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-1 py-1 text-gray-600 font-bold text-indigo-600">${word.id}</td>
               
                <td class="px-1 py-1">
                    <button onclick="showWordModal(${word.id})" class="font-semibold text-indigo-700 text-lg hover:text-indigo-900 hover:underline cursor-pointer transition-colors">
                        ${word.word}
                    </button>
                </td>
               
                <td class="px-1 py-1">
                    <button onclick="showWordModal(${word.id})" class="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                        <i class="fas fa-eye mr-1"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredWords.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredWords.length);
    
    document.getElementById('showingStart').textContent = filteredWords.length > 0 ? startIndex : 0;
    document.getElementById('showingEnd').textContent = endIndex;
    document.getElementById('showingTotal').textContent = filteredWords.length;
    
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
    
    pageNumbers.innerHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = `px-3 py-2 rounded ${i === currentPage ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors text-sm`;
        btn.onclick = () => goToPage(i);
        pageNumbers.appendChild(btn);
    }
}

// Pagination functions
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateDisplay();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredWords.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateDisplay();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goToPage(page) {
    currentPage = page;
    updateDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal functions - IMPROVED VERSION
async function showWordModal(wordId) {
    const word = allWords.find(w => w.id === wordId);
    if (!word) return;
    
    const wordType = wordTypes.find(t => t.id === word.typeId);
    
    // Show modal
    const modal = document.getElementById('wordModal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Set header info
    document.getElementById('modalWordName').textContent = word.word;
    document.getElementById('modalHeadBanglaMeaning').textContent = word.banglaMeaning;
    
    // Show loading state
    document.getElementById('modalLoadingState').style.display = 'block';
    document.getElementById('modalErrorState').classList.add('hidden');
    
    // Hide all sections initially
    hideAllModalSections();
    
    // Fetch API data
    const apiData = await fetchDictionaryData(word.word);
    
    // Hide loading state
    document.getElementById('modalLoadingState').style.display = 'none';
    
    if (apiData) {
        populateModalWithApiData(apiData, word);
    } else {
        showModalError();
        populateModalWithBasicData(word, wordType);
    }
}

function hideAllModalSections() {
    const sections = [
        'modalPronunciation', 'modalAudio', 'modalPartOfSpeech',
        'modalDefinitions', 'modalExamples',
        'modalSynonymsSection', 'modalAntonymsSection'
    ];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    });
}

function populateModalWithApiData(apiData, word) {
    // Pronunciation
    if (apiData.phonetic) {
        document.getElementById('modalPronunciation').textContent = `/${apiData.phonetic}/`;
    } else {
        document.getElementById('modalPronunciation').textContent = 'Not available';
    }
    
    // Audio
    if (apiData.audio) {
        document.getElementById('modalAudio').innerHTML = `
            <button onclick="playAudio('${apiData.audio}')" class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors">
                <i class="fas fa-volume-up"></i>
                <span>Play Audio</span>
            </button>
        `;
    }
    
    // Part of Speech
    document.getElementById('modalPartOfSpeech').textContent = apiData.partOfSpeech;
    
    // Definitions
    const definitionsHtml = apiData.definitions.map((def, idx) => `
        <div class="flex gap-2">
            <span class="flex-shrink-0 text-indigo-600 font-semibold">${idx + 1}.</span>
            <p class="text-sm text-gray-700">${def}</p>
        </div>
    `).join('');
    document.getElementById('modalDefinitions').innerHTML = definitionsHtml;
    
    // Bangla Meaning
    // document.getElementById('modalBanglaMeaning').innerHTML = `
    //     <p class="text-base md:text-lg font-bold text-gray-900">${word.banglaMeaning}</p>
    // `;
    
    // Examples
    if (apiData.examples.length > 0) {
        const examplesHtml = apiData.examples.map(ex => `
            <div class="bg-gray-50 border-l-4 border-indigo-500 p-2 rounded">
                <p class="text-sm text-gray-700 italic">"${ex}"</p>
            </div>
        `).join('');
        document.getElementById('modalExamples').innerHTML = examplesHtml;
    } else {
        document.getElementById('modalExamples').innerHTML = `
            <p class="text-sm text-gray-500 italic">No examples available</p>
        `;
    }
    
    // Synonyms
    if (apiData.synonyms.length > 0) {
        document.getElementById('modalSynonymsSection').classList.remove('hidden');
        const synonymsHtml = apiData.synonyms.map(syn => `
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${syn}</span>
        `).join('');
        document.getElementById('modalSynonyms').innerHTML = synonymsHtml;
    }
    
    // Antonyms
    if (apiData.antonyms.length > 0) {
        document.getElementById('modalAntonymsSection').classList.remove('hidden');
        const antonymsHtml = apiData.antonyms.map(ant => `
            <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">${ant}</span>
        `).join('');
        document.getElementById('modalAntonyms').innerHTML = antonymsHtml;
    }
}

function populateModalWithBasicData(word, wordType) {
    document.getElementById('modalPronunciation').textContent = 'Not available';
    document.getElementById('modalPartOfSpeech').textContent = wordType ? wordType.name : 'Unknown';
    // document.getElementById('modalBanglaMeaning').innerHTML = `
    //     <p class="text-base md:text-lg font-bold text-gray-900">${word.banglaMeaning}</p>
    // `;
}

function showModalError() {
    document.getElementById('modalErrorState').classList.remove('hidden');
}

// Play audio function
function playAudio(audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play().catch(err => console.error('Error playing audio:', err));
}

function closeWordModal() {
    const modal = document.getElementById('wordModal');
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('wordModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeWordModal();
            }
        });
    }
});