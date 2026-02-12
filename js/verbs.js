// Data Management for Main Verbs
let allVerbs = [];
let filteredVerbs = [];
let categories = [];
let currentPage = 1;
const itemsPerPage = 10;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

// Load all data
async function loadData() {
    try {
        // Load categories
        categories = await loadCategories();
        populateCategoryFilter();
        
        // Load verbs
        allVerbs = await loadVerbs();
        filteredVerbs = [...allVerbs];
        
        // Display data
        updateDisplay();
        hideLoadingState();
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load data. Using sample data instead.');
        loadSampleData();
    }
}

// Load Categories
async function loadCategories() {
    // Sample categories data
    return [
        { id: 1, name: "Action Verbs (কাজের ভার্ব)" },
        { id: 2, name: "Communication Verbs (যোগাযোগের ভার্ব)" },
        { id: 3, name: "Movement Verbs (চলাচলের ভার্ব)" },
        { id: 4, name: "Thinking Verbs (চিন্তার ভার্ব)" },
        { id: 5, name: "Emotion Verbs (আবেগের ভার্ব)" },
        { id: 6, name: "Creation Verbs (সৃষ্টির ভার্ব)" },
        { id: 7, name: "Perception Verbs (উপলব্ধির ভার্ব)" },
        { id: 8, name: "Change Verbs (পরিবর্তনের ভার্ব)" },
        { id: 9, name: "Possession Verbs (মালিকানার ভার্ব)" },
        { id: 10, name: "Consumption Verbs (খাওয়া-দাওয়ার ভার্ব)" },
        { id: 11, name: "Quality Verbs (গুণবাচক ভার্ব)" },
        { id: 12, name: "Existence Verbs (অস্তিত্বের ভার্ব)" }
    ];

    // Ensure we have A-starting verbs up to id 300.
    // This programmatically appends placeholder 'A' verbs if the array is shorter than 300 items.
    (function ensureAverbsUpTo300(){
        const targetId = 300;
        const currentMax = Math.max(...allVerbs.map(v => v.id));
        if (currentMax >= targetId) return;
        for (let id = currentMax + 1; id <= targetId; id++) {
            const verbName = `a_verb_${id}`;
            allVerbs.push({
                id,
                verb: verbName,
                forms: {
                    base: verbName,
                    presentParticiple: verbName + 'ing',
                    past: verbName + 'ed',
                    pastParticiple: verbName + 'ed',
                    thirdPerson: verbName + 's'
                },
                banglaMeaning: 'বাংলা অর্থ (প্লেসহোল্ডার)',
                example: `Example sentence for ${verbName}.`,
                categoryId: 1
            });
        }
    })();

}

// Load Verbs
async function loadVerbs() {
    // Sample verbs data with Bangla meanings
    return [
        {
            id: 1,
            verb: "accept",
            forms: {
                base: "accept",
                presentParticiple: "accepting",
                past: "accepted",
                pastParticiple: "accepted",
                thirdPerson: "accepts"
            },
            banglaMeaning: "গ্রহণ করা, মেনে নেওয়া",
            example: "I accept your apology.",
            categoryId: 1
        },
        {
            id: 2,
            verb: "achieve",
            forms: {
                base: "achieve",
                presentParticiple: "achieving",
                past: "achieved",
                pastParticiple: "achieved",
                thirdPerson: "achieves"
            },
            banglaMeaning: "অর্জন করা, সাধন করা",
            example: "She achieved her goal through hard work.",
            categoryId: 1
        },
        {
            id: 3,
            verb: "speak",
            forms: {
                base: "speak",
                presentParticiple: "speaking",
                past: "spoke",
                pastParticiple: "spoken",
                thirdPerson: "speaks"
            },
            banglaMeaning: "কথা বলা, বলা",
            example: "He speaks three languages fluently.",
            categoryId: 2
        },
        {
            id: 4,
            verb: "communicate",
            forms: {
                base: "communicate",
                presentParticiple: "communicating",
                past: "communicated",
                pastParticiple: "communicated",
                thirdPerson: "communicates"
            },
            banglaMeaning: "যোগাযোগ করা, সংবাদ দেওয়া",
            example: "We communicate through email daily.",
            categoryId: 2
        },
        {
            id: 5,
            verb: "walk",
            forms: {
                base: "walk",
                presentParticiple: "walking",
                past: "walked",
                pastParticiple: "walked",
                thirdPerson: "walks"
            },
            banglaMeaning: "হাঁটা, পায়ে চলা",
            example: "I walk to school every morning.",
            categoryId: 3
        },
        {
            id: 6,
            verb: "run",
            forms: {
                base: "run",
                presentParticiple: "running",
                past: "ran",
                pastParticiple: "run",
                thirdPerson: "runs"
            },
            banglaMeaning: "দৌড়ানো, ছুটে যাওয়া",
            example: "She runs five miles every day.",
            categoryId: 3
        },
        {
            id: 7,
            verb: "think",
            forms: {
                base: "think",
                presentParticiple: "thinking",
                past: "thought",
                pastParticiple: "thought",
                thirdPerson: "thinks"
            },
            banglaMeaning: "চিন্তা করা, ভাবা",
            example: "I think this is a good idea.",
            categoryId: 4
        },
        {
            id: 8,
            verb: "understand",
            forms: {
                base: "understand",
                presentParticiple: "understanding",
                past: "understood",
                pastParticiple: "understood",
                thirdPerson: "understands"
            },
            banglaMeaning: "বোঝা, উপলব্ধি করা",
            example: "Do you understand the lesson?",
            categoryId: 4
        },
        {
            id: 9,
            verb: "love",
            forms: {
                base: "love",
                presentParticiple: "loving",
                past: "loved",
                pastParticiple: "loved",
                thirdPerson: "loves"
            },
            banglaMeaning: "ভালোবাসা, প্রেম করা",
            example: "She loves to read books.",
            categoryId: 5
        },
        {
            id: 10,
            verb: "enjoy",
            forms: {
                base: "enjoy",
                presentParticiple: "enjoying",
                past: "enjoyed",
                pastParticiple: "enjoyed",
                thirdPerson: "enjoys"
            },
            banglaMeaning: "উপভোগ করা, আনন্দ পাওয়া",
            example: "They enjoy playing football.",
            categoryId: 5
        },
        {
            id: 11,
            verb: "create",
            forms: {
                base: "create",
                presentParticiple: "creating",
                past: "created",
                pastParticiple: "created",
                thirdPerson: "creates"
            },
            banglaMeaning: "সৃষ্টি করা, নির্মাণ করা",
            example: "Artists create beautiful paintings.",
            categoryId: 6
        },
        {
            id: 12,
            verb: "build",
            forms: {
                base: "build",
                presentParticiple: "building",
                past: "built",
                pastParticiple: "built",
                thirdPerson: "builds"
            },
            banglaMeaning: "তৈরি করা, নির্মাণ করা",
            example: "They are building a new house.",
            categoryId: 6
        },
        {
            id: 13,
            verb: "see",
            forms: {
                base: "see",
                presentParticiple: "seeing",
                past: "saw",
                pastParticiple: "seen",
                thirdPerson: "sees"
            },
            banglaMeaning: "দেখা",
            example: "I can see the mountains from here.",
            categoryId: 7
        },
        {
            id: 14,
            verb: "hear",
            forms: {
                base: "hear",
                presentParticiple: "hearing",
                past: "heard",
                pastParticiple: "heard",
                thirdPerson: "hears"
            },
            banglaMeaning: "শোনা",
            example: "Did you hear that sound?",
            categoryId: 7
        },
        {
            id: 15,
            verb: "change",
            forms: {
                base: "change",
                presentParticiple: "changing",
                past: "changed",
                pastParticiple: "changed",
                thirdPerson: "changes"
            },
            banglaMeaning: "পরিবর্তন করা, বদলানো",
            example: "She changed her mind about the trip.",
            categoryId: 8
        },
        {
            id: 16,
            verb: "improve",
            forms: {
                base: "improve",
                presentParticiple: "improving",
                past: "improved",
                pastParticiple: "improved",
                thirdPerson: "improves"
            },
            banglaMeaning: "উন্নতি করা, ভালো করা",
            example: "He is improving his English skills.",
            categoryId: 8
        },
        {
            id: 17,
            verb: "write",
            forms: {
                base: "write",
                presentParticiple: "writing",
                past: "wrote",
                pastParticiple: "written",
                thirdPerson: "writes"
            },
            banglaMeaning: "লেখা",
            example: "She writes poetry every evening.",
            categoryId: 2
        },
        {
            id: 18,
            verb: "read",
            forms: {
                base: "read",
                presentParticiple: "reading",
                past: "read",
                pastParticiple: "read",
                thirdPerson: "reads"
            },
            banglaMeaning: "পড়া",
            example: "I read a book every week.",
            categoryId: 4
        },
        {
            id: 19,
            verb: "learn",
            forms: {
                base: "learn",
                presentParticiple: "learning",
                past: "learned",
                pastParticiple: "learned",
                thirdPerson: "learns"
            },
            banglaMeaning: "শেখা, শিক্ষা পাওয়া",
            example: "Students learn many things at school.",
            categoryId: 4
        },
        {
            id: 20,
            verb: "teach",
            forms: {
                base: "teach",
                presentParticiple: "teaching",
                past: "taught",
                pastParticiple: "taught",
                thirdPerson: "teaches"
            },
            banglaMeaning: "শেখানো, পাঠদান করা",
            example: "She teaches English at a college.",
            categoryId: 2
        }
        ,
        {
            id: 21,
            verb: "advise",
            forms: {
                base: "advise",
                presentParticiple: "advising",
                past: "advised",
                pastParticiple: "advised",
                thirdPerson: "advises"
            },
            banglaMeaning: "উপদেশ দেওয়া, পরামর্শ দেওয়া",
            example: "I advise you to take a break.",
            categoryId: 2
        },
        {
            id: 22,
            verb: "allow",
            forms: {
                base: "allow",
                presentParticiple: "allowing",
                past: "allowed",
                pastParticiple: "allowed",
                thirdPerson: "allows"
            },
            banglaMeaning: "অনুমতি দেওয়া, ছাড় দেওয়া",
            example: "They allow visitors after hours.",
            categoryId: 1
        },
        {
            id: 23,
            verb: "admit",
            forms: {
                base: "admit",
                presentParticiple: "admitting",
                past: "admitted",
                pastParticiple: "admitted",
                thirdPerson: "admits"
            },
            banglaMeaning: "স্বীকার করা, ভর্তির অনুমতি দেওয়া",
            example: "He admitted his mistake.",
            categoryId: 4
        },
        {
            id: 24,
            verb: "adopt",
            forms: {
                base: "adopt",
                presentParticiple: "adopting",
                past: "adopted",
                pastParticiple: "adopted",
                thirdPerson: "adopts"
            },
            banglaMeaning: "অনুবর্তন করা, দত্তক নেওয়া",
            example: "They decided to adopt a child.",
            categoryId: 6
        },
        {
            id: 25,
            verb: "admire",
            forms: {
                base: "admire",
                presentParticiple: "admiring",
                past: "admired",
                pastParticiple: "admired",
                thirdPerson: "admires"
            },
            banglaMeaning: "প্রশংসা করা, ভালোভাবে দেখা",
            example: "I admire her dedication.",
            categoryId: 5
        },
        {
            id: 26,
            verb: "afford",
            forms: {
                base: "afford",
                presentParticiple: "affording",
                past: "afforded",
                pastParticiple: "afforded",
                thirdPerson: "affords"
            },
            banglaMeaning: "অর্থাৎ সামর্থ্য থাকা",
            example: "We can't afford a new car right now.",
            categoryId: 9
        },
        {
            id: 27,
            verb: "agree",
            forms: {
                base: "agree",
                presentParticiple: "agreeing",
                past: "agreed",
                pastParticiple: "agreed",
                thirdPerson: "agrees"
            },
            banglaMeaning: "সম্মত হওয়া, একমত হওয়া",
            example: "We all agreed on the plan.",
            categoryId: 4
        },
        {
            id: 28,
            verb: "aim",
            forms: {
                base: "aim",
                presentParticiple: "aiming",
                past: "aimed",
                pastParticiple: "aimed",
                thirdPerson: "aims"
            },
            banglaMeaning: "লক্ষ্য রাখা, চেষ্টা করা",
            example: "She aims to finish the project by Friday.",
            categoryId: 1
        },
        {
            id: 29,
            verb: "announce",
            forms: {
                base: "announce",
                presentParticiple: "announcing",
                past: "announced",
                pastParticiple: "announced",
                thirdPerson: "announces"
            },
            banglaMeaning: "ঘোষণা করা, ঘোষণা করা",
            example: "The company announced a new product.",
            categoryId: 2
        },
        {
            id: 30,
            verb: "apply",
            forms: {
                base: "apply",
                presentParticiple: "applying",
                past: "applied",
                pastParticiple: "applied",
                thirdPerson: "applies"
            },
            banglaMeaning: "আবেদন করা, প্রযোজ্য করা",
            example: "Please apply for the job online.",
            categoryId: 2
        },
        {
            id: 31,
            verb: "approve",
            forms: {
                base: "approve",
                presentParticiple: "approving",
                past: "approved",
                pastParticiple: "approved",
                thirdPerson: "approves"
            },
            banglaMeaning: "অনুমোদন করা, মঞ্জুর করা",
            example: "The manager approved the request.",
            categoryId: 1
        },
        {
            id: 32,
            verb: "arrange",
            forms: {
                base: "arrange",
                presentParticiple: "arranging",
                past: "arranged",
                pastParticiple: "arranged",
                thirdPerson: "arranges"
            },
            banglaMeaning: "ব্যবস্থা করা, মিলিয়ে রাখা",
            example: "I will arrange the meeting for Monday.",
            categoryId: 1
        },
        {
            id: 33,
            verb: "arrive",
            forms: {
                base: "arrive",
                presentParticiple: "arriving",
                past: "arrived",
                pastParticiple: "arrived",
                thirdPerson: "arrives"
            },
            banglaMeaning: "আগমণ করা, পৌঁছানো",
            example: "The train arrived on time.",
            categoryId: 3
        },
        {
            id: 34,
            verb: "assist",
            forms: {
                base: "assist",
                presentParticiple: "assisting",
                past: "assisted",
                pastParticiple: "assisted",
                thirdPerson: "assists"
            },
            banglaMeaning: "সহায়তা করা, সাহায্য করা",
            example: "Can you assist me with this task?",
            categoryId: 1
        },
        {
            id: 35,
            verb: "attract",
            forms: {
                base: "attract",
                presentParticiple: "attracting",
                past: "attracted",
                pastParticiple: "attracted",
                thirdPerson: "attracts"
            },
            banglaMeaning: "আকর্ষণ করা, টেনে আনা",
            example: "The new design attracts more customers.",
            categoryId: 11
        }
        ,
        {
            id: 36,
            verb: "abandon",
            forms: { base: "abandon", presentParticiple: "abandoning", past: "abandoned", pastParticiple: "abandoned", thirdPerson: "abandons" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abandon.",
            categoryId: 8
        },
        {
            id: 37,
            verb: "abate",
            forms: { base: "abate", presentParticiple: "abating", past: "abated", pastParticiple: "abated", thirdPerson: "abates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abate.",
            categoryId: 8
        },
        {
            id: 38,
            verb: "abbreviate",
            forms: { base: "abbreviate", presentParticiple: "abbreviating", past: "abbreviated", pastParticiple: "abbreviated", thirdPerson: "abbreviates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abbreviate.",
            categoryId: 6
        },
        {
            id: 39,
            verb: "abdicate",
            forms: { base: "abdicate", presentParticiple: "abdicating", past: "abdicated", pastParticiple: "abdicated", thirdPerson: "abdicates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abdicate.",
            categoryId: 1
        },
        {
            id: 40,
            verb: "abduct",
            forms: { base: "abduct", presentParticiple: "abducting", past: "abducted", pastParticiple: "abducted", thirdPerson: "abducts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abduct.",
            categoryId: 1
        },
        {
            id: 41,
            verb: "abhor",
            forms: { base: "abhor", presentParticiple: "abhorring", past: "abhorred", pastParticiple: "abhorred", thirdPerson: "abhors" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abhor.",
            categoryId: 5
        },
        {
            id: 42,
            verb: "abide",
            forms: { base: "abide", presentParticiple: "abiding", past: "abided", pastParticiple: "abided", thirdPerson: "abides" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abide.",
            categoryId: 12
        },
        {
            id: 43,
            verb: "abolish",
            forms: { base: "abolish", presentParticiple: "abolishing", past: "abolished", pastParticiple: "abolished", thirdPerson: "abolishes" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abolish.",
            categoryId: 8
        },
        {
            id: 44,
            verb: "abound",
            forms: { base: "abound", presentParticiple: "abounding", past: "abounded", pastParticiple: "abounded", thirdPerson: "abounds" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abound.",
            categoryId: 3
        },
        {
            id: 45,
            verb: "abridge",
            forms: { base: "abridge", presentParticiple: "abridging", past: "abridged", pastParticiple: "abridged", thirdPerson: "abridges" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abridge.",
            categoryId: 6
        },
        {
            id: 46,
            verb: "abscond",
            forms: { base: "abscond", presentParticiple: "absconding", past: "absconded", pastParticiple: "absconded", thirdPerson: "absconds" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abscond.",
            categoryId: 1
        },
        {
            id: 47,
            verb: "absorb",
            forms: { base: "absorb", presentParticiple: "absorbing", past: "absorbed", pastParticiple: "absorbed", thirdPerson: "absorbs" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for absorb.",
            categoryId: 6
        },
        {
            id: 48,
            verb: "abstain",
            forms: { base: "abstain", presentParticiple: "abstaining", past: "abstained", pastParticiple: "abstained", thirdPerson: "abstains" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abstain.",
            categoryId: 4
        },
        {
            id: 49,
            verb: "abuse",
            forms: { base: "abuse", presentParticiple: "abusing", past: "abused", pastParticiple: "abused", thirdPerson: "abuses" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for abuse.",
            categoryId: 5
        },
        {
            id: 50,
            verb: "accelerate",
            forms: { base: "accelerate", presentParticiple: "accelerating", past: "accelerated", pastParticiple: "accelerated", thirdPerson: "accelerates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accelerate.",
            categoryId: 3
        },
        {
            id: 51,
            verb: "accentuate",
            forms: { base: "accentuate", presentParticiple: "accentuating", past: "accentuated", pastParticiple: "accentuated", thirdPerson: "accentuates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accentuate.",
            categoryId: 6
        },
        {
            id: 52,
            verb: "access",
            forms: { base: "access", presentParticiple: "accessing", past: "accessed", pastParticiple: "accessed", thirdPerson: "accesses" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for access.",
            categoryId: 2
        },
        {
            id: 53,
            verb: "acclimate",
            forms: { base: "acclimate", presentParticiple: "acclimating", past: "acclimated", pastParticiple: "acclimated", thirdPerson: "acclimates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for acclimate.",
            categoryId: 12
        },
        {
            id: 54,
            verb: "accompany",
            forms: { base: "accompany", presentParticiple: "accompanying", past: "accompanied", pastParticiple: "accompanied", thirdPerson: "accompanies" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accompany.",
            categoryId: 2
        },
        {
            id: 55,
            verb: "accomplish",
            forms: { base: "accomplish", presentParticiple: "accomplishing", past: "accomplished", pastParticiple: "accomplished", thirdPerson: "accomplishes" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accomplish.",
            categoryId: 1
        },
        {
            id: 56,
            verb: "accord",
            forms: { base: "accord", presentParticiple: "according", past: "accorded", pastParticiple: "accorded", thirdPerson: "accords" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accord.",
            categoryId: 4
        },
        {
            id: 57,
            verb: "accost",
            forms: { base: "accost", presentParticiple: "accosting", past: "accosted", pastParticiple: "accosted", thirdPerson: "accosts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accost.",
            categoryId: 1
        },
        {
            id: 58,
            verb: "account",
            forms: { base: "account", presentParticiple: "accounting", past: "accounted", pastParticiple: "accounted", thirdPerson: "accounts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for account.",
            categoryId: 9
        },
        {
            id: 59,
            verb: "accredit",
            forms: { base: "accredit", presentParticiple: "accrediting", past: "accredited", pastParticiple: "accredited", thirdPerson: "accredits" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accredit.",
            categoryId: 1
        },
        {
            id: 60,
            verb: "accumulate",
            forms: { base: "accumulate", presentParticiple: "accumulating", past: "accumulated", pastParticiple: "accumulated", thirdPerson: "accumulates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accumulate.",
            categoryId: 9
        },
        {
            id: 61,
            verb: "accuse",
            forms: { base: "accuse", presentParticiple: "accusing", past: "accused", pastParticiple: "accused", thirdPerson: "accuses" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accuse.",
            categoryId: 4
        },
        {
            id: 62,
            verb: "accustom",
            forms: { base: "accustom", presentParticiple: "accustoming", past: "accustomed", pastParticiple: "accustomed", thirdPerson: "accustoms" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for accustom.",
            categoryId: 12
        },
        {
            id: 63,
            verb: "ache",
            forms: { base: "ache", presentParticiple: "aching", past: "ached", pastParticiple: "ached", thirdPerson: "aches" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for ache.",
            categoryId: 5
        },
        {
            id: 64,
            verb: "acknowledge",
            forms: { base: "acknowledge", presentParticiple: "acknowledging", past: "acknowledged", pastParticiple: "acknowledged", thirdPerson: "acknowledges" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for acknowledge.",
            categoryId: 4
        },
        {
            id: 65,
            verb: "acquaint",
            forms: { base: "acquaint", presentParticiple: "acquainting", past: "acquainted", pastParticiple: "acquainted", thirdPerson: "acquaints" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for acquaint.",
            categoryId: 2
        },
        {
            id: 66,
            verb: "acquire",
            forms: { base: "acquire", presentParticiple: "acquiring", past: "acquired", pastParticiple: "acquired", thirdPerson: "acquires" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for acquire.",
            categoryId: 9
        },
        {
            id: 67,
            verb: "act",
            forms: { base: "act", presentParticiple: "acting", past: "acted", pastParticiple: "acted", thirdPerson: "acts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for act.",
            categoryId: 1
        },
        {
            id: 68,
            verb: "activate",
            forms: { base: "activate", presentParticiple: "activating", past: "activated", pastParticiple: "activated", thirdPerson: "activates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for activate.",
            categoryId: 6
        },
        {
            id: 69,
            verb: "adapt",
            forms: { base: "adapt", presentParticiple: "adapting", past: "adapted", pastParticiple: "adapted", thirdPerson: "adapts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adapt.",
            categoryId: 8
        },
        {
            id: 70,
            verb: "add",
            forms: { base: "add", presentParticiple: "adding", past: "added", pastParticiple: "added", thirdPerson: "adds" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for add.",
            categoryId: 6
        },
        {
            id: 71,
            verb: "addict",
            forms: { base: "addict", presentParticiple: "addicting", past: "addicted", pastParticiple: "addicted", thirdPerson: "addicts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for addict.",
            categoryId: 5
        },
        {
            id: 72,
            verb: "address",
            forms: { base: "address", presentParticiple: "addressing", past: "addressed", pastParticiple: "addressed", thirdPerson: "addresses" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for address.",
            categoryId: 2
        },
        {
            id: 73,
            verb: "adhere",
            forms: { base: "adhere", presentParticiple: "adhering", past: "adhered", pastParticiple: "adhered", thirdPerson: "adheres" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adhere.",
            categoryId: 12
        },
        {
            id: 74,
            verb: "adjourn",
            forms: { base: "adjourn", presentParticiple: "adjourning", past: "adjourned", pastParticiple: "adjourned", thirdPerson: "adjourns" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adjourn.",
            categoryId: 1
        },
        {
            id: 75,
            verb: "adjust",
            forms: { base: "adjust", presentParticiple: "adjusting", past: "adjusted", pastParticiple: "adjusted", thirdPerson: "adjusts" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adjust.",
            categoryId: 8
        },
        {
            id: 76,
            verb: "administer",
            forms: { base: "administer", presentParticiple: "administering", past: "administered", pastParticiple: "administered", thirdPerson: "administers" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for administer.",
            categoryId: 2
        },
        {
            id: 77,
            verb: "admonish",
            forms: { base: "admonish", presentParticiple: "admonishing", past: "admonished", pastParticiple: "admonished", thirdPerson: "admonishes" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for admonish.",
            categoryId: 4
        },
        {
            id: 78,
            verb: "adore",
            forms: { base: "adore", presentParticiple: "adoring", past: "adored", pastParticiple: "adored", thirdPerson: "adores" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adore.",
            categoryId: 5
        },
        {
            id: 79,
            verb: "adorn",
            forms: { base: "adorn", presentParticiple: "adorning", past: "adorned", pastParticiple: "adorned", thirdPerson: "adorns" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for adorn.",
            categoryId: 6
        },
        {
            id: 80,
            verb: "advance",
            forms: { base: "advance", presentParticiple: "advancing", past: "advanced", pastParticiple: "advanced", thirdPerson: "advances" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for advance.",
            categoryId: 3
        },
        {
            id: 81,
            verb: "advertise",
            forms: { base: "advertise", presentParticiple: "advertising", past: "advertised", pastParticiple: "advertised", thirdPerson: "advertises" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for advertise.",
            categoryId: 2
        },
        {
            id: 82,
            verb: "advocate",
            forms: { base: "advocate", presentParticiple: "advocating", past: "advocated", pastParticiple: "advocated", thirdPerson: "advocates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for advocate.",
            categoryId: 2
        },
        {
            id: 83,
            verb: "affect",
            forms: { base: "affect", presentParticiple: "affecting", past: "affected", pastParticiple: "affected", thirdPerson: "affects" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for affect.",
            categoryId: 8
        },
        {
            id: 84,
            verb: "affiliate",
            forms: { base: "affiliate", presentParticiple: "affiliating", past: "affiliated", pastParticiple: "affiliated", thirdPerson: "affiliates" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for affiliate.",
            categoryId: 9
        },
        {
            id: 85,
            verb: "affirm",
            forms: { base: "affirm", presentParticiple: "affirming", past: "affirmed", pastParticiple: "affirmed", thirdPerson: "affirms" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for affirm.",
            categoryId: 4
        }
        ,
        {
            id: 86,
            verb: "a_verb_86",
            forms: { base: "a_verb_86", presentParticiple: "a_verb_86ing", past: "a_verb_86ed", pastParticiple: "a_verb_86ed", thirdPerson: "a_verb_86s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_86.",
            categoryId: 1
        },
        {
            id: 87,
            verb: "a_verb_87",
            forms: { base: "a_verb_87", presentParticiple: "a_verb_87ing", past: "a_verb_87ed", pastParticiple: "a_verb_87ed", thirdPerson: "a_verb_87s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_87.",
            categoryId: 1
        },
        {
            id: 88,
            verb: "a_verb_88",
            forms: { base: "a_verb_88", presentParticiple: "a_verb_88ing", past: "a_verb_88ed", pastParticiple: "a_verb_88ed", thirdPerson: "a_verb_88s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_88.",
            categoryId: 1
        },
        {
            id: 89,
            verb: "a_verb_89",
            forms: { base: "a_verb_89", presentParticiple: "a_verb_89ing", past: "a_verb_89ed", pastParticiple: "a_verb_89ed", thirdPerson: "a_verb_89s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_89.",
            categoryId: 1
        },
        {
            id: 90,
            verb: "a_verb_90",
            forms: { base: "a_verb_90", presentParticiple: "a_verb_90ing", past: "a_verb_90ed", pastParticiple: "a_verb_90ed", thirdPerson: "a_verb_90s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_90.",
            categoryId: 1
        },
        {
            id: 91,
            verb: "a_verb_91",
            forms: { base: "a_verb_91", presentParticiple: "a_verb_91ing", past: "a_verb_91ed", pastParticiple: "a_verb_91ed", thirdPerson: "a_verb_91s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_91.",
            categoryId: 1
        },
        {
            id: 92,
            verb: "a_verb_92",
            forms: { base: "a_verb_92", presentParticiple: "a_verb_92ing", past: "a_verb_92ed", pastParticiple: "a_verb_92ed", thirdPerson: "a_verb_92s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_92.",
            categoryId: 1
        },
        {
            id: 93,
            verb: "a_verb_93",
            forms: { base: "a_verb_93", presentParticiple: "a_verb_93ing", past: "a_verb_93ed", pastParticiple: "a_verb_93ed", thirdPerson: "a_verb_93s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_93.",
            categoryId: 1
        },
        {
            id: 94,
            verb: "a_verb_94",
            forms: { base: "a_verb_94", presentParticiple: "a_verb_94ing", past: "a_verb_94ed", pastParticiple: "a_verb_94ed", thirdPerson: "a_verb_94s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_94.",
            categoryId: 1
        },
        {
            id: 95,
            verb: "a_verb_95",
            forms: { base: "a_verb_95", presentParticiple: "a_verb_95ing", past: "a_verb_95ed", pastParticiple: "a_verb_95ed", thirdPerson: "a_verb_95s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_95.",
            categoryId: 1
        },
        {
            id: 96,
            verb: "a_verb_96",
            forms: { base: "a_verb_96", presentParticiple: "a_verb_96ing", past: "a_verb_96ed", pastParticiple: "a_verb_96ed", thirdPerson: "a_verb_96s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_96.",
            categoryId: 1
        },
        {
            id: 97,
            verb: "a_verb_97",
            forms: { base: "a_verb_97", presentParticiple: "a_verb_97ing", past: "a_verb_97ed", pastParticiple: "a_verb_97ed", thirdPerson: "a_verb_97s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_97.",
            categoryId: 1
        },
        {
            id: 98,
            verb: "a_verb_98",
            forms: { base: "a_verb_98", presentParticiple: "a_verb_98ing", past: "a_verb_98ed", pastParticiple: "a_verb_98ed", thirdPerson: "a_verb_98s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_98.",
            categoryId: 1
        },
        {
            id: 99,
            verb: "a_verb_99",
            forms: { base: "a_verb_99", presentParticiple: "a_verb_99ing", past: "a_verb_99ed", pastParticiple: "a_verb_99ed", thirdPerson: "a_verb_99s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_99.",
            categoryId: 1
        },
        {
            id: 100,
            verb: "a_verb_100",
            forms: { base: "a_verb_100", presentParticiple: "a_verb_100ing", past: "a_verb_100ed", pastParticiple: "a_verb_100ed", thirdPerson: "a_verb_100s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_100.",
            categoryId: 1
        },
        {
            id: 101,
            verb: "a_verb_101",
            forms: { base: "a_verb_101", presentParticiple: "a_verb_101ing", past: "a_verb_101ed", pastParticiple: "a_verb_101ed", thirdPerson: "a_verb_101s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_101.",
            categoryId: 1
        },
        {
            id: 102,
            verb: "a_verb_102",
            forms: { base: "a_verb_102", presentParticiple: "a_verb_102ing", past: "a_verb_102ed", pastParticiple: "a_verb_102ed", thirdPerson: "a_verb_102s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_102.",
            categoryId: 1
        },
        {
            id: 103,
            verb: "a_verb_103",
            forms: { base: "a_verb_103", presentParticiple: "a_verb_103ing", past: "a_verb_103ed", pastParticiple: "a_verb_103ed", thirdPerson: "a_verb_103s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_103.",
            categoryId: 1
        },
        {
            id: 104,
            verb: "a_verb_104",
            forms: { base: "a_verb_104", presentParticiple: "a_verb_104ing", past: "a_verb_104ed", pastParticiple: "a_verb_104ed", thirdPerson: "a_verb_104s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_104.",
            categoryId: 1
        },
        {
            id: 105,
            verb: "a_verb_105",
            forms: { base: "a_verb_105", presentParticiple: "a_verb_105ing", past: "a_verb_105ed", pastParticiple: "a_verb_105ed", thirdPerson: "a_verb_105s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_105.",
            categoryId: 1
        },
        {
            id: 106,
            verb: "a_verb_106",
            forms: { base: "a_verb_106", presentParticiple: "a_verb_106ing", past: "a_verb_106ed", pastParticiple: "a_verb_106ed", thirdPerson: "a_verb_106s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_106.",
            categoryId: 1
        },
        {
            id: 107,
            verb: "a_verb_107",
            forms: { base: "a_verb_107", presentParticiple: "a_verb_107ing", past: "a_verb_107ed", pastParticiple: "a_verb_107ed", thirdPerson: "a_verb_107s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_107.",
            categoryId: 1
        },
        {
            id: 108,
            verb: "a_verb_108",
            forms: { base: "a_verb_108", presentParticiple: "a_verb_108ing", past: "a_verb_108ed", pastParticiple: "a_verb_108ed", thirdPerson: "a_verb_108s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_108.",
            categoryId: 1
        },
        {
            id: 109,
            verb: "a_verb_109",
            forms: { base: "a_verb_109", presentParticiple: "a_verb_109ing", past: "a_verb_109ed", pastParticiple: "a_verb_109ed", thirdPerson: "a_verb_109s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_109.",
            categoryId: 1
        },
        {
            id: 110,
            verb: "a_verb_110",
            forms: { base: "a_verb_110", presentParticiple: "a_verb_110ing", past: "a_verb_110ed", pastParticiple: "a_verb_110ed", thirdPerson: "a_verb_110s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_110.",
            categoryId: 1
        },
        {
            id: 111,
            verb: "a_verb_111",
            forms: { base: "a_verb_111", presentParticiple: "a_verb_111ing", past: "a_verb_111ed", pastParticiple: "a_verb_111ed", thirdPerson: "a_verb_111s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_111.",
            categoryId: 1
        },
        {
            id: 112,
            verb: "a_verb_112",
            forms: { base: "a_verb_112", presentParticiple: "a_verb_112ing", past: "a_verb_112ed", pastParticiple: "a_verb_112ed", thirdPerson: "a_verb_112s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_112.",
            categoryId: 1
        },
        {
            id: 113,
            verb: "a_verb_113",
            forms: { base: "a_verb_113", presentParticiple: "a_verb_113ing", past: "a_verb_113ed", pastParticiple: "a_verb_113ed", thirdPerson: "a_verb_113s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_113.",
            categoryId: 1
        },
        {
            id: 114,
            verb: "a_verb_114",
            forms: { base: "a_verb_114", presentParticiple: "a_verb_114ing", past: "a_verb_114ed", pastParticiple: "a_verb_114ed", thirdPerson: "a_verb_114s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_114.",
            categoryId: 1
        },
        {
            id: 115,
            verb: "a_verb_115",
            forms: { base: "a_verb_115", presentParticiple: "a_verb_115ing", past: "a_verb_115ed", pastParticiple: "a_verb_115ed", thirdPerson: "a_verb_115s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_115.",
            categoryId: 1
        },
        {
            id: 116,
            verb: "a_verb_116",
            forms: { base: "a_verb_116", presentParticiple: "a_verb_116ing", past: "a_verb_116ed", pastParticiple: "a_verb_116ed", thirdPerson: "a_verb_116s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_116.",
            categoryId: 1
        },
        {
            id: 117,
            verb: "a_verb_117",
            forms: { base: "a_verb_117", presentParticiple: "a_verb_117ing", past: "a_verb_117ed", pastParticiple: "a_verb_117ed", thirdPerson: "a_verb_117s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_117.",
            categoryId: 1
        },
        {
            id: 118,
            verb: "a_verb_118",
            forms: { base: "a_verb_118", presentParticiple: "a_verb_118ing", past: "a_verb_118ed", pastParticiple: "a_verb_118ed", thirdPerson: "a_verb_118s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_118.",
            categoryId: 1
        },
        {
            id: 119,
            verb: "a_verb_119",
            forms: { base: "a_verb_119", presentParticiple: "a_verb_119ing", past: "a_verb_119ed", pastParticiple: "a_verb_119ed", thirdPerson: "a_verb_119s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_119.",
            categoryId: 1
        },
        {
            id: 120,
            verb: "a_verb_120",
            forms: { base: "a_verb_120", presentParticiple: "a_verb_120ing", past: "a_verb_120ed", pastParticiple: "a_verb_120ed", thirdPerson: "a_verb_120s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_120.",
            categoryId: 1
        },
        {
            id: 121,
            verb: "a_verb_121",
            forms: { base: "a_verb_121", presentParticiple: "a_verb_121ing", past: "a_verb_121ed", pastParticiple: "a_verb_121ed", thirdPerson: "a_verb_121s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_121.",
            categoryId: 1
        },
        {
            id: 122,
            verb: "a_verb_122",
            forms: { base: "a_verb_122", presentParticiple: "a_verb_122ing", past: "a_verb_122ed", pastParticiple: "a_verb_122ed", thirdPerson: "a_verb_122s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_122.",
            categoryId: 1
        },
        {
            id: 123,
            verb: "a_verb_123",
            forms: { base: "a_verb_123", presentParticiple: "a_verb_123ing", past: "a_verb_123ed", pastParticiple: "a_verb_123ed", thirdPerson: "a_verb_123s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_123.",
            categoryId: 1
        },
        {
            id: 124,
            verb: "a_verb_124",
            forms: { base: "a_verb_124", presentParticiple: "a_verb_124ing", past: "a_verb_124ed", pastParticiple: "a_verb_124ed", thirdPerson: "a_verb_124s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_124.",
            categoryId: 1
        },
        {
            id: 125,
            verb: "a_verb_125",
            forms: { base: "a_verb_125", presentParticiple: "a_verb_125ing", past: "a_verb_125ed", pastParticiple: "a_verb_125ed", thirdPerson: "a_verb_125s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_125.",
            categoryId: 1
        },
        {
            id: 126,
            verb: "a_verb_126",
            forms: { base: "a_verb_126", presentParticiple: "a_verb_126ing", past: "a_verb_126ed", pastParticiple: "a_verb_126ed", thirdPerson: "a_verb_126s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_126.",
            categoryId: 1
        },
        {
            id: 127,
            verb: "a_verb_127",
            forms: { base: "a_verb_127", presentParticiple: "a_verb_127ing", past: "a_verb_127ed", pastParticiple: "a_verb_127ed", thirdPerson: "a_verb_127s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_127.",
            categoryId: 1
        },
        {
            id: 128,
            verb: "a_verb_128",
            forms: { base: "a_verb_128", presentParticiple: "a_verb_128ing", past: "a_verb_128ed", pastParticiple: "a_verb_128ed", thirdPerson: "a_verb_128s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_128.",
            categoryId: 1
        },
        {
            id: 129,
            verb: "a_verb_129",
            forms: { base: "a_verb_129", presentParticiple: "a_verb_129ing", past: "a_verb_129ed", pastParticiple: "a_verb_129ed", thirdPerson: "a_verb_129s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_129.",
            categoryId: 1
        },
        {
            id: 130,
            verb: "a_verb_130",
            forms: { base: "a_verb_130", presentParticiple: "a_verb_130ing", past: "a_verb_130ed", pastParticiple: "a_verb_130ed", thirdPerson: "a_verb_130s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_130.",
            categoryId: 1
        },
        {
            id: 131,
            verb: "a_verb_131",
            forms: { base: "a_verb_131", presentParticiple: "a_verb_131ing", past: "a_verb_131ed", pastParticiple: "a_verb_131ed", thirdPerson: "a_verb_131s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_131.",
            categoryId: 1
        },
        {
            id: 132,
            verb: "a_verb_132",
            forms: { base: "a_verb_132", presentParticiple: "a_verb_132ing", past: "a_verb_132ed", pastParticiple: "a_verb_132ed", thirdPerson: "a_verb_132s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_132.",
            categoryId: 1
        },
        {
            id: 133,
            verb: "a_verb_133",
            forms: { base: "a_verb_133", presentParticiple: "a_verb_133ing", past: "a_verb_133ed", pastParticiple: "a_verb_133ed", thirdPerson: "a_verb_133s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_133.",
            categoryId: 1
        },
        {
            id: 134,
            verb: "a_verb_134",
            forms: { base: "a_verb_134", presentParticiple: "a_verb_134ing", past: "a_verb_134ed", pastParticiple: "a_verb_134ed", thirdPerson: "a_verb_134s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_134.",
            categoryId: 1
        },
        {
            id: 135,
            verb: "a_verb_135",
            forms: { base: "a_verb_135", presentParticiple: "a_verb_135ing", past: "a_verb_135ed", pastParticiple: "a_verb_135ed", thirdPerson: "a_verb_135s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_135.",
            categoryId: 1
        }
        ,
        // Next 50 A-verbs (IDs 136-185)
        {
            id: 136,
            verb: "a_verb_136",
            forms: { base: "a_verb_136", presentParticiple: "a_verb_136ing", past: "a_verb_136ed", pastParticiple: "a_verb_136ed", thirdPerson: "a_verb_136s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_136.",
            categoryId: 1
        },
        {
            id: 137,
            verb: "a_verb_137",
            forms: { base: "a_verb_137", presentParticiple: "a_verb_137ing", past: "a_verb_137ed", pastParticiple: "a_verb_137ed", thirdPerson: "a_verb_137s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_137.",
            categoryId: 1
        },
        {
            id: 138,
            verb: "a_verb_138",
            forms: { base: "a_verb_138", presentParticiple: "a_verb_138ing", past: "a_verb_138ed", pastParticiple: "a_verb_138ed", thirdPerson: "a_verb_138s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_138.",
            categoryId: 1
        },
        {
            id: 139,
            verb: "a_verb_139",
            forms: { base: "a_verb_139", presentParticiple: "a_verb_139ing", past: "a_verb_139ed", pastParticiple: "a_verb_139ed", thirdPerson: "a_verb_139s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_139.",
            categoryId: 1
        },
        {
            id: 140,
            verb: "a_verb_140",
            forms: { base: "a_verb_140", presentParticiple: "a_verb_140ing", past: "a_verb_140ed", pastParticiple: "a_verb_140ed", thirdPerson: "a_verb_140s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_140.",
            categoryId: 1
        },
        {
            id: 141,
            verb: "a_verb_141",
            forms: { base: "a_verb_141", presentParticiple: "a_verb_141ing", past: "a_verb_141ed", pastParticiple: "a_verb_141ed", thirdPerson: "a_verb_141s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_141.",
            categoryId: 1
        },
        {
            id: 142,
            verb: "a_verb_142",
            forms: { base: "a_verb_142", presentParticiple: "a_verb_142ing", past: "a_verb_142ed", pastParticiple: "a_verb_142ed", thirdPerson: "a_verb_142s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_142.",
            categoryId: 1
        },
        {
            id: 143,
            verb: "a_verb_143",
            forms: { base: "a_verb_143", presentParticiple: "a_verb_143ing", past: "a_verb_143ed", pastParticiple: "a_verb_143ed", thirdPerson: "a_verb_143s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_143.",
            categoryId: 1
        },
        {
            id: 144,
            verb: "a_verb_144",
            forms: { base: "a_verb_144", presentParticiple: "a_verb_144ing", past: "a_verb_144ed", pastParticiple: "a_verb_144ed", thirdPerson: "a_verb_144s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_144.",
            categoryId: 1
        },
        {
            id: 145,
            verb: "a_verb_145",
            forms: { base: "a_verb_145", presentParticiple: "a_verb_145ing", past: "a_verb_145ed", pastParticiple: "a_verb_145ed", thirdPerson: "a_verb_145s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_145.",
            categoryId: 1
        },
        {
            id: 146,
            verb: "a_verb_146",
            forms: { base: "a_verb_146", presentParticiple: "a_verb_146ing", past: "a_verb_146ed", pastParticiple: "a_verb_146ed", thirdPerson: "a_verb_146s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_146.",
            categoryId: 1
        },
        {
            id: 147,
            verb: "a_verb_147",
            forms: { base: "a_verb_147", presentParticiple: "a_verb_147ing", past: "a_verb_147ed", pastParticiple: "a_verb_147ed", thirdPerson: "a_verb_147s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_147.",
            categoryId: 1
        },
        {
            id: 148,
            verb: "a_verb_148",
            forms: { base: "a_verb_148", presentParticiple: "a_verb_148ing", past: "a_verb_148ed", pastParticiple: "a_verb_148ed", thirdPerson: "a_verb_148s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_148.",
            categoryId: 1
        },
        {
            id: 149,
            verb: "a_verb_149",
            forms: { base: "a_verb_149", presentParticiple: "a_verb_149ing", past: "a_verb_149ed", pastParticiple: "a_verb_149ed", thirdPerson: "a_verb_149s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_149.",
            categoryId: 1
        },
        {
            id: 150,
            verb: "a_verb_150",
            forms: { base: "a_verb_150", presentParticiple: "a_verb_150ing", past: "a_verb_150ed", pastParticiple: "a_verb_150ed", thirdPerson: "a_verb_150s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_150.",
            categoryId: 1
        },
        {
            id: 151,
            verb: "a_verb_151",
            forms: { base: "a_verb_151", presentParticiple: "a_verb_151ing", past: "a_verb_151ed", pastParticiple: "a_verb_151ed", thirdPerson: "a_verb_151s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_151.",
            categoryId: 1
        },
        {
            id: 152,
            verb: "a_verb_152",
            forms: { base: "a_verb_152", presentParticiple: "a_verb_152ing", past: "a_verb_152ed", pastParticiple: "a_verb_152ed", thirdPerson: "a_verb_152s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_152.",
            categoryId: 1
        },
        {
            id: 153,
            verb: "a_verb_153",
            forms: { base: "a_verb_153", presentParticiple: "a_verb_153ing", past: "a_verb_153ed", pastParticiple: "a_verb_153ed", thirdPerson: "a_verb_153s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_153.",
            categoryId: 1
        },
        {
            id: 154,
            verb: "a_verb_154",
            forms: { base: "a_verb_154", presentParticiple: "a_verb_154ing", past: "a_verb_154ed", pastParticiple: "a_verb_154ed", thirdPerson: "a_verb_154s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_154.",
            categoryId: 1
        },
        {
            id: 155,
            verb: "a_verb_155",
            forms: { base: "a_verb_155", presentParticiple: "a_verb_155ing", past: "a_verb_155ed", pastParticiple: "a_verb_155ed", thirdPerson: "a_verb_155s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_155.",
            categoryId: 1
        },
        {
            id: 156,
            verb: "a_verb_156",
            forms: { base: "a_verb_156", presentParticiple: "a_verb_156ing", past: "a_verb_156ed", pastParticiple: "a_verb_156ed", thirdPerson: "a_verb_156s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_156.",
            categoryId: 1
        },
        {
            id: 157,
            verb: "a_verb_157",
            forms: { base: "a_verb_157", presentParticiple: "a_verb_157ing", past: "a_verb_157ed", pastParticiple: "a_verb_157ed", thirdPerson: "a_verb_157s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_157.",
            categoryId: 1
        },
        {
            id: 158,
            verb: "a_verb_158",
            forms: { base: "a_verb_158", presentParticiple: "a_verb_158ing", past: "a_verb_158ed", pastParticiple: "a_verb_158ed", thirdPerson: "a_verb_158s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_158.",
            categoryId: 1
        },
        {
            id: 159,
            verb: "a_verb_159",
            forms: { base: "a_verb_159", presentParticiple: "a_verb_159ing", past: "a_verb_159ed", pastParticiple: "a_verb_159ed", thirdPerson: "a_verb_159s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_159.",
            categoryId: 1
        },
        {
            id: 160,
            verb: "a_verb_160",
            forms: { base: "a_verb_160", presentParticiple: "a_verb_160ing", past: "a_verb_160ed", pastParticiple: "a_verb_160ed", thirdPerson: "a_verb_160s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_160.",
            categoryId: 1
        },
        {
            id: 161,
            verb: "a_verb_161",
            forms: { base: "a_verb_161", presentParticiple: "a_verb_161ing", past: "a_verb_161ed", pastParticiple: "a_verb_161ed", thirdPerson: "a_verb_161s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_161.",
            categoryId: 1
        },
        {
            id: 162,
            verb: "a_verb_162",
            forms: { base: "a_verb_162", presentParticiple: "a_verb_162ing", past: "a_verb_162ed", pastParticiple: "a_verb_162ed", thirdPerson: "a_verb_162s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_162.",
            categoryId: 1
        },
        {
            id: 163,
            verb: "a_verb_163",
            forms: { base: "a_verb_163", presentParticiple: "a_verb_163ing", past: "a_verb_163ed", pastParticiple: "a_verb_163ed", thirdPerson: "a_verb_163s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_163.",
            categoryId: 1
        },
        {
            id: 164,
            verb: "a_verb_164",
            forms: { base: "a_verb_164", presentParticiple: "a_verb_164ing", past: "a_verb_164ed", pastParticiple: "a_verb_164ed", thirdPerson: "a_verb_164s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_164.",
            categoryId: 1
        },
        {
            id: 165,
            verb: "a_verb_165",
            forms: { base: "a_verb_165", presentParticiple: "a_verb_165ing", past: "a_verb_165ed", pastParticiple: "a_verb_165ed", thirdPerson: "a_verb_165s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_165.",
            categoryId: 1
        },
        {
            id: 166,
            verb: "a_verb_166",
            forms: { base: "a_verb_166", presentParticiple: "a_verb_166ing", past: "a_verb_166ed", pastParticiple: "a_verb_166ed", thirdPerson: "a_verb_166s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_166.",
            categoryId: 1
        },
        {
            id: 167,
            verb: "a_verb_167",
            forms: { base: "a_verb_167", presentParticiple: "a_verb_167ing", past: "a_verb_167ed", pastParticiple: "a_verb_167ed", thirdPerson: "a_verb_167s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_167.",
            categoryId: 1
        },
        {
            id: 168,
            verb: "a_verb_168",
            forms: { base: "a_verb_168", presentParticiple: "a_verb_168ing", past: "a_verb_168ed", pastParticiple: "a_verb_168ed", thirdPerson: "a_verb_168s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_168.",
            categoryId: 1
        },
        {
            id: 169,
            verb: "a_verb_169",
            forms: { base: "a_verb_169", presentParticiple: "a_verb_169ing", past: "a_verb_169ed", pastParticiple: "a_verb_169ed", thirdPerson: "a_verb_169s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_169.",
            categoryId: 1
        },
        {
            id: 170,
            verb: "a_verb_170",
            forms: { base: "a_verb_170", presentParticiple: "a_verb_170ing", past: "a_verb_170ed", pastParticiple: "a_verb_170ed", thirdPerson: "a_verb_170s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_170.",
            categoryId: 1
        },
        {
            id: 171,
            verb: "a_verb_171",
            forms: { base: "a_verb_171", presentParticiple: "a_verb_171ing", past: "a_verb_171ed", pastParticiple: "a_verb_171ed", thirdPerson: "a_verb_171s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_171.",
            categoryId: 1
        },
        {
            id: 172,
            verb: "a_verb_172",
            forms: { base: "a_verb_172", presentParticiple: "a_verb_172ing", past: "a_verb_172ed", pastParticiple: "a_verb_172ed", thirdPerson: "a_verb_172s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_172.",
            categoryId: 1
        },
        {
            id: 173,
            verb: "a_verb_173",
            forms: { base: "a_verb_173", presentParticiple: "a_verb_173ing", past: "a_verb_173ed", pastParticiple: "a_verb_173ed", thirdPerson: "a_verb_173s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_173.",
            categoryId: 1
        },
        {
            id: 174,
            verb: "a_verb_174",
            forms: { base: "a_verb_174", presentParticiple: "a_verb_174ing", past: "a_verb_174ed", pastParticiple: "a_verb_174ed", thirdPerson: "a_verb_174s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_174.",
            categoryId: 1
        },
        {
            id: 175,
            verb: "a_verb_175",
            forms: { base: "a_verb_175", presentParticiple: "a_verb_175ing", past: "a_verb_175ed", pastParticiple: "a_verb_175ed", thirdPerson: "a_verb_175s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_175.",
            categoryId: 1
        },
        {
            id: 176,
            verb: "a_verb_176",
            forms: { base: "a_verb_176", presentParticiple: "a_verb_176ing", past: "a_verb_176ed", pastParticiple: "a_verb_176ed", thirdPerson: "a_verb_176s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_176.",
            categoryId: 1
        },
        {
            id: 177,
            verb: "a_verb_177",
            forms: { base: "a_verb_177", presentParticiple: "a_verb_177ing", past: "a_verb_177ed", pastParticiple: "a_verb_177ed", thirdPerson: "a_verb_177s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_177.",
            categoryId: 1
        },
        {
            id: 178,
            verb: "a_verb_178",
            forms: { base: "a_verb_178", presentParticiple: "a_verb_178ing", past: "a_verb_178ed", pastParticiple: "a_verb_178ed", thirdPerson: "a_verb_178s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_178.",
            categoryId: 1
        },
        {
            id: 179,
            verb: "a_verb_179",
            forms: { base: "a_verb_179", presentParticiple: "a_verb_179ing", past: "a_verb_179ed", pastParticiple: "a_verb_179ed", thirdPerson: "a_verb_179s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_179.",
            categoryId: 1
        },
        {
            id: 180,
            verb: "a_verb_180",
            forms: { base: "a_verb_180", presentParticiple: "a_verb_180ing", past: "a_verb_180ed", pastParticiple: "a_verb_180ed", thirdPerson: "a_verb_180s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_180.",
            categoryId: 1
        },
        {
            id: 181,
            verb: "a_verb_181",
            forms: { base: "a_verb_181", presentParticiple: "a_verb_181ing", past: "a_verb_181ed", pastParticiple: "a_verb_181ed", thirdPerson: "a_verb_181s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_181.",
            categoryId: 1
        },
        {
            id: 182,
            verb: "a_verb_182",
            forms: { base: "a_verb_182", presentParticiple: "a_verb_182ing", past: "a_verb_182ed", pastParticiple: "a_verb_182ed", thirdPerson: "a_verb_182s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_182.",
            categoryId: 1
        },
        {
            id: 183,
            verb: "a_verb_183",
            forms: { base: "a_verb_183", presentParticiple: "a_verb_183ing", past: "a_verb_183ed", pastParticiple: "a_verb_183ed", thirdPerson: "a_verb_183s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_183.",
            categoryId: 1
        },
        {
            id: 184,
            verb: "a_verb_184",
            forms: { base: "a_verb_184", presentParticiple: "a_verb_184ing", past: "a_verb_184ed", pastParticiple: "a_verb_184ed", thirdPerson: "a_verb_184s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_184.",
            categoryId: 1
        },
        {
            id: 185,
            verb: "a_verb_185",
            forms: { base: "a_verb_185", presentParticiple: "a_verb_185ing", past: "a_verb_185ed", pastParticiple: "a_verb_185ed", thirdPerson: "a_verb_185s" },
            banglaMeaning: "বাংলা অর্থ (প্লেসহোল্ডার)",
            example: "Example sentence for a_verb_185.",
            categoryId: 1
        }
    ];
}

// Populate category filter dropdown
function populateCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

// Filter verbs based on search and category
function filterVerbs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryId = document.getElementById('categoryFilter').value;
    
    filteredVerbs = allVerbs.filter(verb => {
        // Category filter
        const categoryMatch = !categoryId || verb.categoryId == categoryId;
        
        // Search filter
        const searchMatch = !searchTerm || 
            verb.verb.toLowerCase().includes(searchTerm) ||
            verb.banglaMeaning.toLowerCase().includes(searchTerm) ||
            verb.example.toLowerCase().includes(searchTerm) ||
            Object.values(verb.forms).some(form => form.toLowerCase().includes(searchTerm));
        
        return categoryMatch && searchMatch;
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

// Update table content
function updateTable() {
    const tbody = document.getElementById('verbsTableBody');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageVerbs = filteredVerbs.slice(startIndex, endIndex);
    
    if (pageVerbs.length === 0) {
        tbody.innerHTML = '';
        document.getElementById('emptyState').classList.remove('hidden');
        return;
    }
    
    document.getElementById('emptyState').classList.add('hidden');
    
    tbody.innerHTML = pageVerbs.map((verb, index) => {
        const category = categories.find(c => c.id === verb.categoryId);
        const rowNumber = startIndex + index + 1;
        
        return `
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-4 py-4 text-gray-600 font-medium">${rowNumber}</td>
                <td class="px-4 py-4">
                    <button onclick="showVerbModal(${verb.id})" class="font-semibold text-indigo-700 text-lg hover:text-indigo-900 hover:underline cursor-pointer transition-colors">
                        ${verb.verb}
                    </button>
                </td>
                <td class="px-4 py-4">
                    <span class="text-gray-700 font-medium">${verb.banglaMeaning}</span>
                </td>
                <td class="px-4 py-4">
                    <span class="text-gray-600 italic">"${verb.example}"</span>
                </td>
                <td class="px-4 py-4">
                    <button onclick="showVerbModal(${verb.id})" class="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                        <i class="fas fa-eye mr-1"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredVerbs.length / itemsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    
    // Update showing info
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredVerbs.length);
    
    document.getElementById('showingStart').textContent = filteredVerbs.length > 0 ? startIndex : 0;
    document.getElementById('showingEnd').textContent = endIndex;
    document.getElementById('showingTotal').textContent = filteredVerbs.length;
    
    // Update buttons
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
    
    // Generate page numbers
    pageNumbers.innerHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage 
            ? 'px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold'
            : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors';
        pageBtn.onclick = () => goToPage(i);
        pageNumbers.appendChild(pageBtn);
    }
}

// Update results info
function updateResultsInfo() {
    const info = document.getElementById('resultsInfo');
    const total = document.getElementById('totalCount');
    
    info.innerHTML = `<i class="fas fa-info-circle mr-1"></i>Showing ${filteredVerbs.length} of ${allVerbs.length} verbs`;
    total.textContent = allVerbs.length;
}

// Pagination functions
function goToPage(page) {
    currentPage = page;
    updateDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateDisplay();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredVerbs.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateDisplay();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Hide loading state
function hideLoadingState() {
    document.getElementById('loadingState').style.display = 'none';
}

// Show error
function showError(message) {
    console.error(message);
}

// Load sample data fallback
function loadSampleData() {
    loadData();
}

// ===== MODAL FUNCTIONS =====

// Show Verb Modal Popup
function showVerbModal(verbId) {
    const verb = allVerbs.find(v => v.id === verbId);
    if (!verb) return;
    
    const category = categories.find(c => c.id === verb.categoryId);
    
    // Populate modal with verb data
    document.getElementById('modalVerbName').textContent = verb.verb;
    document.getElementById('modalVerbCategory').textContent = category ? category.name : 'Unknown Category';
    document.getElementById('modalBanglaMeaning').textContent = verb.banglaMeaning;
    document.getElementById('modalFormBase').textContent = verb.forms.base;
    document.getElementById('modalFormParticiple').textContent = verb.forms.presentParticiple;
    document.getElementById('modalFormPast').textContent = verb.forms.past;
    document.getElementById('modalFormPastParticiple').textContent = verb.forms.pastParticiple;
    document.getElementById('modalFormThirdPerson').textContent = verb.forms.thirdPerson;
    document.getElementById('modalExample').textContent = verb.example;
    
    // Show modal
    const modal = document.getElementById('verbModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Disable scroll
}

// Close Verb Modal
function closeVerbModal() {
    document.getElementById('verbModal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Enable scroll
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('verbModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeVerbModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeVerbModal();
        }
    });
});
