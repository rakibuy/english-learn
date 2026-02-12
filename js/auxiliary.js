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
            example: "I am a student."
        },
        {
            id: 2,
            verb: "is",
            group: "Be",
            banglaMeaning: "আছে, হয় (৩য় পুরুষ একবচন)",
            example: "He is a doctor."
        },
        {
            id: 3,
            verb: "are",
            group: "Be",
            banglaMeaning: "আছো, আছেন, হও (২য় পুরুষ এবং বহুবচন)",
            example: "You are my friend."
        },
        {
            id: 4,
            verb: "was",
            group: "Be",
            banglaMeaning: "ছিলাম, ছিল (১ম ও ৩য় পুরুষ একবচন অতীত)",
            example: "I was at home yesterday."
        },
        {
            id: 5,
            verb: "were",
            group: "Be",
            banglaMeaning: "ছিলে, ছিলেন (২য় পুরুষ এবং বহুবচন অতীত)",
            example: "They were happy."
        },
        {
            id: 6,
            verb: "be",
            group: "Be",
            banglaMeaning: "হওয়া (মূল রূপ)",
            example: "You must be patient."
        },
        {
            id: 7,
            verb: "being",
            group: "Be",
            banglaMeaning: "হচ্ছে, থাকা (বর্তমান কৃদন্ত)",
            example: "She is being very kind today."
        },
        {
            id: 8,
            verb: "been",
            group: "Be",
            banglaMeaning: "ছিল, হয়েছে (অতীত কৃদন্ত)",
            example: "I have been to London."
        },
        
        // Do Verbs
        {
            id: 9,
            verb: "do",
            group: "Do",
            banglaMeaning: "করা (১ম ও ২য় পুরুষ এবং বহুবচন)",
            example: "I do my homework every day."
        },
        {
            id: 10,
            verb: "does",
            group: "Do",
            banglaMeaning: "করে (৩য় পুরুষ একবচন)",
            example: "She does her work perfectly."
        },
        {
            id: 11,
            verb: "did",
            group: "Do",
            banglaMeaning: "করেছিল, করল (অতীতকাল)",
            example: "He did his best."
        },
        {
            id: 12,
            verb: "doing",
            group: "Do",
            banglaMeaning: "করছে (বর্তমান কৃদন্ত)",
            example: "What are you doing?"
        },
        {
            id: 13,
            verb: "done",
            group: "Do",
            banglaMeaning: "করা হয়েছে (অতীত কৃদন্ত)",
            example: "I have done my work."
        },
        
        // Have Verbs
        {
            id: 14,
            verb: "have",
            group: "Have",
            banglaMeaning: "আছে, রাখা (১ম ও ২য় পুরুষ এবং বহুবচন)",
            example: "I have a car."
        },
        {
            id: 15,
            verb: "has",
            group: "Have",
            banglaMeaning: "আছে, রাখে (৩য় পুরুষ একবচন)",
            example: "She has a beautiful house."
        },
        {
            id: 16,
            verb: "had",
            group: "Have",
            banglaMeaning: "ছিল, ছিল (অতীতকাল)",
            example: "They had a great time."
        },
        {
            id: 17,
            verb: "having",
            group: "Have",
            banglaMeaning: "রাখছে (বর্তমান কৃদন্ত)",
            example: "We are having dinner."
        },
        
        // Modal Verbs
        {
            id: 18,
            verb: "can",
            group: "Modal",
            banglaMeaning: "পারা, সক্ষম হওয়া",
            example: "I can swim."
        },
        {
            id: 19,
            verb: "could",
            group: "Modal",
            banglaMeaning: "পারতাম, সক্ষম ছিল",
            example: "He could run fast when he was young."
        },
        {
            id: 20,
            verb: "may",
            group: "Modal",
            banglaMeaning: "হতে পারে, অনুমতি",
            example: "May I come in?"
        },
        {
            id: 21,
            verb: "might",
            group: "Modal",
            banglaMeaning: "হতে পারে (সম্ভাবনা)",
            example: "It might rain today."
        },
        {
            id: 22,
            verb: "must",
            group: "Modal",
            banglaMeaning: "অবশ্যই, নিশ্চয়ই",
            example: "You must study for the exam."
        },
        {
            id: 23,
            verb: "shall",
            group: "Modal",
            banglaMeaning: "করবো (ভবিষ্যত)",
            example: "We shall overcome."
        },
        {
            id: 24,
            verb: "should",
            group: "Modal",
            banglaMeaning: "উচিত",
            example: "You should eat healthy food."
        },
        {
            id: 25,
            verb: "will",
            group: "Modal",
            banglaMeaning: "করবে (ভবিষ্যত)",
            example: "I will help you."
        },
        {
            id: 26,
            verb: "would",
            group: "Modal",
            banglaMeaning: "করতাম, করতে",
            example: "I would like some coffee."
        },
        {
            id: 27,
            verb: "ought to",
            group: "Modal",
            banglaMeaning: "উচিত, করা দরকার",
            example: "You ought to respect your parents."
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
            verb.example.toLowerCase().includes(searchTerm);
        
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
                                return `
                                <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200">
                                    <div class="flex items-start justify-between mb-2">
                                        <h3 class="text-xl font-bold text-${colorClass}-700">${verb.verb}</h3>
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
                                            <span class="text-gray-600 italic">"${verb.example}"</span>
                                        </div>
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
