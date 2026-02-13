// Data Management for Auxiliary Verbs
let allAuxiliaryVerbs = [];
let filteredAuxiliaryVerbs = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadAuxiliaryData();
});

// Load auxiliary verbs data
async function loadAuxiliaryData() {
    try {
        allAuxiliaryVerbs = await loadAuxiliaryVerbs();
        filteredAuxiliaryVerbs = [...allAuxiliaryVerbs];
        
        displayGroupedVerbs();
        hideLoadingState();
        updateResultsInfo();
    } catch (error) {
        console.error('Error loading auxiliary verbs:', error);
        showError('Failed to load auxiliary verbs.');
    }
}

// Load Auxiliary Verbs
async function loadAuxiliaryVerbs() {
    return [
        // Be Verbs
        {
            id: 1,
            verb: "am",
            group: "Be",
            banglaMeaning: "আছি, হই (১ম পুরুষ একবচন)",
            usage: "ব্যবহৃত হয়: 'I am' বাক্যে",
            examples: [
                "I am a student.",
                "I am happy today.",
                "I am from Bangladesh.",
                "I am 20 years old.",
                "I am learning English."
            ]
        },
        {
            id: 2,
            verb: "is",
            group: "Be",
            banglaMeaning: "আছে, হয় (৩য় পুরুষ একবচন)",
            usage: "ব্যবহৃত হয়: He/She/It এর সাথে বর্তমান সময়ে",
            examples: [
                "He is a doctor.",
                "She is very intelligent.",
                "It is a beautiful day.",
                "The book is interesting.",
                "My friend is at the library."
            ]
        },
        {
            id: 3,
            verb: "are",
            group: "Be",
            banglaMeaning: "আছো, আছেন, হও (২য় পুরুষ এবং বহুবচন)",
            usage: "ব্যবহৃত হয়: You/We/They এর সাথে বর্তমান সময়ে",
            examples: [
                "You are my friend.",
                "We are students.",
                "They are playing football.",
                "You are very kind.",
                "We are ready to start."
            ]
        },
        {
            id: 4,
            verb: "was",
            group: "Be",
            banglaMeaning: "ছিলাম, ছিল (১ম ও ৩য় পুরুষ একবচন অতীত)",
            usage: "গত সময়ে I/He/She/It এর অবস্থা বুঝাতে",
            examples: [
                "I was at home yesterday.",
                "He was a teacher.",
                "The weather was nice.",
                "She was sleeping.",
                "I was very tired."
            ]
        },
        {
            id: 5,
            verb: "were",
            group: "Be",
            banglaMeaning: "ছিলে, ছিলেন (২য় পুরুষ এবং বহুবচন অতীত)",
            usage: "গত সময়ে You/We/They এর অবস্থা বুঝাতে",
            examples: [
                "They were happy.",
                "You were there.",
                "We were in the cinema.",
                "The children were playing.",
                "You were my best friend."
            ]
        },
        {
            id: 6,
            verb: "be",
            group: "Be",
            banglaMeaning: "হওয়া (মূল/ভিত্তি রূপ)",
            usage: "মডাল ভার্ব বা আদেশে ব্যবহার হয়",
            examples: [
                "You must be patient.",
                "To be or not to be!",
                "It will be fine.",
                "Be quiet please.",
                "You should be careful."
            ]
        },
        {
            id: 7,
            verb: "being",
            group: "Be",
            banglaMeaning: "হচ্ছে, থাকা (বর্তমান কৃদন্ত)",
            usage: "চলমান কাজ বা অস্থায়ী অবস্থা বুঝাতে",
            examples: [
                "She is being very kind today.",
                "They are being watched.",
                "He is being rude.",
                "We are being monitored.",
                "You are being silly."
            ]
        },
        {
            id: 8,
            verb: "been",
            group: "Be",
            banglaMeaning: "ছিল, হয়েছে (অতীত কৃদন্ত)",
            usage: "পারফেক্ট টেন্সে থাকার অবস্থা বুঝাতে",
            examples: [
                "I have been to London.",
                "She has been here all day.",
                "They have been waiting.",
                "We have been friends for years.",
                "It has been cold recently."
            ]
        },
        
        // Do Verbs
        {
            id: 9,
            verb: "do",
            group: "Do",
            banglaMeaning: "করা (১ম ও ২য় পুরুষ এবং বহুবচন)",
            usage: "সাধারণ বর্তমান সময়ে প্রশ্ন এবং নেতিবাচক বাক্যে",
            examples: [
                "I do my homework every day.",
                "We do not like spicy food.",
                "Do you speak English?",
                "They do their best.",
                "We do exercise regularly."
            ]
        },
        {
            id: 10,
            verb: "does",
            group: "Do",
            banglaMeaning: "করে (৩য় পুরুষ একবচন)",
            usage: "He/She/It এর সাথে সাধারণ বর্তমান সময়ে",
            examples: [
                "She does her work perfectly.",
                "He does not like coffee.",
                "Does she like music?",
                "It does harm.",
                "My brother does sports."
            ]
        },
        {
            id: 11,
            verb: "did",
            group: "Do",
            banglaMeaning: "করেছিল, করল (অতীতকাল)",
            usage: "সাধারণ অতীত সময়ে প্রশ্ন এবং নেতিবাচক বাক্যে",
            examples: [
                "He did his best.",
                "Did you finish your work?",
                "She did not come yesterday.",
                "They did not understand.",
                "What did you do?"
            ]
        },
        {
            id: 12,
            verb: "doing",
            group: "Do",
            banglaMeaning: "করছে (বর্তমান কৃদন্ত)",
            usage: "চলমান কাজ বুঝাতে 'be' এর সাথে",
            examples: [
                "What are you doing?",
                "I am doing my homework.",
                "She is doing well.",
                "They are doing exercise.",
                "We are doing great work."
            ]
        },
        {
            id: 13,
            verb: "done",
            group: "Do",
            banglaMeaning: "করা হয়েছে (অতীত কৃদন্ত)",
            usage: "পারফেক্ট টেন্সে কাজ শেষ হওয়া বুঝাতে",
            examples: [
                "I have done my work.",
                "The work is done.",
                "She has done great.",
                "Have you done it?",
                "They have done well."
            ]
        },
        
        // Have Verbs
        {
            id: 14,
            verb: "have",
            group: "Have",
            banglaMeaning: "আছে, রাখা (১ম ও ২য় পুরুষ এবং বহুবচন)",
            usage: "দখল/মালিকানা প্রকাশে এবং পারফেক্ট টেন্সে",
            examples: [
                "I have a car.",
                "We have two dogs.",
                "You have beautiful eyes.",
                "I have visited Paris.",
                "We have finished the project."
            ]
        },
        {
            id: 15,
            verb: "has",
            group: "Have",
            banglaMeaning: "আছে, রাখে (৩য় পুরুষ একবচন)",
            usage: "He/She/It এর সাথে দখল এবং পারফেক্ট টেন্সে",
            examples: [
                "She has a beautiful house.",
                "He has a good job.",
                "It has great features.",
                "She has gone to school.",
                "He has done well."
            ]
        },
        {
            id: 16,
            verb: "had",
            group: "Have",
            banglaMেaning: "ছিল, ছিল (অতীতকাল)",
            usage: "অতীতে মালিকানা এবং প্লুপারফেক্টে",
            examples: [
                "They had a great time.",
                "I had finished before he came.",
                "She had a fever.",
                "We had visited many places.",
                "They had known each other."
            ]
        },
        {
            id: 17,
            verb: "having",
            group: "Have",
            banglaMeaning: "রাখছে (বর্তমান কৃদন্ত)",
            usage: "চলমান অবস্থা প্রকাশে",
            examples: [
                "We are having dinner.",
                "She is having a meeting.",
                "They are having fun.",
                "I am having trouble.",
                "You are having a good time."
            ]
        },
        
        // Modal Verbs
        {
            id: 18,
            verb: "can",
            group: "Modal",
            banglaMeaning: "পারা, সক্ষম হওয়া",
            usage: "ক্ষমতা বা সম্ভাবনা প্রকাশে বর্তমান সময়ে",
            examples: [
                "I can swim.",
                "She can speak English fluently.",
                "You can do better.",
                "They can solve this problem.",
                "Can you help me?"
            ]
        },
        {
            id: 19,
            verb: "could",
            group: "Modal",
            banglaMেaning: "পারতাম, সক্ষম ছিল",
            usage: "অতীতে ক্ষমতা বা সম্ভাবনা প্রকাশে",
            examples: [
                "He could run fast when he was young.",
                "I could not understand the lesson.",
                "Could you please help me?",
                "She could dance very well.",
                "They could see the mountain from there."
            ]
        },
        {
            id: 20,
            verb: "may",
            group: "Modal",
            banglaMeaning: "হতে পারে, অনুমতি",
            usage: "সম্ভাবনা বা আনুষ্ঠানিক অনুমতি চাওয়ায়",
            examples: [
                "May I come in?",
                "It may rain today.",
                "You may leave now.",
                "She may be at home.",
                "They may help us."
            ]
        },
        {
            id: 21,
            verb: "might",
            group: "Modal",
            banglaMeaning: "হতে পারে (সম্ভাবনা)",
            usage: "কম নিশ্চিত সম্ভাবনা প্রকাশে",
            examples: [
                "It might rain today.",
                "He might come tomorrow.",
                "They might not agree.",
                "She might be busy.",
                "It might be difficult."
            ]
        },
        {
            id: 22,
            verb: "must",
            group: "Modal",
            banglaMেaning: "অবশ্যই, নিশ্চয়ই",
            usage: "অনিবার্যতা বা শক্তিশালী দায়িত্ব প্রকাশে",
            examples: [
                "You must study for the exam.",
                "Students must attend classes.",
                "I must finish this work today.",
                "He must be at the office.",
                "We must be careful."
            ]
        },
        {
            id: 23,
            verb: "shall",
            group: "Modal",
            banglaMেaning: "করবো (ভবিষ্যত)",
            usage: "ভবিষ্যত বা অনুমান প্রকাশে (আনুষ্ঠানিক)",
            examples: [
                "We shall overcome.",
                "I shall go tomorrow.",
                "Shall we begin?",
                "They shall succeed.",
                "You shall see."
            ]
        },
        {
            id: 24,
            verb: "should",
            group: "Modal",
            banglaMেaning: "উচিত",
            usage: "পরামর্শ বা সুপারিশ প্রকাশে",
            examples: [
                "You should eat healthy food.",
                "I should study more.",
                "She should contact her parents.",
                "They should leave early.",
                "You should be polite."
            ]
        },
        {
            id: 25,
            verb: "will",
            group: "Modal",
            banglামeaning: "করবে (ভবিষ্যত)",
            usage: "ভবিষ্যত সময়ে নিশ্চিত কাজ প্রকাশে",
            examples: [
                "I will help you.",
                "She will come tomorrow.",
                "They will complete the project.",
                "You will succeed.",
                "I will not forget."
            ]
        },
        {
            id: 26,
            verb: "would",
            group: "Modal",
            banglaMেaning: "করতাম, করতে",
            usage: "শর্তাধীন বা কল্পনামূলক পরিস্থিতিতে",
            examples: [
                "I would like some coffee.",
                "She would help if she could.",
                "They would agree if they understood.",
                "I would do it if I had time.",
                "You would be happy here."
            ]
        },
        {
            id: 27,
            verb: "ought to",
            group: "Modal",
            banglaMেaning: "উচিত, করা দরকার",
            usage: "নৈতিক দায়িত্ব বা পরামর্শ প্রকাশে",
            examples: [
                "You ought to respect your parents.",
                "They ought to study more.",
                "I ought to call him.",
                "She ought to be careful.",
                "You ought to visit the museum."
            ]
        }
    ];
}

// Filter auxiliary verbs
function filterAuxiliaryVerbs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const groupFilter = document.getElementById('groupFilter').value;
    
    filteredAuxiliaryVerbs = allAuxiliaryVerbs.filter(verb => {
        // Group filter
        const groupMatch = !groupFilter || verb.group === groupFilter;
        
        // Search filter
        const searchMatch = !searchTerm || 
            verb.verb.toLowerCase().includes(searchTerm) ||
            verb.banglaMeaning.toLowerCase().includes(searchTerm) ||
            (verb.examples && verb.examples.some(e => e.toLowerCase().includes(searchTerm))) ||
            (verb.example && verb.example.toLowerCase().includes(searchTerm));
        
        return groupMatch && searchMatch;
    });
    
    displayGroupedVerbs();
    updateResultsInfo();
}

// Display verbs grouped by type
function displayGroupedVerbs() {
    const container = document.getElementById('verbGroups');
    
    if (filteredAuxiliaryVerbs.length === 0) {
        container.innerHTML = '';
        document.getElementById('emptyState').classList.remove('hidden');
        return;
    }
    
    document.getElementById('emptyState').classList.add('hidden');
    
    // Group verbs by their type
    const groups = {
        'Be': { name: 'Be Verbs', color: 'from-blue-500 to-blue-600', icon: 'fa-circle', verbs: [] },
        'Do': { name: 'Do Verbs', color: 'from-green-500 to-green-600', icon: 'fa-check-circle', verbs: [] },
        'Have': { name: 'Have Verbs', color: 'from-orange-500 to-orange-600', icon: 'fa-gift', verbs: [] },
        'Modal': { name: 'Modal Verbs', color: 'from-purple-500 to-purple-600', icon: 'fa-star', verbs: [] }
    };
    
    filteredAuxiliaryVerbs.forEach(verb => {
        if (groups[verb.group]) {
            groups[verb.group].verbs.push(verb);
        }
    });
    
    // Generate HTML for each group
    let html = '';
    
    Object.keys(groups).forEach(key => {
        const group = groups[key];
        if (group.verbs.length > 0) {
            html += `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="bg-gradient-to-r ${group.color} px-6 py-4">
                        <h2 class="text-2xl font-bold text-white flex items-center">
                            <i class="fas ${group.icon} mr-3"></i>
                            ${group.name}
                            <span class="ml-auto text-lg font-normal">${group.verbs.length} verbs</span>
                        </h2>
                    </div>
                    <div class="p-6">
                        <div class="grid md:grid-cols-2 gap-4">
                            ${group.verbs.map(verb => {
                                const colorClass = key === 'Be' ? 'blue' : key === 'Do' ? 'green' : key === 'Have' ? 'orange' : 'purple';
                                const exampleText = verb.examples ? verb.examples[0] : verb.example;
                                return `
                                <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200">
                                    <div class="flex items-start justify-between mb-2">
                                        <button onclick="showAuxiliaryModal(${verb.id})" class="text-xl font-bold text-${colorClass}-700 hover:text-${colorClass}-900 hover:underline cursor-pointer transition-colors">
                                            ${verb.verb}
                                        </button>
                                        <span class="px-2 py-1 bg-${colorClass}-100 text-${colorClass}-800 text-xs rounded-full">
                                            ${verb.group}
                                        </span>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="flex items-start">
                                            <i class="fas fa-language text-gray-400 mt-1 mr-2"></i>
                                            <span class="text-gray-700 font-medium">${verb.banglaMeaning}</span>
                                        </div>
                                        <div class="flex items-start">
                                            <i class="fas fa-quote-left text-gray-400 mt-1 mr-2"></i>
                                            <span class="text-gray-600 italic">"${exampleText}"</span>
                                        </div>
                                        <button onclick="showAuxiliaryModal(${verb.id})" class="w-full mt-3 px-3 py-2 bg-${colorClass}-500 text-white text-sm rounded-lg hover:bg-${colorClass}-600 transition-colors font-semibold">
                                            <i class="fas fa-arrow-right mr-1"></i>View Details
                                        </button>
                                    </div>
                                </div>
                            `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = html;
}

// Update results info
function updateResultsInfo() {
    const info = document.getElementById('resultsInfo');
    const total = document.getElementById('totalCount');
    
    info.innerHTML = `<i class="fas fa-info-circle mr-1"></i>Showing ${filteredAuxiliaryVerbs.length} of ${allAuxiliaryVerbs.length} auxiliary verbs`;
    total.textContent = allAuxiliaryVerbs.length;
}

// Hide loading state
function hideLoadingState() {
    document.getElementById('loadingState').style.display = 'none';
}

// Show error
function showError(message) {
    console.error(message);
    alert(message);
}
// Modal functions
function showAuxiliaryModal(verbId) {
    const verb = allAuxiliaryVerbs.find(v => v.id === verbId);
    if (!verb) return;
    
    // Set modal header
    document.getElementById('modalAuxiliaryVerbName').textContent = verb.verb;
    document.getElementById('modalAuxiliaryGroup').textContent = verb.group + " Verb";
    
    // Set details
    document.getElementById('modalBanglaMeaning').textContent = verb.banglaMeaning;
    
    // Set usage
    if (verb.usage) {
        document.getElementById('modalUsage').textContent = verb.usage;
        document.getElementById('modalUsageSection').style.display = 'block';
    } else {
        document.getElementById('modalUsageSection').style.display = 'none';
    }
    
    // Set examples
    const examplesContainer = document.getElementById('modalExamples');
    if (verb.examples) {
        const examplesHtml = verb.examples.map((example, idx) => `
            <div class="flex gap-3 mb-2">
                <span class="flex-shrink-0 text-indigo-600 font-bold">${idx + 1}.</span>
                <p class="text-sm text-gray-700">"${example}"</p>
            </div>
        `).join('');
        examplesContainer.innerHTML = examplesHtml;
    } else if (verb.example) {
        examplesContainer.innerHTML = `<p class="text-sm text-gray-700">"${verb.example}"</p>`;
    }
    
    // Show modal
    const modal = document.getElementById('auxiliaryModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeAuxiliaryModal() {
    const modal = document.getElementById('auxiliaryModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('auxiliaryModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeAuxiliaryModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAuxiliaryModal();
        }
    });
});