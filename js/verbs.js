// Data Management for Main Verbs
let allVerbs = [];
let filteredVerbs = [];
let categories = [];
let currentPage = 1;
const itemsPerPage = 25;

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
        },
        // Next 50 main verbs starting with 'A'
        {id:36,verb:"abandon",forms:{base:"abandon",presentParticiple:"abandoning",past:"abandoned",pastParticiple:"abandoned",thirdPerson:"abandons"},banglaMeaning:"পরিত্যাগ করা",example:"He abandoned his old car.",categoryId:8},
        {id:37,verb:"abase",forms:{base:"abase",presentParticiple:"abasing",past:"abased",pastParticiple:"abased",thirdPerson:"abases"},banglaMeaning:"নিজেকে হীন করা",example:"He refused to abase himself before the king.",categoryId:5},
        {id:38,verb:"abate",forms:{base:"abate",presentParticiple:"abating",past:"abated",pastParticiple:"abated",thirdPerson:"abates"},banglaMeaning:"হ্রাস করা",example:"The storm abated after a few hours.",categoryId:8},
        {id:39,verb:"abbreviate",forms:{base:"abbreviate",presentParticiple:"abbreviating",past:"abbreviated",pastParticiple:"abbreviated",thirdPerson:"abbreviates"},banglaMeaning:"সংক্ষিপ্ত করা",example:"We often abbreviate 'Doctor' as 'Dr.'",categoryId:6},
        {id:40,verb:"abdicate",forms:{base:"abdicate",presentParticiple:"abdicating",past:"abdicated",pastParticiple:"abdicated",thirdPerson:"abdicates"},banglaMeaning:"সিংহাসন ত্যাগ করা",example:"The king abdicated the throne.",categoryId:9},
        {id:41,verb:"abduct",forms:{base:"abduct",presentParticiple:"abducting",past:"abducted",pastParticiple:"abducted",thirdPerson:"abducts"},banglaMeaning:"অপহরণ করা",example:"The child was abducted from the park.",categoryId:1},
        {id:42,verb:"abet",forms:{base:"abet",presentParticiple:"abetting",past:"abetted",pastParticiple:"abetted",thirdPerson:"abets"},banglaMeaning:"সহায়তা করা (অপরাধে)",example:"He abetted the thief in the robbery.",categoryId:1},
        {id:43,verb:"abhor",forms:{base:"abhor",presentParticiple:"abhorring",past:"abhorred",pastParticiple:"abhorred",thirdPerson:"abhors"},banglaMeaning:"ঘৃণা করা",example:"She abhors cruelty to animals.",categoryId:5},
        {id:44,verb:"abide",forms:{base:"abide",presentParticiple:"abiding",past:"abided",pastParticiple:"abided",thirdPerson:"abides"},banglaMeaning:"মান্য করা, থাকা",example:"You must abide by the rules.",categoryId:4},
        {id:45,verb:"abolish",forms:{base:"abolish",presentParticiple:"abolishing",past:"abolished",pastParticiple:"abolished",thirdPerson:"abolishes"},banglaMeaning:"বিলুপ্ত করা",example:"Slavery was abolished in the 19th century.",categoryId:8},
        {id:46,verb:"abound",forms:{base:"abound",presentParticiple:"abounding",past:"abounded",pastParticiple:"abounded",thirdPerson:"abounds"},banglaMeaning:"প্রচুর পরিমাণে থাকা",example:"Fish abound in this river.",categoryId:12},
        {id:47,verb:"abridge",forms:{base:"abridge",presentParticiple:"abridging",past:"abridged",pastParticiple:"abridged",thirdPerson:"abridges"},banglaMeaning:"সংক্ষিপ্ত করা",example:"The book was abridged for children.",categoryId:6},
        {id:48,verb:"abrogate",forms:{base:"abrogate",presentParticiple:"abrogating",past:"abrogated",pastParticiple:"abrogated",thirdPerson:"abrogates"},banglaMeaning:"বাতিল করা",example:"The law was abrogated by the government.",categoryId:8},
        {id:49,verb:"abscond",forms:{base:"abscond",presentParticiple:"absconding",past:"absconded",pastParticiple:"absconded",thirdPerson:"absconds"},banglaMeaning:"পালিয়ে যাওয়া",example:"The criminal absconded with the money.",categoryId:1},
        {id:50,verb:"absolve",forms:{base:"absolve",presentParticiple:"absolving",past:"absolved",pastParticiple:"absolved",thirdPerson:"absolves"},banglaMeaning:"দোষমুক্ত করা",example:"The judge absolved him of all blame.",categoryId:4},
        {id:51,verb:"absorb",forms:{base:"absorb",presentParticiple:"absorbing",past:"absorbed",pastParticiple:"absorbed",thirdPerson:"absorbs"},banglaMeaning:"শোষণ করা",example:"The sponge absorbs water.",categoryId:6},
        {id:52,verb:"abstain",forms:{base:"abstain",presentParticiple:"abstaining",past:"abstained",pastParticiple:"abstained",thirdPerson:"abstains"},banglaMeaning:"বিরত থাকা",example:"He abstained from voting.",categoryId:4},
        {id:53,verb:"abstract",forms:{base:"abstract",presentParticiple:"abstracting",past:"abstracted",pastParticiple:"abstracted",thirdPerson:"abstracts"},banglaMeaning:"সংক্ষিপ্তসার করা",example:"She abstracted the main points.",categoryId:6},
        {id:54,verb:"abuse",forms:{base:"abuse",presentParticiple:"abusing",past:"abused",pastParticiple:"abused",thirdPerson:"abuses"},banglaMeaning:"অপব্যবহার করা",example:"He abused his power.",categoryId:8},
        {id:55,verb:"accelerate",forms:{base:"accelerate",presentParticiple:"accelerating",past:"accelerated",pastParticiple:"accelerated",thirdPerson:"accelerates"},banglaMeaning:"ত্বরান্বিত করা",example:"The car accelerated quickly.",categoryId:3},
        {id:56,verb:"accentuate",forms:{base:"accentuate",presentParticiple:"accentuating",past:"accentuated",pastParticiple:"accentuated",thirdPerson:"accentuates"},banglaMeaning:"জোর দেওয়া",example:"The dress accentuates her beauty.",categoryId:11},
        {id:57,verb:"accept",forms:{base:"accept",presentParticiple:"accepting",past:"accepted",pastParticiple:"accepted",thirdPerson:"accepts"},banglaMeaning:"গ্রহণ করা",example:"She accepted the invitation.",categoryId:1},
        {id:58,verb:"access",forms:{base:"access",presentParticiple:"accessing",past:"accessed",pastParticiple:"accessed",thirdPerson:"accesses"},banglaMeaning:"প্রবেশাধিকার লাভ করা",example:"You can access the files online.",categoryId:6},
        {id:59,verb:"acclaim",forms:{base:"acclaim",presentParticiple:"acclaiming",past:"acclaimed",pastParticiple:"acclaimed",thirdPerson:"acclaims"},banglaMeaning:"প্রশংসা করা",example:"The movie was acclaimed by critics.",categoryId:5},
        {id:60,verb:"acclimate",forms:{base:"acclimate",presentParticiple:"acclimating",past:"acclimated",pastParticiple:"acclimated",thirdPerson:"acclimates"},banglaMeaning:"খাপ খাওয়ানো",example:"It takes time to acclimate to a new country.",categoryId:8},
        {id:61,verb:"accommodate",forms:{base:"accommodate",presentParticiple:"accommodating",past:"accommodated",pastParticiple:"accommodated",thirdPerson:"accommodates"},banglaMeaning:"আবাসন দেওয়া, মানিয়ে নেওয়া",example:"The hotel accommodates 200 guests.",categoryId:8},
        {id:62,verb:"accompany",forms:{base:"accompany",presentParticiple:"accompanying",past:"accompanied",pastParticiple:"accompanied",thirdPerson:"accompanies"},banglaMeaning:"সহগামী হওয়া",example:"She accompanied her friend to the doctor.",categoryId:1},
        {id:63,verb:"accomplish",forms:{base:"accomplish",presentParticiple:"accomplishing",past:"accomplished",pastParticiple:"accomplished",thirdPerson:"accomplishes"},banglaMeaning:"সম্পাদন করা",example:"He accomplished his goals.",categoryId:8},
        {id:64,verb:"accord",forms:{base:"accord",presentParticiple:"according",past:"accorded",pastParticiple:"accorded",thirdPerson:"accords"},banglaMeaning:"প্রদান করা, মেলানো",example:"The teacher accorded him special treatment.",categoryId:4},
        {id:65,verb:"account",forms:{base:"account",presentParticiple:"accounting",past:"accounted",pastParticiple:"accounted",thirdPerson:"accounts"},banglaMeaning:"হিসাব করা, ব্যাখ্যা করা",example:"He accounted for every penny spent.",categoryId:6},
        {id:66,verb:"accumulate",forms:{base:"accumulate",presentParticiple:"accumulating",past:"accumulated",pastParticiple:"accumulated",thirdPerson:"accumulates"},banglaMeaning:"জমা করা",example:"He accumulated a lot of wealth.",categoryId:8},
        {id:67,verb:"accuse",forms:{base:"accuse",presentParticiple:"accusing",past:"accused",pastParticiple:"accused",thirdPerson:"accuses"},banglaMeaning:"অভিযোগ করা",example:"She accused him of lying.",categoryId:4},
        {id:68,verb:"ache",forms:{base:"ache",presentParticiple:"aching",past:"ached",pastParticiple:"ached",thirdPerson:"aches"},banglaMeaning:"ব্যথা পাওয়া",example:"My head aches.",categoryId:5},
        {id:69,verb:"achieve",forms:{base:"achieve",presentParticiple:"achieving",past:"achieved",pastParticiple:"achieved",thirdPerson:"achieves"},banglaMeaning:"অর্জন করা",example:"She achieved great success.",categoryId:8},
        {id:70,verb:"acknowledge",forms:{base:"acknowledge",presentParticiple:"acknowledging",past:"acknowledged",pastParticiple:"acknowledged",thirdPerson:"acknowledges"},banglaMeaning:"স্বীকার করা",example:"He acknowledged his mistake.",categoryId:4},
        {id:71,verb:"acquire",forms:{base:"acquire",presentParticiple:"acquiring",past:"acquired",pastParticiple:"acquired",thirdPerson:"acquires"},banglaMeaning:"অর্জন করা, সংগ্রহ করা",example:"She acquired new skills.",categoryId:8},
        {id:72,verb:"act",forms:{base:"act",presentParticiple:"acting",past:"acted",pastParticiple:"acted",thirdPerson:"acts"},banglaMeaning:"অভিনয় করা, কাজ করা",example:"He acted in a movie.",categoryId:1},
        {id:73,verb:"activate",forms:{base:"activate",presentParticiple:"activating",past:"activated",pastParticiple:"activated",thirdPerson:"activates"},banglaMeaning:"সক্রিয় করা",example:"Please activate your account.",categoryId:8},
        {id:74,verb:"adapt",forms:{base:"adapt",presentParticiple:"adapting",past:"adapted",pastParticiple:"adapted",thirdPerson:"adapts"},banglaMeaning:"খাপ খাওয়ানো, মানিয়ে নেওয়া",example:"He adapted to the new environment.",categoryId:8},
        {id:75,verb:"add",forms:{base:"add",presentParticiple:"adding",past:"added",pastParticiple:"added",thirdPerson:"adds"},banglaMeaning:"যোগ করা",example:"Please add your name to the list.",categoryId:6},
        {id:76,verb:"address",forms:{base:"address",presentParticiple:"addressing",past:"addressed",pastParticiple:"addressed",thirdPerson:"addresses"},banglaMeaning:"সম্বোধন করা, ঠিকানা লেখা",example:"He addressed the audience.",categoryId:2},
        {id:77,verb:"adhere",forms:{base:"adhere",presentParticiple:"adhering",past:"adhered",pastParticiple:"adhered",thirdPerson:"adheres"},banglaMeaning:"লেগে থাকা, অনুসরণ করা",example:"You must adhere to the rules.",categoryId:4},
        {id:78,verb:"adjourn",forms:{base:"adjourn",presentParticiple:"adjourning",past:"adjourned",pastParticiple:"adjourned",thirdPerson:"adjourns"},banglaMeaning:"স্থগিত করা",example:"The meeting was adjourned.",categoryId:8},
        {id:79,verb:"adjust",forms:{base:"adjust",presentParticiple:"adjusting",past:"adjusted",pastParticiple:"adjusted",thirdPerson:"adjusts"},banglaMeaning:"সমন্বয় করা",example:"He adjusted the mirror.",categoryId:8},
        {id:80,verb:"administer",forms:{base:"administer",presentParticiple:"administering",past:"administered",pastParticiple:"administered",thirdPerson:"administers"},banglaMeaning:"পরিচালনা করা",example:"The nurse administered the medicine.",categoryId:1},
        {id:81,verb:"admire",forms:{base:"admire",presentParticiple:"admiring",past:"admired",pastParticiple:"admired",thirdPerson:"admires"},banglaMeaning:"প্রশংসা করা",example:"I admire your courage.",categoryId:5},
        {id:82,verb:"admit",forms:{base:"admit",presentParticiple:"admitting",past:"admitted",pastParticiple:"admitted",thirdPerson:"admits"},banglaMeaning:"স্বীকার করা, ভর্তি করা",example:"He admitted his mistake.",categoryId:4},
        {id:83,verb:"adopt",forms:{base:"adopt",presentParticiple:"adopting",past:"adopted",pastParticiple:"adopted",thirdPerson:"adopts"},banglaMeaning:"দত্তক নেওয়া, গ্রহণ করা",example:"They adopted a child.",categoryId:1},
        {id:84,verb:"adore",forms:{base:"adore",presentParticiple:"adoring",past:"adored",pastParticiple:"adored",thirdPerson:"adores"},banglaMeaning:"ভালবাসা, পূজা করা",example:"She adores her grandmother.",categoryId:5},
        {id:85,verb:"advance",forms:{base:"advance",presentParticiple:"advancing",past:"advanced",pastParticiple:"advanced",thirdPerson:"advances"},banglaMeaning:"অগ্রসর হওয়া, উন্নতি করা",example:"The army advanced towards the city.",categoryId:3}
            ,
            // Next 50 main verbs starting with 'A'
            {id:86,verb:"advertise",forms:{base:"advertise",presentParticiple:"advertising",past:"advertised",pastParticiple:"advertised",thirdPerson:"advertises"},banglaMeaning:"বিজ্ঞাপন করা",example:"They advertised the new product on TV.",categoryId:2},
            {id:87,verb:"advise",forms:{base:"advise",presentParticiple:"advising",past:"advised",pastParticiple:"advised",thirdPerson:"advises"},banglaMeaning:"পরামর্শ দেওয়া",example:"The doctor advised him to rest.",categoryId:2},
            {id:88,verb:"advocate",forms:{base:"advocate",presentParticiple:"advocating",past:"advocated",pastParticiple:"advocated",thirdPerson:"advocates"},banglaMeaning:"সমর্থন করা",example:"She advocates for animal rights.",categoryId:5},
            {id:89,verb:"affect",forms:{base:"affect",presentParticiple:"affecting",past:"affected",pastParticiple:"affected",thirdPerson:"affects"},banglaMeaning:"প্রভাবিত করা",example:"The weather affects my mood.",categoryId:5},
            {id:90,verb:"affirm",forms:{base:"affirm",presentParticiple:"affirming",past:"affirmed",pastParticiple:"affirmed",thirdPerson:"affirms"},banglaMeaning:"নিশ্চিত করা",example:"He affirmed his innocence.",categoryId:4},
            {id:91,verb:"affix",forms:{base:"affix",presentParticiple:"affixing",past:"affixed",pastParticiple:"affixed",thirdPerson:"affixes"},banglaMeaning:"সংযুক্ত করা",example:"Please affix a stamp to the envelope.",categoryId:6},
            {id:92,verb:"aggravate",forms:{base:"aggravate",presentParticiple:"aggravating",past:"aggravated",pastParticiple:"aggravated",thirdPerson:"aggravates"},banglaMeaning:"খারাপ করা, বাড়ানো",example:"Loud noises aggravate my headache.",categoryId:8},
            {id:93,verb:"aggregate",forms:{base:"aggregate",presentParticiple:"aggregating",past:"aggregated",pastParticiple:"aggregated",thirdPerson:"aggregates"},banglaMeaning:"সমষ্টি করা, একত্রিত করা",example:"The data was aggregated for analysis.",categoryId:6},
            {id:94,verb:"agitate",forms:{base:"agitate",presentParticiple:"agitating",past:"agitated",pastParticiple:"agitated",thirdPerson:"agitates"},banglaMeaning:"উত্তেজিত করা, আন্দোলিত করা",example:"The speaker agitated the crowd.",categoryId:5},
            {id:95,verb:"agree",forms:{base:"agree",presentParticiple:"agreeing",past:"agreed",pastParticiple:"agreed",thirdPerson:"agrees"},banglaMeaning:"সম্মত হওয়া",example:"They agreed to the terms.",categoryId:4},
            {id:96,verb:"aid",forms:{base:"aid",presentParticiple:"aiding",past:"aided",pastParticiple:"aided",thirdPerson:"aids"},banglaMeaning:"সহায়তা করা",example:"He aided the injured man.",categoryId:1},
            {id:97,verb:"aim",forms:{base:"aim",presentParticiple:"aiming",past:"aimed",pastParticiple:"aimed",thirdPerson:"aims"},banglaMeaning:"লক্ষ্য করা",example:"She aimed at the target.",categoryId:1},
            {id:98,verb:"alarm",forms:{base:"alarm",presentParticiple:"alarming",past:"alarmed",pastParticiple:"alarmed",thirdPerson:"alarms"},banglaMeaning:"ভীত করা, আতঙ্কিত করা",example:"The news alarmed everyone.",categoryId:5},
            {id:99,verb:"alert",forms:{base:"alert",presentParticiple:"alerting",past:"alerted",pastParticiple:"alerted",thirdPerson:"alerts"},banglaMeaning:"সতর্ক করা",example:"The guard alerted the police.",categoryId:2},
            {id:100,verb:"alienate",forms:{base:"alienate",presentParticiple:"alienating",past:"alienated",pastParticiple:"alienated",thirdPerson:"alienates"},banglaMeaning:"বিচ্ছিন্ন করা",example:"His rude behavior alienated his friends.",categoryId:8},
            {id:101,verb:"align",forms:{base:"align",presentParticiple:"aligning",past:"aligned",pastParticiple:"aligned",thirdPerson:"aligns"},banglaMeaning:"সারিবদ্ধ করা",example:"Please align the text to the left.",categoryId:6},
            {id:102,verb:"allege",forms:{base:"allege",presentParticiple:"alleging",past:"alleged",pastParticiple:"alleged",thirdPerson:"alleges"},banglaMeaning:"অভিযোগ করা",example:"He alleged that the company cheated him.",categoryId:4},
            {id:103,verb:"alleviate",forms:{base:"alleviate",presentParticiple:"alleviating",past:"alleviated",pastParticiple:"alleviated",thirdPerson:"alleviates"},banglaMeaning:"উপশম করা",example:"Medicine alleviated his pain.",categoryId:8},
            {id:104,verb:"allocate",forms:{base:"allocate",presentParticiple:"allocating",past:"allocated",pastParticiple:"allocated",thirdPerson:"allocates"},banglaMeaning:"বণ্টন করা",example:"Funds were allocated for the project.",categoryId:9},
            {id:105,verb:"allow",forms:{base:"allow",presentParticiple:"allowing",past:"allowed",pastParticiple:"allowed",thirdPerson:"allows"},banglaMeaning:"অনুমতি দেওয়া",example:"They allowed us to enter.",categoryId:1},
            {id:106,verb:"allude",forms:{base:"allude",presentParticiple:"alluding",past:"alluded",pastParticiple:"alluded",thirdPerson:"alludes"},banglaMeaning:"ইঙ্গিত করা",example:"He alluded to his past.",categoryId:4},
            {id:107,verb:"allure",forms:{base:"allure",presentParticiple:"alluring",past:"allured",pastParticiple:"allured",thirdPerson:"allures"},banglaMeaning:"আকর্ষণ করা",example:"The city allures many tourists.",categoryId:11},
            {id:108,verb:"ally",forms:{base:"ally",presentParticiple:"allying",past:"allied",pastParticiple:"allied",thirdPerson:"allies"},banglaMeaning:"মিত্রতা করা",example:"The countries allied for peace.",categoryId:2},
            {id:109,verb:"alter",forms:{base:"alter",presentParticiple:"altering",past:"altered",pastParticiple:"altered",thirdPerson:"alters"},banglaMeaning:"পরিবর্তন করা",example:"He altered his plans.",categoryId:8},
            {id:110,verb:"amaze",forms:{base:"amaze",presentParticiple:"amazing",past:"amazed",pastParticiple:"amazed",thirdPerson:"amazes"},banglaMeaning:"বিস্মিত করা",example:"The magician amazed the children.",categoryId:5},
            {id:111,verb:"ambush",forms:{base:"ambush",presentParticiple:"ambushing",past:"ambushed",pastParticiple:"ambushed",thirdPerson:"ambushes"},banglaMeaning:"হঠাৎ আক্রমণ করা",example:"The soldiers ambushed the enemy.",categoryId:1},
            {id:112,verb:"amend",forms:{base:"amend",presentParticiple:"amending",past:"amended",pastParticiple:"amended",thirdPerson:"amends"},banglaMeaning:"সংশোধন করা",example:"They amended the law.",categoryId:8},
            {id:113,verb:"amplify",forms:{base:"amplify",presentParticiple:"amplifying",past:"amplified",pastParticiple:"amplified",thirdPerson:"amplifies"},banglaMeaning:"বাড়ানো, বিস্তার করা",example:"The speaker amplified the sound.",categoryId:6},
            {id:114,verb:"amuse",forms:{base:"amuse",presentParticiple:"amusing",past:"amused",pastParticiple:"amused",thirdPerson:"amuses"},banglaMeaning:"বিনোদন দেওয়া",example:"The clown amused the kids.",categoryId:5},
            {id:115,verb:"analyze",forms:{base:"analyze",presentParticiple:"analyzing",past:"analyzed",pastParticiple:"analyzed",thirdPerson:"analyzes"},banglaMeaning:"বিশ্লেষণ করা",example:"Scientists analyze the results.",categoryId:4},
            {id:116,verb:"anchor",forms:{base:"anchor",presentParticiple:"anchoring",past:"anchored",pastParticiple:"anchored",thirdPerson:"anchors"},banglaMeaning:"নোঙর করা",example:"The ship anchored at the port.",categoryId:3},
            {id:117,verb:"anger",forms:{base:"anger",presentParticiple:"angering",past:"angered",pastParticiple:"angered",thirdPerson:"angers"},banglaMeaning:"রাগানো",example:"His words angered her.",categoryId:5},
            {id:118,verb:"angle",forms:{base:"angle",presentParticiple:"angling",past:"angled",pastParticiple:"angled",thirdPerson:"angles"},banglaMeaning:"কোণ করা, মাছ ধরা",example:"He angled the mirror.",categoryId:6},
            {id:119,verb:"animate",forms:{base:"animate",presentParticiple:"animating",past:"animated",pastParticiple:"animated",thirdPerson:"animates"},banglaMeaning:"প্রাণবন্ত করা",example:"The cartoonist animated the story.",categoryId:6},
            {id:120,verb:"announce",forms:{base:"announce",presentParticiple:"announcing",past:"announced",pastParticiple:"announced",thirdPerson:"announces"},banglaMeaning:"ঘোষণা করা",example:"The results were announced yesterday.",categoryId:2},
            {id:121,verb:"annoy",forms:{base:"annoy",presentParticiple:"annoying",past:"annoyed",pastParticiple:"annoyed",thirdPerson:"annoys"},banglaMeaning:"বিরক্ত করা",example:"The noise annoyed me.",categoryId:5},
            {id:122,verb:"answer",forms:{base:"answer",presentParticiple:"answering",past:"answered",pastParticiple:"answered",thirdPerson:"answers"},banglaMeaning:"উত্তর দেওয়া",example:"She answered the question.",categoryId:2},
            {id:123,verb:"anticipate",forms:{base:"anticipate",presentParticiple:"anticipating",past:"anticipated",pastParticiple:"anticipated",thirdPerson:"anticipates"},banglaMeaning:"পূর্বানুমান করা",example:"We anticipate rain tomorrow.",categoryId:4},
            {id:124,verb:"apologize",forms:{base:"apologize",presentParticiple:"apologizing",past:"apologized",pastParticiple:"apologized",thirdPerson:"apologizes"},banglaMeaning:"ক্ষমা চাওয়া",example:"He apologized for his mistake.",categoryId:5},
            {id:125,verb:"appeal",forms:{base:"appeal",presentParticiple:"appealing",past:"appealed",pastParticiple:"appealed",thirdPerson:"appeals"},banglaMeaning:"আবেদন করা",example:"They appealed to the court.",categoryId:2},
            {id:126,verb:"appear",forms:{base:"appear",presentParticiple:"appearing",past:"appeared",pastParticiple:"appeared",thirdPerson:"appears"},banglaMeaning:"প্রকাশ হওয়া, দেখা দেওয়া",example:"He appeared on TV.",categoryId:7},
            {id:127,verb:"applaud",forms:{base:"applaud",presentParticiple:"applauding",past:"applauded",pastParticiple:"applauded",thirdPerson:"applauds"},banglaMeaning:"তালি দেওয়া",example:"The audience applauded loudly.",categoryId:5},
            {id:128,verb:"apply",forms:{base:"apply",presentParticiple:"applying",past:"applied",pastParticiple:"applied",thirdPerson:"applies"},banglaMeaning:"আবেদন করা, প্রয়োগ করা",example:"She applied for the job.",categoryId:2},
            {id:129,verb:"appoint",forms:{base:"appoint",presentParticiple:"appointing",past:"appointed",pastParticiple:"appointed",thirdPerson:"appoints"},banglaMeaning:"নিয়োগ করা",example:"He was appointed manager.",categoryId:1},
            {id:130,verb:"appraise",forms:{base:"appraise",presentParticiple:"appraising",past:"appraised",pastParticiple:"appraised",thirdPerson:"appraises"},banglaMeaning:"মূল্যায়ন করা",example:"The house was appraised at a high value.",categoryId:4},
            {id:131,verb:"appreciate",forms:{base:"appreciate",presentParticiple:"appreciating",past:"appreciated",pastParticiple:"appreciated",thirdPerson:"appreciates"},banglaMeaning:"মূল্যায়ন করা, প্রশংসা করা",example:"I appreciate your help.",categoryId:5},
            {id:132,verb:"approach",forms:{base:"approach",presentParticiple:"approaching",past:"approached",pastParticiple:"approached",thirdPerson:"approaches"},banglaMeaning:"নিকটবর্তী হওয়া",example:"The train is approaching.",categoryId:3},
            {id:133,verb:"approve",forms:{base:"approve",presentParticiple:"approving",past:"approved",pastParticiple:"approved",thirdPerson:"approves"},banglaMeaning:"অনুমোদন করা",example:"The plan was approved.",categoryId:1},
            {id:134,verb:"argue",forms:{base:"argue",presentParticiple:"arguing",past:"argued",pastParticiple:"argued",thirdPerson:"argues"},banglaMeaning:"তর্ক করা",example:"They argued about politics.",categoryId:4},
            {id:135,verb:"arise",forms:{base:"arise",presentParticiple:"arising",past:"arose",pastParticiple:"arisen",thirdPerson:"arises"},banglaMeaning:"উত্থান হওয়া",example:"Problems may arise.",categoryId:8},
            {id:136,verb:"arrange",forms:{base:"arrange",presentParticiple:"arranging",past:"arranged",pastParticiple:"arranged",thirdPerson:"arranges"},banglaMeaning:"ব্যবস্থা করা",example:"She arranged the meeting.",categoryId:1},
            {id:137,verb:"arrest",forms:{base:"arrest",presentParticiple:"arresting",past:"arrested",pastParticiple:"arrested",thirdPerson:"arrests"},banglaMeaning:"গ্রেপ্তার করা",example:"The police arrested the thief.",categoryId:1},
            {id:138,verb:"arrive",forms:{base:"arrive",presentParticiple:"arriving",past:"arrived",pastParticiple:"arrived",thirdPerson:"arrives"},banglaMeaning:"পৌঁছানো",example:"They arrived late.",categoryId:3},
            {id:139,verb:"ascend",forms:{base:"ascend",presentParticiple:"ascending",past:"ascended",pastParticiple:"ascended",thirdPerson:"ascends"},banglaMeaning:"উর্ধ্বগমন করা",example:"The balloon ascended quickly.",categoryId:3},
            {id:140,verb:"ask",forms:{base:"ask",presentParticiple:"asking",past:"asked",pastParticiple:"asked",thirdPerson:"asks"},banglaMeaning:"জিজ্ঞাসা করা",example:"He asked a question.",categoryId:2},
            {id:141,verb:"aspire",forms:{base:"aspire",presentParticiple:"aspiring",past:"aspired",pastParticiple:"aspired",thirdPerson:"aspires"},banglaMeaning:"আকাঙ্ক্ষা করা",example:"She aspires to be a doctor.",categoryId:4},
            {id:142,verb:"assault",forms:{base:"assault",presentParticiple:"assaulting",past:"assaulted",pastParticiple:"assaulted",thirdPerson:"assaults"},banglaMeaning:"আক্রমণ করা",example:"He was assaulted in the street.",categoryId:1},
            {id:143,verb:"assemble",forms:{base:"assemble",presentParticiple:"assembling",past:"assembled",pastParticiple:"assembled",thirdPerson:"assembles"},banglaMeaning:"একত্রিত করা",example:"The workers assembled the parts.",categoryId:6},
            {id:144,verb:"assert",forms:{base:"assert",presentParticiple:"asserting",past:"asserted",pastParticiple:"asserted",thirdPerson:"asserts"},banglaMeaning:"জোর দিয়ে বলা",example:"He asserted his innocence.",categoryId:4},
            {id:145,verb:"assess",forms:{base:"assess",presentParticiple:"assessing",past:"assessed",pastParticiple:"assessed",thirdPerson:"assesses"},banglaMeaning:"মূল্যায়ন করা",example:"The teacher assessed the students' work.",categoryId:4},
            {id:146,verb:"assign",forms:{base:"assign",presentParticiple:"assigning",past:"assigned",pastParticiple:"assigned",thirdPerson:"assigns"},banglaMeaning:"নিয়োগ করা, বরাদ্দ করা",example:"The manager assigned tasks to the team.",categoryId:1},
            {id:147,verb:"assist",forms:{base:"assist",presentParticiple:"assisting",past:"assisted",pastParticiple:"assisted",thirdPerson:"assists"},banglaMeaning:"সহায়তা করা",example:"He assisted the old lady.",categoryId:1},
            {id:148,verb:"associate",forms:{base:"associate",presentParticiple:"associating",past:"associated",pastParticiple:"associated",thirdPerson:"associates"},banglaMeaning:"সম্পর্কিত করা",example:"People often associate summer with holidays.",categoryId:4},
            {id:149,verb:"assume",forms:{base:"assume",presentParticiple:"assuming",past:"assumed",pastParticiple:"assumed",thirdPerson:"assumes"},banglaMeaning:"অনুমান করা",example:"I assume he is coming.",categoryId:4},
            {id:150,verb:"assure",forms:{base:"assure",presentParticiple:"assuring",past:"assured",pastParticiple:"assured",thirdPerson:"assures"},banglaMeaning:"নিশ্চিত করা",example:"He assured me of his support.",categoryId:4}
                ,
                // Next 50 main verbs starting with 'A'
                {id:151,verb:"astonish",forms:{base:"astonish",presentParticiple:"astonishing",past:"astonished",pastParticiple:"astonished",thirdPerson:"astonishes"},banglaMeaning:"বিস্মিত করা",example:"The news astonished everyone.",categoryId:5},
                {id:152,verb:"astound",forms:{base:"astound",presentParticiple:"astounding",past:"astounded",pastParticiple:"astounded",thirdPerson:"astounds"},banglaMeaning:"বিস্মিত করা",example:"Her performance astounded the judges.",categoryId:5},
                {id:153,verb:"attach",forms:{base:"attach",presentParticiple:"attaching",past:"attached",pastParticiple:"attached",thirdPerson:"attaches"},banglaMeaning:"সংযুক্ত করা",example:"Please attach the file to the email.",categoryId:6},
                {id:154,verb:"attack",forms:{base:"attack",presentParticiple:"attacking",past:"attacked",pastParticiple:"attacked",thirdPerson:"attacks"},banglaMeaning:"আক্রমণ করা",example:"The army attacked at dawn.",categoryId:1},
                {id:155,verb:"attain",forms:{base:"attain",presentParticiple:"attaining",past:"attained",pastParticiple:"attained",thirdPerson:"attains"},banglaMeaning:"অর্জন করা",example:"He attained his goal.",categoryId:8},
                {id:156,verb:"attempt",forms:{base:"attempt",presentParticiple:"attempting",past:"attempted",pastParticiple:"attempted",thirdPerson:"attempts"},banglaMeaning:"চেষ্টা করা",example:"She attempted to climb the mountain.",categoryId:8},
                {id:157,verb:"attend",forms:{base:"attend",presentParticiple:"attending",past:"attended",pastParticiple:"attended",thirdPerson:"attends"},banglaMeaning:"উপস্থিত থাকা",example:"He attended the meeting.",categoryId:2},
                {id:158,verb:"attract",forms:{base:"attract",presentParticiple:"attracting",past:"attracted",pastParticiple:"attracted",thirdPerson:"attracts"},banglaMeaning:"আকর্ষণ করা",example:"The flowers attract bees.",categoryId:11},
                {id:159,verb:"attribute",forms:{base:"attribute",presentParticiple:"attributing",past:"attributed",pastParticiple:"attributed",thirdPerson:"attributes"},banglaMeaning:"অর্পণ করা",example:"He attributed his success to hard work.",categoryId:4},
                {id:160,verb:"auction",forms:{base:"auction",presentParticiple:"auctioning",past:"auctioned",pastParticiple:"auctioned",thirdPerson:"auctions"},banglaMeaning:"নিলাম করা",example:"They auctioned the painting.",categoryId:9},
                {id:161,verb:"augment",forms:{base:"augment",presentParticiple:"augmenting",past:"augmented",pastParticiple:"augmented",thirdPerson:"augments"},banglaMeaning:"বৃদ্ধি করা",example:"He augmented his income by freelancing.",categoryId:8},
                {id:162,verb:"authenticate",forms:{base:"authenticate",presentParticiple:"authenticating",past:"authenticated",pastParticiple:"authenticated",thirdPerson:"authenticates"},banglaMeaning:"প্রমাণ করা",example:"The signature was authenticated.",categoryId:4},
                {id:163,verb:"author",forms:{base:"author",presentParticiple:"authoring",past:"authored",pastParticiple:"authored",thirdPerson:"authors"},banglaMeaning:"লেখক হওয়া",example:"She authored three books.",categoryId:6},
                {id:164,verb:"authorize",forms:{base:"authorize",presentParticiple:"authorizing",past:"authorized",pastParticiple:"authorized",thirdPerson:"authorizes"},banglaMeaning:"অনুমোদন করা",example:"The manager authorized the payment.",categoryId:1},
                {id:165,verb:"automate",forms:{base:"automate",presentParticiple:"automating",past:"automated",pastParticiple:"automated",thirdPerson:"automates"},banglaMeaning:"স্বয়ংক্রিয় করা",example:"They automated the process.",categoryId:8},
                {id:166,verb:"avail",forms:{base:"avail",presentParticiple:"availing",past:"availed",pastParticiple:"availed",thirdPerson:"avails"},banglaMeaning:"সুবিধা নেওয়া",example:"He availed himself of the opportunity.",categoryId:8},
                {id:167,verb:"avenge",forms:{base:"avenge",presentParticiple:"avenging",past:"avenged",pastParticiple:"avenged",thirdPerson:"avenges"},banglaMeaning:"প্রতিশোধ নেওয়া",example:"He avenged his brother's death.",categoryId:5},
                {id:168,verb:"average",forms:{base:"average",presentParticiple:"averaging",past:"averaged",pastParticiple:"averaged",thirdPerson:"averages"},banglaMeaning:"গড় করা",example:"The company averaged 10 sales per day.",categoryId:6},
                {id:169,verb:"avert",forms:{base:"avert",presentParticiple:"averting",past:"averted",pastParticiple:"averted",thirdPerson:"averts"},banglaMeaning:"এড়ানো",example:"He averted an accident.",categoryId:8},
                {id:170,verb:"avoid",forms:{base:"avoid",presentParticiple:"avoiding",past:"avoided",pastParticiple:"avoided",thirdPerson:"avoids"},banglaMeaning:"এড়ানো",example:"She avoids junk food.",categoryId:8},
                {id:171,verb:"await",forms:{base:"await",presentParticiple:"awaiting",past:"awaited",pastParticiple:"awaited",thirdPerson:"awaits"},banglaMeaning:"অপেক্ষা করা",example:"We await your reply.",categoryId:2},
                {id:172,verb:"awake",forms:{base:"awake",presentParticiple:"awaking",past:"awoke",pastParticiple:"awoken",thirdPerson:"awakes"},banglaMeaning:"জাগ্রত হওয়া",example:"He awoke early in the morning.",categoryId:3},
                {id:173,verb:"award",forms:{base:"award",presentParticiple:"awarding",past:"awarded",pastParticiple:"awarded",thirdPerson:"awards"},banglaMeaning:"পুরস্কার দেওয়া",example:"She was awarded a medal.",categoryId:5},
                {id:174,verb:"awe",forms:{base:"awe",presentParticiple:"awing",past:"awed",pastParticiple:"awed",thirdPerson:"awes"},banglaMeaning:"বিস্ময় করা",example:"The view awed the tourists.",categoryId:5},
                {id:175,verb:"ax",forms:{base:"ax",presentParticiple:"axing",past:"axed",pastParticiple:"axed",thirdPerson:"axes"},banglaMeaning:"কুড়াল মারা",example:"He axed the old tree.",categoryId:1},
                {id:176,verb:"babble",forms:{base:"babble",presentParticiple:"babbling",past:"babbled",pastParticiple:"babbled",thirdPerson:"babbles"},banglaMeaning:"বকবক করা",example:"The baby babbled happily.",categoryId:2},
                {id:177,verb:"back",forms:{base:"back",presentParticiple:"backing",past:"backed",pastParticiple:"backed",thirdPerson:"backs"},banglaMeaning:"সমর্থন করা",example:"He backed his friend's decision.",categoryId:5},
                {id:178,verb:"bake",forms:{base:"bake",presentParticiple:"baking",past:"baked",pastParticiple:"baked",thirdPerson:"bakes"},banglaMeaning:"বেক করা",example:"She baked a cake.",categoryId:10},
                {id:179,verb:"balance",forms:{base:"balance",presentParticiple:"balancing",past:"balanced",pastParticiple:"balanced",thirdPerson:"balances"},banglaMeaning:"ভারসাম্য রাখা",example:"He balanced the books.",categoryId:8},
                {id:180,verb:"ban",forms:{base:"ban",presentParticiple:"banning",past:"banned",pastParticiple:"banned",thirdPerson:"bans"},banglaMeaning:"নিষিদ্ধ করা",example:"The government banned smoking in public places.",categoryId:8},
                {id:181,verb:"bang",forms:{base:"bang",presentParticiple:"banging",past:"banged",pastParticiple:"banged",thirdPerson:"bangs"},banglaMeaning:"জোরে শব্দ করা",example:"He banged on the door.",categoryId:5},
                {id:182,verb:"bargain",forms:{base:"bargain",presentParticiple:"bargaining",past:"bargained",pastParticiple:"bargained",thirdPerson:"bargains"},banglaMeaning:"দামাদামি করা",example:"She bargained for a lower price.",categoryId:6},
                {id:183,verb:"bark",forms:{base:"bark",presentParticiple:"barking",past:"barked",pastParticiple:"barked",thirdPerson:"barks"},banglaMeaning:"ঘেউ ঘেউ করা",example:"The dog barked all night.",categoryId:2},
                {id:184,verb:"barricade",forms:{base:"barricade",presentParticiple:"barricading",past:"barricaded",pastParticiple:"barricaded",thirdPerson:"barricades"},banglaMeaning:"ব্যারিকেড করা",example:"They barricaded the street.",categoryId:8},
                {id:185,verb:"base",forms:{base:"base",presentParticiple:"basing",past:"based",pastParticiple:"based",thirdPerson:"bases"},banglaMeaning:"ভিত্তি করা",example:"His theory is based on facts.",categoryId:4}
                    ,
                    // Next 50 main verbs starting with 'B'
                    {id:186,verb:"bathe",forms:{base:"bathe",presentParticiple:"bathing",past:"bathed",pastParticiple:"bathed",thirdPerson:"bathes"},banglaMeaning:"স্নান করা",example:"He bathed in the river.",categoryId:10},
                    {id:187,verb:"batter",forms:{base:"batter",presentParticiple:"battering",past:"battered",pastParticiple:"battered",thirdPerson:"batters"},banglaMeaning:"আঘাত করা",example:"The storm battered the coast.",categoryId:8},
                    {id:188,verb:"battle",forms:{base:"battle",presentParticiple:"battling",past:"battled",pastParticiple:"battled",thirdPerson:"battles"},banglaMeaning:"যুদ্ধ করা",example:"The soldiers battled bravely.",categoryId:1},
                    {id:189,verb:"be",forms:{base:"be",presentParticiple:"being",past:"was/were",pastParticiple:"been",thirdPerson:"is/are"},banglaMeaning:"হওয়া",example:"He wants to be a doctor.",categoryId:12},
                    {id:190,verb:"bear",forms:{base:"bear",presentParticiple:"bearing",past:"bore",pastParticiple:"borne",thirdPerson:"bears"},banglaMeaning:"সহ্য করা, বহন করা",example:"She cannot bear the pain.",categoryId:8},
                    {id:191,verb:"beat",forms:{base:"beat",presentParticiple:"beating",past:"beat",pastParticiple:"beaten",thirdPerson:"beats"},banglaMeaning:"প্রহার করা",example:"He beat the drum.",categoryId:1},
                    {id:192,verb:"beautify",forms:{base:"beautify",presentParticiple:"beautifying",past:"beautified",pastParticiple:"beautified",thirdPerson:"beautifies"},banglaMeaning:"সুন্দর করা",example:"They beautified the park.",categoryId:8},
                    {id:193,verb:"become",forms:{base:"become",presentParticiple:"becoming",past:"became",pastParticiple:"become",thirdPerson:"becomes"},banglaMeaning:"হওয়া",example:"He became a teacher.",categoryId:8},
                    {id:194,verb:"beg",forms:{base:"beg",presentParticiple:"begging",past:"begged",pastParticiple:"begged",thirdPerson:"begs"},banglaMeaning:"ভিক্ষা করা",example:"He begged for help.",categoryId:2},
                    {id:195,verb:"begin",forms:{base:"begin",presentParticiple:"beginning",past:"began",pastParticiple:"begun",thirdPerson:"begins"},banglaMeaning:"শুরু করা",example:"They began the project.",categoryId:8},
                    {id:196,verb:"behave",forms:{base:"behave",presentParticiple:"behaving",past:"behaved",pastParticiple:"behaved",thirdPerson:"behaves"},banglaMeaning:"আচরণ করা",example:"He behaved well in class.",categoryId:5},
                    {id:197,verb:"believe",forms:{base:"believe",presentParticiple:"believing",past:"believed",pastParticiple:"believed",thirdPerson:"believes"},banglaMeaning:"বিশ্বাস করা",example:"I believe you.",categoryId:4},
                    {id:198,verb:"belong",forms:{base:"belong",presentParticiple:"belonging",past:"belonged",pastParticiple:"belonged",thirdPerson:"belongs"},banglaMeaning:"অন্তর্ভুক্ত হওয়া",example:"This book belongs to me.",categoryId:9},
                    {id:199,verb:"bend",forms:{base:"bend",presentParticiple:"bending",past:"bent",pastParticiple:"bent",thirdPerson:"bends"},banglaMeaning:"বাঁকানো",example:"He bent the wire.",categoryId:8},
                    {id:200,verb:"benefit",forms:{base:"benefit",presentParticiple:"benefiting",past:"benefited",pastParticiple:"benefited",thirdPerson:"benefits"},banglaMeaning:"উপকার করা",example:"Exercise benefits health.",categoryId:8},
                    {id:201,verb:"bet",forms:{base:"bet",presentParticiple:"betting",past:"bet",pastParticiple:"bet",thirdPerson:"bets"},banglaMeaning:"শর্ত রাখা",example:"He bet on the game.",categoryId:4},
                    {id:202,verb:"betray",forms:{base:"betray",presentParticiple:"betraying",past:"betrayed",pastParticiple:"betrayed",thirdPerson:"betrays"},banglaMeaning:"বিশ্বাসঘাতকতা করা",example:"He betrayed his friend.",categoryId:5},
                    {id:203,verb:"beware",forms:{base:"beware",presentParticiple:"bewaring",past:"bewared",pastParticiple:"bewared",thirdPerson:"bewares"},banglaMeaning:"সতর্ক থাকা",example:"Beware of the dog.",categoryId:2},
                    {id:204,verb:"bid",forms:{base:"bid",presentParticiple:"bidding",past:"bid",pastParticiple:"bid",thirdPerson:"bids"},banglaMeaning:"বিড করা, আদেশ করা",example:"He bid farewell to his friends.",categoryId:2},
                    {id:205,verb:"bind",forms:{base:"bind",presentParticiple:"binding",past:"bound",pastParticiple:"bound",thirdPerson:"binds"},banglaMeaning:"বাঁধা",example:"He bound the books together.",categoryId:6},
                    {id:206,verb:"bite",forms:{base:"bite",presentParticiple:"biting",past:"bit",pastParticiple:"bitten",thirdPerson:"bites"},banglaMeaning:"কামড়ানো",example:"The dog bit the man.",categoryId:2},
                    {id:207,verb:"blame",forms:{base:"blame",presentParticiple:"blaming",past:"blamed",pastParticiple:"blamed",thirdPerson:"blames"},banglaMeaning:"দোষারোপ করা",example:"He blamed me for the mistake.",categoryId:5},
                    {id:208,verb:"blast",forms:{base:"blast",presentParticiple:"blasting",past:"blasted",pastParticiple:"blasted",thirdPerson:"blasts"},banglaMeaning:"বিস্ফোরণ করা",example:"They blasted the rock with dynamite.",categoryId:8},
                    {id:209,verb:"bleed",forms:{base:"bleed",presentParticiple:"bleeding",past:"bled",pastParticiple:"bled",thirdPerson:"bleeds"},banglaMeaning:"রক্তপাত হওয়া",example:"He bled after the accident.",categoryId:10},
                    {id:210,verb:"blend",forms:{base:"blend",presentParticiple:"blending",past:"blended",pastParticiple:"blended",thirdPerson:"blends"},banglaMeaning:"মিশ্রিত করা",example:"Blend the fruits to make juice.",categoryId:10},
                    {id:211,verb:"bless",forms:{base:"bless",presentParticiple:"blessing",past:"blessed",pastParticiple:"blessed",thirdPerson:"blesses"},banglaMeaning:"আশীর্বাদ করা",example:"The priest blessed the child.",categoryId:5},
                    {id:212,verb:"blind",forms:{base:"blind",presentParticiple:"blinding",past:"blinded",pastParticiple:"blinded",thirdPerson:"blinds"},banglaMeaning:"অন্ধ করা",example:"The light blinded him.",categoryId:8},
                    {id:213,verb:"blink",forms:{base:"blink",presentParticiple:"blinking",past:"blinked",pastParticiple:"blinked",thirdPerson:"blinks"},banglaMeaning:"চোখ টেপা",example:"He blinked in surprise.",categoryId:5},
                    {id:214,verb:"block",forms:{base:"block",presentParticiple:"blocking",past:"blocked",pastParticiple:"blocked",thirdPerson:"blocks"},banglaMeaning:"অবরুদ্ধ করা",example:"The road was blocked by a tree.",categoryId:8},
                    {id:215,verb:"bloom",forms:{base:"bloom",presentParticiple:"blooming",past:"bloomed",pastParticiple:"bloomed",thirdPerson:"blooms"},banglaMeaning:"ফুল ফোটা",example:"The flowers bloom in spring.",categoryId:11},
                    {id:216,verb:"blow",forms:{base:"blow",presentParticiple:"blowing",past:"blew",pastParticiple:"blown",thirdPerson:"blows"},banglaMeaning:"ফুঁ দেওয়া",example:"The wind blew all night.",categoryId:3},
                    {id:217,verb:"blush",forms:{base:"blush",presentParticiple:"blushing",past:"blushed",pastParticiple:"blushed",thirdPerson:"blushes"},banglaMeaning:"লজ্জা পাওয়া",example:"She blushed at the compliment.",categoryId:5},
                    {id:218,verb:"boast",forms:{base:"boast",presentParticiple:"boasting",past:"boasted",pastParticiple:"boasted",thirdPerson:"boasts"},banglaMeaning:"গর্ব করা",example:"He boasted about his achievements.",categoryId:5},
                    {id:219,verb:"boil",forms:{base:"boil",presentParticiple:"boiling",past:"boiled",pastParticiple:"boiled",thirdPerson:"boils"},banglaMeaning:"ফুটানো",example:"Boil the water before drinking.",categoryId:10},
                    {id:220,verb:"bolster",forms:{base:"bolster",presentParticiple:"bolstering",past:"bolstered",pastParticiple:"bolstered",thirdPerson:"bolsters"},banglaMeaning:"শক্তিশালী করা",example:"The news bolstered his confidence.",categoryId:8},
                    {id:221,verb:"bomb",forms:{base:"bomb",presentParticiple:"bombing",past:"bombed",pastParticiple:"bombed",thirdPerson:"bombs"},banglaMeaning:"বোমা মারা",example:"They bombed the enemy base.",categoryId:1},
                    {id:222,verb:"bond",forms:{base:"bond",presentParticiple:"bonding",past:"bonded",pastParticiple:"bonded",thirdPerson:"bonds"},banglaMeaning:"বন্ধন তৈরি করা",example:"They bonded over music.",categoryId:5},
                    {id:223,verb:"book",forms:{base:"book",presentParticiple:"booking",past:"booked",pastParticiple:"booked",thirdPerson:"books"},banglaMeaning:"বুকিং করা",example:"I booked a ticket online.",categoryId:6},
                    {id:224,verb:"boost",forms:{base:"boost",presentParticiple:"boosting",past:"boosted",pastParticiple:"boosted",thirdPerson:"boosts"},banglaMeaning:"বৃদ্ধি করা",example:"The ad boosted sales.",categoryId:8},
                    {id:225,verb:"bore",forms:{base:"bore",presentParticiple:"boring",past:"bored",pastParticiple:"bored",thirdPerson:"bores"},banglaMeaning:"বিরক্ত করা",example:"The lecture bored the students.",categoryId:5},
                    {id:226,verb:"borrow",forms:{base:"borrow",presentParticiple:"borrowing",past:"borrowed",pastParticiple:"borrowed",thirdPerson:"borrows"},banglaMeaning:"ধার নেওয়া",example:"He borrowed a book from the library.",categoryId:9},
                    {id:227,verb:"bounce",forms:{base:"bounce",presentParticiple:"bouncing",past:"bounced",pastParticiple:"bounced",thirdPerson:"bounces"},banglaMeaning:"লাফানো",example:"The ball bounced high.",categoryId:3},
                    {id:228,verb:"bow",forms:{base:"bow",presentParticiple:"bowing",past:"bowed",pastParticiple:"bowed",thirdPerson:"bows"},banglaMeaning:"নম করা",example:"He bowed before the king.",categoryId:2},
                    {id:229,verb:"box",forms:{base:"box",presentParticiple:"boxing",past:"boxed",pastParticiple:"boxed",thirdPerson:"boxes"},banglaMeaning:"মুষ্টিযুদ্ধ করা",example:"He boxed in the championship.",categoryId:1},
                    {id:230,verb:"brag",forms:{base:"brag",presentParticiple:"bragging",past:"bragged",pastParticiple:"bragged",thirdPerson:"brags"},banglaMeaning:"গর্ব করা",example:"He bragged about his wealth.",categoryId:5},
                    {id:231,verb:"braid",forms:{base:"braid",presentParticiple:"braiding",past:"braided",pastParticiple:"braided",thirdPerson:"braids"},banglaMeaning:"বেণী করা",example:"She braided her hair.",categoryId:6},
                    {id:232,verb:"brake",forms:{base:"brake",presentParticiple:"braking",past:"braked",pastParticiple:"braked",thirdPerson:"brakes"},banglaMeaning:"ব্রেক করা",example:"He braked suddenly.",categoryId:3},
                    {id:233,verb:"branch",forms:{base:"branch",presentParticiple:"branching",past:"branched",pastParticiple:"branched",thirdPerson:"branches"},banglaMeaning:"শাখা বিস্তার করা",example:"The company branched into new markets.",categoryId:8},
                    {id:234,verb:"brand",forms:{base:"brand",presentParticiple:"branding",past:"branded",pastParticiple:"branded",thirdPerson:"brands"},banglaMeaning:"ব্র্যান্ড করা",example:"They branded the product.",categoryId:6},
                    {id:235,verb:"break",forms:{base:"break",presentParticiple:"breaking",past:"broke",pastParticiple:"broken",thirdPerson:"breaks"},banglaMeaning:"ভাঙা",example:"He broke the glass.",categoryId:8},
                    {id:236,verb:"breathe",forms:{base:"breathe",presentParticiple:"breathing",past:"breathed",pastParticiple:"breathed",thirdPerson:"breathes"},banglaMeaning:"শ্বাস নেওয়া",example:"She breathed deeply.",categoryId:3},
                    {id:237,verb:"breed",forms:{base:"breed",presentParticiple:"breeding",past:"bred",pastParticiple:"bred",thirdPerson:"breeds"},banglaMeaning:"প্রজনন করা",example:"They breed horses.",categoryId:8},
                    {id:238,verb:"bring",forms:{base:"bring",presentParticiple:"bringing",past:"brought",pastParticiple:"brought",thirdPerson:"brings"},banglaMeaning:"আনা",example:"Please bring your book.",categoryId:1},
                    {id:239,verb:"broadcast",forms:{base:"broadcast",presentParticiple:"broadcasting",past:"broadcast",pastParticiple:"broadcast",thirdPerson:"broadcasts"},banglaMeaning:"সম্প্রচার করা",example:"They broadcast the news live.",categoryId:2},
                    {id:240,verb:"broaden",forms:{base:"broaden",presentParticiple:"broadening",past:"broadened",pastParticiple:"broadened",thirdPerson:"broadens"},banglaMeaning:"প্রসারিত করা",example:"Travel broadens the mind.",categoryId:8},
                    {id:241,verb:"broil",forms:{base:"broil",presentParticiple:"broiling",past:"broiled",pastParticiple:"broiled",thirdPerson:"broils"},banglaMeaning:"গ্রিল করা",example:"She broiled the fish.",categoryId:10},
                    {id:242,verb:"bruise",forms:{base:"bruise",presentParticiple:"bruising",past:"bruised",pastParticiple:"bruised",thirdPerson:"bruises"},banglaMeaning:"আঘাত লাগা",example:"He bruised his arm.",categoryId:8},
                    {id:243,verb:"brush",forms:{base:"brush",presentParticiple:"brushing",past:"brushed",pastParticiple:"brushed",thirdPerson:"brushes"},banglaMeaning:"ব্রাশ করা",example:"She brushed her teeth.",categoryId:6},
                    {id:244,verb:"bubble",forms:{base:"bubble",presentParticiple:"bubbling",past:"bubbled",pastParticiple:"bubbled",thirdPerson:"bubbles"},banglaMeaning:"বুদবুদ করা",example:"The water bubbled in the pot.",categoryId:10},
                    {id:245,verb:"build",forms:{base:"build",presentParticiple:"building",past:"built",pastParticiple:"built",thirdPerson:"builds"},banglaMeaning:"নির্মাণ করা",example:"They built a new house.",categoryId:8},
                    {id:246,verb:"bully",forms:{base:"bully",presentParticiple:"bullying",past:"bullied",pastParticiple:"bullied",thirdPerson:"bullies"},banglaMeaning:"বully করা",example:"He bullied his classmates.",categoryId:5},
                    {id:247,verb:"burn",forms:{base:"burn",presentParticiple:"burning",past:"burned",pastParticiple:"burned",thirdPerson:"burns"},banglaMeaning:"পোড়ানো",example:"The fire burned all night.",categoryId:8},
                    {id:248,verb:"burst",forms:{base:"burst",presentParticiple:"bursting",past:"burst",pastParticiple:"burst",thirdPerson:"bursts"},banglaMeaning:"ফেটে যাওয়া",example:"The balloon burst suddenly.",categoryId:8},
                    {id:249,verb:"bury",forms:{base:"bury",presentParticiple:"burying",past:"buried",pastParticiple:"buried",thirdPerson:"buries"},banglaMeaning:"কবর দেওয়া",example:"They buried the treasure.",categoryId:8},
                    {id:250,verb:"buy",forms:{base:"buy",presentParticiple:"buying",past:"bought",pastParticiple:"bought",thirdPerson:"buys"},banglaMeaning:"কেনা",example:"She bought a new dress.",categoryId:8}
                        ,
                        // Next 50 main verbs starting with 'B'
                        {id:251,verb:"buzz",forms:{base:"buzz",presentParticiple:"buzzing",past:"buzzed",pastParticiple:"buzzed",thirdPerson:"buzzes"},banglaMeaning:"গুঞ্জন করা",example:"The bees buzzed around the flowers.",categoryId:2},
                        {id:252,verb:"babysit",forms:{base:"babysit",presentParticiple:"babysitting",past:"babysat",pastParticiple:"babysat",thirdPerson:"babysits"},banglaMeaning:"শিশু দেখাশোনা করা",example:"She babysits her neighbor's children.",categoryId:1},
                        {id:253,verb:"balance",forms:{base:"balance",presentParticiple:"balancing",past:"balanced",pastParticiple:"balanced",thirdPerson:"balances"},banglaMeaning:"ভারসাম্য রাখা",example:"He balanced the box on his head.",categoryId:8},
                        {id:254,verb:"balk",forms:{base:"balk",presentParticiple:"balking",past:"balked",pastParticiple:"balked",thirdPerson:"balks"},banglaMeaning:"বাধা দেওয়া",example:"He balked at the high price.",categoryId:8},
                        {id:255,verb:"ball",forms:{base:"ball",presentParticiple:"balling",past:"balled",pastParticiple:"balled",thirdPerson:"balls"},banglaMeaning:"গোল করা",example:"He balled the paper and threw it away.",categoryId:6},
                        {id:256,verb:"banish",forms:{base:"banish",presentParticiple:"banishing",past:"banished",pastParticiple:"banished",thirdPerson:"banishes"},banglaMeaning:"নির্বাসন করা",example:"The king banished the traitor.",categoryId:8},
                        {id:257,verb:"bark",forms:{base:"bark",presentParticiple:"barking",past:"barked",pastParticiple:"barked",thirdPerson:"barks"},banglaMeaning:"ঘেউ ঘেউ করা",example:"The dog barked loudly.",categoryId:2},
                        {id:258,verb:"barricade",forms:{base:"barricade",presentParticiple:"barricading",past:"barricaded",pastParticiple:"barricaded",thirdPerson:"barricades"},banglaMeaning:"ব্যারিকেড করা",example:"They barricaded the entrance.",categoryId:8},
                        {id:259,verb:"bask",forms:{base:"bask",presentParticiple:"basking",past:"basked",pastParticiple:"basked",thirdPerson:"basks"},banglaMeaning:"রোদ পোহানো",example:"The cat basked in the sun.",categoryId:8},
                        {id:260,verb:"bat",forms:{base:"bat",presentParticiple:"batting",past:"batted",pastParticiple:"batted",thirdPerson:"bats"},banglaMeaning:"ব্যাট করা",example:"He batted the ball.",categoryId:1},
                        {id:261,verb:"bawl",forms:{base:"bawl",presentParticiple:"bawling",past:"bawled",pastParticiple:"bawled",thirdPerson:"bawls"},banglaMeaning:"জোরে কান্না করা",example:"The baby bawled all night.",categoryId:5},
                        {id:262,verb:"beam",forms:{base:"beam",presentParticiple:"beaming",past:"beamed",pastParticiple:"beamed",thirdPerson:"beams"},banglaMeaning:"আলোকিত করা, হাসা",example:"She beamed with joy.",categoryId:5},
                        {id:263,verb:"beckon",forms:{base:"beckon",presentParticiple:"beckoning",past:"beckoned",pastParticiple:"beckoned",thirdPerson:"beckons"},banglaMeaning:"ইশারা করা",example:"He beckoned me to come closer.",categoryId:2},
                        {id:264,verb:"befriend",forms:{base:"befriend",presentParticiple:"befriending",past:"befriended",pastParticiple:"befriended",thirdPerson:"befriends"},banglaMeaning:"বন্ধু হওয়া",example:"She befriended her new classmate.",categoryId:5},
                        {id:265,verb:"befall",forms:{base:"befall",presentParticiple:"befalling",past:"befell",pastParticiple:"befallen",thirdPerson:"befalls"},banglaMeaning:"ঘটা",example:"A great misfortune befell him.",categoryId:8},
                        {id:266,verb:"befit",forms:{base:"befit",presentParticiple:"befitting",past:"befitted",pastParticiple:"befitted",thirdPerson:"befits"},banglaMeaning:"উপযুক্ত হওয়া",example:"The dress befits the occasion.",categoryId:11},
                        {id:267,verb:"befuddle",forms:{base:"befuddle",presentParticiple:"befuddling",past:"befuddled",pastParticiple:"befuddled",thirdPerson:"befuddles"},banglaMeaning:"বিভ্রান্ত করা",example:"The question befuddled the students.",categoryId:5},
                        {id:268,verb:"beg",forms:{base:"beg",presentParticiple:"begging",past:"begged",pastParticiple:"begged",thirdPerson:"begs"},banglaMeaning:"ভিক্ষা করা",example:"He begged for food.",categoryId:2},
                        {id:269,verb:"behead",forms:{base:"behead",presentParticiple:"beheading",past:"beheaded",pastParticiple:"beheaded",thirdPerson:"beheads"},banglaMeaning:"শিরচ্ছেদ করা",example:"The king beheaded the criminal.",categoryId:1},
                        {id:270,verb:"belch",forms:{base:"belch",presentParticiple:"belching",past:"belched",pastParticiple:"belched",thirdPerson:"belches"},banglaMeaning:"ডকার ধরা",example:"He belched after eating.",categoryId:10},
                        {id:271,verb:"belittle",forms:{base:"belittle",presentParticiple:"belittling",past:"belittled",pastParticiple:"belittled",thirdPerson:"belittles"},banglaMeaning:"তুচ্ছ করা",example:"Don't belittle his efforts.",categoryId:5},
                        {id:272,verb:"bellow",forms:{base:"bellow",presentParticiple:"bellowing",past:"bellowed",pastParticiple:"bellowed",thirdPerson:"bellows"},banglaMeaning:"গর্জন করা",example:"The lion bellowed loudly.",categoryId:2},
                        {id:273,verb:"belong",forms:{base:"belong",presentParticiple:"belonging",past:"belonged",pastParticiple:"belonged",thirdPerson:"belongs"},banglaMeaning:"অন্তর্ভুক্ত হওয়া",example:"This pen belongs to me.",categoryId:9},
                        {id:274,verb:"bemuse",forms:{base:"bemuse",presentParticiple:"bemusing",past:"bemused",pastParticiple:"bemused",thirdPerson:"bemuses"},banglaMeaning:"বিভ্রান্ত করা",example:"The puzzle bemused the children.",categoryId:5},
                        {id:275,verb:"bend",forms:{base:"bend",presentParticiple:"bending",past:"bent",pastParticiple:"bent",thirdPerson:"bends"},banglaMeaning:"বাঁকানো",example:"He bent the stick.",categoryId:8},
                        {id:276,verb:"benefit",forms:{base:"benefit",presentParticiple:"benefiting",past:"benefited",pastParticiple:"benefited",thirdPerson:"benefits"},banglaMeaning:"উপকার করা",example:"The new law benefits everyone.",categoryId:8},
                        {id:277,verb:"bequeath",forms:{base:"bequeath",presentParticiple:"bequeathing",past:"bequeathed",pastParticiple:"bequeathed",thirdPerson:"bequeaths"},banglaMeaning:"উইল করে দিয়ে যাওয়া",example:"He bequeathed his estate to his son.",categoryId:9},
                        {id:278,verb:"berate",forms:{base:"berate",presentParticiple:"berating",past:"berated",pastParticiple:"berated",thirdPerson:"berates"},banglaMeaning:"তীব্র ভর্ত্সনা করা",example:"The coach berated the players.",categoryId:5},
                        {id:279,verb:"bereave",forms:{base:"bereave",presentParticiple:"bereaving",past:"bereaved",pastParticiple:"bereaved",thirdPerson:"bereaves"},banglaMeaning:"বিয়োগ করা",example:"She was bereaved of her husband.",categoryId:5},
                        {id:280,verb:"beset",forms:{base:"beset",presentParticiple:"besetting",past:"beset",pastParticiple:"beset",thirdPerson:"besets"},banglaMeaning:"আক্রান্ত করা",example:"The village was beset by floods.",categoryId:8},
                        {id:281,verb:"besiege",forms:{base:"besiege",presentParticiple:"besieging",past:"besieged",pastParticiple:"besieged",thirdPerson:"besieges"},banglaMeaning:"অবরোধ করা",example:"The army besieged the city.",categoryId:1},
                        {id:282,verb:"bestow",forms:{base:"bestow",presentParticiple:"bestowing",past:"bestowed",pastParticiple:"bestowed",thirdPerson:"bestows"},banglaMeaning:"প্রদান করা",example:"The king bestowed honors on the hero.",categoryId:4},
                        {id:283,verb:"bet",forms:{base:"bet",presentParticiple:"betting",past:"bet",pastParticiple:"bet",thirdPerson:"bets"},banglaMeaning:"শর্ত রাখা",example:"He bet a lot of money.",categoryId:4},
                        {id:284,verb:"betray",forms:{base:"betray",presentParticiple:"betraying",past:"betrayed",pastParticiple:"betrayed",thirdPerson:"betrays"},banglaMeaning:"বিশ্বাসঘাতকতা করা",example:"She betrayed her friend's trust.",categoryId:5},
                        {id:285,verb:"beware",forms:{base:"beware",presentParticiple:"bewaring",past:"bewared",pastParticiple:"bewared",thirdPerson:"bewares"},banglaMeaning:"সতর্ক থাকা",example:"Beware of pickpockets.",categoryId:2},
                        {id:286,verb:"bewitch",forms:{base:"bewitch",presentParticiple:"bewitching",past:"bewitched",pastParticiple:"bewitched",thirdPerson:"bewitches"},banglaMeaning:"মুগ্ধ করা",example:"The magician bewitched the audience.",categoryId:5},
                        {id:287,verb:"bid",forms:{base:"bid",presentParticiple:"bidding",past:"bid",pastParticiple:"bid",thirdPerson:"bids"},banglaMeaning:"বিড করা",example:"He bid for the painting.",categoryId:2},
                        {id:288,verb:"bind",forms:{base:"bind",presentParticiple:"binding",past:"bound",pastParticiple:"bound",thirdPerson:"binds"},banglaMeaning:"বাঁধা",example:"She bound the flowers together.",categoryId:6},
                        {id:289,verb:"bite",forms:{base:"bite",presentParticiple:"biting",past:"bit",pastParticiple:"bitten",thirdPerson:"bites"},banglaMeaning:"কামড়ানো",example:"The snake bit him.",categoryId:2},
                        {id:290,verb:"blab",forms:{base:"blab",presentParticiple:"blabbing",past:"blabbed",pastParticiple:"blabbed",thirdPerson:"blabs"},banglaMeaning:"অপ্রয়োজনীয় কথা বলা",example:"He blabbed the secret.",categoryId:2},
                        {id:291,verb:"blacken",forms:{base:"blacken",presentParticiple:"blackening",past:"blackened",pastParticiple:"blackened",thirdPerson:"blackens"},banglaMeaning:"কালো করা",example:"The smoke blackened the walls.",categoryId:8},
                        {id:292,verb:"blame",forms:{base:"blame",presentParticiple:"blaming",past:"blamed",pastParticiple:"blamed",thirdPerson:"blames"},banglaMeaning:"দোষারোপ করা",example:"She blamed him for the accident.",categoryId:5},
                        {id:293,verb:"blast",forms:{base:"blast",presentParticiple:"blasting",past:"blasted",pastParticiple:"blasted",thirdPerson:"blasts"},banglaMeaning:"বিস্ফোরণ করা",example:"They blasted the old building.",categoryId:8},
                        {id:294,verb:"bleed",forms:{base:"bleed",presentParticiple:"bleeding",past:"bled",pastParticiple:"bled",thirdPerson:"bleeds"},banglaMeaning:"রক্তপাত হওয়া",example:"He bled from his finger.",categoryId:10},
                        {id:295,verb:"blend",forms:{base:"blend",presentParticiple:"blending",past:"blended",pastParticiple:"blended",thirdPerson:"blends"},banglaMeaning:"মিশ্রিত করা",example:"Blend the colors well.",categoryId:10},
                        {id:296,verb:"bless",forms:{base:"bless",presentParticiple:"blessing",past:"blessed",pastParticiple:"blessed",thirdPerson:"blesses"},banglaMeaning:"আশীর্বাদ করা",example:"The priest blessed the couple.",categoryId:5},
                        {id:297,verb:"blind",forms:{base:"blind",presentParticiple:"blinding",past:"blinded",pastParticiple:"blinded",thirdPerson:"blinds"},banglaMeaning:"অন্ধ করা",example:"The bright light blinded him.",categoryId:8},
                        {id:298,verb:"blink",forms:{base:"blink",presentParticiple:"blinking",past:"blinked",pastParticiple:"blinked",thirdPerson:"blinks"},banglaMeaning:"চোখ টেপা",example:"He blinked rapidly.",categoryId:5},
                        {id:299,verb:"block",forms:{base:"block",presentParticiple:"blocking",past:"blocked",pastParticiple:"blocked",thirdPerson:"blocks"},banglaMeaning:"অবরুদ্ধ করা",example:"The car blocked the driveway.",categoryId:8},
                        {id:300,verb:"bloom",forms:{base:"bloom",presentParticiple:"blooming",past:"bloomed",pastParticiple:"bloomed",thirdPerson:"blooms"},banglaMeaning:"ফুল ফোটা",example:"The roses bloom in June.",categoryId:11}
                            ,
                            // Next 50 main verbs starting with 'B'
                            {id:301,verb:"blow",forms:{base:"blow",presentParticiple:"blowing",past:"blew",pastParticiple:"blown",thirdPerson:"blows"},banglaMeaning:"ফুঁ দেওয়া",example:"The wind blew all night.",categoryId:3},
                            {id:302,verb:"blush",forms:{base:"blush",presentParticiple:"blushing",past:"blushed",pastParticiple:"blushed",thirdPerson:"blushes"},banglaMeaning:"লজ্জা পাওয়া",example:"She blushed at the compliment.",categoryId:5},
                            {id:303,verb:"boast",forms:{base:"boast",presentParticiple:"boasting",past:"boasted",pastParticiple:"boasted",thirdPerson:"boasts"},banglaMeaning:"গর্ব করা",example:"He boasted about his achievements.",categoryId:5},
                            {id:304,verb:"boil",forms:{base:"boil",presentParticiple:"boiling",past:"boiled",pastParticiple:"boiled",thirdPerson:"boils"},banglaMeaning:"ফুটানো",example:"Boil the water before drinking.",categoryId:10},
                            {id:305,verb:"bolster",forms:{base:"bolster",presentParticiple:"bolstering",past:"bolstered",pastParticiple:"bolstered",thirdPerson:"bolsters"},banglaMeaning:"শক্তিশালী করা",example:"The news bolstered his confidence.",categoryId:8},
                            {id:306,verb:"bomb",forms:{base:"bomb",presentParticiple:"bombing",past:"bombed",pastParticiple:"bombed",thirdPerson:"bombs"},banglaMeaning:"বোমা মারা",example:"They bombed the enemy base.",categoryId:1},
                            {id:307,verb:"bond",forms:{base:"bond",presentParticiple:"bonding",past:"bonded",pastParticiple:"bonded",thirdPerson:"bonds"},banglaMeaning:"বন্ধন তৈরি করা",example:"They bonded over music.",categoryId:5},
                            {id:308,verb:"book",forms:{base:"book",presentParticiple:"booking",past:"booked",pastParticiple:"booked",thirdPerson:"books"},banglaMeaning:"বুকিং করা",example:"I booked a ticket online.",categoryId:6},
                            {id:309,verb:"boost",forms:{base:"boost",presentParticiple:"boosting",past:"boosted",pastParticiple:"boosted",thirdPerson:"boosts"},banglaMeaning:"বৃদ্ধি করা",example:"The ad boosted sales.",categoryId:8},
                            {id:310,verb:"bore",forms:{base:"bore",presentParticiple:"boring",past:"bored",pastParticiple:"bored",thirdPerson:"bores"},banglaMeaning:"বিরক্ত করা",example:"The lecture bored the students.",categoryId:5},
                            {id:311,verb:"borrow",forms:{base:"borrow",presentParticiple:"borrowing",past:"borrowed",pastParticiple:"borrowed",thirdPerson:"borrows"},banglaMeaning:"ধার নেওয়া",example:"He borrowed a book from the library.",categoryId:9},
                            {id:312,verb:"bounce",forms:{base:"bounce",presentParticiple:"bouncing",past:"bounced",pastParticiple:"bounced",thirdPerson:"bounces"},banglaMeaning:"লাফানো",example:"The ball bounced high.",categoryId:3},
                            {id:313,verb:"bow",forms:{base:"bow",presentParticiple:"bowing",past:"bowed",pastParticiple:"bowed",thirdPerson:"bows"},banglaMeaning:"নম করা",example:"He bowed before the king.",categoryId:2},
                            {id:314,verb:"box",forms:{base:"box",presentParticiple:"boxing",past:"boxed",pastParticiple:"boxed",thirdPerson:"boxes"},banglaMeaning:"মুষ্টিযুদ্ধ করা",example:"He boxed in the championship.",categoryId:1},
                            {id:315,verb:"brag",forms:{base:"brag",presentParticiple:"bragging",past:"bragged",pastParticiple:"bragged",thirdPerson:"brags"},banglaMeaning:"গর্ব করা",example:"He bragged about his wealth.",categoryId:5},
                            {id:316,verb:"braid",forms:{base:"braid",presentParticiple:"braiding",past:"braided",pastParticiple:"braided",thirdPerson:"braids"},banglaMeaning:"বেণী করা",example:"She braided her hair.",categoryId:6},
                            {id:317,verb:"brake",forms:{base:"brake",presentParticiple:"braking",past:"braked",pastParticiple:"braked",thirdPerson:"brakes"},banglaMeaning:"ব্রেক করা",example:"He braked suddenly.",categoryId:3},
                            {id:318,verb:"branch",forms:{base:"branch",presentParticiple:"branching",past:"branched",pastParticiple:"branched",thirdPerson:"branches"},banglaMeaning:"শাখা বিস্তার করা",example:"The company branched into new markets.",categoryId:8},
                            {id:319,verb:"brand",forms:{base:"brand",presentParticiple:"branding",past:"branded",pastParticiple:"branded",thirdPerson:"brands"},banglaMeaning:"ব্র্যান্ড করা",example:"They branded the product.",categoryId:6},
                            {id:320,verb:"break",forms:{base:"break",presentParticiple:"breaking",past:"broke",pastParticiple:"broken",thirdPerson:"breaks"},banglaMeaning:"ভাঙা",example:"He broke the glass.",categoryId:8},
                            {id:321,verb:"breathe",forms:{base:"breathe",presentParticiple:"breathing",past:"breathed",pastParticiple:"breathed",thirdPerson:"breathes"},banglaMeaning:"শ্বাস নেওয়া",example:"She breathed deeply.",categoryId:3},
                            {id:322,verb:"breed",forms:{base:"breed",presentParticiple:"breeding",past:"bred",pastParticiple:"bred",thirdPerson:"breeds"},banglaMeaning:"প্রজনন করা",example:"They breed horses.",categoryId:8},
                            {id:323,verb:"bring",forms:{base:"bring",presentParticiple:"bringing",past:"brought",pastParticiple:"brought",thirdPerson:"brings"},banglaMeaning:"আনা",example:"Please bring your book.",categoryId:1},
                            {id:324,verb:"broadcast",forms:{base:"broadcast",presentParticiple:"broadcasting",past:"broadcast",pastParticiple:"broadcast",thirdPerson:"broadcasts"},banglaMeaning:"সম্প্রচার করা",example:"They broadcast the news live.",categoryId:2},
                            {id:325,verb:"broaden",forms:{base:"broaden",presentParticiple:"broadening",past:"broadened",pastParticiple:"broadened",thirdPerson:"broadens"},banglaMeaning:"প্রসারিত করা",example:"Travel broadens the mind.",categoryId:8},
                            {id:326,verb:"broil",forms:{base:"broil",presentParticiple:"broiling",past:"broiled",pastParticiple:"broiled",thirdPerson:"broils"},banglaMeaning:"গ্রিল করা",example:"She broiled the fish.",categoryId:10},
                            {id:327,verb:"bruise",forms:{base:"bruise",presentParticiple:"bruising",past:"bruised",pastParticiple:"bruised",thirdPerson:"bruises"},banglaMeaning:"আঘাত লাগা",example:"He bruised his arm.",categoryId:8},
                            {id:328,verb:"brush",forms:{base:"brush",presentParticiple:"brushing",past:"brushed",pastParticiple:"brushed",thirdPerson:"brushes"},banglaMeaning:"ব্রাশ করা",example:"She brushed her teeth.",categoryId:6},
                            {id:329,verb:"bubble",forms:{base:"bubble",presentParticiple:"bubbling",past:"bubbled",pastParticiple:"bubbled",thirdPerson:"bubbles"},banglaMeaning:"বুদবুদ করা",example:"The water bubbled in the pot.",categoryId:10},
                            {id:330,verb:"build",forms:{base:"build",presentParticiple:"building",past:"built",pastParticiple:"built",thirdPerson:"builds"},banglaMeaning:"নির্মাণ করা",example:"They built a new house.",categoryId:8},
                            {id:331,verb:"bully",forms:{base:"bully",presentParticiple:"bullying",past:"bullied",pastParticiple:"bullied",thirdPerson:"bullies"},banglaMeaning:"বully করা",example:"He bullied his classmates.",categoryId:5},
                            {id:332,verb:"burn",forms:{base:"burn",presentParticiple:"burning",past:"burned",pastParticiple:"burned",thirdPerson:"burns"},banglaMeaning:"পোড়ানো",example:"The fire burned all night.",categoryId:8},
                            {id:333,verb:"burst",forms:{base:"burst",presentParticiple:"bursting",past:"burst",pastParticiple:"burst",thirdPerson:"bursts"},banglaMeaning:"ফেটে যাওয়া",example:"The balloon burst suddenly.",categoryId:8},
                            {id:334,verb:"bury",forms:{base:"bury",presentParticiple:"burying",past:"buried",pastParticiple:"buried",thirdPerson:"buries"},banglaMeaning:"কবর দেওয়া",example:"They buried the treasure.",categoryId:8},
                            {id:335,verb:"buy",forms:{base:"buy",presentParticiple:"buying",past:"bought",pastParticiple:"bought",thirdPerson:"buys"},banglaMeaning:"কেনা",example:"She bought a new dress.",categoryId:8},
                            {id:336,verb:"buzz",forms:{base:"buzz",presentParticiple:"buzzing",past:"buzzed",pastParticiple:"buzzed",thirdPerson:"buzzes"},banglaMeaning:"গুঞ্জন করা",example:"The phone buzzed on the table.",categoryId:2},
                            {id:337,verb:"babble",forms:{base:"babble",presentParticiple:"babbling",past:"babbled",pastParticiple:"babbled",thirdPerson:"babbles"},banglaMeaning:"বকবক করা",example:"The baby babbled happily.",categoryId:2},
                            {id:338,verb:"back",forms:{base:"back",presentParticiple:"backing",past:"backed",pastParticiple:"backed",thirdPerson:"backs"},banglaMeaning:"সমর্থন করা",example:"He backed his friend's decision.",categoryId:5},
                            {id:339,verb:"bake",forms:{base:"bake",presentParticiple:"baking",past:"baked",pastParticiple:"baked",thirdPerson:"bakes"},banglaMeaning:"বেক করা",example:"She baked a cake.",categoryId:10},
                            {id:340,verb:"balance",forms:{base:"balance",presentParticiple:"balancing",past:"balanced",pastParticiple:"balanced",thirdPerson:"balances"},banglaMeaning:"ভারসাম্য রাখা",example:"He balanced the books.",categoryId:8},
                            {id:341,verb:"balk",forms:{base:"balk",presentParticiple:"balking",past:"balked",pastParticiple:"balked",thirdPerson:"balks"},banglaMeaning:"বাধা দেওয়া",example:"She balked at the idea.",categoryId:8},
                            {id:342,verb:"ball",forms:{base:"ball",presentParticiple:"balling",past:"balled",pastParticiple:"balled",thirdPerson:"balls"},banglaMeaning:"গোল করা",example:"He balled up the paper.",categoryId:6},
                            {id:343,verb:"banish",forms:{base:"banish",presentParticiple:"banishing",past:"banished",pastParticiple:"banished",thirdPerson:"banishes"},banglaMeaning:"নির্বাসন করা",example:"They banished him from the city.",categoryId:8},
                            {id:344,verb:"bark",forms:{base:"bark",presentParticiple:"barking",past:"barked",pastParticiple:"barked",thirdPerson:"barks"},banglaMeaning:"ঘেউ ঘেউ করা",example:"The dog barked at the stranger.",categoryId:2},
                            {id:345,verb:"barricade",forms:{base:"barricade",presentParticiple:"barricading",past:"barricaded",pastParticiple:"barricaded",thirdPerson:"barricades"},banglaMeaning:"ব্যারিকেড করা",example:"They barricaded the road.",categoryId:8},
                            {id:346,verb:"bask",forms:{base:"bask",presentParticiple:"basking",past:"basked",pastParticiple:"basked",thirdPerson:"basks"},banglaMeaning:"রোদ পোহানো",example:"The lizard basked in the sun.",categoryId:8},
                            {id:347,verb:"bat",forms:{base:"bat",presentParticiple:"batting",past:"batted",pastParticiple:"batted",thirdPerson:"bats"},banglaMeaning:"ব্যাট করা",example:"He batted the ball.",categoryId:1},
                            {id:348,verb:"bawl",forms:{base:"bawl",presentParticiple:"bawling",past:"bawled",pastParticiple:"bawled",thirdPerson:"bawls"},banglaMeaning:"জোরে কান্না করা",example:"The child bawled for his mother.",categoryId:5},
                            {id:349,verb:"beam",forms:{base:"beam",presentParticiple:"beaming",past:"beamed",pastParticiple:"beamed",thirdPerson:"beams"},banglaMeaning:"আলোকিত করা, হাসা",example:"He beamed with pride.",categoryId:5},
                            {id:350,verb:"beckon",forms:{base:"beckon",presentParticiple:"beckoning",past:"beckoned",pastParticiple:"beckoned",thirdPerson:"beckons"},banglaMeaning:"ইশারা করা",example:"She beckoned him to follow.",categoryId:2}
                                ,
                                // Next 50 main verbs starting with 'B'
                                {id:351,verb:"befriend",forms:{base:"befriend",presentParticiple:"befriending",past:"befriended",pastParticiple:"befriended",thirdPerson:"befriends"},banglaMeaning:"বন্ধু হওয়া",example:"He befriended his new classmate.",categoryId:5},
                                {id:352,verb:"befall",forms:{base:"befall",presentParticiple:"befalling",past:"befell",pastParticiple:"befallen",thirdPerson:"befalls"},banglaMeaning:"ঘটা",example:"A great tragedy befell the family.",categoryId:8},
                                {id:353,verb:"befit",forms:{base:"befit",presentParticiple:"befitting",past:"befitted",pastParticiple:"befitted",thirdPerson:"befits"},banglaMeaning:"উপযুক্ত হওয়া",example:"The dress befits the occasion.",categoryId:11},
                                {id:354,verb:"befuddle",forms:{base:"befuddle",presentParticiple:"befuddling",past:"befuddled",pastParticiple:"befuddled",thirdPerson:"befuddles"},banglaMeaning:"বিভ্রান্ত করা",example:"The question befuddled the students.",categoryId:5},
                                {id:355,verb:"behead",forms:{base:"behead",presentParticiple:"beheading",past:"beheaded",pastParticiple:"beheaded",thirdPerson:"beheads"},banglaMeaning:"শিরচ্ছেদ করা",example:"The king beheaded the criminal.",categoryId:1},
                                {id:356,verb:"belch",forms:{base:"belch",presentParticiple:"belching",past:"belched",pastParticiple:"belched",thirdPerson:"belches"},banglaMeaning:"ডকার ধরা",example:"He belched after eating.",categoryId:10},
                                {id:357,verb:"believe",forms:{base:"believe",presentParticiple:"believing",past:"believed",pastParticiple:"believed",thirdPerson:"believes"},banglaMeaning:"বিশ্বাস করা",example:"I believe you.",categoryId:4},
                                {id:358,verb:"belittle",forms:{base:"belittle",presentParticiple:"belittling",past:"belittled",pastParticiple:"belittled",thirdPerson:"belittles"},banglaMeaning:"তুচ্ছ করা",example:"Don't belittle his efforts.",categoryId:5},
                                {id:359,verb:"bellow",forms:{base:"bellow",presentParticiple:"bellowing",past:"bellowed",pastParticiple:"bellowed",thirdPerson:"bellows"},banglaMeaning:"গর্জন করা",example:"The lion bellowed loudly.",categoryId:2},
                                {id:360,verb:"belong",forms:{base:"belong",presentParticiple:"belonging",past:"belonged",pastParticiple:"belonged",thirdPerson:"belongs"},banglaMeaning:"অন্তর্ভুক্ত হওয়া",example:"This pen belongs to me.",categoryId:9},
                                {id:361,verb:"bemuse",forms:{base:"bemuse",presentParticiple:"bemusing",past:"bemused",pastParticiple:"bemused",thirdPerson:"bemuses"},banglaMeaning:"বিভ্রান্ত করা",example:"The puzzle bemused the children.",categoryId:5},
                                {id:362,verb:"bend",forms:{base:"bend",presentParticiple:"bending",past:"bent",pastParticiple:"bent",thirdPerson:"bends"},banglaMeaning:"বাঁকানো",example:"He bent the stick.",categoryId:8},
                                {id:363,verb:"benefit",forms:{base:"benefit",presentParticiple:"benefiting",past:"benefited",pastParticiple:"benefited",thirdPerson:"benefits"},banglaMeaning:"উপকার করা",example:"The new law benefits everyone.",categoryId:8},
                                {id:364,verb:"bequeath",forms:{base:"bequeath",presentParticiple:"bequeathing",past:"bequeathed",pastParticiple:"bequeathed",thirdPerson:"bequeaths"},banglaMeaning:"উইল করে দিয়ে যাওয়া",example:"He bequeathed his estate to his son.",categoryId:9},
                                {id:365,verb:"berate",forms:{base:"berate",presentParticiple:"berating",past:"berated",pastParticiple:"berated",thirdPerson:"berates"},banglaMeaning:"তীব্র ভর্ত্সনা করা",example:"The coach berated the players.",categoryId:5},
                                {id:366,verb:"bereave",forms:{base:"bereave",presentParticiple:"bereaving",past:"bereaved",pastParticiple:"bereaved",thirdPerson:"bereaves"},banglaMeaning:"বিয়োগ করা",example:"She was bereaved of her husband.",categoryId:5},
                                {id:367,verb:"beset",forms:{base:"beset",presentParticiple:"besetting",past:"beset",pastParticiple:"beset",thirdPerson:"besets"},banglaMeaning:"আক্রান্ত করা",example:"The village was beset by floods.",categoryId:8},
                                {id:368,verb:"besiege",forms:{base:"besiege",presentParticiple:"besieging",past:"besieged",pastParticiple:"besieged",thirdPerson:"besieges"},banglaMeaning:"অবরোধ করা",example:"The army besieged the city.",categoryId:1},
                                {id:369,verb:"bestow",forms:{base:"bestow",presentParticiple:"bestowing",past:"bestowed",pastParticiple:"bestowed",thirdPerson:"bestows"},banglaMeaning:"প্রদান করা",example:"The king bestowed honors on the hero.",categoryId:4},
                                {id:370,verb:"bet",forms:{base:"bet",presentParticiple:"betting",past:"bet",pastParticiple:"bet",thirdPerson:"bets"},banglaMeaning:"শর্ত রাখা",example:"He bet a lot of money.",categoryId:4},
                                {id:371,verb:"betray",forms:{base:"betray",presentParticiple:"betraying",past:"betrayed",pastParticiple:"betrayed",thirdPerson:"betrays"},banglaMeaning:"বিশ্বাসঘাতকতা করা",example:"She betrayed her friend's trust.",categoryId:5},
                                {id:372,verb:"beware",forms:{base:"beware",presentParticiple:"bewaring",past:"bewared",pastParticiple:"bewared",thirdPerson:"bewares"},banglaMeaning:"সতর্ক থাকা",example:"Beware of pickpockets.",categoryId:2},
                                {id:373,verb:"bewitch",forms:{base:"bewitch",presentParticiple:"bewitching",past:"bewitched",pastParticiple:"bewitched",thirdPerson:"bewitches"},banglaMeaning:"মুগ্ধ করা",example:"The magician bewitched the audience.",categoryId:5},
                                {id:374,verb:"bid",forms:{base:"bid",presentParticiple:"bidding",past:"bid",pastParticiple:"bid",thirdPerson:"bids"},banglaMeaning:"বিড করা",example:"He bid for the painting.",categoryId:2},
                                {id:375,verb:"bind",forms:{base:"bind",presentParticiple:"binding",past:"bound",pastParticiple:"bound",thirdPerson:"binds"},banglaMeaning:"বাঁধা",example:"She bound the flowers together.",categoryId:6},
                                {id:376,verb:"bite",forms:{base:"bite",presentParticiple:"biting",past:"bit",pastParticiple:"bitten",thirdPerson:"bites"},banglaMeaning:"কামড়ানো",example:"The snake bit him.",categoryId:2},
                                {id:377,verb:"blab",forms:{base:"blab",presentParticiple:"blabbing",past:"blabbed",pastParticiple:"blabbed",thirdPerson:"blabs"},banglaMeaning:"অপ্রয়োজনীয় কথা বলা",example:"He blabbed the secret.",categoryId:2},
                                {id:378,verb:"blacken",forms:{base:"blacken",presentParticiple:"blackening",past:"blackened",pastParticiple:"blackened",thirdPerson:"blackens"},banglaMeaning:"কালো করা",example:"The smoke blackened the walls.",categoryId:8},
                                {id:379,verb:"blame",forms:{base:"blame",presentParticiple:"blaming",past:"blamed",pastParticiple:"blamed",thirdPerson:"blames"},banglaMeaning:"দোষারোপ করা",example:"She blamed him for the accident.",categoryId:5},
                                {id:380,verb:"blast",forms:{base:"blast",presentParticiple:"blasting",past:"blasted",pastParticiple:"blasted",thirdPerson:"blasts"},banglaMeaning:"বিস্ফোরণ করা",example:"They blasted the old building.",categoryId:8},
                                {id:381,verb:"bleed",forms:{base:"bleed",presentParticiple:"bleeding",past:"bled",pastParticiple:"bled",thirdPerson:"bleeds"},banglaMeaning:"রক্তপাত হওয়া",example:"He bled from his finger.",categoryId:10},
                                {id:382,verb:"blend",forms:{base:"blend",presentParticiple:"blending",past:"blended",pastParticiple:"blended",thirdPerson:"blends"},banglaMeaning:"মিশ্রিত করা",example:"Blend the colors well.",categoryId:10},
                                {id:383,verb:"bless",forms:{base:"bless",presentParticiple:"blessing",past:"blessed",pastParticiple:"blessed",thirdPerson:"blesses"},banglaMeaning:"আশীর্বাদ করা",example:"The priest blessed the couple.",categoryId:5},
                                {id:384,verb:"blind",forms:{base:"blind",presentParticiple:"blinding",past:"blinded",pastParticiple:"blinded",thirdPerson:"blinds"},banglaMeaning:"অন্ধ করা",example:"The bright light blinded him.",categoryId:8},
                                {id:385,verb:"blink",forms:{base:"blink",presentParticiple:"blinking",past:"blinked",pastParticiple:"blinked",thirdPerson:"blinks"},banglaMeaning:"চোখ টেপা",example:"He blinked rapidly.",categoryId:5},
                                {id:386,verb:"block",forms:{base:"block",presentParticiple:"blocking",past:"blocked",pastParticiple:"blocked",thirdPerson:"blocks"},banglaMeaning:"অবরুদ্ধ করা",example:"The car blocked the driveway.",categoryId:8},
                                {id:387,verb:"bloom",forms:{base:"bloom",presentParticiple:"blooming",past:"bloomed",pastParticiple:"bloomed",thirdPerson:"blooms"},banglaMeaning:"ফুল ফোটা",example:"The roses bloom in June.",categoryId:11},
                                {id:388,verb:"blow",forms:{base:"blow",presentParticiple:"blowing",past:"blew",pastParticiple:"blown",thirdPerson:"blows"},banglaMeaning:"ফুঁ দেওয়া",example:"The wind blew all night.",categoryId:3},
                                {id:389,verb:"blush",forms:{base:"blush",presentParticiple:"blushing",past:"blushed",pastParticiple:"blushed",thirdPerson:"blushes"},banglaMeaning:"লজ্জা পাওয়া",example:"She blushed at the compliment.",categoryId:5},
                                {id:390,verb:"boast",forms:{base:"boast",presentParticiple:"boasting",past:"boasted",pastParticiple:"boasted",thirdPerson:"boasts"},banglaMeaning:"গর্ব করা",example:"He boasted about his achievements.",categoryId:5},
                                {id:391,verb:"boil",forms:{base:"boil",presentParticiple:"boiling",past:"boiled",pastParticiple:"boiled",thirdPerson:"boils"},banglaMeaning:"ফুটানো",example:"Boil the water before drinking.",categoryId:10},
                                {id:392,verb:"bolster",forms:{base:"bolster",presentParticiple:"bolstering",past:"bolstered",pastParticiple:"bolstered",thirdPerson:"bolsters"},banglaMeaning:"শক্তিশালী করা",example:"The news bolstered his confidence.",categoryId:8},
                                {id:393,verb:"bomb",forms:{base:"bomb",presentParticiple:"bombing",past:"bombed",pastParticiple:"bombed",thirdPerson:"bombs"},banglaMeaning:"বোমা মারা",example:"They bombed the enemy base.",categoryId:1},
                                {id:394,verb:"bond",forms:{base:"bond",presentParticiple:"bonding",past:"bonded",pastParticiple:"bonded",thirdPerson:"bonds"},banglaMeaning:"বন্ধন তৈরি করা",example:"They bonded over music.",categoryId:5},
                                {id:395,verb:"book",forms:{base:"book",presentParticiple:"booking",past:"booked",pastParticiple:"booked",thirdPerson:"books"},banglaMeaning:"বুকিং করা",example:"I booked a ticket online.",categoryId:6},
                                {id:396,verb:"boost",forms:{base:"boost",presentParticiple:"boosting",past:"boosted",pastParticiple:"boosted",thirdPerson:"boosts"},banglaMeaning:"বৃদ্ধি করা",example:"The ad boosted sales.",categoryId:8},
                                {id:397,verb:"bore",forms:{base:"bore",presentParticiple:"boring",past:"bored",pastParticiple:"bored",thirdPerson:"bores"},banglaMeaning:"বিরক্ত করা",example:"The lecture bored the students.",categoryId:5},
                                {id:398,verb:"borrow",forms:{base:"borrow",presentParticiple:"borrowing",past:"borrowed",pastParticiple:"borrowed",thirdPerson:"borrows"},banglaMeaning:"ধার নেওয়া",example:"He borrowed a book from the library.",categoryId:9},
                                {id:399,verb:"bounce",forms:{base:"bounce",presentParticiple:"bouncing",past:"bounced",pastParticiple:"bounced",thirdPerson:"bounces"},banglaMeaning:"লাফানো",example:"The ball bounced high.",categoryId:3},
                                {id:400,verb:"bow",forms:{base:"bow",presentParticiple:"bowing",past:"bowed",pastParticiple:"bowed",thirdPerson:"bows"},banglaMeaning:"নম করা",example:"He bowed before the king.",categoryId:2}
                                    ,
                                    // Next 50 main verbs starting with 'B'
                                    {id:401,verb:"box",forms:{base:"box",presentParticiple:"boxing",past:"boxed",pastParticiple:"boxed",thirdPerson:"boxes"},banglaMeaning:"মুষ্টিযুদ্ধ করা",example:"He boxed in the championship.",categoryId:1},
                                    {id:402,verb:"brag",forms:{base:"brag",presentParticiple:"bragging",past:"bragged",pastParticiple:"bragged",thirdPerson:"brags"},banglaMeaning:"গর্ব করা",example:"He bragged about his wealth.",categoryId:5},
                                    {id:403,verb:"braid",forms:{base:"braid",presentParticiple:"braiding",past:"braided",pastParticiple:"braided",thirdPerson:"braids"},banglaMeaning:"বেণী করা",example:"She braided her hair.",categoryId:6},
                                    {id:404,verb:"brake",forms:{base:"brake",presentParticiple:"braking",past:"braked",pastParticiple:"braked",thirdPerson:"brakes"},banglaMeaning:"ব্রেক করা",example:"He braked suddenly.",categoryId:3},
                                    {id:405,verb:"branch",forms:{base:"branch",presentParticiple:"branching",past:"branched",pastParticiple:"branched",thirdPerson:"branches"},banglaMeaning:"শাখা বিস্তার করা",example:"The company branched into new markets.",categoryId:8},
                                    {id:406,verb:"brand",forms:{base:"brand",presentParticiple:"branding",past:"branded",pastParticiple:"branded",thirdPerson:"brands"},banglaMeaning:"ব্র্যান্ড করা",example:"They branded the product.",categoryId:6},
                                    {id:407,verb:"break",forms:{base:"break",presentParticiple:"breaking",past:"broke",pastParticiple:"broken",thirdPerson:"breaks"},banglaMeaning:"ভাঙা",example:"He broke the glass.",categoryId:8},
                                    {id:408,verb:"breathe",forms:{base:"breathe",presentParticiple:"breathing",past:"breathed",pastParticiple:"breathed",thirdPerson:"breathes"},banglaMeaning:"শ্বাস নেওয়া",example:"She breathed deeply.",categoryId:3},
                                    {id:409,verb:"breed",forms:{base:"breed",presentParticiple:"breeding",past:"bred",pastParticiple:"bred",thirdPerson:"breeds"},banglaMeaning:"প্রজনন করা",example:"They breed horses.",categoryId:8},
                                    {id:410,verb:"bring",forms:{base:"bring",presentParticiple:"bringing",past:"brought",pastParticiple:"brought",thirdPerson:"brings"},banglaMeaning:"আনা",example:"Please bring your book.",categoryId:1},
                                    {id:411,verb:"broadcast",forms:{base:"broadcast",presentParticiple:"broadcasting",past:"broadcast",pastParticiple:"broadcast",thirdPerson:"broadcasts"},banglaMeaning:"সম্প্রচার করা",example:"They broadcast the news live.",categoryId:2},
                                    {id:412,verb:"broaden",forms:{base:"broaden",presentParticiple:"broadening",past:"broadened",pastParticiple:"broadened",thirdPerson:"broadens"},banglaMeaning:"প্রসারিত করা",example:"Travel broadens the mind.",categoryId:8},
                                    {id:413,verb:"broil",forms:{base:"broil",presentParticiple:"broiling",past:"broiled",pastParticiple:"broiled",thirdPerson:"broils"},banglaMeaning:"গ্রিল করা",example:"She broiled the fish.",categoryId:10},
                                    {id:414,verb:"bruise",forms:{base:"bruise",presentParticiple:"bruising",past:"bruised",pastParticiple:"bruised",thirdPerson:"bruises"},banglaMeaning:"আঘাত লাগা",example:"He bruised his arm.",categoryId:8},
                                    {id:415,verb:"brush",forms:{base:"brush",presentParticiple:"brushing",past:"brushed",pastParticiple:"brushed",thirdPerson:"brushes"},banglaMeaning:"ব্রাশ করা",example:"She brushed her teeth.",categoryId:6},
                                    {id:416,verb:"bubble",forms:{base:"bubble",presentParticiple:"bubbling",past:"bubbled",pastParticiple:"bubbled",thirdPerson:"bubbles"},banglaMeaning:"বুদবুদ করা",example:"The water bubbled in the pot.",categoryId:10},
                                    {id:417,verb:"build",forms:{base:"build",presentParticiple:"building",past:"built",pastParticiple:"built",thirdPerson:"builds"},banglaMeaning:"নির্মাণ করা",example:"They built a new house.",categoryId:8},
                                    {id:418,verb:"bully",forms:{base:"bully",presentParticiple:"bullying",past:"bullied",pastParticiple:"bullied",thirdPerson:"bullies"},banglaMeaning:"বully করা",example:"He bullied his classmates.",categoryId:5},
                                    {id:419,verb:"burn",forms:{base:"burn",presentParticiple:"burning",past:"burned",pastParticiple:"burned",thirdPerson:"burns"},banglaMeaning:"পোড়ানো",example:"The fire burned all night.",categoryId:8},
                                    {id:420,verb:"burst",forms:{base:"burst",presentParticiple:"bursting",past:"burst",pastParticiple:"burst",thirdPerson:"bursts"},banglaMeaning:"ফেটে যাওয়া",example:"The balloon burst suddenly.",categoryId:8},
                                    {id:421,verb:"bury",forms:{base:"bury",presentParticiple:"burying",past:"buried",pastParticiple:"buried",thirdPerson:"buries"},banglaMeaning:"কবর দেওয়া",example:"They buried the treasure.",categoryId:8},
                                    {id:422,verb:"buy",forms:{base:"buy",presentParticiple:"buying",past:"bought",pastParticiple:"bought",thirdPerson:"buys"},banglaMeaning:"কেনা",example:"She bought a new dress.",categoryId:8},
                                    {id:423,verb:"buzz",forms:{base:"buzz",presentParticiple:"buzzing",past:"buzzed",pastParticiple:"buzzed",thirdPerson:"buzzes"},banglaMeaning:"গুঞ্জন করা",example:"The phone buzzed on the table.",categoryId:2},
                                    {id:424,verb:"babble",forms:{base:"babble",presentParticiple:"babbling",past:"babbled",pastParticiple:"babbled",thirdPerson:"babbles"},banglaMeaning:"বকবক করা",example:"The baby babbled happily.",categoryId:2},
                                    {id:425,verb:"back",forms:{base:"back",presentParticiple:"backing",past:"backed",pastParticiple:"backed",thirdPerson:"backs"},banglaMeaning:"সমর্থন করা",example:"He backed his friend's decision.",categoryId:5},
                                    {id:426,verb:"bake",forms:{base:"bake",presentParticiple:"baking",past:"baked",pastParticiple:"baked",thirdPerson:"bakes"},banglaMeaning:"বেক করা",example:"She baked a cake.",categoryId:10},
                                    {id:427,verb:"balance",forms:{base:"balance",presentParticiple:"balancing",past:"balanced",pastParticiple:"balanced",thirdPerson:"balances"},banglaMeaning:"ভারসাম্য রাখা",example:"He balanced the books.",categoryId:8},
                                    {id:428,verb:"balk",forms:{base:"balk",presentParticiple:"balking",past:"balked",pastParticiple:"balked",thirdPerson:"balks"},banglaMeaning:"বাধা দেওয়া",example:"She balked at the idea.",categoryId:8},
                                    {id:429,verb:"ball",forms:{base:"ball",presentParticiple:"balling",past:"balled",pastParticiple:"balled",thirdPerson:"balls"},banglaMeaning:"গোল করা",example:"He balled up the paper.",categoryId:6},
                                    {id:430,verb:"banish",forms:{base:"banish",presentParticiple:"banishing",past:"banished",pastParticiple:"banished",thirdPerson:"banishes"},banglaMeaning:"নির্বাসন করা",example:"They banished him from the city.",categoryId:8},
                                    {id:431,verb:"bark",forms:{base:"bark",presentParticiple:"barking",past:"barked",pastParticiple:"barked",thirdPerson:"barks"},banglaMeaning:"ঘেউ ঘেউ করা",example:"The dog barked at the stranger.",categoryId:2},
                                    {id:432,verb:"barricade",forms:{base:"barricade",presentParticiple:"barricading",past:"barricaded",pastParticiple:"barricaded",thirdPerson:"barricades"},banglaMeaning:"ব্যারিকেড করা",example:"They barricaded the road.",categoryId:8},
                                    {id:433,verb:"bask",forms:{base:"bask",presentParticiple:"basking",past:"basked",pastParticiple:"basked",thirdPerson:"basks"},banglaMeaning:"রোদ পোহানো",example:"The lizard basked in the sun.",categoryId:8},
                                    {id:434,verb:"bat",forms:{base:"bat",presentParticiple:"batting",past:"batted",pastParticiple:"batted",thirdPerson:"bats"},banglaMeaning:"ব্যাট করা",example:"He batted the ball.",categoryId:1},
                                    {id:435,verb:"bawl",forms:{base:"bawl",presentParticiple:"bawling",past:"bawled",pastParticiple:"bawled",thirdPerson:"bawls"},banglaMeaning:"জোরে কান্না করা",example:"The child bawled for his mother.",categoryId:5},
                                    {id:436,verb:"beam",forms:{base:"beam",presentParticiple:"beaming",past:"beamed",pastParticiple:"beamed",thirdPerson:"beams"},banglaMeaning:"আলোকিত করা, হাসা",example:"He beamed with pride.",categoryId:5},
                                    {id:437,verb:"beckon",forms:{base:"beckon",presentParticiple:"beckoning",past:"beckoned",pastParticiple:"beckoned",thirdPerson:"beckons"},banglaMeaning:"ইশারা করা",example:"She beckoned him to follow.",categoryId:2},
                                    {id:438,verb:"befriend",forms:{base:"befriend",presentParticiple:"befriending",past:"befriended",pastParticiple:"befriended",thirdPerson:"befriends"},banglaMeaning:"বন্ধু হওয়া",example:"He befriended his new classmate.",categoryId:5},
                                    {id:439,verb:"befall",forms:{base:"befall",presentParticiple:"befalling",past:"befell",pastParticiple:"befallen",thirdPerson:"befalls"},banglaMeaning:"ঘটা",example:"A great tragedy befell the family.",categoryId:8},
                                    {id:440,verb:"befit",forms:{base:"befit",presentParticiple:"befitting",past:"befitted",pastParticiple:"befitted",thirdPerson:"befits"},banglaMeaning:"উপযুক্ত হওয়া",example:"The dress befits the occasion.",categoryId:11},
                                    {id:441,verb:"befuddle",forms:{base:"befuddle",presentParticiple:"befuddling",past:"befuddled",pastParticiple:"befuddled",thirdPerson:"befuddles"},banglaMeaning:"বিভ্রান্ত করা",example:"The question befuddled the students.",categoryId:5},
                                    {id:442,verb:"behead",forms:{base:"behead",presentParticiple:"beheading",past:"beheaded",pastParticiple:"beheaded",thirdPerson:"beheads"},banglaMeaning:"শিরচ্ছেদ করা",example:"The king beheaded the criminal.",categoryId:1},
                                    {id:443,verb:"belch",forms:{base:"belch",presentParticiple:"belching",past:"belched",pastParticiple:"belched",thirdPerson:"belches"},banglaMeaning:"ডকার ধরা",example:"He belched after eating.",categoryId:10},
                                    {id:444,verb:"believe",forms:{base:"believe",presentParticiple:"believing",past:"believed",pastParticiple:"believed",thirdPerson:"believes"},banglaMeaning:"বিশ্বাস করা",example:"I believe you.",categoryId:4},
                                    {id:445,verb:"belittle",forms:{base:"belittle",presentParticiple:"belittling",past:"belittled",pastParticiple:"belittled",thirdPerson:"belittles"},banglaMeaning:"তুচ্ছ করা",example:"Don't belittle his efforts.",categoryId:5},
                                    {id:446,verb:"bellow",forms:{base:"bellow",presentParticiple:"bellowing",past:"bellowed",pastParticiple:"bellowed",thirdPerson:"bellows"},banglaMeaning:"গর্জন করা",example:"The lion bellowed loudly.",categoryId:2},
                                    {id:447,verb:"belong",forms:{base:"belong",presentParticiple:"belonging",past:"belonged",pastParticiple:"belonged",thirdPerson:"belongs"},banglaMeaning:"অন্তর্ভুক্ত হওয়া",example:"This pen belongs to me.",categoryId:9},
                                    {id:448,verb:"bemuse",forms:{base:"bemuse",presentParticiple:"bemusing",past:"bemused",pastParticiple:"bemused",thirdPerson:"bemuses"},banglaMeaning:"বিভ্রান্ত করা",example:"The puzzle bemused the children.",categoryId:5},
                                    {id:449,verb:"bend",forms:{base:"bend",presentParticiple:"bending",past:"bent",pastParticiple:"bent",thirdPerson:"bends"},banglaMeaning:"বাঁকানো",example:"He bent the stick.",categoryId:8},
                                    {id:450,verb:"benefit",forms:{base:"benefit",presentParticiple:"benefiting",past:"benefited",pastParticiple:"benefited",thirdPerson:"benefits"},banglaMeaning:"উপকার করা",example:"The new law benefits everyone.",categoryId:8},
                                    {id:451,verb:"calculate",forms:{base:"calculate",presentParticiple:"calculating",past:"calculated",pastParticiple:"calculated",thirdPerson:"calculates"},banglaMeaning:"গণনা করা",example:"She calculated the total cost.",categoryId:4},
        {id:452,verb:"call",forms:{base:"call",presentParticiple:"calling",past:"called",pastParticiple:"called",thirdPerson:"calls"},banglaMeaning:"ডাকা",example:"Please call me later.",categoryId:2},
        {id:453,verb:"calm",forms:{base:"calm",presentParticiple:"calming",past:"calmed",pastParticiple:"calmed",thirdPerson:"calms"},banglaMeaning:"শান্ত করা",example:"He tried to calm the baby.",categoryId:5},
        {id:454,verb:"cancel",forms:{base:"cancel",presentParticiple:"canceling",past:"canceled",pastParticiple:"canceled",thirdPerson:"cancels"},banglaMeaning:"বাতিল করা",example:"They canceled the meeting.",categoryId:1},
        {id:455,verb:"capture",forms:{base:"capture",presentParticiple:"capturing",past:"captured",pastParticiple:"captured",thirdPerson:"captures"},banglaMeaning:"বন্দী করা বা ধরা",example:"The police captured the thief.",categoryId:1},
        {id:456,verb:"care",forms:{base:"care",presentParticiple:"caring",past:"cared",pastParticiple:"cared",thirdPerson:"cares"},banglaMeaning:"যত্ন নেওয়া",example:"She cares for her elderly parents.",categoryId:5},
        {id:457,verb:"carry",forms:{base:"carry",presentParticiple:"carrying",past:"carried",pastParticiple:"carried",thirdPerson:"carries"},banglaMeaning:"বহন করা",example:"He is carrying a heavy bag.",categoryId:3},
        {id:458,verb:"carve",forms:{base:"carve",presentParticiple:"carving",past:"carved",pastParticiple:"carved",thirdPerson:"carves"},banglaMeaning:"খোদাই করা",example:"He carved a statue from wood.",categoryId:6},
        {id:459,verb:"cash",forms:{base:"cash",presentParticiple:"cashing",past:"cashed",pastParticiple:"cashed",thirdPerson:"cashes"},banglaMeaning:"টাকা ভাঙানো",example:"I need to cash this check.",categoryId:9},
        {id:460,verb:"cast",forms:{base:"cast",presentParticiple:"casting",past:"cast",pastParticiple:"cast",thirdPerson:"casts"},banglaMeaning:"নিক্ষেপ করা",example:"The fisherman cast his net.",categoryId:1},
        {id:461,verb:"catch",forms:{base:"catch",presentParticiple:"catching",past:"caught",pastParticiple:"caught",thirdPerson:"catches"},banglaMeaning:"ধরা",example:"Catch the ball!",categoryId:1},
        {id:462,verb:"cause",forms:{base:"cause",presentParticiple:"causing",past:"caused",pastParticiple:"caused",thirdPerson:"causes"},banglaMeaning:"ঘটানো বা কারণ হওয়া",example:"Smoking causes cancer.",categoryId:8},
        {id:463,verb:"celebrate",forms:{base:"celebrate",presentParticiple:"celebrating",past:"celebrated",pastParticiple:"celebrated",thirdPerson:"celebrates"},banglaMeaning:"উদযাপন করা",example:"We are celebrating his birthday.",categoryId:1},
        {id:464,verb:"center",forms:{base:"center",presentParticiple:"centering",past:"centered",pastParticiple:"centered",thirdPerson:"centers"},banglaMeaning:"কেন্দ্রীভূত করা",example:"Center the image on the page.",categoryId:8},
        {id:465,verb:"challenge",forms:{base:"challenge",presentParticiple:"challenging",past:"challenged",pastParticiple:"challenged",thirdPerson:"challenges"},banglaMeaning:"চ্যালেঞ্জ করা",example:"He challenged my decision.",categoryId:2},
        {id:466,verb:"change",forms:{base:"change",presentParticiple:"changing",past:"changed",pastParticiple:"changed",thirdPerson:"changes"},banglaMeaning:"পরিবর্তন করা",example:"I need to change my clothes.",categoryId:8},
        {id:467,verb:"charge",forms:{base:"charge",presentParticiple:"charging",past:"charged",pastParticiple:"charged",thirdPerson:"charges"},banglaMeaning:"চার্জ করা বা মূল্য রাখা",example:"How much do you charge?",categoryId:9},
        {id:468,verb:"chase",forms:{base:"chase",presentParticiple:"chasing",past:"chased",pastParticiple:"chased",thirdPerson:"chases"},banglaMeaning:"তাড়া করা",example:"The cat chased the mouse.",categoryId:3},
        {id:469,verb:"chat",forms:{base:"chat",presentParticiple:"chatting",past:"chatted",pastParticiple:"chatted",thirdPerson:"chats"},banglaMeaning:"গল্প করা",example:"We chatted for hours.",categoryId:2},
        {id:470,verb:"check",forms:{base:"check",presentParticiple:"checking",past:"checked",pastParticiple:"checked",thirdPerson:"checks"},banglaMeaning:"পরীক্ষা করা",example:"Check the answers again.",categoryId:7},
        {id:471,verb:"cheer",forms:{base:"cheer",presentParticiple:"cheering",past:"cheered",pastParticiple:"cheered",thirdPerson:"cheers"},banglaMeaning:"উৎসাহ দেওয়া",example:"The crowd cheered for the team.",categoryId:5},
        {id:472,verb:"chew",forms:{base:"chew",presentParticiple:"chewing",past:"chewed",pastParticiple:"chewed",thirdPerson:"chews"},banglaMeaning:"চিবানো",example:"Chew your food properly.",categoryId:10},
        {id:473,verb:"chide",forms:{base:"chide",presentParticiple:"chiding",past:"chid",pastParticiple:"chidden",thirdPerson:"chides"},banglaMeaning:"বকাঝকা করা",example:"She chided him for being late.",categoryId:2},
        {id:474,verb:"chill",forms:{base:"chill",presentParticiple:"chilling",past:"chilled",pastParticiple:"chilled",thirdPerson:"chills"},banglaMeaning:"ঠাণ্ডা করা",example:"Chill the drink before serving.",categoryId:8},
        {id:475,verb:"chirp",forms:{base:"chirp",presentParticiple:"chirping",past:"chirped",pastParticiple:"chirped",thirdPerson:"chirps"},banglaMeaning:"পাখির ডাক",example:"Birds were chirping in the garden.",categoryId:2},
        {id:476,verb:"choke",forms:{base:"choke",presentParticiple:"choking",past:"choked",pastParticiple:"choked",thirdPerson:"chokes"},banglaMeaning:"দম বন্ধ হওয়া",example:"The smoke made me choke.",categoryId:1},
        {id:477,verb:"choose",forms:{base:"choose",presentParticiple:"choosing",past:"chose",pastParticiple:"chosen",thirdPerson:"chooses"},banglaMeaning:"পছন্দ করা",example:"Choose the best option.",categoryId:4},
        {id:478,verb:"chop",forms:{base:"chop",presentParticiple:"chopping",past:"chopped",pastParticiple:"chopped",thirdPerson:"chops"},banglaMeaning:"টুকরো করা",example:"Chop the vegetables.",categoryId:6},
        {id:479,verb:"circulate",forms:{base:"circulate",presentParticiple:"circulating",past:"circulated",pastParticiple:"circulated",thirdPerson:"circulates"},banglaMeaning:"চলাচল করা",example:"Blood circulates through the body.",categoryId:3},
        {id:480,verb:"claim",forms:{base:"claim",presentParticiple:"claiming",past:"claimed",pastParticiple:"claimed",thirdPerson:"claims"},banglaMeaning:"দাবি করা",example:"He claimed to be an expert.",categoryId:2},
        {id:481,verb:"clap",forms:{base:"clap",presentParticiple:"clapping",past:"clapped",pastParticiple:"clapped",thirdPerson:"claps"},banglaMeaning:"তালি দেওয়া",example:"The audience clapped loudly.",categoryId:1},
        {id:482,verb:"clarify",forms:{base:"clarify",presentParticiple:"clarifying",past:"clarified",pastParticiple:"clarified",thirdPerson:"clarifies"},banglaMeaning:"স্পষ্ট করা",example:"Can you clarify this point?",categoryId:2},
        {id:483,verb:"clash",forms:{base:"clash",presentParticiple:"clashing",past:"clashed",pastParticiple:"clashed",thirdPerson:"clashes"},banglaMeaning:"সংঘর্ষ হওয়া",example:"The two groups clashed.",categoryId:1},
        {id:484,verb:"classify",forms:{base:"classify",presentParticiple:"classifying",past:"classified",pastParticiple:"classified",thirdPerson:"classifies"},banglaMeaning:"শ্রেণীবদ্ধ করা",example:"Books are classified by subject.",categoryId:4},
        {id:485,verb:"clean",forms:{base:"clean",presentParticiple:"cleaning",past:"cleaned",pastParticiple:"cleaned",thirdPerson:"cleans"},banglaMeaning:"পরিষ্কার করা",example:"Clean your room.",categoryId:1},
        {id:486,verb:"clear",forms:{base:"clear",presentParticiple:"clearing",past:"cleared",pastParticiple:"cleared",thirdPerson:"clears"},banglaMeaning:"পরিষ্কার বা মুক্ত করা",example:"The sky cleared after the rain.",categoryId:8},
        {id:487,verb:"climb",forms:{base:"climb",presentParticiple:"climbing",past:"climbed",pastParticiple:"climbed",thirdPerson:"climbs"},banglaMeaning:"আরোহণ করা",example:"He climbed the mountain.",categoryId:3},
        {id:488,verb:"cling",forms:{base:"cling",presentParticiple:"clinging",past:"clung",pastParticiple:"clung",thirdPerson:"clings"},banglaMeaning:"লেগে থাকা",example:"The baby clung to his mother.",categoryId:1},
        {id:489,verb:"clip",forms:{base:"clip",presentParticiple:"clipping",past:"clipped",pastParticiple:"clipped",thirdPerson:"clips"},banglaMeaning:"ছাঁটা বা আটকানো",example:"Clip these papers together.",categoryId:1},
        {id:490,verb:"close",forms:{base:"close",presentParticiple:"closing",past:"closed",pastParticiple:"closed",thirdPerson:"closes"},banglaMeaning:"বন্ধ করা",example:"Close the door.",categoryId:1},
        {id:491,verb:"clothe",forms:{base:"clothe",presentParticiple:"clothing",past:"clothed",pastParticiple:"clothed",thirdPerson:"clothes"},banglaMeaning:"পোশাক পরানো",example:"She clothed the shivering child.",categoryId:1},
        {id:492,verb:"cloud",forms:{base:"cloud",presentParticiple:"clouding",past:"clouded",pastParticiple:"clouded",thirdPerson:"clouds"},banglaMeaning:"মেঘলা হওয়া",example:"The sky began to cloud over.",categoryId:8},
        {id:493,verb:"clutch",forms:{base:"clutch",presentParticiple:"clutching",past:"clutched",pastParticiple:"clutched",thirdPerson:"clutches"},banglaMeaning:"জাকড়ে ধরা",example:"She clutched her purse tightly.",categoryId:1},
        {id:494,verb:"coach",forms:{base:"coach",presentParticiple:"coaching",past:"coached",pastParticiple:"coached",thirdPerson:"coaches"},banglaMeaning:"প্রশিক্ষণ দেওয়া",example:"He coaches the football team.",categoryId:2},
        {id:495,verb:"collapse",forms:{base:"collapse",presentParticiple:"collapsing",past:"collapsed",pastParticiple:"collapsed",thirdPerson:"collapses"},banglaMeaning:"ভেঙে পড়া",example:"The building collapsed.",categoryId:8},
        {id:496,verb:"collect",forms:{base:"collect",presentParticiple:"collecting",past:"collected",pastParticiple:"collected",thirdPerson:"collects"},banglaMeaning:"সংগ্রহ করা",example:"I collect old coins.",categoryId:9},
        {id:497,verb:"color",forms:{base:"color",presentParticiple:"coloring",past:"colored",pastParticiple:"colored",thirdPerson:"colors"},banglaMeaning:"রং করা",example:"The kids are coloring pictures.",categoryId:6},
        {id:498,verb:"comb",forms:{base:"comb",presentParticiple:"combing",past:"combed",pastParticiple:"combed",thirdPerson:"combs"},banglaMeaning:"আঁচড়ানো",example:"Comb your hair.",categoryId:1},
        {id:499,verb:"combine",forms:{base:"combine",presentParticiple:"combining",past:"combined",pastParticiple:"combined",thirdPerson:"combines"},banglaMeaning:"একত্রিত করা",example:"Combine the ingredients.",categoryId:6},
        {id:500,verb:"come",forms:{base:"come",presentParticiple:"coming",past:"came",pastParticiple:"come",thirdPerson:"comes"},banglaMeaning:"আসা",example:"Come here please.",categoryId:3},
        {id:501,verb:"comfort",forms:{base:"comfort",presentParticiple:"comforting",past:"comforted",pastParticiple:"comforted",thirdPerson:"comforts"},banglaMeaning:"সান্ত্বনা দেওয়া",example:"She comforted the crying boy.",categoryId:5},
        {id:502,verb:"command",forms:{base:"command",presentParticiple:"commanding",past:"commanded",pastParticiple:"commanded",thirdPerson:"commands"},banglaMeaning:"আদেশ করা",example:"The general commanded the troops.",categoryId:2},
        {id:503,verb:"comment",forms:{base:"comment",presentParticiple:"commenting",past:"commented",pastParticiple:"commented",thirdPerson:"comments"},banglaMeaning:"মন্তব্য করা",example:"He commented on the news.",categoryId:2},
        {id:504,verb:"commit",forms:{base:"commit",presentParticiple:"committing",past:"committed",pastParticiple:"committed",thirdPerson:"commits"},banglaMeaning:"প্রতিশ্রুতি দেওয়া বা করা",example:"He committed a crime.",categoryId:1},
        {id:505,verb:"communicate",forms:{base:"communicate",presentParticiple:"communicating",past:"communicated",pastParticiple:"communicated",thirdPerson:"communicates"},banglaMeaning:"যোগাযোগ করা",example:"We communicate by email.",categoryId:2},
        {id:506,verb:"compare",forms:{base:"compare",presentParticiple:"comparing",past:"compared",pastParticiple:"compared",thirdPerson:"compares"},banglaMeaning:"তুলনা করা",example:"Compare these two books.",categoryId:4},
        {id:507,verb:"compel",forms:{base:"compel",presentParticiple:"compelling",past:"compelled",pastParticiple:"compelled",thirdPerson:"compels"},banglaMeaning:"বাধ্য করা",example:"I was compelled to go.",categoryId:1},
        {id:508,verb:"compete",forms:{base:"compete",presentParticiple:"competing",past:"competed",pastParticiple:"competed",thirdPerson:"competes"},banglaMeaning:"প্রতিযোগিতা করা",example:"Ten teams are competing.",categoryId:1},
        {id:509,verb:"complain",forms:{base:"complain",presentParticiple:"complaining",past:"complained",pastParticiple:"complained",thirdPerson:"complains"},banglaMeaning:"অভিযোগ করা",example:"She complained about the food.",categoryId:2},
        {id:510,verb:"complete",forms:{base:"complete",presentParticiple:"completing",past:"completed",pastParticiple:"completed",thirdPerson:"completes"},banglaMeaning:"সম্পন্ন করা",example:"Complete the task.",categoryId:1},
        {id:511,verb:"compose",forms:{base:"compose",presentParticiple:"composing",past:"composed",pastParticiple:"composed",thirdPerson:"composes"},banglaMeaning:"রচনা করা",example:"He composed a poem.",categoryId:6},
        {id:512,verb:"comprehend",forms:{base:"comprehend",presentParticiple:"comprehending",past:"comprehended",pastParticiple:"comprehended",thirdPerson:"comprehends"},banglaMeaning:"বুঝতে পারা",example:"I couldn't comprehend his logic.",categoryId:4},
        {id:513,verb:"compute",forms:{base:"compute",presentParticiple:"computing",past:"computed",pastParticiple:"computed",thirdPerson:"computes"},banglaMeaning:"হিসাব করা",example:"The results were computed quickly.",categoryId:4},
        {id:514,verb:"conceal",forms:{base:"conceal",presentParticiple:"concealing",past:"concealed",pastParticiple:"concealed",thirdPerson:"conceals"},banglaMeaning:"লুকানো",example:"She concealed the truth.",categoryId:1},
        {id:515,verb:"concede",forms:{base:"concede",presentParticiple:"conceding",past:"conceded",pastParticiple:"conceded",thirdPerson:"concedes"},banglaMeaning:"স্বীকার করা",example:"He conceded his mistake.",categoryId:2},
        {id:516,verb:"concentrate",forms:{base:"concentrate",presentParticiple:"concentrating",past:"concentrated",pastParticiple:"concentrated",thirdPerson:"concentrates"},banglaMeaning:"মনোযোগ দেওয়া",example:"Concentrate on your studies.",categoryId:4},
        {id:517,verb:"concern",forms:{base:"concern",presentParticiple:"concerning",past:"concerned",pastParticiple:"concerned",thirdPerson:"concerns"},banglaMeaning:"উদ্বিগ্ন হওয়া/সম্পর্কিত হওয়া",example:"This matter concerns everyone.",categoryId:5},
        {id:518,verb:"conclude",forms:{base:"conclude",presentParticiple:"concluding",past:"concluded",pastParticiple:"concluded",thirdPerson:"concludes"},banglaMeaning:"উপসংহার টানা",example:"The meeting concluded at noon.",categoryId:4},
        {id:519,verb:"concur",forms:{base:"concur",presentParticiple:"concurring",past:"concurred",pastParticiple:"concurred",thirdPerson:"concurs"},banglaMeaning:"একমত হওয়া",example:"I concur with your opinion.",categoryId:2},
        {id:520,verb:"condemn",forms:{base:"condemn",presentParticiple:"condemning",past:"condemned",pastParticiple:"condemned",thirdPerson:"condemns"},banglaMeaning:"নিন্দা করা",example:"Everyone condemned the attack.",categoryId:2},
        {id:521,verb:"conduct",forms:{base:"conduct",presentParticiple:"conducting",past:"conducted",pastParticiple:"conducted",thirdPerson:"conducts"},banglaMeaning:"পরিচালনা করা",example:"They conducted a survey.",categoryId:1},
        {id:522,verb:"confess",forms:{base:"confess",presentParticiple:"confessing",past:"confessed",pastParticiple:"confessed",thirdPerson:"confesses"},banglaMeaning:"দোষ স্বীকার করা",example:"He confessed his crime.",categoryId:2},
        {id:523,verb:"confide",forms:{base:"confide",presentParticiple:"confiding",past:"confided",pastParticiple:"confided",thirdPerson:"confides"},banglaMeaning:"গোপন কথা বলা",example:"She confided in her friend.",categoryId:2},
        {id:524,verb:"confine",forms:{base:"confine",presentParticiple:"confining",past:"confined",pastParticiple:"confined",thirdPerson:"confines"},banglaMeaning:"সীমাবদ্ধ রাখা",example:"Please confine your talk to the topic.",categoryId:8},
        {id:525,verb:"confirm",forms:{base:"confirm",presentParticiple:"confirming",past:"confirmed",pastParticiple:"confirmed",thirdPerson:"confirms"},banglaMeaning:"নিশ্চিত করা",example:"Please confirm your booking.",categoryId:2},
        {id:526,verb:"conflict",forms:{base:"conflict",presentParticiple:"conflicting",past:"conflicted",pastParticiple:"conflicted",thirdPerson:"conflicts"},banglaMeaning:"দ্বন্দ্ব হওয়া",example:"Their interests conflict.",categoryId:1},
        {id:527,verb:"confront",forms:{base:"confront",presentParticiple:"confronting",past:"confronted",pastParticiple:"confronted",thirdPerson:"confronts"},banglaMeaning:"মুখোমুখি হওয়া",example:"She confronted her fears.",categoryId:1},
        {id:528,verb:"confuse",forms:{base:"confuse",presentParticiple:"confusing",past:"confused",pastParticiple:"confused",thirdPerson:"confuses"},banglaMeaning:"বিভ্রান্ত করা",example:"The instructions confused me.",categoryId:5},
        {id:529,verb:"congratulate",forms:{base:"congratulate",presentParticiple:"congratulating",past:"congratulated",pastParticiple:"congratulated",thirdPerson:"congratulates"},banglaMeaning:"অভিনন্দন জানানো",example:"I congratulated him on his success.",categoryId:2},
        {id:530,verb:"connect",forms:{base:"connect",presentParticiple:"connecting",past:"connected",pastParticiple:"connected",thirdPerson:"connects"},banglaMeaning:"সংযুক্ত করা",example:"Connect the two wires.",categoryId:1},
        {id:531,verb:"conquer",forms:{base:"conquer",presentParticiple:"conquering",past:"conquered",pastParticiple:"conquered",thirdPerson:"conquers"},banglaMeaning:"জয় করা",example:"He conquered his enemies.",categoryId:1},
        {id:532,verb:"conserve",forms:{base:"conserve",presentParticiple:"conserving",past:"conserved",pastParticiple:"conserved",thirdPerson:"conserves"},banglaMeaning:"সংরক্ষণ করা",example:"We must conserve water.",categoryId:8},
        {id:533,verb:"consider",forms:{base:"consider",presentParticiple:"considering",past:"considered",pastParticiple:"considered",thirdPerson:"considers"},banglaMeaning:"বিবেচনা করা",example:"Please consider my request.",categoryId:4},
        {id:534,verb:"consist",forms:{base:"consist",presentParticiple:"consisting",past:"consisted",pastParticiple:"consisted",thirdPerson:"consists"},banglaMeaning:"গঠিত হওয়া",example:"The team consists of five members.",categoryId:12},
        {id:535,verb:"console",forms:{base:"console",presentParticiple:"consoling",past:"consoled",pastParticiple:"consoled",thirdPerson:"consoles"},banglaMeaning:"সান্ত্বনা দেওয়া",example:"I tried to console her.",categoryId:5},
        {id:536,verb:"conspire",forms:{base:"conspire",presentParticiple:"conspiring",past:"conspired",pastParticiple:"conspired",thirdPerson:"conspires"},banglaMeaning:"ষড়যন্ত্র করা",example:"They conspired against the king.",categoryId:4},
        {id:537,verb:"construct",forms:{base:"construct",presentParticiple:"constructing",past:"constructed",pastParticiple:"constructed",thirdPerson:"constructs"},banglaMeaning:"নির্মাণ করা",example:"They are constructing a bridge.",categoryId:6},
        {id:538,verb:"consult",forms:{base:"consult",presentParticiple:"consulting",past:"consulted",pastParticiple:"consulted",thirdPerson:"consults"},banglaMeaning:"পরামর্শ করা",example:"Consult a doctor.",categoryId:2},
        {id:539,verb:"consume",forms:{base:"consume",presentParticiple:"consuming",past:"consumed",pastParticiple:"consumed",thirdPerson:"consumes"},banglaMeaning:"ভোগ করা বা খাওয়া",example:"The fire consumed the house.",categoryId:10},
        {id:540,verb:"contact",forms:{base:"contact",presentParticiple:"contacting",past:"contacted",pastParticiple:"contacted",thirdPerson:"contacts"},banglaMeaning:"যোগাযোগ করা",example:"Contact me if you need help.",categoryId:2},
        {id:541,verb:"contain",forms:{base:"contain",presentParticiple:"containing",past:"contained",pastParticiple:"contained",thirdPerson:"contains"},banglaMeaning:"ধারণ করা",example:"This box contains books.",categoryId:9},
        {id:542,verb:"contaminate",forms:{base:"contaminate",presentParticiple:"contaminating",past:"contaminated",pastParticiple:"contaminated",thirdPerson:"contaminates"},banglaMeaning:"দূষিত করা",example:"Sewage contaminated the river.",categoryId:8},
        {id:543,verb:"continue",forms:{base:"continue",presentParticiple:"continuing",past:"continued",pastParticiple:"continued",thirdPerson:"continues"},banglaMeaning:"চালিয়ে যাওয়া",example:"Continue your work.",categoryId:8},
        {id:544,verb:"contract",forms:{base:"contract",presentParticiple:"contracting",past:"contracted",pastParticiple:"contracted",thirdPerson:"contracts"},banglaMeaning:"সংকুচিত হওয়া/চুক্তি করা",example:"Metals contract when cooled.",categoryId:8},
        {id:545,verb:"contribute",forms:{base:"contribute",presentParticiple:"contributing",past:"contributed",pastParticiple:"contributed",thirdPerson:"contributes"},banglaMeaning:"অবদান রাখা",example:"He contributed money to charity.",categoryId:1},
        {id:546,verb:"control",forms:{base:"control",presentParticiple:"controlling",past:"controlled",pastParticiple:"controlled",thirdPerson:"controls"},banglaMeaning:"নিয়ন্ত্রণ করা",example:"Control your temper.",categoryId:1},
        {id:547,verb:"convert",forms:{base:"convert",presentParticiple:"converting",past:"converted",pastParticiple:"converted",thirdPerson:"converts"},banglaMeaning:"রূপান্তর করা",example:"Convert the file to PDF.",categoryId:8},
        {id:548,verb:"convey",forms:{base:"convey",presentParticiple:"conveying",past:"conveyed",pastParticiple:"conveyed",thirdPerson:"conveys"},banglaMeaning:"পৌঁছে দেওয়া",example:"Convey my message to him.",categoryId:2},
        {id:549,verb:"convince",forms:{base:"convince",presentParticiple:"convincing",past:"convinced",pastParticiple:"convinced",thirdPerson:"convinces"},banglaMeaning:"বোঝানো বা রাজি করানো",example:"I convinced him to stay.",categoryId:2},
        {id:550,verb:"cook",forms:{base:"cook",presentParticiple:"cooking",past:"cooked",pastParticiple:"cooked",thirdPerson:"cooks"},banglaMeaning:"রান্না করা",example:"She is cooking dinner.",categoryId:10},
        {id:551,verb:"dab",forms:{base:"dab",presentParticiple:"dabbing",past:"dabbed",pastParticiple:"dabbed",thirdPerson:"dabs"},banglaMeaning:"আলতো করে ছোঁয়া",example:"She dabbed her eyes with a tissue.",categoryId:1},
        {id:552,verb:"damage",forms:{base:"damage",presentParticiple:"damaging",past:"damaged",pastParticiple:"damaged",thirdPerson:"damages"},banglaMeaning:"ক্ষতি করা",example:"The storm damaged the roof.",categoryId:8},
        {id:553,verb:"dance",forms:{base:"dance",presentParticiple:"dancing",past:"danced",pastParticiple:"danced",thirdPerson:"dances"},banglaMeaning:"নাচা",example:"They danced all night.",categoryId:1},
        {id:554,verb:"dare",forms:{base:"dare",presentParticiple:"daring",past:"dared",pastParticiple:"dared",thirdPerson:"dares"},banglaMeaning:"সাহস করা",example:"How dare you say that!",categoryId:5},
        {id:555,verb:"darken",forms:{base:"darken",presentParticiple:"darkening",past:"darkened",pastParticiple:"darkened",thirdPerson:"darkens"},banglaMeaning:"অন্ধকার করা",example:"The sky began to darken.",categoryId:8},
        {id:556,verb:"dash",forms:{base:"dash",presentParticiple:"dashing",past:"dashed",pastParticiple:"dashed",thirdPerson:"dashes"},banglaMeaning:"দ্রুত দৌড়ানো",example:"He dashed to the station.",categoryId:3},
        {id:557,verb:"date",forms:{base:"date",presentParticiple:"dating",past:"dated",pastParticiple:"dated",thirdPerson:"dates"},banglaMeaning:"তারিখ দেওয়া",example:"Don't forget to date the letter.",categoryId:1},
        {id:558,verb:"dazzle",forms:{base:"dazzle",presentParticiple:"dazzling",past:"dazzled",pastParticiple:"dazzled",thirdPerson:"dazzles"},banglaMeaning:"চোখ ধাঁধানো",example:"The bright lights dazzled him.",categoryId:7},
        {id:559,verb:"deaden",forms:{base:"deaden",presentParticiple:"deadening",past:"deadened",pastParticiple:"deadened",thirdPerson:"deadens"},banglaMeaning:"নিস্তেজ করা",example:"The drug helped deaden the pain.",categoryId:8},
        {id:560,verb:"deafen",forms:{base:"deafen",presentParticiple:"deafening",past:"deafened",pastParticiple:"deafened",thirdPerson:"deafens"},banglaMeaning:"বধির করা",example:"The noise was deafening.",categoryId:7},
        {id:561,verb:"deal",forms:{base:"deal",presentParticiple:"dealing",past:"dealt",pastParticiple:"dealt",thirdPerson:"deals"},banglaMeaning:"লেনদেন করা",example:"He deals in used cars.",categoryId:9},
        {id:562,verb:"debate",forms:{base:"debate",presentParticiple:"debating",past:"debated",pastParticiple:"debated",thirdPerson:"debates"},banglaMeaning:"তর্ক করা",example:"They debated the new law.",categoryId:2},
        {id:563,verb:"decay",forms:{base:"decay",presentParticiple:"decaying",past:"decayed",pastParticiple:"decayed",thirdPerson:"decays"},banglaMeaning:"ক্ষয় হওয়া",example:"Sugar makes teeth decay.",categoryId:8},
        {id:564,verb:"deceive",forms:{base:"deceive",presentParticiple:"deceiving",past:"deceived",pastParticiple:"deceived",thirdPerson:"deceives"},banglaMeaning:"প্রতারণা করা",example:"Don't try to deceive me.",categoryId:2},
        {id:565,verb:"decide",forms:{base:"decide",presentParticiple:"deciding",past:"decided",pastParticiple:"decided",thirdPerson:"decides"},banglaMeaning:"সিদ্ধান্ত নেওয়া",example:"I decided to go home.",categoryId:4},
        {id:566,verb:"declare",forms:{base:"declare",presentParticiple:"declaring",past:"declared",pastParticiple:"declared",thirdPerson:"declares"},banglaMeaning:"ঘোষণা করা",example:"He declared his innocence.",categoryId:2},
        {id:567,verb:"decline",forms:{base:"decline",presentParticiple:"declining",past:"declined",pastParticiple:"declined",thirdPerson:"declines"},banglaMeaning:"প্রত্যাখ্যান করা/হ্রাস পাওয়া",example:"She declined the invitation.",categoryId:2},
        {id:568,verb:"decorate",forms:{base:"decorate",presentParticiple:"decorating",past:"decorated",pastParticiple:"decorated",thirdPerson:"decorates"},banglaMeaning:"সাজানো",example:"We decorated the hall for the party.",categoryId:6},
        {id:569,verb:"decrease",forms:{base:"decrease",presentParticiple:"decreasing",past:"decreased",pastParticiple:"decreased",thirdPerson:"decreases"},banglaMeaning:"কমানো",example:"The population is decreasing.",categoryId:8},
        {id:570,verb:"dedicate",forms:{base:"dedicate",presentParticiple:"dedicating",past:"dedicated",pastParticiple:"dedicated",thirdPerson:"dedicates"},banglaMeaning:"উৎসর্গ করা",example:"He dedicated the book to his mother.",categoryId:5},
        {id:571,verb:"deduce",forms:{base:"deduce",presentParticiple:"deducing",past:"deduced",pastParticiple:"deduced",thirdPerson:"deduces"},banglaMeaning:"অনুমান করা",example:"What can you deduce from these facts?",categoryId:4},
        {id:572,verb:"deduct",forms:{base:"deduct",presentParticiple:"deducting",past:"deducted",pastParticiple:"deducted",thirdPerson:"deducts"},banglaMeaning:"বিয়োগ করা",example:"Tax is deducted from your salary.",categoryId:9},
        {id:573,verb:"deem",forms:{base:"deem",presentParticiple:"deeming",past:"deemed",pastParticiple:"deemed",thirdPerson:"deems"},banglaMeaning:"বিবেচনা করা",example:"I deem it a great honor.",categoryId:4},
        {id:574,verb:"deepen",forms:{base:"deepen",presentParticiple:"deepening",past:"deepened",pastParticiple:"deepened",thirdPerson:"deepens"},banglaMeaning:"গভীর করা",example:"The crisis deepened further.",categoryId:8},
        {id:575,verb:"defeat",forms:{base:"defeat",presentParticiple:"defeating",past:"defeated",pastParticiple:"defeated",thirdPerson:"defeats"},banglaMeaning:"পরাজিত করা",example:"We defeated the enemy.",categoryId:1},
        {id:576,verb:"defend",forms:{base:"defend",presentParticiple:"defending",past:"defended",pastParticiple:"defended",thirdPerson:"defends"},banglaMeaning:"রক্ষা করা",example:"He defended his title.",categoryId:1},
        {id:577,verb:"define",forms:{base:"define",presentParticiple:"defining",past:"defined",pastParticiple:"defined",thirdPerson:"defines"},banglaMeaning:"সংজ্ঞায়িত করা",example:"How do you define success?",categoryId:4},
        {id:578,verb:"deform",forms:{base:"deform",presentParticiple:"deforming",past:"deformed",pastParticiple:"deformed",thirdPerson:"deforms"},banglaMeaning:"বিকৃত করা",example:"The heat deformed the plastic.",categoryId:8},
        {id:579,verb:"defy",forms:{base:"defy",presentParticiple:"defying",past:"defied",pastParticiple:"defied",thirdPerson:"defies"},banglaMeaning:"অমান্য করা",example:"He defied the orders.",categoryId:2},
        {id:580,verb:"delay",forms:{base:"delay",presentParticiple:"delaying",past:"delayed",pastParticiple:"delayed",thirdPerson:"delays"},banglaMeaning:"দেরি করা",example:"Don't delay your decision.",categoryId:8},
        {id:581,verb:"delegate",forms:{base:"delegate",presentParticiple:"delegating",past:"delegated",pastParticiple:"delegated",thirdPerson:"delegates"},banglaMeaning:"অর্পণ করা",example:"She delegated the task to her assistant.",categoryId:1},
        {id:582,verb:"delete",forms:{base:"delete",presentParticiple:"deleting",past:"deleted",pastParticiple:"deleted",thirdPerson:"deletes"},banglaMeaning:"মুছে ফেলা",example:"Delete this file.",categoryId:1},
        {id:583,verb:"delight",forms:{base:"delight",presentParticiple:"delighting",past:"delighted",pastParticiple:"delighted",thirdPerson:"delights"},banglaMeaning:"আনন্দ দেওয়া",example:"The music delighted the audience.",categoryId:5},
        {id:584,verb:"deliver",forms:{base:"deliver",presentParticiple:"delivering",past:"delivered",pastParticiple:"delivered",thirdPerson:"delivers"},banglaMeaning:"বিতরণ করা",example:"The mail is delivered daily.",categoryId:3},
        {id:585,verb:"demand",forms:{base:"demand",presentParticiple:"demanding",past:"demanded",pastParticiple:"demanded",thirdPerson:"demands"},banglaMeaning:"দাবি করা",example:"He demanded an apology.",categoryId:2},
        {id:586,verb:"demonstrate",forms:{base:"demonstrate",presentParticiple:"demonstrating",past:"demonstrated",pastParticiple:"demonstrated",thirdPerson:"demonstrates"},banglaMeaning:"প্রদর্শন করা",example:"He demonstrated the new software.",categoryId:2},
        {id:587,verb:"denote",forms:{base:"denote",presentParticiple:"denoting",past:"denoted",pastParticiple:"denoted",thirdPerson:"denotes"},banglaMeaning:"চিহ্নিত করা",example:"The red light denotes danger.",categoryId:7},
        {id:588,verb:"deny",forms:{base:"deny",presentParticiple:"denying",past:"denied",pastParticiple:"denied",thirdPerson:"denies"},banglaMeaning:"অস্বীকার করা",example:"He denied stealing the money.",categoryId:2},
        {id:589,verb:"depart",forms:{base:"depart",presentParticiple:"departing",past:"departed",pastParticiple:"departed",thirdPerson:"departs"},banglaMeaning:"প্রস্থান করা",example:"The train departs at 6 PM.",categoryId:3},
        {id:590,verb:"depend",forms:{base:"depend",presentParticiple:"depending",past:"depended",pastParticiple:"depended",thirdPerson:"depends"},banglaMeaning:"নির্ভর করা",example:"It depends on the weather.",categoryId:12},
        {id:591,verb:"depict",forms:{base:"depict",presentParticiple:"depicting",past:"depicted",pastParticiple:"depicted",thirdPerson:"depicts"},banglaMeaning:"চিত্রিত করা",example:"The painting depicts a forest.",categoryId:6},
        {id:592,verb:"deploy",forms:{base:"deploy",presentParticiple:"deploying",past:"deployed",pastParticiple:"deployed",thirdPerson:"deploys"},banglaMeaning:"মোতায়েন করা",example:"Troops were deployed to the border.",categoryId:1},
        {id:593,verb:"deposit",forms:{base:"deposit",presentParticiple:"depositing",past:"deposited",pastParticiple:"deposited",thirdPerson:"deposits"},banglaMeaning:"জমা রাখা",example:"He deposited money in the bank.",categoryId:9},
        {id:594,verb:"depress",forms:{base:"depress",presentParticiple:"depressing",past:"depressed",pastParticiple:"depressed",thirdPerson:"depresses"},banglaMeaning:"বিষণ্ণ করা",example:"The bad news depressed him.",categoryId:5},
        {id:595,verb:"deprive",forms:{base:"deprive",presentParticiple:"depriving",past:"deprived",pastParticiple:"deprived",thirdPerson:"deprives"},banglaMeaning:"বঞ্চিত করা",example:"Sleep deprivation can be harmful.",categoryId:1},
        {id:596,verb:"derive",forms:{base:"derive",presentParticiple:"deriving",past:"derived",pastParticiple:"derived",thirdPerson:"derives"},banglaMeaning:"উৎপন্ন হওয়া",example:"Many words are derived from Latin.",categoryId:8},
        {id:597,verb:"descend",forms:{base:"descend",presentParticiple:"descending",past:"descended",pastParticiple:"descended",thirdPerson:"descends"},banglaMeaning:"নিচে নামা",example:"The sun began to descend.",categoryId:3},
        {id:598,verb:"describe",forms:{base:"describe",presentParticiple:"describing",past:"described",pastParticiple:"described",thirdPerson:"describes"},banglaMeaning:"বর্ণনা করা",example:"Describe the person you saw.",categoryId:2},
        {id:599,verb:"desert",forms:{base:"desert",presentParticiple:"deserting",past:"deserted",pastParticiple:"deserted",thirdPerson:"deserts"},banglaMeaning:"পরিত্যাগ করা",example:"He deserted his post.",categoryId:1},
        {id:600,verb:"deserve",forms:{base:"deserve",presentParticiple:"deserving",past:"deserved",pastParticiple:"deserved",thirdPerson:"deserves"},banglaMeaning:"যোগ্য হওয়া",example:"You deserve a reward.",categoryId:12},
        {id:601,verb:"design",forms:{base:"design",presentParticiple:"designing",past:"designed",pastParticiple:"designed",thirdPerson:"designs"},banglaMeaning:"নকশা করা",example:"Who designed this building?",categoryId:6},
        {id:602,verb:"desire",forms:{base:"desire",presentParticiple:"desiring",past:"desired",pastParticiple:"desired",thirdPerson:"desires"},banglaMeaning:"ইচ্ছা করা",example:"We all desire happiness.",categoryId:5},
        {id:603,verb:"destroy",forms:{base:"destroy",presentParticiple:"destroying",past:"destroyed",pastParticiple:"destroyed",thirdPerson:"destroys"},banglaMeaning:"ধ্বংস করা",example:"The fire destroyed the forest.",categoryId:8},
        {id:604,verb:"detach",forms:{base:"detach",presentParticiple:"detaching",past:"detached",pastParticiple:"detached",thirdPerson:"detaches"},banglaMeaning:"বিচ্ছিন্ন করা",example:"Detach the coupon from the page.",categoryId:1},
        {id:605,verb:"detect",forms:{base:"detect",presentParticiple:"detecting",past:"detected",pastParticiple:"detected",thirdPerson:"detects"},banglaMeaning:"শনাক্ত করা",example:"Dogs can detect drugs.",categoryId:7},
        {id:606,verb:"deter",forms:{base:"deter",presentParticiple:"deterring",past:"deterred",pastParticiple:"deterred",thirdPerson:"deters"},banglaMeaning:"নিবৃত্ত করা",example:"Failure did not deter him.",categoryId:1},
        {id:607,verb:"determine",forms:{base:"determine",presentParticiple:"determining",past:"determined",pastParticiple:"determined",thirdPerson:"determines"},banglaMeaning:"নির্ধারণ করা",example:"They determined the cause of death.",categoryId:4},
        {id:608,verb:"develop",forms:{base:"develop",presentParticiple:"developing",past:"developed",pastParticiple:"developed",thirdPerson:"develops"},banglaMeaning:"উন্নত করা",example:"Exercise develops muscles.",categoryId:8},
        {id:609,verb:"devise",forms:{base:"devise",presentParticiple:"devising",past:"devised",pastParticiple:"devised",thirdPerson:"devises"},banglaMeaning:"উদ্ভাবন করা",example:"They devised a new plan.",categoryId:6},
        {id:610,verb:"devote",forms:{base:"devote",presentParticiple:"devoting",past:"devoted",pastParticiple:"devoted",thirdPerson:"devotes"},banglaMeaning:"উৎসর্গ করা",example:"She devoted her life to art.",categoryId:5},
        {id:611,verb:"devour",forms:{base:"devour",presentParticiple:"devouring",past:"devoured",pastParticiple:"devoured",thirdPerson:"devours"},banglaMeaning:"গোগ্রাসে গেলা",example:"He devoured the burger.",categoryId:10},
        {id:612,verb:"diagnose",forms:{base:"diagnose",presentParticiple:"diagnosing",past:"diagnosed",pastParticiple:"diagnosed",thirdPerson:"diagnoses"},banglaMeaning:"রোগ নির্ণয় করা",example:"The doctor diagnosed the flu.",categoryId:4},
        {id:613,verb:"dictate",forms:{base:"dictate",presentParticiple:"dictating",past:"dictated",pastParticiple:"dictated",thirdPerson:"dictates"},banglaMeaning:"নির্দেশ দেওয়া/বলা",example:"He dictated the letter.",categoryId:2},
        {id:614,verb:"die",forms:{base:"die",presentParticiple:"dying",past:"died",pastParticiple:"died",thirdPerson:"dies"},banglaMeaning:"মারা যাওয়া",example:"Plants die without water.",categoryId:12},
        {id:615,verb:"differ",forms:{base:"differ",presentParticiple:"differing",past:"differed",pastParticiple:"differed",thirdPerson:"differs"},banglaMeaning:"ভিন্ন হওয়া",example:"Their opinions differ.",categoryId:11},
        {id:616,verb:"differentiate",forms:{base:"differentiate",presentParticiple:"differentiating",past:"differentiated",pastParticiple:"differentiated",thirdPerson:"differentiates"},banglaMeaning:"পার্থক্য করা",example:"Can you differentiate the twins?",categoryId:4},
        {id:617,verb:"diffuse",forms:{base:"diffuse",presentParticiple:"diffusing",past:"diffused",pastParticiple:"diffused",thirdPerson:"diffuses"},banglaMeaning:"ছড়িয়ে পড়া",example:"The scent diffused through the room.",categoryId:3},
        {id:618,verb:"dig",forms:{base:"dig",presentParticiple:"digging",past:"dug",pastParticiple:"dug",thirdPerson:"digs"},banglaMeaning:"খনন করা",example:"They are digging a hole.",categoryId:1},
        {id:619,verb:"digest",forms:{base:"digest",presentParticiple:"digesting",past:"digested",pastParticiple:"digested",thirdPerson:"digests"},banglaMeaning:"হজম করা",example:"The body digests food slowly.",categoryId:10},
        {id:620,verb:"dignify",forms:{base:"dignify",presentParticiple:"dignifying",past:"dignified",pastParticiple:"dignified",thirdPerson:"dignifies"},banglaMeaning:"মর্যাদা দেওয়া",example:"He dignified the occasion.",categoryId:11},
        {id:621,verb:"digress",forms:{base:"digress",presentParticiple:"digressing",past:"digressed",pastParticiple:"digressed",thirdPerson:"digresses"},banglaMeaning:"মূল বিষয় থেকে সরে যাওয়া",example:"Stop digressing and focus.",categoryId:2},
        {id:622,verb:"dilute",forms:{base:"dilute",presentParticiple:"diluting",past:"diluted",pastParticiple:"diluted",thirdPerson:"dilutes"},banglaMeaning:"পাতলা করা",example:"Dilute the juice with water.",categoryId:8},
        {id:623,verb:"dim",forms:{base:"dim",presentParticiple:"dimming",past:"dimmed",pastParticiple:"dimmed",thirdPerson:"dims"},banglaMeaning:"ম্লান করা",example:"He dimmed the lights.",categoryId:8},
        {id:624,verb:"diminish",forms:{base:"diminish",presentParticiple:"diminishing",past:"diminished",pastParticiple:"diminished",thirdPerson:"diminishes"},banglaMeaning:"হ্রাস করা",example:"The pain began to diminish.",categoryId:8},
        {id:625,verb:"dine",forms:{base:"dine",presentParticiple:"dining",past:"dined",pastParticiple:"dined",thirdPerson:"dines"},banglaMeaning:"রাতের খাবার খাওয়া",example:"We dined at a restaurant.",categoryId:10},
        {id:626,verb:"dip",forms:{base:"dip",presentParticiple:"dipping",past:"dipped",pastParticiple:"dipped",thirdPerson:"dips"},banglaMeaning:"ডুবানো",example:"Dip the bread into the soup.",categoryId:1},
        {id:627,verb:"direct",forms:{base:"direct",presentParticiple:"directing",past:"directed",pastParticiple:"directed",thirdPerson:"directs"},banglaMeaning:"নির্দেশনা দেওয়া",example:"He directed the movie.",categoryId:2},
        {id:628,verb:"disable",forms:{base:"disable",presentParticiple:"disabling",past:"disabled",pastParticiple:"disabled",thirdPerson:"disables"},banglaMeaning:"অক্ষম করা",example:"The injury disabled him.",categoryId:8},
        {id:629,verb:"disagree",forms:{base:"disagree",presentParticiple:"disagreeing",past:"disagreed",pastParticiple:"disagreed",thirdPerson:"disagrees"},banglaMeaning:"একমত না হওয়া",example:"I disagree with you.",categoryId:2},
        {id:630,verb:"disappear",forms:{base:"disappear",presentParticiple:"disappearing",past:"disappeared",pastParticiple:"disappeared",thirdPerson:"disappears"},banglaMeaning:"অদৃশ্য হওয়া",example:"The magician disappeared.",categoryId:12},
        {id:631,verb:"disappoint",forms:{base:"disappoint",presentParticiple:"disappointing",past:"disappointed",pastParticiple:"disappointed",thirdPerson:"disappoints"},banglaMeaning:"হতাশ করা",example:"Don't disappoint your parents.",categoryId:5},
        {id:632,verb:"disapprove",forms:{base:"disapprove",presentParticiple:"disapproving",past:"disapproved",pastParticiple:"disapproved",thirdPerson:"disapproves"},banglaMeaning:"নামঞ্জুর করা",example:"They disapprove of smoking.",categoryId:5},
        {id:633,verb:"discard",forms:{base:"discard",presentParticiple:"discarding",past:"discarded",pastParticiple:"discarded",thirdPerson:"discards"},banglaMeaning:"বাতিল করা",example:"Discard old clothes.",categoryId:1},
        {id:634,verb:"discharge",forms:{base:"discharge",presentParticiple:"discharging",past:"discharged",pastParticiple:"discharged",thirdPerson:"discharges"},banglaMeaning:"খালাস দেওয়া/মুক্ত করা",example:"The patient was discharged.",categoryId:1},
        {id:635,verb:"discipline",forms:{base:"discipline",presentParticiple:"disciplining",past:"disciplined",pastParticiple:"disciplined",thirdPerson:"disciplines"},banglaMeaning:"শৃঙ্খলিত করা",example:"Discipline your mind.",categoryId:4},
        {id:636,verb:"disclose",forms:{base:"disclose",presentParticiple:"disclosing",past:"disclosed",pastParticiple:"disclosed",thirdPerson:"discloses"},banglaMeaning:"ফাঁস করা",example:"He disclosed the secret.",categoryId:2},
        {id:637,verb:"disconnect",forms:{base:"disconnect",presentParticiple:"disconnecting",past:"disconnected",pastParticiple:"disconnected",thirdPerson:"disconnects"},banglaMeaning:"বিচ্ছিন্ন করা",example:"Disconnect the internet.",categoryId:1},
        {id:638,verb:"discontinue",forms:{base:"discontinue",presentParticiple:"discontinuing",past:"discontinued",pastParticiple:"discontinued",thirdPerson:"discontinues"},banglaMeaning:"বন্ধ করা",example:"The model was discontinued.",categoryId:8},
        {id:639,verb:"discourage",forms:{base:"discourage",presentParticiple:"discouraging",past:"discouraged",pastParticiple:"discouraged",thirdPerson:"discourages"},banglaMeaning:"নিরুৎসাহিত করা",example:"Don't discourage him.",categoryId:5},
        {id:640,verb:"discover",forms:{base:"discover",presentParticiple:"discovering",past:"discovered",pastParticiple:"discovered",thirdPerson:"discovers"},banglaMeaning:"আবিষ্কার করা",example:"Columbus discovered America.",categoryId:7},
        {id:641,verb:"discriminate",forms:{base:"discriminate",presentParticiple:"discriminating",past:"discriminated",pastParticiple:"discriminated",thirdPerson:"discriminates"},banglaMeaning:"বৈষম্য করা",example:"Don't discriminate against them.",categoryId:4},
        {id:642,verb:"discuss",forms:{base:"discuss",presentParticiple:"discussing",past:"discussed",pastParticiple:"discussed",thirdPerson:"discusses"},banglaMeaning:"আলোচনা করা",example:"Let's discuss the issue.",categoryId:2},
        {id:643,verb:"disdain",forms:{base:"disdain",presentParticiple:"disdaining",past:"disdained",pastParticiple:"disdained",thirdPerson:"disdains"},banglaMeaning:"অবজ্ঞা করা",example:"He disdained the offer.",categoryId:5},
        {id:644,verb:"disgrace",forms:{base:"disgrace",presentParticiple:"disgraceing",past:"disgraced",pastParticiple:"disgraced",thirdPerson:"disgraces"},banglaMeaning:"লজ্জিত করা",example:"He disgraced his family.",categoryId:5},
        {id:645,verb:"disguise",forms:{base:"disguise",presentParticiple:"disguising",past:"disguised",pastParticiple:"disguised",thirdPerson:"disguises"},banglaMeaning:"ছদ্মবেশ ধারণ করা",example:"She disguised herself as a boy.",categoryId:1},
        {id:646,verb:"disgust",forms:{base:"disgust",presentParticiple:"disgusting",past:"disgusted",pastParticiple:"disgusted",thirdPerson:"disgusts"},banglaMeaning:"বিরক্ত করা",example:"The smell disgusted me.",categoryId:5},
        {id:647,verb:"dish",forms:{base:"dish",presentParticiple:"dishing",past:"dished",pastParticiple:"dished",thirdPerson:"dishes"},banglaMeaning:"পরিবেশন করা",example:"She dished out the food.",categoryId:10},
        {id:648,verb:"disinfect",forms:{base:"disinfect",presentParticiple:"disinfecting",past:"disinfected",pastParticiple:"disinfected",thirdPerson:"disinfects"},banglaMeaning:"জীবাণুমুক্ত করা",example:"Disinfect the wound.",categoryId:1},
        {id:649,verb:"dislike",forms:{base:"dislike",presentParticiple:"disliking",past:"disliked",pastParticiple:"disliked",thirdPerson:"dislikes"},banglaMeaning:"অপছন্দ করা",example:"I dislike loud music.",categoryId:5},
        {id:650,verb:"dislocate",forms:{base:"dislocate",presentParticiple:"dislocating",past:"dislocated",pastParticiple:"dislocated",thirdPerson:"dislocates"},banglaMeaning:"স্থানচ্যুত করা",example:"He dislocated his shoulder.",categoryId:8},
        {id:651,verb:"dismiss",forms:{base:"dismiss",presentParticiple:"dismissing",past:"dismissed",pastParticiple:"dismissed",thirdPerson:"dismisses"},banglaMeaning:"বরখাস্ত করা",example:"The boss dismissed the worker.",categoryId:1},
        {id:652,verb:"dismount",forms:{base:"dismount",presentParticiple:"dismounting",past:"dismounted",pastParticiple:"dismounted",thirdPerson:"dismounts"},banglaMeaning:"নামা (ঘোড়া/বাইক থেকে)",example:"He dismounted from the horse.",categoryId:3},
        {id:653,verb:"disobey",forms:{base:"disobey",presentParticiple:"disobeying",past:"disobeyed",pastParticiple:"disobeyed",thirdPerson:"disobeys"},banglaMeaning:"অমান্য করা",example:"Never disobey your elders.",categoryId:2},
        {id:654,verb:"disorder",forms:{base:"disorder",presentParticiple:"disordering",past:"disordered",pastParticiple:"disordered",thirdPerson:"disorders"},banglaMeaning:"বিশৃঙ্খল করা",example:"The wind disordered her hair.",categoryId:8},
        {id:655,verb:"dispatch",forms:{base:"dispatch",presentParticiple:"dispatching",past:"dispatched",pastParticiple:"dispatched",thirdPerson:"dispatches"},banglaMeaning:"পাঠানো",example:"The letter was dispatched today.",categoryId:3},
        {id:656,verb:"dispel",forms:{base:"dispel",presentParticiple:"dispelling",past:"dispelled",pastParticiple:"dispelled",thirdPerson:"dispels"},banglaMeaning:"দূর করা",example:"The sun dispelled the fog.",categoryId:1},
        {id:657,verb:"dispense",forms:{base:"dispense",presentParticiple:"dispensing",past:"dispensed",pastParticiple:"dispensed",thirdPerson:"dispenses"},banglaMeaning:"বিতরণ করা",example:"The machine dispenses coffee.",categoryId:10},
        {id:658,verb:"disperse",forms:{base:"disperse",presentParticiple:"dispersing",past:"dispersed",pastParticiple:"dispersed",thirdPerson:"disperses"},banglaMeaning:"ছত্রভঙ্গ করা",example:"The crowd dispersed quickly.",categoryId:3},
        {id:659,verb:"displace",forms:{base:"displace",presentParticiple:"displacing",past:"displaced",pastParticiple:"displaced",thirdPerson:"displaces"},banglaMeaning:"প্রতিস্থাপন করা",example:"The flood displaced many people.",categoryId:3},
        {id:660,verb:"display",forms:{base:"display",presentParticiple:"displaying",past:"displayed",pastParticiple:"displayed",thirdPerson:"displays"},banglaMeaning:"প্রদর্শন করা",example:"She displayed her talents.",categoryId:7},
        {id:661,verb:"displease",forms:{base:"displease",presentParticiple:"displeasing",past:"displeased",pastParticiple:"displeased",thirdPerson:"displeases"},banglaMeaning:"অসন্তুষ্ট করা",example:"He was displeased with the result.",categoryId:5},
        {id:662,verb:"dispose",forms:{base:"dispose",presentParticiple:"disposing",past:"disposed",pastParticiple:"disposed",thirdPerson:"disposes"},banglaMeaning:"বিন্যাস করা/ফেলা",example:"Dispose of the waste properly.",categoryId:1},
        {id:663,verb:"dispute",forms:{base:"dispute",presentParticiple:"disputing",past:"disputed",pastParticiple:"disputed",thirdPerson:"disputes"},banglaMeaning:"বিতর্ক করা",example:"They disputed the bill.",categoryId:2},
        {id:664,verb:"disqualify",forms:{base:"disqualify",presentParticiple:"disqualifying",past:"disqualified",pastParticiple:"disqualified",thirdPerson:"disqualifies"},banglaMeaning:"অযোগ্য করা",example:"He was disqualified for cheating.",categoryId:1},
        {id:665,verb:"disregard",forms:{base:"disregard",presentParticiple:"disregarding",past:"disregarded",pastParticiple:"disregarded",thirdPerson:"disregards"},banglaMeaning:"উপেক্ষা করা",example:"Disregard that last comment.",categoryId:4},
        {id:666,verb:"disrupt",forms:{base:"disrupt",presentParticiple:"disrupting",past:"disrupted",pastParticiple:"disrupted",thirdPerson:"disrupts"},banglaMeaning:"বিঘ্নিত করা",example:"The strike disrupted traffic.",categoryId:1},
        {id:667,verb:"dissolve",forms:{base:"dissolve",presentParticiple:"dissolving",past:"dissolved",pastParticiple:"dissolved",thirdPerson:"dissolves"},banglaMeaning:"দ্রবীভূত হওয়া",example:"Salt dissolves in water.",categoryId:8},
        {id:668,verb:"distinguish",forms:{base:"distinguish",presentParticiple:"distinguishing",past:"distinguished",pastParticiple:"distinguished",thirdPerson:"distinguishes"},banglaMeaning:"পার্থক্য করা",example:"I can't distinguish the two colors.",categoryId:4},
        {id:669,verb:"distort",forms:{base:"distort",presentParticiple:"distorting",past:"distorted",pastParticiple:"distorted",thirdPerson:"distorts"},banglaMeaning:"বিকৃত করা",example:"The mirror distorted his face.",categoryId:8},
        {id:670,verb:"distract",forms:{base:"distract",presentParticiple:"distracting",past:"distracted",pastParticiple:"distracted",thirdPerson:"distracts"},banglaMeaning:"মনোযোগ সরানো",example:"Don't distract me while I study.",categoryId:5},
        {id:671,verb:"distribute",forms:{base:"distribute",presentParticiple:"distributing",past:"distributed",pastParticiple:"distributed",thirdPerson:"distributes"},banglaMeaning:"বিতরণ করা",example:"Distribute the papers.",categoryId:1},
        {id:672,verb:"distrust",forms:{base:"distrust",presentParticiple:"distrusting",past:"distrusted",pastParticiple:"distrusted",thirdPerson:"distrusts"},banglaMeaning:"অবিশ্বাস করা",example:"I distrust his motives.",categoryId:5},
        {id:673,verb:"disturb",forms:{base:"disturb",presentParticiple:"disturbing",past:"disturbed",pastParticiple:"disturbed",thirdPerson:"disturbs"},banglaMeaning:"বিরক্ত করা",example:"Do not disturb me.",categoryId:1},
        {id:674,verb:"dive",forms:{base:"dive",presentParticiple:"diving",past:"dived",pastParticiple:"dived",thirdPerson:"dives"},banglaMeaning:"ডুব দেওয়া",example:"He dived into the pool.",categoryId:3},
        {id:675,verb:"divert",forms:{base:"divert",presentParticiple:"diverting",past:"diverted",pastParticiple:"diverted",thirdPerson:"diverts"},banglaMeaning:"সরিয়ে নেওয়া/ঘুরানো",example:"Traffic was diverted.",categoryId:3},
        {id:676,verb:"divide",forms:{base:"divide",presentParticiple:"dividing",past:"divided",pastParticiple:"divided",thirdPerson:"divides"},banglaMeaning:"ভাগ করা",example:"Divide the cake into four.",categoryId:6},
        {id:677,verb:"divulge",forms:{base:"divulge",presentParticiple:"divulging",past:"divulged",pastParticiple:"divulged",thirdPerson:"divulges"},banglaMeaning:"ফাঁস করা",example:"She refused to divulge the secret.",categoryId:2},
        {id:678,verb:"do",forms:{base:"do",presentParticiple:"doing",past:"did",pastParticiple:"done",thirdPerson:"does"},banglaMeaning:"করা",example:"Do your homework.",categoryId:1},
        {id:679,verb:"dock",forms:{base:"dock",presentParticiple:"docking",past:"docked",pastParticiple:"docked",thirdPerson:"docks"},banglaMeaning:"নঙ্গর করা",example:"The ship docked at the port.",categoryId:3},
        {id:680,verb:"document",forms:{base:"document",presentParticiple:"documenting",past:"documented",pastParticiple:"documented",thirdPerson:"documents"},banglaMeaning:"দলিলভুক্ত করা",example:"Document your findings.",categoryId:1},
        {id:681,verb:"dodge",forms:{base:"dodge",presentParticiple:"dodging",past:"dodged",pastParticiple:"dodged",thirdPerson:"dodges"},banglaMeaning:"গা বাঁচানো",example:"He dodged the ball.",categoryId:3},
        {id:682,verb:"dominate",forms:{base:"dominate",presentParticiple:"dominating",past:"dominated",pastParticiple:"dominated",thirdPerson:"dominates"},banglaMeaning:"শাসন করা",example:"She dominates the discussion.",categoryId:1},
        {id:683,verb:"donate",forms:{base:"donate",presentParticiple:"donating",past:"donated",pastParticiple:"donated",thirdPerson:"donates"},banglaMeaning:"দান করা",example:"Donate blood, save lives.",categoryId:1},
        {id:684,verb:"doom",forms:{base:"doom",presentParticiple:"dooming",past:"doomed",pastParticiple:"doomed",thirdPerson:"dooms"},banglaMeaning:"দণ্ডাজ্ঞা দেওয়া",example:"The project was doomed from the start.",categoryId:8},
        {id:685,verb:"dot",forms:{base:"dot",presentParticiple:"dotting",past:"dotted",pastParticiple:"dotted",thirdPerson:"dots"},banglaMeaning:"বিন্দু দেওয়া",example:"Dot your i's.",categoryId:1},
        {id:686,verb:"doubt",forms:{base:"doubt",presentParticiple:"doubting",past:"doubted",pastParticiple:"doubted",thirdPerson:"doubts"},banglaMeaning:"সন্দেহ করা",example:"I doubt his story.",categoryId:4},
        {id:687,verb:"download",forms:{base:"download",presentParticiple:"downloading",past:"downloaded",pastParticiple:"downloaded",thirdPerson:"downloads"},banglaMeaning:"ডাউনলোড করা",example:"Download the file.",categoryId:1},
        {id:688,verb:"doze",forms:{base:"doze",presentParticiple:"dozing",past:"dozed",pastParticiple:"dozed",thirdPerson:"dozes"},banglaMeaning:"ঝিমানো",example:"He dozed off in the chair.",categoryId:12},
        {id:689,verb:"drag",forms:{base:"drag",presentParticiple:"dragging",past:"dragged",pastParticiple:"dragged",thirdPerson:"drags"},banglaMeaning:"টানা",example:"Don't drag the table.",categoryId:3},
        {id:690,verb:"drain",forms:{base:"drain",presentParticiple:"draining",past:"drained",pastParticiple:"drained",thirdPerson:"drains"},banglaMeaning:"নিষ্কাশন করা",example:"Drain the water from the pasta.",categoryId:8},
        {id:691,verb:"draw",forms:{base:"draw",presentParticiple:"drawing",past:"drew",pastParticiple:"drawn",thirdPerson:"draws"},banglaMeaning:"আঁকা",example:"She drew a picture.",categoryId:6},
        {id:692,verb:"dread",forms:{base:"dread",presentParticiple:"dreading",past:"dreaded",pastParticiple:"dreaded",thirdPerson:"dreads"},banglaMeaning:"ভীত হওয়া",example:"I dread the exams.",categoryId:5},
        {id:693,verb:"dream",forms:{base:"dream",presentParticiple:"dreaming",past:"dreamt",pastParticiple:"dreamt",thirdPerson:"dreams"},banglaMeaning:"স্বপ্ন দেখা",example:"I dreamed of flying.",categoryId:4},
        {id:694,verb:"drench",forms:{base:"drench",presentParticiple:"drenching",past:"drenched",pastParticiple:"drenched",thirdPerson:"drenches"},banglaMeaning:"ভেজান",example:"The rain drenched us.",categoryId:8},
        {id:695,verb:"dress",forms:{base:"dress",presentParticiple:"dressing",past:"dressed",pastParticiple:"dressed",thirdPerson:"dresses"},banglaMeaning:"পোশাক পরা",example:"Get dressed quickly.",categoryId:1},
        {id:696,verb:"drift",forms:{base:"drift",presentParticiple:"drifting",past:"drifted",pastParticiple:"drifted",thirdPerson:"drifts"},banglaMeaning:"ভেসে যাওয়া",example:"The boat drifted away.",categoryId:3},
        {id:697,verb:"drill",forms:{base:"drill",presentParticiple:"drilling",past:"drilled",pastParticiple:"drilled",thirdPerson:"drills"},banglaMeaning:"ছিদ্র করা",example:"Drill a hole in the wall.",categoryId:1},
        {id:698,verb:"drink",forms:{base:"drink",presentParticiple:"drinking",past:"drank",pastParticiple:"drunk",thirdPerson:"drinks"},banglaMeaning:"পান করা",example:"Drink plenty of water.",categoryId:10},
        {id:699,verb:"drip",forms:{base:"drip",presentParticiple:"dripping",past:"dripped",pastParticiple:"dripped",thirdPerson:"drips"},banglaMeaning:"ফোঁটা ফোঁটা পড়া",example:"The tap is dripping.",categoryId:3},
        {id:700,verb:"drive",forms:{base:"drive",presentParticiple:"driving",past:"drove",pastParticiple:"driven",thirdPerson:"drives"},banglaMeaning:"চালানো",example:"Can you drive a car?",categoryId:3},
        {id:701,verb:"drizzle",forms:{base:"drizzle",presentParticiple:"drizzling",past:"drizzled",pastParticiple:"drizzled",thirdPerson:"drizzles"},banglaMeaning:"গুঁড়ি গুঁড়ি বৃষ্টি হওয়া",example:"It's drizzling outside.",categoryId:12},
        {id:702,verb:"droop",forms:{base:"droop",presentParticiple:"drooping",past:"drooped",pastParticiple:"drooped",thirdPerson:"droops"},banglaMeaning:"নুয়ে পড়া",example:"The flowers began to droop.",categoryId:8},
        {id:703,verb:"drop",forms:{base:"drop",presentParticiple:"dropping",past:"dropped",pastParticiple:"dropped",thirdPerson:"drops"},banglaMeaning:"ফেলে দেওয়া",example:"Don't drop the glass.",categoryId:3},
        {id:704,verb:"drown",forms:{base:"drown",presentParticiple:"drowning",past:"drowned",pastParticiple:"drowned",thirdPerson:"drowns"},banglaMeaning:"ডুবে যাওয়া",example:"He almost drowned in the river.",categoryId:12},
        {id:705,verb:"drum",forms:{base:"drum",presentParticiple:"drumming",past:"drummed",pastParticiple:"drummed",thirdPerson:"drums"},banglaMeaning:"ঢোল বাজানো",example:"He drummed on the table.",categoryId:1},
        {id:706,verb:"dry",forms:{base:"dry",presentParticiple:"drying",past:"dried",pastParticiple:"dried",thirdPerson:"drys"},banglaMeaning:"শুকানো",example:"Dry your hands.",categoryId:1},
        {id:707,verb:"dub",forms:{base:"dub",presentParticiple:"dubbing",past:"dubbed",pastParticiple:"dubbed",thirdPerson:"dubs"},banglaMeaning:"নাম দেওয়া/ডাবিং করা",example:"The movie was dubbed in Bengali.",categoryId:6},
        {id:708,verb:"duck",forms:{base:"duck",presentParticiple:"ducking",past:"ducked",pastParticiple:"ducked",thirdPerson:"ducks"},banglaMeaning:"মাথা নিচু করা",example:"Duck your head under the door.",categoryId:3},
        {id:709,verb:"dump",forms:{base:"dump",presentParticiple:"dumping",past:"dumped",pastParticiple:"dumped",thirdPerson:"dumps"},banglaMeaning:"ফেলে দেওয়া (আবর্জনা)",example:"Don't dump trash here.",categoryId:1},
        {id:710,verb:"duplicate",forms:{base:"duplicate",presentParticiple:"duplicating",past:"duplicated",pastParticiple:"duplicated",thirdPerson:"duplicates"},banglaMeaning:"নকল করা",example:"Duplicate this key.",categoryId:6},
        {id:711,verb:"dust",forms:{base:"dust",presentParticiple:"dusting",past:"dusted",pastParticiple:"dusted",thirdPerson:"dusts"},banglaMeaning:"ঝাড়া (ধুলো)",example:"Dust the furniture.",categoryId:1},
        {id:712,verb:"dwell",forms:{base:"dwell",presentParticiple:"dwelling",past:"dwelt",pastParticiple:"dwelt",thirdPerson:"dwells"},banglaMeaning:"বাস করা",example:"They dwell in the forest.",categoryId:12},
        {id:713,verb:"dye",forms:{base:"dye",presentParticiple:"dyeing",past:"dyed",pastParticiple:"dyed",thirdPerson:"dyes"},banglaMeaning:"রং করা (চুল/কাপড়)",example:"She dyed her hair red.",categoryId:6},
        {id:714,verb:"damage",forms:{base:"damage",presentParticiple:"damaging",past:"damaged",pastParticiple:"damaged",thirdPerson:"damages"},banglaMeaning:"ক্ষতি করা",example:"The crash damaged the car.",categoryId:8},
        {id:715,verb:"dampen",forms:{base:"dampen",presentParticiple:"dampening",past:"dampened",pastParticiple:"dampened",thirdPerson:"dampens"},banglaMeaning:"ভিজিয়ে দেওয়া",example:"Dampen the cloth before wiping.",categoryId:8},
        {id:716,verb:"dangle",forms:{base:"dangle",presentParticiple:"dangling",past:"dangled",pastParticiple:"dangled",thirdPerson:"dangles"},banglaMeaning:"ঝোলানো",example:"Keys dangled from his belt.",categoryId:3},
        {id:717,verb:"dart",forms:{base:"dart",presentParticiple:"darting",past:"darted",pastParticiple:"darted",thirdPerson:"darts"},banglaMeaning:"বেগে ছোটা",example:"A cat darted across the road.",categoryId:3},
        {id:718,verb:"daunt",forms:{base:"daunt",presentParticiple:"daunting",past:"daunted",pastParticiple:"daunted",thirdPerson:"daunts"},banglaMeaning:"ভীত করা",example:"The task did not daunt him.",categoryId:5},
        {id:719,verb:"dawn",forms:{base:"dawn",presentParticiple:"dawning",past:"dawned",pastParticiple:"dawned",thirdPerson:"dawns"},banglaMeaning:"ভোর হওয়া/উদয় হওয়া",example:"The truth finally dawned on me.",categoryId:4},
        {id:720,verb:"debase",forms:{base:"debase",presentParticiple:"debasing",past:"debased",pastParticiple:"debased",thirdPerson:"debases"},banglaMeaning:"মান নামানো",example:"Don't debase yourself.",categoryId:11},
        {id:721,verb:"debilitate",forms:{base:"debilitate",presentParticiple:"debilitating",past:"debilitated",pastParticiple:"debilitated",thirdPerson:"debilitates"},banglaMeaning:"দুর্বল করা",example:"The disease debilitated him.",categoryId:8},
        {id:722,verb:"debrief",forms:{base:"debrief",presentParticiple:"debriefing",past:"debriefed",pastParticiple:"debriefed",thirdPerson:"debriefs"},banglaMeaning:"জিজ্ঞাসাবাদ করা",example:"The pilots were debriefed.",categoryId:2},
        {id:723,verb:"debug",forms:{base:"debug",presentParticiple:"debugging",past:"debugged",pastParticiple:"debugged",thirdPerson:"debugs"},banglaMeaning:"ত্রুটি সংশোধন (সফটওয়্যার)",example:"He is debugging the code.",categoryId:1},
        {id:724,verb:"debunk",forms:{base:"debunk",presentParticiple:"debunking",past:"debunked",pastParticiple:"debunked",thirdPerson:"debunks"},banglaMeaning:"ভুল প্রমাণ করা",example:"The myth was debunked.",categoryId:4},
        {id:725,verb:"decapitate",forms:{base:"decapitate",presentParticiple:"decapitating",past:"decapitated",pastParticiple:"decapitated",thirdPerson:"decapitates"},banglaMeaning:"শিরশ্ছেদ করা",example:"The statue was decapitated.",categoryId:1},
        {id:726,verb:"decentralize",forms:{base:"decentralize",presentParticiple:"decentralizing",past:"decentralized",pastParticiple:"decentralized",thirdPerson:"decentralizes"},banglaMeaning:"বিকেন্দ্রীকরণ করা",example:"They decentralized the administration.",categoryId:1},
        {id:727,verb:"decipher",forms:{base:"decipher",presentParticiple:"deciphering",past:"deciphered",pastParticiple:"deciphered",thirdPerson:"deciphers"},banglaMeaning:" পাঠোদ্ধার করা",example:"Can you decipher this code?",categoryId:4},
        {id:728,verb:"declaim",forms:{base:"declaim",presentParticiple:"declaiming",past:"declaimed",pastParticiple:"declaimed",thirdPerson:"declaims"},banglaMeaning:"বক্তৃতা দেওয়া",example:"He declaimed his speech.",categoryId:2},
        {id:729,verb:"declassify",forms:{base:"declassify",presentParticiple:"declassifying",past:"declassified",pastParticiple:"declassified",thirdPerson:"declassifies"},banglaMeaning:"গোপনীয়তা তুলে নেওয়া",example:"Secret documents were declassified.",categoryId:2},
        {id:730,verb:"declutter",forms:{base:"declutter",presentParticiple:"decluttering",past:"decluttered",pastParticiple:"decluttered",thirdPerson:"declutters"},banglaMeaning:"অপ্রয়োজনীয় জিনিস সরানো",example:"I need to declutter my desk.",categoryId:1},
        {id:731,verb:"decode",forms:{base:"decode",presentParticiple:"decoding",past:"decoded",pastParticiple:"decoded",thirdPerson:"decodes"},banglaMeaning:"সংকেত উদ্ধার করা",example:"Decode the message.",categoryId:4},
        {id:732,verb:"decolonize",forms:{base:"decolonize",presentParticiple:"decolonizing",past:"decolonized",pastParticiple:"decolonized",thirdPerson:"decolonizes"},banglaMeaning:"উপনিবেশ মুক্ত করা",example:"They fought to decolonize their nation.",categoryId:1},
        {id:733,verb:"decommission",forms:{base:"decommission",presentParticiple:"decommissioning",past:"decommissioned",pastParticiple:"decommissioned",thirdPerson:"decommissions"},banglaMeaning:"অকেজো ঘোষণা করা",example:"The old ship was decommissioned.",categoryId:1},
        {id:734,verb:"decompose",forms:{base:"decompose",presentParticiple:"decomposing",past:"decomposed",pastParticiple:"decomposed",thirdPerson:"decomposes"},banglaMeaning:"পচন ধরা",example:"Leaves decompose over time.",categoryId:8},
        {id:735,verb:"decompress",forms:{base:"decompress",presentParticiple:"decompressing",past:"decompressed",pastParticiple:"decompressed",thirdPerson:"decompresses"},banglaMeaning:"চাপ কমানো",example:"Decompress the zipped file.",categoryId:1},
        {id:736,verb:"decontaminate",forms:{base:"decontaminate",presentParticiple:"decontaminating",past:"decontaminated",pastParticiple:"decontaminated",thirdPerson:"decontaminates"},banglaMeaning:"দূষণমুক্ত করা",example:"The area was decontaminated.",categoryId:1},
        {id:737,verb:"decree",forms:{base:"decree",presentParticiple:"decreeing",past:"decreed",pastParticiple:"decreed",thirdPerson:"decrees"},banglaMeaning:"আদেশ জারি করা",example:"The king decreed a new law.",categoryId:2},
        {id:738,verb:"decry",forms:{base:"decry",presentParticiple:"decrying",past:"decryed",pastParticiple:"decryed",thirdPerson:"decrys"},banglaMeaning:"নিন্দা করা",example:"The policy was decried by many.",categoryId:2},
        {id:739,verb:"dedicate",forms:{base:"dedicate",presentParticiple:"dedicating",past:"dedicated",pastParticiple:"dedicated",thirdPerson:"dedicates"},banglaMeaning:"উৎসর্গ করা",example:"He dedicated his life to teaching.",categoryId:5},
        {id:740,verb:"deface",forms:{base:"deface",presentParticiple:"defacing",past:"defaced",pastParticiple:"defaced",thirdPerson:"defaces"},banglaMeaning:"বিকৃত করা (পৃষ্ঠতল)",example:"Graffiti defaced the walls.",categoryId:8},
        {id:741,verb:"defame",forms:{base:"defame",presentParticiple:"defaming",past:"defamed",pastParticiple:"defamed",thirdPerson:"defames"},banglaMeaning:"মানহানি করা",example:"He sued them for defaming him.",categoryId:2},
        {id:742,verb:"default",forms:{base:"default",presentParticiple:"defaulting",past:"defaulted",pastParticiple:"defaulted",thirdPerson:"defaults"},banglaMeaning:"অক্ষম হওয়া (অর্থ প্রদানে)",example:"He defaulted on his loan.",categoryId:9},
        {id:743,verb:"defect",forms:{base:"defect",presentParticiple:"defecting",past:"defected",pastParticiple:"defected",thirdPerson:"defects"},banglaMeaning:"দলত্যাগ করা",example:"He defected to the other side.",categoryId:1},
        {id:744,verb:"defer",forms:{base:"defer",presentParticiple:"deferring",past:"deferred",pastParticiple:"deferred",thirdPerson:"defers"},banglaMeaning:"স্থগিত রাখা",example:"The decision was deferred.",categoryId:8},
        {id:745,verb:"defile",forms:{base:"defile",presentParticiple:"defiling",past:"defiled",pastParticiple:"defiled",thirdPerson:"defiles"},banglaMeaning:"কলুষিত করা",example:"Don't defile the temple.",categoryId:11},
        {id:746,verb:"deflate",forms:{base:"deflate",presentParticiple:"deflating",past:"deflated",pastParticiple:"deflated",thirdPerson:"deflates"},banglaMeaning:"হাওয়া বের করা",example:"The tire deflated.",categoryId:8},
        {id:747,verb:"deflect",forms:{base:"deflect",presentParticiple:"deflecting",past:"deflected",pastParticiple:"deflected",thirdPerson:"deflects"},banglaMeaning:"দিক পরিবর্তন করা",example:"He deflected the question.",categoryId:3},
        {id:748,verb:"defog",forms:{base:"defog",presentParticiple:"defogging",past:"defogged",pastParticiple:"defogged",thirdPerson:"defogs"},banglaMeaning:"কুয়াশা মুক্ত করা",example:"Defog the windshield.",categoryId:1},
        {id:749,verb:"deforest",forms:{base:"deforest",presentParticiple:"deforesting",past:"deforested",pastParticiple:"deforested",thirdPerson:"deforests"},banglaMeaning:"বন উজাড় করা",example:"The hills are being deforested.",categoryId:8},
        {id:750,verb:"deform",forms:{base:"deform",presentParticiple:"deforming",past:"deformed",pastParticiple:"deformed",thirdPerson:"deforms"},banglaMeaning:"আকৃতি নষ্ট করা",example:"The heat deforms plastic.",categoryId:8},
        {id:751,verb:"earn",forms:{base:"earn",presentParticiple:"earning",past:"earned",pastParticiple:"earned",thirdPerson:"earns"},banglaMeaning:"উপার্জন করা",example:"He earns a good salary.",categoryId:9},
        {id:752,verb:"ease",forms:{base:"ease",presentParticiple:"easing",past:"eased",pastParticiple:"eased",thirdPerson:"eases"},banglaMeaning:"সহজ বা আরামদায়ক করা",example:"This medicine will ease the pain.",categoryId:5},
        {id:753,verb:"eat",forms:{base:"eat",presentParticiple:"eating",past:"ate",pastParticiple:"eaten",thirdPerson:"eats"},banglaMeaning:"খাওয়া",example:"I eat rice every day.",categoryId:10},
        {id:754,verb:"echo",forms:{base:"echo",presentParticiple:"echoing",past:"echoed",pastParticiple:"echoed",thirdPerson:"echoes"},banglaMeaning:"প্রতিধ্বনি হওয়া",example:"His voice echoed in the hall.",categoryId:2},
        {id:755,verb:"eclipse",forms:{base:"eclipse",presentParticiple:"eclipsing",past:"eclipsed",pastParticiple:"eclipsed",thirdPerson:"eclipses"},banglaMeaning:"গ্রহণ লাগা বা আড়াল করা",example:"The moon eclipsed the sun.",categoryId:12},
        {id:756,verb:"edit",forms:{base:"edit",presentParticiple:"editing",past:"edited",pastParticiple:"edited",thirdPerson:"edits"},banglaMeaning:"সম্পাদন করা",example:"I need to edit this video.",categoryId:6},
        {id:757,verb:"educate",forms:{base:"educate",presentParticiple:"educating",past:"educated",pastParticiple:"educated",thirdPerson:"educates"},banglaMeaning:"শিক্ষা দেওয়া",example:"We must educate our children.",categoryId:2},
        {id:758,verb:"efface",forms:{base:"efface",presentParticiple:"effacing",past:"effaced",pastParticiple:"effaced",thirdPerson:"effaces"},banglaMeaning:"মুছে ফেলা",example:"Time cannot efface those memories.",categoryId:8},
        {id:759,verb:"effect",forms:{base:"effect",presentParticiple:"effecting",past:"effected",pastParticiple:"effected",thirdPerson:"effects"},banglaMeaning:"কার্যকর করা",example:"The new law effected many changes.",categoryId:1},
        {id:760,verb:"eject",forms:{base:"eject",presentParticiple:"ejecting",past:"ejected",pastParticiple:"ejected",thirdPerson:"ejects"},banglaMeaning:"বের করে দেওয়া",example:"The pilot ejected from the plane.",categoryId:3},
        {id:761,verb:"elaborate",forms:{base:"elaborate",presentParticiple:"elaborating",past:"elaborated",pastParticiple:"elaborated",thirdPerson:"elaborates"},banglaMeaning:"বিস্তারিত বলা",example:"Can you elaborate on that point?",categoryId:2},
        {id:762,verb:"elapse",forms:{base:"elapse",presentParticiple:"elapsing",past:"elapsed",pastParticiple:"elapsed",thirdPerson:"elapses"},banglaMeaning:"অতিবাহিত হওয়া (সময়)",example:"Four years have elapsed since then.",categoryId:12},
        {id:763,verb:"elate",forms:{base:"elate",presentParticiple:"elating",past:"elated",pastParticiple:"elated",thirdPerson:"elates"},banglaMeaning:"উল্লসিত করা",example:"The news elated the whole family.",categoryId:5},
        {id:764,verb:"elbow",forms:{base:"elbow",presentParticiple:"elbowing",past:"elbowed",pastParticiple:"elbowed",thirdPerson:"elbows"},banglaMeaning:"কনুই দিয়ে ধাক্কা দেওয়া",example:"He elbowed his way through the crowd.",categoryId:3},
        {id:765,verb:"elect",forms:{base:"elect",presentParticiple:"electing",past:"elected",pastParticiple:"elected",thirdPerson:"elects"},banglaMeaning:"নির্বাচিত করা",example:"They elected him as president.",categoryId:1},
        {id:766,verb:"electrify",forms:{base:"electrify",presentParticiple:"electrifying",past:"electrified",pastParticiple:"electrified",thirdPerson:"electrifies"},banglaMeaning:"বিদ্যুতায়িত করা",example:"The stadium was electrified by the goal.",categoryId:1},
        {id:767,verb:"elevate",forms:{base:"elevate",presentParticiple:"elevating",past:"elevated",pastParticiple:"elevated",thirdPerson:"elevates"},banglaMeaning:"উন্নত বা উঁচু করা",example:"The platform was elevated.",categoryId:8},
        {id:768,verb:"elicit",forms:{base:"elicit",presentParticiple:"eliciting",past:"elicited",pastParticiple:"elicited",thirdPerson:"elicits"},banglaMeaning:"বের করে আনা (তথ্য)",example:"I could elicit no response from him.",categoryId:2},
        {id:769,verb:"eliminate",forms:{base:"eliminate",presentParticiple:"eliminating",past:"eliminated",pastParticiple:"eliminated",thirdPerson:"eliminates"},banglaMeaning:"বর্জন বা বাদ দেওয়া",example:"Try to eliminate fatty foods.",categoryId:1},
        {id:770,verb:"elongate",forms:{base:"elongate",presentParticiple:"elongating",past:"elongated",pastParticiple:"elongated",thirdPerson:"elongates"},banglaMeaning:"লম্বা করা",example:"The cells elongate as they divide.",categoryId:8},
        {id:771,verb:"elope",forms:{base:"elope",presentParticiple:"eloping",past:"eloped",pastParticiple:"eloped",thirdPerson:"elopes"},banglaMeaning:"পালিয়ে বিয়ে করা",example:"They decided to elope.",categoryId:3},
        {id:772,verb:"elucidate",forms:{base:"elucidate",presentParticiple:"elucidating",past:"elucidated",pastParticiple:"elucidated",thirdPerson:"elucidates"},banglaMeaning:"ব্যাখ্যা করা",example:"Please elucidate the theory.",categoryId:4},
        {id:773,verb:"elude",forms:{base:"elude",presentParticiple:"eluding",past:"eluded",pastParticiple:"eluded",thirdPerson:"eludes"},banglaMeaning:"কৌশলে এড়িয়ে চলা",example:"The criminal eluded the police.",categoryId:3},
        {id:774,verb:"emanate",forms:{base:"emanate",presentParticiple:"emanating",past:"emanated",pastParticiple:"emanated",thirdPerson:"emanates"},banglaMeaning:"নির্গত হওয়া",example:"A strange smell emanated from the lab.",categoryId:12},
        {id:775,verb:"emancipate",forms:{base:"emancipate",presentParticiple:"emancipating",past:"emancipated",pastParticiple:"emancipated",thirdPerson:"emancipates"},banglaMeaning:"মুক্ত করা",example:"Slaves were emancipated in 1863.",categoryId:1},
        {id:776,verb:"embark",forms:{base:"embark",presentParticiple:"embarking",past:"embarked",pastParticiple:"embarked",thirdPerson:"embarks"},banglaMeaning:"যাত্রা শুরু করা",example:"They embarked on a new journey.",categoryId:3},
        {id:777,verb:"embarrass",forms:{base:"embarrass",presentParticiple:"embarrassing",past:"embarrassed",pastParticiple:"embarrassed",thirdPerson:"embarrasses"},banglaMeaning:"লজ্জিত করা",example:"Don't embarrass me in public.",categoryId:5},
        {id:778,verb:"embed",forms:{base:"embed",presentParticiple:"embedding",past:"embedded",pastParticiple:"embedded",thirdPerson:"embeds"},banglaMeaning:"গেঁথে দেওয়া",example:"The thorn was embedded in her finger.",categoryId:1},
        {id:779,verb:"embellish",forms:{base:"embellish",presentParticiple:"embellishing",past:"embellished",pastParticiple:"embellished",thirdPerson:"embellishes"},banglaMeaning:"অলঙ্কৃত করা",example:"She embellished the story with lies.",categoryId:6},
        {id:780,verb:"embody",forms:{base:"embody",presentParticiple:"embodying",past:"embodied",pastParticiple:"embodied",thirdPerson:"embodies"},banglaMeaning:"মূর্ত করা",example:"He embodies the spirit of the team.",categoryId:12},
        {id:781,verb:"embrace",forms:{base:"embrace",presentParticiple:"embracing",past:"embraced",pastParticiple:"embraced",thirdPerson:"embraces"},banglaMeaning:"আলিঙ্গন করা",example:"She embraced her brother.",categoryId:5},
        {id:782,verb:"emigrate",forms:{base:"emigrate",presentParticiple:"emigrating",past:"emigrated",pastParticiple:"emigrated",thirdPerson:"emigrates"},banglaMeaning:"দেশান্তর হওয়া",example:"They emigrated to Canada.",categoryId:3},
        {id:783,verb:"emit",forms:{base:"emit",presentParticiple:"emitting",past:"emitted",pastParticiple:"emitted",thirdPerson:"emits"},banglaMeaning:"নিঃসরণ করা",example:"The chimney emits smoke.",categoryId:8},
        {id:784,verb:"emphasize",forms:{base:"emphasize",presentParticiple:"emphasizing",past:"emphasized",pastParticiple:"emphasized",thirdPerson:"emphasizes"},banglaMeaning:"গুরুত্ব দেওয়া",example:"He emphasized the importance of sleep.",categoryId:2},
        {id:785,verb:"employ",forms:{base:"employ",presentParticiple:"employing",past:"employed",pastParticiple:"employed",thirdPerson:"employs"},banglaMeaning:"নিয়োগ করা",example:"The factory employs 500 people.",categoryId:1},
        {id:786,verb:"empower",forms:{base:"empower",presentParticiple:"empowering",past:"empowered",pastParticiple:"empowered",thirdPerson:"empowers"},banglaMeaning:"ক্ষমতায়ন করা",example:"Education empowers people.",categoryId:1},
        {id:787,verb:"empty",forms:{base:"empty",presentParticiple:"emptying",past:"emptied",pastParticiple:"emptied",thirdPerson:"empties"},banglaMeaning:"খালি করা",example:"Empty the trash bin.",categoryId:1},
        {id:788,verb:"emulate",forms:{base:"emulate",presentParticiple:"emulating",past:"emulated",pastParticiple:"emulated",thirdPerson:"emulates"},banglaMeaning:"অনুকরণ করা",example:"Children emulate their parents.",categoryId:4},
        {id:789,verb:"enable",forms:{base:"enable",presentParticiple:"enabling",past:"enabled",pastParticiple:"enabled",thirdPerson:"enables"},banglaMeaning:"সক্ষম করা",example:"This tool enables faster work.",categoryId:8},
        {id:790,verb:"enact",forms:{base:"enact",presentParticiple:"enacting",past:"enacted",pastParticiple:"enacted",thirdPerson:"enacts"},banglaMeaning:"আইন জারি করা",example:"The government enacted a new law.",categoryId:1},
        {id:791,verb:"encage",forms:{base:"encage",presentParticiple:"encaging",past:"encaged",pastParticiple:"encaged",thirdPerson:"encages"},banglaMeaning:"খাঁচায় বন্দি করা",example:"Don't encage the wild birds.",categoryId:1},
        {id:792,verb:"encamp",forms:{base:"encamp",presentParticiple:"encamping",past:"encamped",pastParticiple:"encamped",thirdPerson:"encamps"},banglaMeaning:"শিবির স্থাপন করা",example:"The soldiers encamped near the river.",categoryId:1},
        {id:793,verb:"enchant",forms:{base:"enchant",presentParticiple:"enchanting",past:"enchanted",pastParticiple:"enchanted",thirdPerson:"enchants"},banglaMeaning:"মুগ্ধ করা",example:"The music enchanted everyone.",categoryId:5},
        {id:794,verb:"encircle",forms:{base:"encircle",presentParticiple:"encircling",past:"encircled",pastParticiple:"encircled",thirdPerson:"encircles"},banglaMeaning:"বেষ্টন করা",example:"The mountains encircle the lake.",categoryId:3},
        {id:795,verb:"enclose",forms:{base:"enclose",presentParticiple:"enclosing",past:"enclosed",pastParticiple:"enclosed",thirdPerson:"encloses"},banglaMeaning:"সংযুক্ত করা/আবদ্ধ করা",example:"I enclose a check for $10.",categoryId:9},
        {id:796,verb:"encode",forms:{base:"encode",presentParticiple:"encoding",past:"encoded",pastParticiple:"encoded",thirdPerson:"encodes"},banglaMeaning:"সংকেতবদ্ধ করা",example:"The message was encoded for safety.",categoryId:4},
        {id:797,verb:"encounter",forms:{base:"encounter",presentParticiple:"encountering",past:"encountered",pastParticiple:"encountered",thirdPerson:"encounters"},banglaMeaning:"মুখোমুখি হওয়া",example:"We encountered some difficulties.",categoryId:1},
        {id:798,verb:"encourage",forms:{base:"encourage",presentParticiple:"encouraging",past:"encouraged",pastParticiple:"encouraged",thirdPerson:"encourages"},banglaMeaning:"উৎসাহিত করা",example:"Teachers encourage their students.",categoryId:2},
        {id:799,verb:"encroach",forms:{base:"encroach",presentParticiple:"encroaching",past:"encroached",pastParticiple:"encroached",thirdPerson:"encroaches"},banglaMeaning:"অনধিকার প্রবেশ করা",example:"Don't encroach on my land.",categoryId:1},
        {id:800,verb:"end",forms:{base:"end",presentParticiple:"ending",past:"ended",pastParticiple:"ended",thirdPerson:"ends"},banglaMeaning:"শেষ করা",example:"The show ended at 10 PM.",categoryId:8},
        {id:801,verb:"endanger",forms:{base:"endanger",presentParticiple:"endangering",past:"endangered",pastParticiple:"endangered",thirdPerson:"endangers"},banglaMeaning:"বিপন্ন করা",example:"Pollution endangers our health.",categoryId:8},
        {id:802,verb:"endear",forms:{base:"endear",presentParticiple:"endearing",past:"endeared",pastParticiple:"endeared",thirdPerson:"endears"},banglaMeaning:"প্রিয়পাত্র করা",example:"Her kindness endeared her to all.",categoryId:5},
        {id:803,verb:"endeavor",forms:{base:"endeavor",presentParticiple:"endeavoring",past:"endeavored",pastParticiple:"endeavored",thirdPerson:"endeavors"},banglaMeaning:"প্রচেষ্টা চালানো",example:"We must endeavor to improve.",categoryId:1},
        {id:804,verb:"endorse",forms:{base:"endorse",presentParticiple:"endorsing",past:"endorsed",pastParticiple:"endorsed",thirdPerson:"endorses"},banglaMeaning:"সমর্থন করা",example:"The celebrity endorsed the product.",categoryId:2},
        {id:805,verb:"endow",forms:{base:"endow",presentParticiple:"endowing",past:"endowed",pastParticiple:"endowed",thirdPerson:"endows"},banglaMeaning:"প্রদান করা (বৃত্তি/গুণ)",example:"Nature endowed her with beauty.",categoryId:9},
        {id:806,verb:"endure",forms:{base:"endure",presentParticiple:"enduring",past:"endured",pastParticiple:"endured",thirdPerson:"endures"},banglaMeaning:"সহ্য করা",example:"He endured a lot of pain.",categoryId:5},
        {id:807,verb:"energize",forms:{base:"energize",presentParticiple:"energizing",past:"energized",pastParticiple:"energized",thirdPerson:"energizes"},banglaMeaning:"উজ্জীবিত করা",example:"The speech energized the crowd.",categoryId:5},
        {id:808,verb:"enforce",forms:{base:"enforce",presentParticiple:"enforcing",past:"enforced",pastParticiple:"enforced",thirdPerson:"enforces"},banglaMeaning:"বলবৎ করা",example:"The police enforce the law.",categoryId:1},
        {id:809,verb:"engage",forms:{base:"engage",presentParticiple:"engaging",past:"engaged",pastParticiple:"engaged",thirdPerson:"engages"},banglaMeaning:"নিযুক্ত হওয়া",example:"They engaged in a long talk.",categoryId:1},
        {id:810,verb:"engender",forms:{base:"engender",presentParticiple:"engendering",past:"engendered",pastParticiple:"engendered",thirdPerson:"engenders"},banglaMeaning:"উৎপন্ন করা",example:"Hatred engenders violence.",categoryId:8},
        {id:811,verb:"engineer",forms:{base:"engineer",presentParticiple:"engineering",past:"engineered",pastParticiple:"engineered",thirdPerson:"engineers"},banglaMeaning:"কৌশলে সম্পাদন করা",example:"He engineered the whole plan.",categoryId:6},
        {id:812,verb:"engrave",forms:{base:"engrave",presentParticiple:"engraving",past:"engraved",pastParticiple:"engraved",thirdPerson:"engraves"},banglaMeaning:"খোদাই করা",example:"His name was engraved on the cup.",categoryId:6},
        {id:813,verb:"engross",forms:{base:"engross",presentParticiple:"engrossing",past:"engrossed",pastParticiple:"engrossed",thirdPerson:"engrosses"},banglaMeaning:"সম্পূর্ণ মগ্ন করা",example:"The book engrossed him for hours.",categoryId:4},
        {id:814,verb:"engulf",forms:{base:"engulf",presentParticiple:"engulfing",past:"engulfed",pastParticiple:"engulfed",thirdPerson:"engulfes"},banglaMeaning:"গ্রাস করা",example:"The fire engulfed the building.",categoryId:8},
        {id:815,verb:"enhance",forms:{base:"enhance",presentParticiple:"enhancing",past:"enhanced",pastParticiple:"enhanced",thirdPerson:"enhances"},banglaMeaning:"বৃদ্ধি করা বা বাড়ানো",example:"The music enhanced the atmosphere.",categoryId:11},
        {id:816,verb:"enjoy",forms:{base:"enjoy",presentParticiple:"enjoying",past:"enjoyed",pastParticiple:"enjoyed",thirdPerson:"enjoys"},banglaMeaning:"উপভোগ করা",example:"I enjoy playing football.",categoryId:5},
        {id:817,verb:"enlarge",forms:{base:"enlarge",presentParticiple:"enlarging",past:"enlarged",pastParticiple:"enlarged",thirdPerson:"enlarges"},banglaMeaning:"বড় করা",example:"We need to enlarge this photo.",categoryId:8},
        {id:818,verb:"enlighten",forms:{base:"enlighten",presentParticiple:"enlightening",past:"enlightened",pastParticiple:"enlightened",thirdPerson:"enlightens"},banglaMeaning:"আলোকিত করা",example:"Can you enlighten me on this?",categoryId:4},
        {id:819,verb:"enlist",forms:{base:"enlist",presentParticiple:"enlisting",past:"enlisted",pastParticiple:"enlisted",thirdPerson:"enlists"},banglaMeaning:"তালিকভুক্ত করা",example:"He enlisted in the army.",categoryId:1},
        {id:820,verb:"enliven",forms:{base:"enliven",presentParticiple:"enlivening",past:"enlivened",pastParticiple:"enlivened",thirdPerson:"enlivens"},banglaMeaning:"প্রাণবন্ত করা",example:"Humor enlivens the class.",categoryId:11},
        {id:821,verb:"enmesh",forms:{base:"enmesh",presentParticiple:"enmeshing",past:"enmeshed",pastParticiple:"enmeshed",thirdPerson:"enmeshes"},banglaMeaning:"জালে জড়ানো",example:"He was enmeshed in a scandal.",categoryId:1},
        {id:822,verb:"enquire",forms:{base:"enquire",presentParticiple:"enquiring",past:"enquired",pastParticiple:"enquired",thirdPerson:"enquires"},banglaMeaning:"জিজ্ঞাসা করা",example:"I enquired about the price.",categoryId:2},
        {id:823,verb:"enrage",forms:{base:"enrage",presentParticiple:"enraging",past:"enraged",pastParticiple:"enraged",thirdPerson:"enrages"},banglaMeaning:"ক্ষুব্ধ করা",example:"The decision enraged him.",categoryId:5},
        {id:824,verb:"enrich",forms:{base:"enrich",presentParticiple:"enriching",past:"enriched",pastParticiple:"enriched",thirdPerson:"enriches"},banglaMeaning:"সমৃদ্ধ করা",example:"Reading enriches the mind.",categoryId:11},
        {id:825,verb:"enrol",forms:{base:"enrol",presentParticiple:"enrolling",past:"enrolled",pastParticiple:"enrolled",thirdPerson:"enrols"},banglaMeaning:"ভর্তি করা",example:"I enrolled in a computer course.",categoryId:1},
        {id:826,verb:"enslave",forms:{base:"enslave",presentParticiple:"enslaving",past:"enslaved",pastParticiple:"enslaved",thirdPerson:"enslaves"},banglaMeaning:"দাস বানানো",example:"They were enslaved for years.",categoryId:1},
        {id:827,verb:"ensnare",forms:{base:"ensnare",presentParticiple:"ensnaring",past:"ensnared",pastParticiple:"ensnared",thirdPerson:"ensnares"},banglaMeaning:"ফাঁদে ফেলা",example:"He was ensnared by his own lies.",categoryId:1},
        {id:828,verb:"ensue",forms:{base:"ensue",presentParticiple:"ensuing",past:"ensued",pastParticiple:"ensued",thirdPerson:"ensues"},banglaMeaning:"ফলে ঘটা",example:"Chaos ensued after the crash.",categoryId:12},
        {id:829,verb:"ensure",forms:{base:"ensure",presentParticiple:"ensuring",past:"ensured",pastParticiple:"ensured",thirdPerson:"ensures"},banglaMeaning:"নিশ্চিত করা",example:"Please ensure all doors are locked.",categoryId:1},
        {id:830,verb:"entail",forms:{base:"entail",presentParticiple:"entailing",past:"entailed",pastParticiple:"entailed",thirdPerson:"entails"},banglaMeaning:"অপরিহার্য করা",example:"The job entails hard work.",categoryId:12},
        {id:831,verb:"entangle",forms:{base:"entangle",presentParticiple:"entangling",past:"entangled",pastParticiple:"entangled",thirdPerson:"entangles"},banglaMeaning:"জড়িয়ে ফেলা",example:"The bird entangled its wings.",categoryId:1},
        {id:832,verb:"enter",forms:{base:"enter",presentParticiple:"entering",past:"entered",pastParticiple:"entered",thirdPerson:"enters"},banglaMeaning:"প্রবেশ করা",example:"May I enter the room?",categoryId:3},
        {id:833,verb:"entertain",forms:{base:"entertain",presentParticiple:"entertaining",past:"entertained",pastParticiple:"entertained",thirdPerson:"entertains"},banglaMeaning:"বিনোদন দেওয়া",example:"He entertained us with songs.",categoryId:5},
        {id:834,verb:"enthral",forms:{base:"enthral",presentParticiple:"enthralling",past:"enthralled",pastParticiple:"enthralled",thirdPerson:"enthrals"},banglaMeaning:"মুগ্ধ করে রাখা",example:"The movie enthralled the audience.",categoryId:5},
        {id:835,verb:"entice",forms:{base:"entice",presentParticiple:"enticing",past:"enticed",pastParticiple:"enticed",thirdPerson:"entices"},banglaMeaning:"প্রলুব্ধ করা",example:"The smell of food enticed me.",categoryId:5},
        {id:836,verb:"entitle",forms:{base:"entitle",presentParticiple:"entitling",past:"entitled",pastParticiple:"entitled",thirdPerson:"entitles"},banglaMeaning:"অধিকার দেওয়া",example:"This ticket entitles you to a seat.",categoryId:1},
        {id:837,verb:"entrap",forms:{base:"entrap",presentParticiple:"entrapping",past:"entrapped",pastParticiple:"entrapped",thirdPerson:"entraps"},banglaMeaning:"ফাঁদে আটকানো",example:"The trap was set to entrap mice.",categoryId:1},
        {id:838,verb:"entreat",forms:{base:"entreat",presentParticiple:"entreating",past:"entreated",pastParticiple:"entreated",thirdPerson:"entreats"},banglaMeaning:"মিনতি করা",example:"He entreated her to help.",categoryId:2},
        {id:839,verb:"entrust",forms:{base:"entrust",presentParticiple:"entrusting",past:"entrusted",pastParticiple:"entrusted",thirdPerson:"entrusts"},banglaMeaning:"বিশ্বাস করে অর্পণ করা",example:"I entrusted him with the keys.",categoryId:1},
        {id:840,verb:"enumerate",forms:{base:"enumerate",presentParticiple:"enumerating",past:"enumerated",pastParticiple:"enumerated",thirdPerson:"enumerates"},banglaMeaning:"গণনা করা",example:"He enumerated his reasons.",categoryId:4},
        {id:841,verb:"enunciate",forms:{base:"enunciate",presentParticiple:"enunciating",past:"enunciated",pastParticiple:"enunciated",thirdPerson:"enunciates"},banglaMeaning:"স্পষ্টভাবে উচ্চারণ করা",example:"Enunciate your words clearly.",categoryId:2},
        {id:842,verb:"envelop",forms:{base:"envelop",presentParticiple:"enveloping",past:"enveloped",pastParticiple:"enveloped",thirdPerson:"envelops"},banglaMeaning:"মোড়ানো",example:"Fog enveloped the city.",categoryId:8},
        {id:843,verb:"envisage",forms:{base:"envisage",presentParticiple:"envisaging",past:"envisaged",pastParticiple:"envisaged",thirdPerson:"envisages"},banglaMeaning:"পরিকল্পনা বা কল্পনা করা",example:"I envisage a bright future.",categoryId:4},
        {id:844,verb:"envy",forms:{base:"envy",presentParticiple:"envying",past:"envied",pastParticiple:"envied",thirdPerson:"envies"},banglaMeaning:"ঈর্ষা করা",example:"They envy his success.",categoryId:5},
        {id:845,verb:"equal",forms:{base:"equal",presentParticiple:"equaling",past:"equaled",pastParticiple:"equaled",thirdPerson:"equals"},banglaMeaning:"সমান হওয়া",example:"Two plus two equals four.",categoryId:11},
        {id:846,verb:"equalize",forms:{base:"equalize",presentParticiple:"equalizing",past:"equalized",pastParticiple:"equalized",thirdPerson:"equalizes"},banglaMeaning:"সমান করা",example:"He equalized the score.",categoryId:8},
        {id:847,verb:"equip",forms:{base:"equip",presentParticiple:"equipping",past:"equipped",pastParticiple:"equipped",thirdPerson:"equips"},banglaMeaning:"সজ্জিত করা",example:"Equip yourself for the journey.",categoryId:1},
        {id:848,verb:"equit",forms:{base:"equit",presentParticiple:"equitting",past:"equitted",pastParticiple:"equitted",thirdPerson:"equits"},banglaMeaning:"ন্যায়বিচার করা",example:"Justice must be equitted.",categoryId:1},
        {id:849,verb:"eradicate",forms:{base:"eradicate",presentParticiple:"eradicating",past:"eradicated",pastParticiple:"eradicated",thirdPerson:"eradicates"},banglaMeaning:"নির্মূল করা",example:"Polio has been eradicated.",categoryId:8},
        {id:850,verb:"erase",forms:{base:"erase",presentParticiple:"erasing",past:"erased",pastParticiple:"erased",thirdPerson:"erases"},banglaMeaning:"মুছে ফেলা",example:"Erase the mistakes.",categoryId:1},
        {id:851,verb:"erect",forms:{base:"erect",presentParticiple:"erecting",past:"erected",pastParticiple:"erected",thirdPerson:"erects"},banglaMeaning:"খাড়া করা বা নির্মাণ করা",example:"They erected a statue.",categoryId:6},
        {id:852,verb:"erode",forms:{base:"erode",presentParticiple:"eroding",past:"eroded",pastParticiple:"eroded",thirdPerson:"erodes"},banglaMeaning:"ক্ষয় হওয়া",example:"The soil is eroding.",categoryId:8},
        {id:853,verb:"err",forms:{base:"err",presentParticiple:"erring",past:"erred",pastParticiple:"erred",thirdPerson:"errs"},banglaMeaning:"ভুল করা",example:"To err is human.",categoryId:4},
        {id:854,verb:"escape",forms:{base:"escape",presentParticiple:"escaping",past:"escaped",pastParticiple:"escaped",thirdPerson:"escapes"},banglaMeaning:"পালিয়ে যাওয়া",example:"The bird escaped from the cage.",categoryId:3},
        {id:855,verb:"escort",forms:{base:"escort",presentParticiple:"escorting",past:"escorted",pastParticiple:"escorted",thirdPerson:"escorts"},banglaMeaning:"পাহারা দিয়ে নিয়ে যাওয়া",example:"The police escorted the VIP.",categoryId:3},
        {id:856,verb:"establish",forms:{base:"establish",presentParticiple:"establishing",past:"established",pastParticiple:"established",thirdPerson:"establishes"},banglaMeaning:"স্থাপন করা",example:"They established a new school.",categoryId:1},
        {id:857,verb:"esteem",forms:{base:"esteem",presentParticiple:"esteeming",past:"esteemed",pastParticiple:"esteemed",thirdPerson:"esteems"},banglaMeaning:"শ্রদ্ধা করা",example:"He is highly esteemed.",categoryId:5},
        {id:858,verb:"estimate",forms:{base:"estimate",presentParticiple:"estimating",past:"estimated",pastParticiple:"estimated",thirdPerson:"estimates"},banglaMeaning:"অনুমান করা",example:"Estimate the cost.",categoryId:4},
        {id:859,verb:"estrange",forms:{base:"estrange",presentParticiple:"estranging",past:"estranged",pastParticiple:"estranged",thirdPerson:"estranges"},banglaMeaning:"পর করা বা দূরে সরানো",example:"He was estranged from his family.",categoryId:5},
        {id:860,verb:"etch",forms:{base:"etch",presentParticiple:"etching",past:"etched",pastParticiple:"etched",thirdPerson:"etches"},banglaMeaning:"খোদাই করা",example:"The design was etched in glass.",categoryId:6},
        {id:861,verb:"evacuate",forms:{base:"evacuate",presentParticiple:"evacuating",past:"evacuated",pastParticiple:"evacuated",thirdPerson:"evacuates"},banglaMeaning:"খালি করা (বিপদের কারণে)",example:"They evacuated the building.",categoryId:3},
        {id:862,verb:"evade",forms:{base:"evade",presentParticiple:"evading",past:"evaded",pastParticiple:"evaded",thirdPerson:"evades"},banglaMeaning:"এড়িয়ে চলা",example:"Don't evade your taxes.",categoryId:3},
        {id:863,verb:"evaluate",forms:{base:"evaluate",presentParticiple:"evaluating",past:"evaluated",pastParticiple:"evaluated",thirdPerson:"evaluates"},banglaMeaning:"মূল্যায়ন করা",example:"Evaluate the performance.",categoryId:4},
        {id:864,verb:"evaporate",forms:{base:"evaporate",presentParticiple:"evaporating",past:"evaporated",pastParticiple:"evaporated",thirdPerson:"evaporates"},banglaMeaning:"বাষ্পীভূত হওয়া",example:"Water evaporates in the sun.",categoryId:8},
        {id:865,verb:"evict",forms:{base:"evict",presentParticiple:"evicting",past:"evicted",pastParticiple:"evicted",thirdPerson:"evicts"},banglaMeaning:"উচ্ছেদ করা",example:"They were evicted from the house.",categoryId:1},
        {id:866,verb:"evidence",forms:{base:"evidence",presentParticiple:"evidencing",past:"evidenced",pastParticiple:"evidenced",thirdPerson:"evidences"},banglaMeaning:"প্রমাণ করা",example:"His actions evidenced his fear.",categoryId:7},
        {id:867,verb:"evoke",forms:{base:"evoke",presentParticiple:"evoking",past:"evoked",pastParticiple:"evoked",thirdPerson:"evokes"},banglaMeaning:"স্মৃতি জাগিয়ে তোলা",example:"The song evoked old memories.",categoryId:4},
        {id:868,verb:"evolve",forms:{base:"evolve",presentParticiple:"evolving",past:"evolved",pastParticiple:"evolved",thirdPerson:"evolves"},banglaMeaning:"বিবর্তিত হওয়া",example:"Life evolved over millions of years.",categoryId:8},
        {id:869,verb:"exacerbate",forms:{base:"exacerbate",presentParticiple:"exacerbating",past:"exacerbated",pastParticiple:"exacerbated",thirdPerson:"exacerbates"},banglaMeaning:"অধিকতর খারাপ করা",example:"The rain exacerbated the flood.",categoryId:8},
        {id:870,verb:"exaggerate",forms:{base:"exaggerate",presentParticiple:"exaggerating",past:"exaggerated",pastParticiple:"exaggerated",thirdPerson:"exaggerates"},banglaMeaning:"অতিরঞ্জিত করা",example:"Don't exaggerate the truth.",categoryId:2},
        {id:871,verb:"exalt",forms:{base:"exalt",presentParticiple:"exalting",past:"exalted",pastParticiple:"exalted",thirdPerson:"exalts"},banglaMeaning:"উচ্চ প্রশংসা করা",example:"He was exalted for his bravery.",categoryId:2},
        {id:872,verb:"examine",forms:{base:"examine",presentParticiple:"examining",past:"examined",pastParticiple:"examined",thirdPerson:"examines"},banglaMeaning:"পরীক্ষা করা",example:"Examine the document carefully.",categoryId:7},
        {id:873,verb:"exasperate",forms:{base:"exasperate",presentParticiple:"exasperating",past:"exasperated",pastParticiple:"exasperated",thirdPerson:"exasperates"},banglaMeaning:"অত্যধিক বিরক্ত করা",example:"His constant talk exasperated her.",categoryId:5},
        {id:874,verb:"excavate",forms:{base:"excavate",presentParticiple:"excavating",past:"excavated",pastParticiple:"excavated",thirdPerson:"excavates"},banglaMeaning:"খনন করা",example:"They excavated an ancient city.",categoryId:1},
        {id:875,verb:"exceed",forms:{base:"exceed",presentParticiple:"exceeding",past:"exceeded",pastParticiple:"exceeded",thirdPerson:"exceeds"},banglaMeaning:"অতিক্রম করা",example:"Don't exceed the speed limit.",categoryId:11},
        {id:876,verb:"excel",forms:{base:"excel",presentParticiple:"excelling",past:"excelled",pastParticiple:"excelled",thirdPerson:"excels"},banglaMeaning:"অধিকতর ভালো করা",example:"She excels in mathematics.",categoryId:11},
        {id:877,verb:"exchange",forms:{base:"exchange",presentParticiple:"exchanging",past:"exchanged",pastParticiple:"exchanged",thirdPerson:"exchanges"},banglaMeaning:"বিনিময় করা",example:"We exchanged ideas.",categoryId:2},
        {id:878,verb:"excite",forms:{base:"excite",presentParticiple:"exciting",past:"excited",pastParticiple:"excited",thirdPerson:"excites"},banglaMeaning:"উত্তেজিত করা",example:"The news excited everyone.",categoryId:5},
        {id:879,verb:"exclaim",forms:{base:"exclaim",presentParticiple:"exclaiming",past:"exclaimed",pastParticiple:"exclaimed",thirdPerson:"exclaims"},banglaMeaning:"আকস্মিক চিৎকার করা",example:"'Wow!' he exclaimed.",categoryId:2},
        {id:880,verb:"exclude",forms:{base:"exclude",presentParticiple:"excluding",past:"excluded",pastParticiple:"excluded",thirdPerson:"excludes"},banglaMeaning:"বর্জন বা বাদ দেওয়া",example:"Exclude him from the group.",categoryId:1},
        {id:881,verb:"excommunicate",forms:{base:"excommunicate",presentParticiple:"excommunicating",past:"excommunicated",pastParticiple:"excommunicated",thirdPerson:"excommunicates"},banglaMeaning:"সমাজচ্যুত করা",example:"He was excommunicated.",categoryId:1},
        {id:882,verb:"excuse",forms:{base:"excuse",presentParticiple:"excusing",past:"excused",pastParticiple:"excused",thirdPerson:"excuses"},banglaMeaning:"ক্ষমা করা",example:"Please excuse my late arrival.",categoryId:2},
        {id:883,verb:"execute",forms:{base:"execute",presentParticiple:"executing",past:"executed",pastParticiple:"executed",thirdPerson:"executes"},banglaMeaning:"সম্পাদন বা কার্যকর করা",example:"The plan was executed well.",categoryId:1},
        {id:884,verb:"exemplify",forms:{base:"exemplify",presentParticiple:"exemplifying",past:"exemplified",pastParticiple:"exemplified",thirdPerson:"exemplifies"},banglaMeaning:"দৃষ্টান্ত দেওয়া",example:"This painting exemplifies his style.",categoryId:7},
        {id:885,verb:"exempt",forms:{base:"exempt",presentParticiple:"exempting",past:"exempted",pastParticiple:"exempted",thirdPerson:"exempts"},banglaMeaning:"অব্যাহতি দেওয়া",example:"He was exempted from tax.",categoryId:1},
        {id:886,verb:"exercise",forms:{base:"exercise",presentParticiple:"exercising",past:"exercised",pastParticiple:"exercised",thirdPerson:"exercises"},banglaMeaning:"ব্যায়াম করা",example:"I exercise every morning.",categoryId:1},
        {id:887,verb:"exert",forms:{base:"exert",presentParticiple:"exerting",past:"exerted",pastParticiple:"exerted",thirdPerson:"exerts"},banglaMeaning:"প্রয়োগ করা (শক্তি)",example:"Don't exert yourself too much.",categoryId:1},
        {id:888,verb:"exhale",forms:{base:"exhale",presentParticiple:"exhaling",past:"exhaled",pastParticiple:"exhaled",thirdPerson:"exhales"},banglaMeaning:"নিঃশ্বাস ছাড়া",example:"Exhale slowly.",categoryId:1},
        {id:889,verb:"exhaust",forms:{base:"exhaust",presentParticiple:"exhausting",past:"exhausted",pastParticiple:"exhausted",thirdPerson:"exhausts"},banglaMeaning:"ক্লান্ত করা/শেষ করা",example:"The long walk exhausted me.",categoryId:5},
        {id:890,verb:"exhibit",forms:{base:"exhibit",presentParticiple:"exhibiting",past:"exhibited",pastParticiple:"exhibited",thirdPerson:"exhibits"},banglaMeaning:"প্রদর্শন করা",example:"He exhibited his paintings.",categoryId:7},
        {id:891,verb:"exhilarate",forms:{base:"exhilarate",presentParticiple:"exhilarating",past:"exhilarated",pastParticiple:"exhilarated",thirdPerson:"exhilarates"},banglaMeaning:"অত্যন্ত আনন্দিত করা",example:"The cold air exhilarated her.",categoryId:5},
        {id:892,verb:"exhort",forms:{base:"exhort",presentParticiple:"exhorting",past:"exhorted",pastParticiple:"exhorted",thirdPerson:"exhorts"},banglaMeaning:"উপদেশ দেওয়া বা উৎসাহিত করা",example:"He exhorted them to be patient.",categoryId:2},
        {id:893,verb:"exhume",forms:{base:"exhume",presentParticiple:"exhuming",past:"exhumed",pastParticiple:"exhumed",thirdPerson:"exhumes"},banglaMeaning:"কবর থেকে তোলা",example:"The body was exhumed.",categoryId:1},
        {id:894,verb:"exile",forms:{base:"exile",presentParticiple:"exiling",past:"exiled",pastParticiple:"exiled",thirdPerson:"exiles"},banglaMeaning:"নির্বাসিত করা",example:"He was exiled for ten years.",categoryId:1},
        {id:895,verb:"exist",forms:{base:"exist",presentParticiple:"existing",past:"existed",pastParticiple:"existed",thirdPerson:"exists"},banglaMeaning:"অস্তিত্ব থাকা",example:"Do ghosts exist?",categoryId:12},
        {id:896,verb:"exit",forms:{base:"exit",presentParticiple:"exiting",past:"exited",pastParticiple:"exited",thirdPerson:"exits"},banglaMeaning:"বাহির হওয়া",example:"Exit the building now.",categoryId:3},
        {id:897,verb:"exonerate",forms:{base:"exonerate",presentParticiple:"exonerating",past:"exonerated",pastParticiple:"exonerated",thirdPerson:"exonerates"},banglaMeaning:"দোষমুক্ত করা",example:"He was exonerated by the court.",categoryId:1},
        {id:898,verb:"expand",forms:{base:"expand",presentParticiple:"expanding",past:"expanded",pastParticiple:"expanded",thirdPerson:"expands"},banglaMeaning:"প্রসারিত করা",example:"The business is expanding.",categoryId:8},
        {id:899,verb:"expect",forms:{base:"expect",presentParticiple:"expecting",past:"expected",pastParticiple:"expected",thirdPerson:"expects"},banglaMeaning:"আশা করা",example:"I expect to see you soon.",categoryId:4},
        {id:900,verb:"expel",forms:{base:"expel",presentParticiple:"expelling",past:"expelled",pastParticiple:"expelled",thirdPerson:"expels"},banglaMeaning:"বিতাড়িত করা",example:"He was expelled from school.",categoryId:1},
        {id:901,verb:"expend",forms:{base:"expend",presentParticiple:"expending",past:"expended",pastParticiple:"expended",thirdPerson:"expends"},banglaMeaning:"ব্যয় করা",example:"They expend much energy.",categoryId:9},
        {id:902,verb:"experience",forms:{base:"experience",presentParticiple:"experiencing",past:"experienced",pastParticiple:"experienced",thirdPerson:"experiences"},banglaMeaning:"অভিজ্ঞতা অর্জন করা",example:"He experienced many hardships.",categoryId:7},
        {id:903,verb:"experiment",forms:{base:"experiment",presentParticiple:"experimenting",past:"experimented",pastParticiple:"experimented",thirdPerson:"experiments"},banglaMeaning:"পরীক্ষা-নিরীক্ষা করা",example:"They are experimenting with seeds.",categoryId:7},
        {id:904,verb:"expire",forms:{base:"expire",presentParticiple:"expiring",past:"expired",pastParticiple:"expired",thirdPerson:"expires"},banglaMeaning:"মেয়াদ শেষ হওয়া",example:"My passport expires next month.",categoryId:12},
        {id:905,verb:"explain",forms:{base:"explain",presentParticiple:"explaining",past:"explained",pastParticiple:"explained",thirdPerson:"explains"},banglaMeaning:"ব্যাখ্যা করা",example:"Explain the problem to me.",categoryId:2},
        {id:906,verb:"explode",forms:{base:"explode",presentParticiple:"exploding",past:"exploded",pastParticiple:"exploded",thirdPerson:"explodes"},banglaMeaning:"বিস্ফোরিত হওয়া",example:"The bomb exploded.",categoryId:8},
        {id:907,verb:"exploit",forms:{base:"exploit",presentParticiple:"exploiting",past:"exploited",pastParticiple:"exploited",thirdPerson:"exploits"},banglaMeaning:"কাজে লাগানো/শোষণ করা",example:"Don't exploit the poor.",categoryId:1},
        {id:908,verb:"explore",forms:{base:"explore",presentParticiple:"exploring",past:"explored",pastParticiple:"explored",thirdPerson:"explores"},banglaMeaning:"অনুসন্ধান বা ভ্রমণ করা",example:"They explored the forest.",categoryId:3},
        {id:909,verb:"export",forms:{base:"export",presentParticiple:"exporting",past:"exported",pastParticiple:"exported",thirdPerson:"exports"},banglaMeaning:"রপ্তানি করা",example:"Bangladesh exports garments.",categoryId:9},
        {id:910,verb:"expose",forms:{base:"expose",presentParticiple:"exposing",past:"exposed",pastParticiple:"exposed",thirdPerson:"exposes"},banglaMeaning:"উন্মুক্ত বা প্রকাশ করা",example:"Don't expose the film to light.",categoryId:7},
        {id:911,verb:"expound",forms:{base:"expound",presentParticiple:"expounding",past:"expounded",pastParticiple:"expounded",thirdPerson:"expounds"},banglaMeaning:"সবিস্তারে ব্যাখ্যা করা",example:"He expounded his views.",categoryId:2},
        {id:912,verb:"express",forms:{base:"express",presentParticiple:"expressing",past:"expressed",pastParticiple:"expressed",thirdPerson:"expresses"},banglaMeaning:"প্রকাশ করা",example:"She expressed her joy.",categoryId:2},
        {id:913,verb:"extend",forms:{base:"extend",presentParticiple:"extending",past:"extended",pastParticiple:"extended",thirdPerson:"extends"},banglaMeaning:"প্রসারিত বা বৃদ্ধি করা",example:"Extend the deadline.",categoryId:8},
        {id:914,verb:"exterminate",forms:{base:"exterminate",presentParticiple:"exterminating",past:"exterminated",pastParticiple:"exterminated",thirdPerson:"exterminates"},banglaMeaning:"সম্পূর্ণ ধ্বংস করা",example:"Exterminate the pests.",categoryId:8},
        {id:915,verb:"extinguish",forms:{base:"extinguish",presentParticiple:"extinguishing",past:"extinguished",pastParticiple:"extinguished",thirdPerson:"extinguishes"},banglaMeaning:"নিভিয়ে ফেলা (আগুন)",example:"Extinguish the fire.",categoryId:1},
        {id:916,verb:"extol",forms:{base:"extol",presentParticiple:"extolling",past:"extolled",pastParticiple:"extolled",thirdPerson:"extolls"},banglaMeaning:"উচ্চ প্রশংসা করা",example:"He extolled the virtues of tea.",categoryId:2},
        {id:917,verb:"extort",forms:{base:"extort",presentParticiple:"extorting",past:"extorted",pastParticiple:"extorted",thirdPerson:"extorts"},banglaMeaning:"জোর করে আদায় করা",example:"He extorted money from them.",categoryId:9},
        {id:918,verb:"extract",forms:{base:"extract",presentParticiple:"extracting",past:"extracted",pastParticiple:"extracted",thirdPerson:"extracts"},banglaMeaning:"নিষ্কাশন করা",example:"The dentist extracted the tooth.",categoryId:1},
        {id:919,verb:"extradite",forms:{base:"extradite",presentParticiple:"extraditing",past:"extradited",pastParticiple:"extradited",thirdPerson:"extradites"},banglaMeaning:"প্রত্যর্পণ করা (অপরাধী)",example:"He was extradited to Britain.",categoryId:1},
        {id:920,verb:"exult",forms:{base:"exult",presentParticiple:"exulting",past:"exulted",pastParticiple:"exulted",thirdPerson:"exults"},banglaMeaning:"অত্যধিক আনন্দিত হওয়া",example:"They exulted over their victory.",categoryId:5},
        {id:921,verb:"eye",forms:{base:"eye",presentParticiple:"eying",past:"eyed",pastParticiple:"eyed",thirdPerson:"eyes"},banglaMeaning:"লক্ষ্য করা",example:"She eyed the cake hungrily.",categoryId:7},
        {id:922,verb:"ease",forms:{base:"ease",presentParticiple:"easing",past:"eased",pastParticiple:"eased",thirdPerson:"eases"},banglaMeaning:"আরাম দেওয়া",example:"Rest will ease your mind.",categoryId:5},
        {id:923,verb:"eavesdrop",forms:{base:"eavesdrop",presentParticiple:"eavesdropping",past:"eavesdropped",pastParticiple:"eavesdropped",thirdPerson:"eavesdrops"},banglaMeaning:"আড়ি পেতে শোনা",example:"Don't eavesdrop on us.",categoryId:2},
        {id:924,verb:"ebb",forms:{base:"ebb",presentParticiple:"ebbing",past:"ebbed",pastParticiple:"ebbed",thirdPerson:"ebbs"},banglaMeaning:"ভাটা পড়া",example:"The tide began to ebb.",categoryId:12},
        {id:925,verb:"economize",forms:{base:"economize",presentParticiple:"economizing",past:"economized",pastParticiple:"economized",thirdPerson:"economizes"},banglaMeaning:"মিতব্যয়ী হওয়া",example:"We must economize on fuel.",categoryId:9},
        {id:926,verb:"edify",forms:{base:"edify",presentParticiple:"edifying",past:"edified",pastParticiple:"edified",thirdPerson:"edifies"},banglaMeaning:"উপদেশ দিয়ে উন্নত করা",example:"His speech was meant to edify.",categoryId:2},
        {id:927,verb:"effuse",forms:{base:"effuse",presentParticiple:"effusing",past:"effused",pastParticiple:"effused",thirdPerson:"effuses"},banglaMeaning:"ঢালা বা নির্গত করা",example:"Lava effused from the volcano.",categoryId:8},
        {id:928,verb:"egg",forms:{base:"egg",presentParticiple:"egging",past:"egged",pastParticiple:"egged",thirdPerson:"eggs"},banglaMeaning:"প্ররোচিত করা (egg on)",example:"They egged him on to fight.",categoryId:1},
        {id:929,verb:"ejaculate",forms:{base:"ejaculate",presentParticiple:"ejaculating",past:"ejaculated",pastParticiple:"ejaculated",thirdPerson:"ejaculates"},banglaMeaning:"আকস্মিক বলা বা নির্গত করা",example:"He ejaculated in surprise.",categoryId:2},
        {id:930,verb:"eke",forms:{base:"eke",presentParticiple:"eking",past:"eked",pastParticiple:"eked",thirdPerson:"ekes"},banglaMeaning:"কষ্টে আয় করা (eke out)",example:"He eked out a living.",categoryId:9},
        {id:931,verb:"electrocute",forms:{base:"electrocute",presentParticiple:"electrocuting",past:"electrocuted",pastParticiple:"electrocuted",thirdPerson:"electrocutes"},banglaMeaning:"বিদ্যুতায়িত হয়ে মারা যাওয়া",example:"He was electrocuted by a wire.",categoryId:1},
        {id:932,verb:"elicit",forms:{base:"elicit",presentParticiple:"eliciting",past:"elicited",pastParticiple:"elicited",thirdPerson:"elicits"},banglaMeaning:"তথ্য বের করা",example:"The lawyer elicited the truth.",categoryId:2},
        {id:933,verb:"elide",forms:{base:"elide",presentParticiple:"eliding",past:"elided",pastParticiple:"elided",thirdPerson:"elides"},banglaMeaning:"বাদ দেওয়া",example:"Some vowels are elided.",categoryId:1},
        {id:934,verb:"elongate",forms:{base:"elongate",presentParticiple:"elongating",past:"elongated",pastParticiple:"elongated",thirdPerson:"elongates"},banglaMeaning:"বর্ধিত করা",example:"The shadow elongated.",categoryId:8},
        {id:935,verb:"elucidate",forms:{base:"elucidate",presentParticiple:"elucidating",past:"elucidated",pastParticiple:"elucidated",thirdPerson:"elucidates"},banglaMeaning:"স্পষ্ট করা",example:"Please elucidate your plan.",categoryId:2},
        {id:936,verb:"emaciate",forms:{base:"emaciate",presentParticiple:"emaciating",past:"emaciated",pastParticiple:"emaciated",thirdPerson:"emaciates"},banglaMeaning:"কৃশ বা রোগা করা",example:"Famine emaciated the population.",categoryId:8},
        {id:937,verb:"emanate",forms:{base:"emanate",presentParticiple:"emanating",past:"emanated",pastParticiple:"emanated",thirdPerson:"emanates"},banglaMeaning:"নির্গত হওয়া",example:"Heat emanates from the fire.",categoryId:12},
        {id:938,verb:"emasculate",forms:{base:"emasculate",presentParticiple:"emasculating",past:"emasculated",pastParticiple:"emasculated",thirdPerson:"emasculates"},banglaMeaning:"পুরুষত্বহীন করা",example:"The law emasculated the army.",categoryId:1},
        {id:939,verb:"embargo",forms:{base:"embargo",presentParticiple:"embargoing",past:"embargoed",pastParticiple:"embargoed",thirdPerson:"embargoes"},banglaMeaning:"নিষেধাজ্ঞা জারি করা",example:"The port was embargoed.",categoryId:9},
        {id:940,verb:"embark",forms:{base:"embark",presentParticiple:"embarking",past:"embarked",pastParticiple:"embarked",thirdPerson:"embarks"},banglaMeaning:"আরোহণ করা",example:"They embarked the ship.",categoryId:3},
        {id:941,verb:"embarrass",forms:{base:"embarrass",presentParticiple:"embarrassing",past:"embarrassed",pastParticiple:"embarrassed",thirdPerson:"embarrasses"},banglaMeaning:"বিব্রত করা",example:"His question embarrassed her.",categoryId:5},
        {id:942,verb:"embed",forms:{base:"embed",presentParticiple:"embedding",past:"embedded",pastParticiple:"embedded",thirdPerson:"embeds"},banglaMeaning:"প্রথিত করা",example:"Embed the video on your site.",categoryId:6},
        {id:943,verb:"embezzle",forms:{base:"embezzle",presentParticiple:"embezzling",past:"embezzled",pastParticiple:"embezzled",thirdPerson:"embezzles"},banglaMeaning:"আত্মসাৎ করা",example:"He embezzled the funds.",categoryId:9},
        {id:944,verb:"embitter",forms:{base:"embitter",presentParticiple:"embittering",past:"embittered",pastParticiple:"embittered",thirdPerson:"embitters"},banglaMeaning:"তিক্ত করা",example:"Lies embittered their relationship.",categoryId:5},
        {id:945,verb:"embody",forms:{base:"embody",presentParticiple:"embodying",past:"embodied",pastParticiple:"embodied",thirdPerson:"embodies"},banglaMeaning:"অঙ্গীভূত করা",example:"The report embodies the findings.",categoryId:1},
        {id:946,verb:"embolden",forms:{base:"embolden",presentParticiple:"emboldening",past:"emboldened",pastParticiple:"emboldened",thirdPerson:"emboldens"},banglaMeaning:"সাহসী করা",example:"Success emboldened him.",categoryId:5},
        {id:947,verb:"emboss",forms:{base:"emboss",presentParticiple:"embossing",past:"embossed",pastParticiple:"embossed",thirdPerson:"embosses"},banglaMeaning:"নকশা তোলা",example:"The name was embossed in gold.",categoryId:6},
        {id:948,verb:"embrace",forms:{base:"embrace",presentParticiple:"embracing",past:"embraced",pastParticiple:"embraced",thirdPerson:"embraces"},banglaMeaning:"গ্রহণ করা (মতাদর্শ)",example:"They embraced the new culture.",categoryId:4},
        {id:949,verb:"embroider",forms:{base:"embroider",presentParticiple:"embroidering",past:"embroidered",pastParticiple:"embroidered",thirdPerson:"embroiders"},banglaMeaning:"নকশা করা (সুই-সুতো)",example:"She embroidered the cloth.",categoryId:6},
        {id:950,verb:"embroil",forms:{base:"embroil",presentParticiple:"embroiling",past:"embroiled",pastParticiple:"embroiled",thirdPerson:"embroils"},banglaMeaning:"জড়িয়ে ফেলা (ঝগড়ায়)",example:"Don't embroil me in this fight.",categoryId:1},
        {id:951,verb:"face",forms:{base:"face",presentParticiple:"facing",past:"faced",pastParticiple:"faced",thirdPerson:"faces"},banglaMeaning:"মুখোমুখি হওয়া",example:"We must face the truth.",categoryId:1},
        {id:952,verb:"facilitate",forms:{base:"facilitate",presentParticiple:"facilitating",past:"facilitated",pastParticiple:"facilitated",thirdPerson:"facilitates"},banglaMeaning:"সহজতর করা",example:"The tool facilitates the work.",categoryId:1},
        {id:953,verb:"fade",forms:{base:"fade",presentParticiple:"fading",past:"faded",pastParticiple:"faded",thirdPerson:"fades"},banglaMeaning:"বিবর্ণ হওয়া",example:"The color will fade in the sun.",categoryId:8},
        {id:954,verb:"fail",forms:{base:"fail",presentParticiple:"failing",past:"failed",pastParticiple:"failed",thirdPerson:"fails"},banglaMeaning:"ব্যর্থ হওয়া",example:"He failed the exam.",categoryId:4},
        {id:955,verb:"faint",forms:{base:"faint",presentParticiple:"fainting",past:"fainted",pastParticiple:"fainted",thirdPerson:"faints"},banglaMeaning:"অজ্ঞান হওয়া",example:"She fainted from the heat.",categoryId:12},
        {id:956,verb:"fake",forms:{base:"fake",presentParticiple:"faking",past:"faked",pastParticiple:"faked",thirdPerson:"fakes"},banglaMeaning:"নকল করা",example:"He faked his signature.",categoryId:6},
        {id:957,verb:"fall",forms:{base:"fall",presentParticiple:"falling",past:"fell",pastParticiple:"fallen",thirdPerson:"falls"},banglaMeaning:"পড়া",example:"Leaves fall in autumn.",categoryId:3},
        {id:958,verb:"falsify",forms:{base:"falsify",presentParticiple:"falsifying",past:"falsified",pastParticiple:"falsified",thirdPerson:"falsifies"},banglaMeaning:"জালিয়াতি করা",example:"Don't falsify the documents.",categoryId:1},
        {id:959,verb:"falter",forms:{base:"falter",presentParticiple:"faltering",past:"faltered",pastParticiple:"faltered",thirdPerson:"falters"},banglaMeaning:"তোতলানো বা ইতস্তত করা",example:"His voice began to falter.",categoryId:2},
        {id:960,verb:"familiarize",forms:{base:"familiarize",presentParticiple:"familiarizing",past:"familiarized",pastParticiple:"familiarized",thirdPerson:"familiarizes"},banglaMeaning:"পরিচিত করা",example:"Familiarize yourself with the rules.",categoryId:4},
        {id:961,verb:"fan",forms:{base:"fan",presentParticiple:"fanning",past:"fanned",pastParticiple:"fanned",thirdPerson:"fans"},banglaMeaning:"বাতাস করা",example:"She was fanning herself.",categoryId:1},
        {id:962,verb:"fancy",forms:{base:"fancy",presentParticiple:"fancying",past:"fancied",pastParticiple:"fancied",thirdPerson:"fancies"},banglaMeaning:"কল্পনা করা বা পছন্দ করা",example:"I fancy a cup of tea.",categoryId:5},
        {id:963,verb:"fantasize",forms:{base:"fantasize",presentParticiple:"fantasizing",past:"fantasized",pastParticiple:"fantasized",thirdPerson:"fantasizes"},banglaMeaning:"দিবাস্বপ্ন দেখা",example:"He fantasized about winning.",categoryId:4},
        {id:964,verb:"fare",forms:{base:"fare",presentParticiple:"faring",past:"fared",pastParticiple:"fared",thirdPerson:"fares"},banglaMeaning:"চলা বা অতিবাহিত করা",example:"How did you fare in the exam?",categoryId:12},
        {id:965,verb:"fascinate",forms:{base:"fascinate",presentParticiple:"fascinating",past:"fascinated",pastParticiple:"fascinated",thirdPerson:"fascinates"},banglaMeaning:"মুগ্ধ করা",example:"The story fascinated the kids.",categoryId:5},
        {id:966,verb:"fashion",forms:{base:"fashion",presentParticiple:"fashioning",past:"fashioned",pastParticiple:"fashioned",thirdPerson:"fashions"},banglaMeaning:"তৈরি করা বা রূপ দেওয়া",example:"He fashioned a tool out of wood.",categoryId:6},
        {id:967,verb:"fast",forms:{base:"fast",presentParticiple:"fasting",past:"fasted",pastParticiple:"fasted",thirdPerson:"fasts"},banglaMeaning:"রোজা রাখা বা উপবাস করা",example:"Muslims fast during Ramadan.",categoryId:1},
        {id:968,verb:"fasten",forms:{base:"fasten",presentParticiple:"fastening",past:"fastened",pastParticiple:"fastened",thirdPerson:"fastens"},banglaMeaning:"আটকানো",example:"Fasten your seatbelt.",categoryId:1},
        {id:969,verb:"fatten",forms:{base:"fatten",presentParticiple:"fattening",past:"fattened",pastParticiple:"fattened",thirdPerson:"fattens"},banglaMeaning:"মোটা করা",example:"They are fattening the cow.",categoryId:8},
        {id:970,verb:"favor",forms:{base:"favor",presentParticiple:"favoring",past:"favored",pastParticiple:"favored",thirdPerson:"favors"},banglaMeaning:"অনুগ্রহ করা বা পক্ষপাত করা",example:"The teacher favored him.",categoryId:11},
        {id:971,verb:"fax",forms:{base:"fax",presentParticiple:"faxing",past:"faxed",pastParticiple:"faxed",thirdPerson:"faxes"},banglaMeaning:"ফ্যাক্স করা",example:"Fax the report to me.",categoryId:2},
        {id:972,verb:"fear",forms:{base:"fear",presentParticiple:"fearing",past:"feared",pastParticiple:"feared",thirdPerson:"fears"},banglaMeaning:"ভয় পাওয়া",example:"Do not fear the dark.",categoryId:5},
        {id:973,verb:"feast",forms:{base:"feast",presentParticiple:"feasting",past:"feasted",pastParticiple:"feasted",thirdPerson:"feasts"},banglaMeaning:"ভোজ করা",example:"They feasted all night.",categoryId:10},
        {id:974,verb:"feather",forms:{base:"feather",presentParticiple:"feathering",past:"feathered",pastParticiple:"feathered",thirdPerson:"feathers"},banglaMeaning:"পালক দিয়ে সাজানো",example:"The bird feathered its nest.",categoryId:6},
        {id:975,verb:"feature",forms:{base:"feature",presentParticiple:"featuring",past:"featured",pastParticiple:"featured",thirdPerson:"features"},banglaMeaning:"বৈশিষ্ট্য হিসেবে তুলে ধরা",example:"The film features a new actor.",categoryId:7},
        {id:976,verb:"federate",forms:{base:"federate",presentParticiple:"federating",past:"federated",pastParticiple:"federated",thirdPerson:"federates"},banglaMeaning:"যুক্তরাষ্ট্রীয় হওয়া",example:"The states decided to federate.",categoryId:1},
        {id:977,verb:"feed",forms:{base:"feed",presentParticiple:"feeding",past:"fed",pastParticiple:"fed",thirdPerson:"feeds"},banglaMeaning:"খাওয়ানো",example:"Feed the baby.",categoryId:10},
        {id:978,verb:"feel",forms:{base:"feel",presentParticiple:"feeling",past:"felt",pastParticiple:"felt",thirdPerson:"feels"},banglaMeaning:"অনুভব করা",example:"I feel happy today.",categoryId:5},
        {id:979,verb:"feign",forms:{base:"feign",presentParticiple:"feigning",past:"feigned",pastParticiple:"feigned",thirdPerson:"feigns"},banglaMeaning:"ভান করা",example:"She feigned illness.",categoryId:1},
        {id:980,verb:"felicitate",forms:{base:"felicitate",presentParticiple:"felicitating",past:"felicitated",pastParticiple:"felicitated",thirdPerson:"felicitates"},banglaMeaning:"অভিনন্দন জানানো",example:"We felicitated the winner.",categoryId:2},
        {id:981,verb:"fell",forms:{base:"fell",presentParticiple:"felling",past:"felled",pastParticiple:"felled",thirdPerson:"fells"},banglaMeaning:"কেটে ফেলা (গাছ)",example:"They felled the old tree.",categoryId:8},
        {id:982,verb:"fence",forms:{base:"fence",presentParticiple:"fencing",past:"fenced",pastParticiple:"fenced",thirdPerson:"fences"},banglaMeaning:"বেড়া দেওয়া",example:"He fenced his garden.",categoryId:1},
        {id:983,verb:"fend",forms:{base:"fend",presentParticiple:"fending",past:"fended",pastParticiple:"fended",thirdPerson:"fends"},banglaMeaning:"রক্ষা করা (fend off)",example:"He fended off the attack.",categoryId:1},
        {id:984,verb:"ferment",forms:{base:"ferment",presentParticiple:"fermenting",past:"fermented",pastParticiple:"fermented",thirdPerson:"ferments"},banglaMeaning:"গাঁজানো",example:"Grapes ferment into wine.",categoryId:8},
        {id:985,verb:"ferry",forms:{base:"ferry",presentParticiple:"ferrying",past:"ferried",pastParticiple:"ferried",thirdPerson:"ferries"},banglaMeaning:"পারাপার করা",example:"The boat ferries people across.",categoryId:3},
        {id:986,verb:"fertilize",forms:{base:"fertilize",presentParticiple:"fertilizing",past:"fertilized",pastParticiple:"fertilized",thirdPerson:"fertilizes"},banglaMeaning:"উর্বর করা",example:"Fertilize the soil.",categoryId:8},
        {id:987,verb:"fetch",forms:{base:"fetch",presentParticiple:"fetching",past:"fetched",pastParticiple:"fetched",thirdPerson:"fetches"},banglaMeaning:"গিয়ে নিয়ে আসা",example:"Fetch me some water.",categoryId:3},
        {id:988,verb:"fetter",forms:{base:"fetter",presentParticiple:"fettering",past:"fettered",pastParticiple:"fettered",thirdPerson:"fetters"},banglaMeaning:"শৃঙ্খলিত করা",example:"He was fettered by rules.",categoryId:1},
        {id:989,verb:"feud",forms:{base:"feud",presentParticiple:"feuding",past:"feuded",pastParticiple:"feuded",thirdPerson:"feuds"},banglaMeaning:"ঝগড়া করা",example:"The families have feuded for years.",categoryId:2},
        {id:990,verb:"fib",forms:{base:"fib",presentParticiple:"fibbing",past:"fibbed",pastParticiple:"fibbed",thirdPerson:"fibs"},banglaMeaning:"মিথ্যা বলা (ছোটখাটো)",example:"Stop fibbing about your age.",categoryId:2},
        {id:991,verb:"field",forms:{base:"field",presentParticiple:"fielding",past:"fielded",pastParticiple:"fielded",thirdPerson:"fields"},banglaMeaning:"ফিল্ডিং করা বা সামলানো",example:"He fielded the question well.",categoryId:1},
        {id:992,verb:"fight",forms:{base:"fight",presentParticiple:"fighting",past:"fought",pastParticiple:"fought",thirdPerson:"fights"},banglaMeaning:"যুদ্ধ করা",example:"Don't fight with others.",categoryId:1},
        {id:993,verb:"figure",forms:{base:"figure",presentParticiple:"figuring",past:"figured",pastParticiple:"figured",thirdPerson:"figures"},banglaMeaning:"হিসাব করা বা মনে করা",example:"I figured you'd be late.",categoryId:4},
        {id:994,verb:"file",forms:{base:"file",presentParticiple:"filing",past:"filed",pastParticiple:"filed",thirdPerson:"files"},banglaMeaning:"নথিভুক্ত করা",example:"File these papers.",categoryId:1},
        {id:995,verb:"fill",forms:{base:"fill",presentParticiple:"filling",past:"filled",pastParticiple:"filled",thirdPerson:"fills"},banglaMeaning:"পূর্ণ করা",example:"Fill the glass with milk.",categoryId:1},
        {id:996,verb:"film",forms:{base:"film",presentParticiple:"filming",past:"filmed",pastParticiple:"filmed",thirdPerson:"films"},banglaMeaning:"চলচ্চিত্র নির্মাণ করা",example:"They are filming a movie.",categoryId:6},
        {id:997,verb:"filter",forms:{base:"filter",presentParticiple:"filtering",past:"filtered",pastParticiple:"filtered",thirdPerson:"filters"},banglaMeaning:"ছাঁকা",example:"Filter the water.",categoryId:1},
        {id:998,verb:"finalize",forms:{base:"finalize",presentParticiple:"finalizing",past:"finalized",pastParticiple:"finalized",thirdPerson:"finalizes"},banglaMeaning:"চূড়ান্ত করা",example:"We finalized the deal.",categoryId:1},
        {id:999,verb:"finance",forms:{base:"finance",presentParticiple:"financing",past:"financed",pastParticiple:"financed",thirdPerson:"finances"},banglaMeaning:"অর্থায়ন করা",example:"Who financed the project?",categoryId:9},
        {id:1000,verb:"find",forms:{base:"find",presentParticiple:"finding",past:"found",pastParticiple:"found",thirdPerson:"finds"},banglaMeaning:"খুঁজে পাওয়া",example:"I found my lost pen.",categoryId:7},
        {id:1001,verb:"fine",forms:{base:"fine",presentParticiple:"fining",past:"fined",pastParticiple:"fined",thirdPerson:"fines"},banglaMeaning:"জরিমানা করা",example:"He was fined for speeding.",categoryId:9},
        {id:1002,verb:"finger",forms:{base:"finger",presentParticiple:"fingering",past:"fingered",pastParticiple:"fingered",thirdPerson:"fingers"},banglaMeaning:"আঙুল দিয়ে ছোঁয়া",example:"She fingered the fabric.",categoryId:7},
        {id:1003,verb:"finish",forms:{base:"finish",presentParticiple:"finishing",past:"finished",pastParticiple:"finished",thirdPerson:"finishs"},banglaMeaning:"শেষ করা",example:"Finish your work.",categoryId:1},
        {id:1004,verb:"fire",forms:{base:"fire",presentParticiple:"firing",past:"fired",pastParticiple:"fired",thirdPerson:"fires"},banglaMeaning:"বরখাস্ত করা বা আগুন দেওয়া",example:"The boss fired him.",categoryId:1},
        {id:1005,verb:"firm",forms:{base:"firm",presentParticiple:"firming",past:"firmed",pastParticiple:"firmed",thirdPerson:"firms"},banglaMeaning:"দৃঢ় করা",example:"The market prices firmed up.",categoryId:8},
        {id:1006,verb:"fish",forms:{base:"fish",presentParticiple:"fishing",past:"fished",pastParticiple:"fished",thirdPerson:"fishs"},banglaMeaning:"মাছ ধরা",example:"He likes to fish.",categoryId:1},
        {id:1007,verb:"fit",forms:{base:"fit",presentParticiple:"fitting",past:"fitted",pastParticiple:"fitted",thirdPerson:"fits"},banglaMeaning:"উপযুক্ত হওয়া",example:"These shoes fit me well.",categoryId:11},
        {id:1008,verb:"fix",forms:{base:"fix",presentParticiple:"fixing",past:"fixed",pastParticiple:"fixed",thirdPerson:"fixs"},banglaMeaning:"মেরামত করা বা স্থির করা",example:"Can you fix my phone?",categoryId:1},
        {id:1009,verb:"fizz",forms:{base:"fizz",presentParticiple:"fizzing",past:"fizzed",pastParticiple:"fizzed",thirdPerson:"fizzs"},banglaMeaning:"বুদবুদ করা",example:"The soda is fizzing.",categoryId:12},
        {id:1010,verb:"flabbergast",forms:{base:"flabbergast",presentParticiple:"flabbergasting",past:"flabbergasted",pastParticiple:"flabbergasted",thirdPerson:"flabbergasts"},banglaMeaning:"বিস্মিত করা",example:"The news flabbergasted him.",categoryId:5},
        {id:1011,verb:"flag",forms:{base:"flag",presentParticiple:"flagging",past:"flagged",pastParticiple:"flagged",thirdPerson:"flags"},banglaMeaning:"চিহ্নিত করা বা ক্লান্ত হওয়া",example:"Flag the important pages.",categoryId:1},
        {id:1012,verb:"flake",forms:{base:"flake",presentParticiple:"flaking",past:"flaked",pastParticiple:"flaked",thirdPerson:"flakes"},banglaMeaning:"স্তর হয়ে খসে পড়া",example:"The paint is flaking off.",categoryId:8},
        {id:1013,verb:"flame",forms:{base:"flame",presentParticiple:"flaming",past:"flamed",pastParticiple:"flamed",thirdPerson:"flames"},banglaMeaning:"জ্বলানো",example:"The fire flamed up.",categoryId:12},
        {id:1014,verb:"flap",forms:{base:"flap",presentParticiple:"flapping",past:"flapped",pastParticiple:"flapped",thirdPerson:"flaps"},banglaMeaning:"ঝাপটানো",example:"The bird flapped its wings.",categoryId:3},
        {id:1015,verb:"flare",forms:{base:"flare",presentParticiple:"flaring",past:"flared",pastParticiple:"flared",thirdPerson:"flares"},banglaMeaning:"হঠাৎ জ্বলে ওঠা",example:"Tempers flared up.",categoryId:8},
        {id:1016,verb:"flash",forms:{base:"flash",presentParticiple:"flashing",past:"flashed",pastParticiple:"flashed",thirdPerson:"flashs"},banglaMeaning:"ঝলকানো",example:"Lightning flashed.",categoryId:7},
        {id:1017,verb:"flatten",forms:{base:"flatten",presentParticiple:"flattening",past:"flattened",pastParticiple:"flattened",thirdPerson:"flattens"},banglaMeaning:"চ্যাপ্টা করা",example:"Flatten the dough.",categoryId:8},
        {id:1018,verb:"flatter",forms:{base:"flatter",presentParticiple:"flattering",past:"flattered",pastParticiple:"flattered",thirdPerson:"flatters"},banglaMeaning:"তোষামোদ করা",example:"Don't flatter me.",categoryId:2},
        {id:1019,verb:"flaunt",forms:{base:"flaunt",presentParticiple:"flaunting",past:"flaunted",pastParticiple:"flaunted",thirdPerson:"flaunts"},banglaMeaning:"গর্বের সাথে দেখানো",example:"She flaunted her ring.",categoryId:7},
        {id:1020,verb:"flavor",forms:{base:"flavor",presentParticiple:"flavoring",past:"flavored",pastParticiple:"flavored",thirdPerson:"flavors"},banglaMeaning:"স্বাদযুক্ত করা",example:"Flavor the soup with salt.",categoryId:10},
        {id:1021,verb:"flaw",forms:{base:"flaw",presentParticiple:"flawing",past:"flawed",pastParticiple:"flawed",thirdPerson:"flaws"},banglaMeaning:"ত্রুটিপূর্ণ করা",example:"The plan was flawed.",categoryId:8},
        {id:1022,verb:"flee",forms:{base:"flee",presentParticiple:"fleeing",past:"fled",pastParticiple:"fled",thirdPerson:"flees"},banglaMeaning:"পালিয়ে যাওয়া",example:"He fled the country.",categoryId:3},
        {id:1023,verb:"fleece",forms:{base:"fleece",presentParticiple:"fleecing",past:"fleeced",pastParticiple:"fleeced",thirdPerson:"fleeces"},banglaMeaning:"ঠকানো",example:"They fleeced him of his money.",categoryId:9},
        {id:1024,verb:"fleet",forms:{base:"fleet",presentParticiple:"fleeting",past:"fleeted",pastParticiple:"fleeted",thirdPerson:"fleets"},banglaMeaning:"দ্রুত চলে যাওয়া",example:"Time fleets away.",categoryId:12},
        {id:1025,verb:"flex",forms:{base:"flex",presentParticiple:"flexing",past:"flexed",pastParticiple:"flexed",thirdPerson:"flexs"},banglaMeaning:"বাঁকানো বা পেশি দেখানো",example:"He flexed his muscles.",categoryId:1},
        {id:1026,verb:"flick",forms:{base:"flick",presentParticiple:"flicking",past:"flicked",pastParticiple:"flicked",thirdPerson:"flicks"},banglaMeaning:"ঝাড়া বা টোকা দেওয়া",example:"He flicked the ash off.",categoryId:1},
        {id:1027,verb:"flicker",forms:{base:"flicker",presentParticiple:"flickering",past:"flickered",pastParticiple:"flickered",thirdPerson:"flickers"},banglaMeaning:"টিপটিপ করা",example:"The candle flickered.",categoryId:7},
        {id:1028,verb:"flinch",forms:{base:"flinch",presentParticiple:"flinching",past:"flinched",pastParticiple:"flinched",thirdPerson:"flinchs"},banglaMeaning:"পিছপা হওয়া",example:"He didn't flinch from danger.",categoryId:3},
        {id:1029,verb:"fling",forms:{base:"fling",presentParticiple:"flinging",past:"flung",pastParticiple:"flung",thirdPerson:"flings"},banglaMeaning:"ছুড়ে মারা",example:"She flung the keys on the table.",categoryId:3},
        {id:1030,verb:"flip",forms:{base:"flip",presentParticiple:"flipping",past:"flipped",pastParticiple:"flipped",thirdPerson:"flips"},banglaMeaning:"উল্টানো",example:"Flip the coin.",categoryId:1},
        {id:1031,verb:"flirt",forms:{base:"flirt",presentParticiple:"flirting",past:"flirted",pastParticiple:"flirted",thirdPerson:"flirts"},banglaMeaning:"প্রেম প্রেম ভাব করা",example:"They were flirting.",categoryId:5},
        {id:1032,verb:"float",forms:{base:"float",presentParticiple:"floating",past:"floated",pastParticiple:"floated",thirdPerson:"floats"},banglaMeaning:"ভাসা",example:"Wood floats on water.",categoryId:12},
        {id:1033,verb:"flock",forms:{base:"flock",presentParticiple:"flocking",past:"flocked",pastParticiple:"flocked",thirdPerson:"flocks"},banglaMeaning:"ঝাঁক বেঁধে চলা",example:"Birds flock together.",categoryId:3},
        {id:1034,verb:"flog",forms:{base:"flog",presentParticiple:"flogging",past:"flogged",pastParticiple:"flogged",thirdPerson:"flogs"},banglaMeaning:"চাবুক মারা",example:"The prisoner was flogged.",categoryId:1},
        {id:1035,verb:"flood",forms:{base:"flood",presentParticiple:"flooding",past:"flooded",pastParticiple:"flooded",thirdPerson:"floods"},banglaMeaning:"প্লাবিত করা",example:"The river flooded the fields.",categoryId:8},
        {id:1036,verb:"floor",forms:{base:"floor",presentParticiple:"flooring",past:"floored",pastParticiple:"floored",thirdPerson:"floors"},banglaMeaning:"মেঝেতে ফেলা বা অবাক করা",example:"The news floored him.",categoryId:5},
        {id:1037,verb:"flop",forms:{base:"flop",presentParticiple:"flopping",past:"flopped",pastParticiple:"flopped",thirdPerson:"flops"},banglaMeaning:"ধপাস করে পড়া বা ব্যর্থ হওয়া",example:"The movie flopped.",categoryId:4},
        {id:1038,verb:"flounder",forms:{base:"flounder",presentParticiple:"floundering",past:"floundered",pastParticiple:"floundered",thirdPerson:"flounders"},banglaMeaning:"কষ্টে চলা বা হাবুডুবু খাওয়া",example:"He is floundering in his job.",categoryId:1},
        {id:1039,verb:"flourish",forms:{base:"flourish",presentParticiple:"flourishing",past:"flourished",pastParticiple:"flourished",thirdPerson:"flourishs"},banglaMeaning:"উন্নতি করা বা বিকশিত হওয়া",example:"Plants flourish in the sun.",categoryId:8},
        {id:1040,verb:"flow",forms:{base:"flow",presentParticiple:"flowing",past:"flowed",pastParticiple:"flowed",thirdPerson:"flows"},banglaMeaning:"প্রবাহিত হওয়া",example:"Water flows downhill.",categoryId:12},
        {id:1041,verb:"flower",forms:{base:"flower",presentParticiple:"flowering",past:"flowered",pastParticiple:"flowered",thirdPerson:"flowers"},banglaMeaning:"ফুল ফোটা",example:"The roses are flowering.",categoryId:12},
        {id:1042,verb:"fluctuate",forms:{base:"fluctuate",presentParticiple:"fluctuating",past:"fluctuated",pastParticiple:"fluctuated",thirdPerson:"fluctuates"},banglaMeaning:"ওঠানামা করা",example:"Prices fluctuate daily.",categoryId:8},
        {id:1043,verb:"flush",forms:{base:"flush",presentParticiple:"flushing",past:"flushed",pastParticiple:"flushed",thirdPerson:"flushs"},banglaMeaning:"জল দিয়ে ধোয়া বা লাল হওয়া",example:"Flush the toilet.",categoryId:1},
        {id:1044,verb:"fluster",forms:{base:"fluster",presentParticiple:"flustering",past:"flustered",pastParticiple:"flustered",thirdPerson:"flusters"},banglaMeaning:"ঘাবড়ে দেওয়া",example:"Don't fluster me.",categoryId:5},
        {id:1045,verb:"flutter",forms:{base:"flutter",presentParticiple:"fluttering",past:"fluttered",pastParticiple:"fluttered",thirdPerson:"flutters"},banglaMeaning:"পাখা ঝাপটানো",example:"The flag fluttered in the wind.",categoryId:3},
        {id:1046,verb:"fly",forms:{base:"fly",presentParticiple:"flying",past:"flew",pastParticiple:"flown",thirdPerson:"flys"},banglaMeaning:"ওড়া",example:"Birds fly in the sky.",categoryId:3},
        {id:1047,verb:"foal",forms:{base:"foal",presentParticiple:"foaling",past:"foaled",pastParticiple:"foaled",thirdPerson:"foals"},banglaMeaning:"ঘোড়ার বাচ্চা দেওয়া",example:"The mare foaled last night.",categoryId:12},
        {id:1048,verb:"foam",forms:{base:"foam",presentParticiple:"foaming",past:"foamed",pastParticiple:"foamed",thirdPerson:"foams"},banglaMeaning:"ফেনা হওয়া",example:"The soap is foaming.",categoryId:12},
        {id:1049,verb:"focalize",forms:{base:"focalize",presentParticiple:"focalizing",past:"focalized",pastParticiple:"focalized",thirdPerson:"focalizes"},banglaMeaning:"কেন্দ্রীভূত করা",example:"Focalize your attention.",categoryId:4},
        {id:1050,verb:"focus",forms:{base:"focus",presentParticiple:"focusing",past:"focused",pastParticiple:"focused",thirdPerson:"focuss"},banglaMeaning:"মনোযোগ দেওয়া",example:"Focus on your goals.",categoryId:4},
        {id:1051,verb:"fog",forms:{base:"fog",presentParticiple:"fogging",past:"fogged",pastParticiple:"fogged",thirdPerson:"fogs"},banglaMeaning:"কুয়াশাচ্ছন্ন হওয়া",example:"The glass fogged up.",categoryId:8},
        {id:1052,verb:"foil",forms:{base:"foil",presentParticiple:"foiling",past:"foiled",pastParticiple:"foiled",thirdPerson:"foils"},banglaMeaning:"ব্যর্থ করে দেওয়া",example:"Police foiled the robbery.",categoryId:1},
        {id:1053,verb:"fold",forms:{base:"fold",presentParticiple:"folding",past:"folded",pastParticiple:"folded",thirdPerson:"folds"},banglaMeaning:"ভাঁজ করা",example:"Fold the paper.",categoryId:1},
        {id:1054,verb:"follow",forms:{base:"follow",presentParticiple:"following",past:"followed",pastParticiple:"followed",thirdPerson:"follows"},banglaMeaning:"অনুসরণ করা",example:"Follow me.",categoryId:3},
        {id:1055,verb:"foment",forms:{base:"foment",presentParticiple:"fomenting",past:"fomented",pastParticiple:"fomented",thirdPerson:"foments"},banglaMeaning:"উস্কানি দেওয়া",example:"They fomented a rebellion.",categoryId:1},
        {id:1056,verb:"fondle",forms:{base:"fondle",presentParticiple:"fondling",past:"fondled",pastParticiple:"fondled",thirdPerson:"fondles"},banglaMeaning:"আদর করা",example:"She fondled the cat.",categoryId:5},
        {id:1057,verb:"fool",forms:{base:"fool",presentParticiple:"fooling",past:"fooled",pastParticiple:"fooled",thirdPerson:"fools"},banglaMeaning:"বোকা বানানো",example:"Don't fool me.",categoryId:1},
        {id:1058,verb:"forbid",forms:{base:"forbid",presentParticiple:"forbidding",past:"forbade",pastParticiple:"forbidden",thirdPerson:"forbids"},banglaMeaning:"নিষেধ করা",example:"Smoking is forbidden.",categoryId:2},
        {id:1059,verb:"force",forms:{base:"force",presentParticiple:"forcing",past:"forced",pastParticiple:"forced",thirdPerson:"forces"},banglaMeaning:"বাধ্য করা",example:"Don't force him to go.",categoryId:1},
        {id:1060,verb:"ford",forms:{base:"ford",presentParticiple:"fording",past:"forded",pastParticiple:"forded",thirdPerson:"fords"},banglaMeaning:"হেঁটে নদী পার হওয়া",example:"They forded the river.",categoryId:3},
        {id:1061,verb:"forearm",forms:{base:"forearm",presentParticiple:"forearming",past:"forearmed",pastParticiple:"forearmed",thirdPerson:"forearms"},banglaMeaning:"পূর্বেই প্রস্তুত করা",example:"To be forewarned is to be forearmed.",categoryId:1},
        {id:1062,verb:"forecast",forms:{base:"forecast",presentParticiple:"forecasting",past:"forecast",pastParticiple:"forecast",thirdPerson:"forecasts"},banglaMeaning:"পূর্বাভাস দেওয়া",example:"They forecast rain.",categoryId:4},
        {id:1063,verb:"foreclose",forms:{base:"foreclose",presentParticiple:"foreclosing",past:"foreclosed",pastParticiple:"foreclosed",thirdPerson:"forecloses"},banglaMeaning:"অধিকার হরণ করা",example:"The bank foreclosed the home.",categoryId:9},
        {id:1064,verb:"forego",forms:{base:"forego",presentParticiple:"foregoing",past:"forewent",pastParticiple:"foregone",thirdPerson:"foregoes"},banglaMeaning:"ত্যাগ করা",example:"I will forego my claim.",categoryId:1},
        {id:1065,verb:"foreground",forms:{base:"foreground",presentParticiple:"foregrounding",past:"foregrounded",pastParticiple:"foregrounded",thirdPerson:"foregrounds"},banglaMeaning:"সামনে আনা বা গুরুত্ব দেওয়া",example:"The issue was foregrounded.",categoryId:2},
        {id:1066,verb:"foresee",forms:{base:"foresee",presentParticiple:"foreseeing",past:"foresaw",pastParticiple:"foreseen",thirdPerson:"foresees"},banglaMeaning:"আগেভাগে দেখা",example:"I didn't foresee this.",categoryId:4},
        {id:1067,verb:"foreshadow",forms:{base:"foreshadow",presentParticiple:"foreshadowing",past:"foreshadowed",pastParticiple:"foreshadowed",thirdPerson:"foreshadows"},banglaMeaning:"পূর্বাভাস দেওয়া",example:"The dream foreshadowed the event.",categoryId:4},
        {id:1068,verb:"foreshorten",forms:{base:"foreshorten",presentParticiple:"foreshortening",past:"foreshortened",pastParticiple:"foreshortened",thirdPerson:"foreshortens"},banglaMeaning:"সংক্ষেপ করা",example:"The perspective foreshortened the road.",categoryId:8},
        {id:1069,verb:"forestall",forms:{base:"forestall",presentParticiple:"forestalling",past:"forestalled",pastParticiple:"forestalled",thirdPerson:"forestalls"},banglaMeaning:"আগেভাগে প্রতিরোধ করা",example:"He forestalled their move.",categoryId:1},
        {id:1070,verb:"foretell",forms:{base:"foretell",presentParticiple:"foretelling",past:"foretold",pastParticiple:"foretold",thirdPerson:"foretells"},banglaMeaning:"ভবিষ্যদ্বাণী করা",example:"Who can foretell the future?",categoryId:2},
        {id:1071,verb:"forewarn",forms:{base:"forewarn",presentParticiple:"forewarning",past:"forewarned",pastParticiple:"forewarned",thirdPerson:"forewarns"},banglaMeaning:"আগে সতর্ক করা",example:"I forewarned him.",categoryId:2},
        {id:1072,verb:"forfeit",forms:{base:"forfeit",presentParticiple:"forfeiting",past:"forfeited",pastParticiple:"forfeited",thirdPerson:"forfeits"},banglaMeaning:"জরিমানা স্বরূপ হারানো",example:"He forfeited his deposit.",categoryId:9},
        {id:1073,verb:"forge",forms:{base:"forge",presentParticiple:"forging",past:"forged",pastParticiple:"forged",thirdPerson:"forges"},banglaMeaning:"জালিয়াতি করা বা তৈরি করা",example:"He forged the document.",categoryId:6},
        {id:1074,verb:"forget",forms:{base:"forget",presentParticiple:"forgetting",past:"forgot",pastParticiple:"forgotten",thirdPerson:"forgets"},banglaMeaning:"ভুলে যাওয়া",example:"Don't forget me.",categoryId:4},
        {id:1075,verb:"forgive",forms:{base:"forgive",presentParticiple:"forgiving",past:"forgave",pastParticiple:"forgiven",thirdPerson:"forgives"},banglaMeaning:"ক্ষমা করা",example:"Forgive me.",categoryId:5},
        {id:1076,verb:"forgo",forms:{base:"forgo",presentParticiple:"forgoing",past:"forwent",pastParticiple:"forgone",thirdPerson:"forgoes"},banglaMeaning:"ছেড়ে দেওয়া",example:"She decided to forgo the prize.",categoryId:1},
        {id:1077,verb:"fork",forms:{base:"fork",presentParticiple:"forking",past:"forked",pastParticiple:"forked",thirdPerson:"forks"},banglaMeaning:"দ্বিখণ্ডিত হওয়া",example:"The road forks here.",categoryId:3},
        {id:1078,verb:"form",forms:{base:"form",presentParticiple:"forming",past:"formed",pastParticiple:"formed",thirdPerson:"forms"},banglaMeaning:"গঠন করা",example:"Form a line.",categoryId:1},
        {id:1079,verb:"formalize",forms:{base:"formalize",presentParticiple:"formalizing",past:"formalized",pastParticiple:"formalized",thirdPerson:"formalizes"},banglaMeaning:"আনুষ্ঠানিক রূপ দেওয়া",example:"They formalized the agreement.",categoryId:1},
        {id:1080,verb:"format",forms:{base:"format",presentParticiple:"formatting",past:"formatted",pastParticiple:"formatted",thirdPerson:"formats"},banglaMeaning:"বিন্যাস করা",example:"Format the disk.",categoryId:1},
        {id:1081,verb:"formulate",forms:{base:"formulate",presentParticiple:"formulating",past:"formulated",pastParticiple:"formulated",thirdPerson:"formulates"},banglaMeaning:"সূত্রবদ্ধ করা",example:"Formulate a strategy.",categoryId:4},
        {id:1082,verb:"fornicate",forms:{base:"fornicate",presentParticiple:"fornicating",past:"fornicated",pastParticiple:"fornicated",thirdPerson:"fornicates"},banglaMeaning:"ব্যভিচার করা",example:"It is a sin to fornicate.",categoryId:1},
        {id:1083,verb:"forsake",forms:{base:"forsake",presentParticiple:"forsaking",past:"forsook",pastParticiple:"forsaken",thirdPerson:"forsakes"},banglaMeaning:"পরিত্যাগ করা",example:"Never forsake your friends.",categoryId:1},
        {id:1084,verb:"fortify",forms:{base:"fortify",presentParticiple:"fortifying",past:"fortified",pastParticiple:"fortified",thirdPerson:"fortifies"},banglaMeaning:"শক্তিশালী করা",example:"They fortified the city.",categoryId:1},
        {id:1085,verb:"forward",forms:{base:"forward",presentParticiple:"forwarding",past:"forwarded",pastParticiple:"forwarded",thirdPerson:"forwards"},banglaMeaning:"এগিয়ে পাঠানো",example:"Forward the email.",categoryId:3},
        {id:1086,verb:"fossilize",forms:{base:"fossilize",presentParticiple:"fossilizing",past:"fossilized",pastParticiple:"fossilized",thirdPerson:"fossilizes"},banglaMeaning:"জীবাশ্মে পরিণত হওয়া",example:"Bones fossilize over time.",categoryId:8},
        {id:1087,verb:"foster",forms:{base:"foster",presentParticiple:"fostering",past:"fostered",pastParticiple:"fostered",thirdPerson:"fosters"},banglaMeaning:"লালন-পালন করা",example:"She fosters two children.",categoryId:1},
        {id:1088,verb:"foul",forms:{base:"foul",presentParticiple:"fouling",past:"fouled",pastParticiple:"fouled",thirdPerson:"fouls"},banglaMeaning:"নোংরা করা বা ফাউল করা",example:"He fouled the other player.",categoryId:1},
        {id:1089,verb:"found",forms:{base:"found",presentParticiple:"founding",past:"founded",pastParticiple:"founded",thirdPerson:"founds"},banglaMeaning:"প্রতিষ্ঠা করা",example:"He founded a hospital.",categoryId:1},
        {id:1090,verb:"fracture",forms:{base:"fracture",presentParticiple:"fracturing",past:"fractured",pastParticiple:"fractured",thirdPerson:"fractures"},banglaMeaning:"ভেঙে যাওয়া (হাড়)",example:"He fractured his arm.",categoryId:8},
        {id:1091,verb:"fragment",forms:{base:"fragment",presentParticiple:"fragmenting",past:"fragmented",pastParticiple:"fragmented",thirdPerson:"fragments"},banglaMeaning:"খণ্ড বিখণ্ড করা",example:"The glass fragmented.",categoryId:8},
        {id:1092,verb:"frame",forms:{base:"frame",presentParticiple:"framing",past:"framed",pastParticiple:"framed",thirdPerson:"frames"},banglaMeaning:"কাঠামো তৈরি করা বা ফাঁসানো",example:"He was framed for the crime.",categoryId:6},
        {id:1093,verb:"franchise",forms:{base:"franchise",presentParticiple:"franchising",past:"franchised",pastParticiple:"franchised",thirdPerson:"franchises"},banglaMeaning:"ভোটাধিকার দেওয়া বা ডিলারশিপ দেওয়া",example:"The company is franchising.",categoryId:9},
        {id:1094,verb:"frank",forms:{base:"frank",presentParticiple:"franking",past:"franked",pastParticiple:"franked",thirdPerson:"franks"},banglaMeaning:"সীলমোহর মারা (ডাকটিকিট)",example:"The letters were franked.",categoryId:1},
        {id:1095,verb:"fraternize",forms:{base:"fraternize",presentParticiple:"fraternizing",past:"fraternized",pastParticiple:"fraternized",thirdPerson:"fraternizes"},banglaMeaning:"বন্ধুত্ব করা",example:"Don't fraternize with the enemy.",categoryId:1},
        {id:1096,verb:"fray",forms:{base:"fray",presentParticiple:"fraying",past:"frayed",pastParticiple:"frayed",thirdPerson:"frays"},banglaMeaning:"ঘর্ষণে ছিঁড়ে যাওয়া",example:"The rope is fraying.",categoryId:8},
        {id:1097,verb:"freak",forms:{base:"freak",presentParticiple:"freaking",past:"freaked",pastParticiple:"freaked",thirdPerson:"freaks"},banglaMeaning:"ঘাবড়ে যাওয়া (freak out)",example:"She freaked out.",categoryId:5},
        {id:1098,verb:"free",forms:{base:"free",presentParticiple:"freeing",past:"freed",pastParticiple:"freed",thirdPerson:"frees"},banglaMeaning:"মুক্ত করা",example:"Free the prisoners.",categoryId:1},
        {id:1099,verb:"freeze",forms:{base:"freeze",presentParticiple:"freezing",past:"froze",pastParticiple:"frozen",thirdPerson:"freezes"},banglaMeaning:"জমাট বাঁধা",example:"Water freezes at 0°C.",categoryId:8},
        {id:1100,verb:"freight",forms:{base:"freight",presentParticiple:"freighting",past:"freighted",pastParticiple:"freighted",thirdPerson:"freights"},banglaMeaning:"পণ্যবাহী জাহাজে পাঠানো",example:"The goods were freighted.",categoryId:3},
        {id:1101,verb:"frequent",forms:{base:"frequent",presentParticiple:"frequenting",past:"frequented",pastParticiple:"frequented",thirdPerson:"frequents"},banglaMeaning:"ঘনঘন আসা-যাওয়া করা",example:"He frequents this cafe.",categoryId:3},
        {id:1102,verb:"fresco",forms:{base:"fresco",presentParticiple:"frescoing",past:"frescoed",pastParticiple:"frescoed",thirdPerson:"frescoes"},banglaMeaning:"ভিত্তিচিত্র আঁকা",example:"The ceiling was frescoed.",categoryId:6},
        {id:1103,verb:"fresh",forms:{base:"fresh",presentParticiple:"freshing",past:"freshed",pastParticiple:"freshed",thirdPerson:"freshes"},banglaMeaning:"সতেজ করা",example:"Fresh up before dinner.",categoryId:8},
        {id:1104,verb:"freshen",forms:{base:"freshen",presentParticiple:"freshening",past:"freshened",pastParticiple:"freshened",thirdPerson:"freshens"},banglaMeaning:"সজীব করা",example:"Freshen your breath.",categoryId:1},
        {id:1105,verb:"fret",forms:{base:"fret",presentParticiple:"fretting",past:"fretted",pastParticiple:"fretted",thirdPerson:"frets"},banglaMeaning:"দুশ্চিন্তা করা",example:"Don't fret about it.",categoryId:5},
        {id:1106,verb:"frighten",forms:{base:"frighten",presentParticiple:"frightening",past:"frightened",pastParticiple:"frightened",thirdPerson:"frightens"},banglaMeaning:"ভীত করা",example:"The dog frightened me.",categoryId:5},
        {id:1107,verb:"frill",forms:{base:"frill",presentParticiple:"frilling",past:"frilled",pastParticiple:"frilled",thirdPerson:"frills"},banglaMeaning:"ঝালর লাগানো",example:"The dress was frilled.",categoryId:6},
        {id:1108,verb:"frisk",forms:{base:"frisk",presentParticiple:"frisking",past:"frisked",pastParticiple:"frisked",thirdPerson:"frisks"},banglaMeaning:"তল্লাশি করা",example:"The guard frisked him.",categoryId:1},
        {id:1109,verb:"frivol",forms:{base:"frivol",presentParticiple:"frivolling",past:"frivolled",pastParticiple:"frivolled",thirdPerson:"frivols"},banglaMeaning:"বৃথা সময় নষ্ট করা",example:"Don't frivol away your time.",categoryId:1},
        {id:1110,verb:"frizzle",forms:{base:"frizzle",presentParticiple:"frizzling",past:"frizzled",pastParticiple:"frizzled",thirdPerson:"frizzles"},banglaMeaning:"ককড়া করা (চুল)",example:"She frizzled her hair.",categoryId:6},
        {id:1111,verb:"frock",forms:{base:"frock",presentParticiple:"frocking",past:"frocked",pastParticiple:"frocked",thirdPerson:"frocks"},banglaMeaning:"পোশাক পরানো",example:"The priest was frocked.",categoryId:1},
        {id:1112,verb:"frog",forms:{base:"frog",presentParticiple:"frogging",past:"frogged",pastParticiple:"frogged",thirdPerson:"frogs"},banglaMeaning:"ব্যাঙ ধরা",example:"They went frogging.",categoryId:1},
        {id:1113,verb:"frolic",forms:{base:"frolic",presentParticiple:"frolicking",past:"frolicked",pastParticiple:"frolicked",thirdPerson:"frolics"},banglaMeaning:"খেলতে খেলতে নাচা",example:"Lambs were frolicking.",categoryId:12},
        {id:1114,verb:"front",forms:{base:"front",presentParticiple:"fronting",past:"fronted",pastParticiple:"fronted",thirdPerson:"fronts"},banglaMeaning:"সামনে থাকা",example:"The shop fronts the street.",categoryId:3},
        {id:1115,verb:"frost",forms:{base:"frost",presentParticiple:"frosting",past:"frosted",pastParticiple:"frosted",thirdPerson:"frosts"},banglaMeaning:"তুষারাবৃত করা",example:"The windows were frosted.",categoryId:8},
        {id:1116,verb:"froth",forms:{base:"froth",presentParticiple:"frothing",past:"frothed",pastParticiple:"frothed",thirdPerson:"froths"},banglaMeaning:"ফেনা ওঠা",example:"The coffee is frothing.",categoryId:12},
        {id:1117,verb:"frown",forms:{base:"frown",presentParticiple:"frowning",past:"frowned",pastParticiple:"frowned",thirdPerson:"frowns"},banglaMeaning:"ভ্রুকুটি করা",example:"She frowned at me.",categoryId:5},
        {id:1118,verb:"fructify",forms:{base:"fructify",presentParticiple:"fructifying",past:"fructified",pastParticiple:"fructified",thirdPerson:"fructifies"},banglaMeaning:"ফলপ্রসূ হওয়া",example:"The seeds will fructify.",categoryId:8},
        {id:1119,verb:"frustrate",forms:{base:"frustrate",presentParticiple:"frustrating",past:"frustrated",pastParticiple:"frustrated",thirdPerson:"frustrates"},banglaMeaning:"হতাশ করা",example:"Don't frustrate him.",categoryId:5},
        {id:1120,verb:"fry",forms:{base:"fry",presentParticiple:"frying",past:"fried",pastParticiple:"fried",thirdPerson:"frys"},banglaMeaning:"ভাজা",example:"Fry the fish.",categoryId:10},
        {id:1121,verb:"fuel",forms:{base:"fuel",presentParticiple:"fueling",past:"fueled",pastParticiple:"fueled",thirdPerson:"fuels"},banglaMeaning:"জ্বালানি দেওয়া বা উস্কে দেওয়া",example:"The news fueled the anger.",categoryId:8},
        {id:1122,verb:"fulfil",forms:{base:"fulfil",presentParticiple:"fulfilling",past:"fulfilled",pastParticiple:"fulfilled",thirdPerson:"fulfils"},banglaMeaning:"পূর্ণ করা",example:"I fulfilled my promise.",categoryId:1},
        {id:1123,verb:"full",forms:{base:"full",presentParticiple:"fulling",past:"fulled",pastParticiple:"fulled",thirdPerson:"fulls"},banglaMeaning:"পূর্ণ করা (কাপড়)",example:"He fulled the cloth.",categoryId:1},
        {id:1124,verb:"fumble",forms:{base:"fumble",presentParticiple:"fumbling",past:"fumbled",pastParticiple:"fumbled",thirdPerson:"fumbles"},banglaMeaning:"হাতড়ানো",example:"He fumbled for his keys.",categoryId:1},
        {id:1125,verb:"fume",forms:{base:"fume",presentParticiple:"fuming",past:"fumed",pastParticiple:"fumed",thirdPerson:"fumes"},banglaMeaning:"ধোঁয়া ছাড়া বা রাগে ফোঁসানো",example:"He was fuming with rage.",categoryId:5},
        {id:1126,verb:"fumigate",forms:{base:"fumigate",presentParticiple:"fumigating",past:"fumigated",pastParticiple:"fumigated",thirdPerson:"fumigates"},banglaMeaning:"ধোঁয়া দিয়ে জীবাণুমুক্ত করা",example:"The house was fumigated.",categoryId:1},
        {id:1127,verb:"function",forms:{base:"function",presentParticiple:"functioning",past:"functioned",pastParticiple:"functioned",thirdPerson:"functions"},banglaMeaning:"কাজ করা",example:"The machine functions well.",categoryId:12},
        {id:1128,verb:"fund",forms:{base:"fund",presentParticiple:"funding",past:"funded",pastParticiple:"funded",thirdPerson:"funds"},banglaMeaning:"তহবিল দেওয়া",example:"The project is funded by NGOs.",categoryId:9},
        {id:1129,verb:"funk",forms:{base:"funk",presentParticiple:"funking",past:"funked",pastParticiple:"funked",thirdPerson:"funks"},banglaMeaning:"ভীত হওয়া বা এড়িয়ে চলা",example:"He funked the challenge.",categoryId:5},
        {id:1130,verb:"funnel",forms:{base:"funnel",presentParticiple:"funneling",past:"funneled",pastParticiple:"funneled",thirdPerson:"funnels"},banglaMeaning:"চোঙের মধ্য দিয়ে ঢালা",example:"Funnel the liquid into the bottle.",categoryId:1},
        {id:1131,verb:"furbish",forms:{base:"furbish",presentParticiple:"furbishing",past:"furbished",pastParticiple:"furbished",thirdPerson:"furbishes"},banglaMeaning:"ঝকঝকে করা",example:"Furbish the old furniture.",categoryId:1},
        {id:1132,verb:"furl",forms:{base:"furl",presentParticiple:"furling",past:"furled",pastParticiple:"furled",thirdPerson:"furls"},banglaMeaning:"গুটিয়ে রাখা (পতাকা/পাল)",example:"Furl the sails.",categoryId:1},
        {id:1133,verb:"furlough",forms:{base:"furlough",presentParticiple:"furloughing",past:"furloughed",pastParticiple:"furloughed",thirdPerson:"furloughs"},banglaMeaning:"ছুটি দেওয়া (সেনাবাহিনী)",example:"He was furloughed for a month.",categoryId:1},
        {id:1134,verb:"furnish",forms:{base:"furnish",presentParticiple:"furnishing",past:"furnished",pastParticiple:"furnished",thirdPerson:"furnishes"},banglaMeaning:"সরবরাহ করা বা আসবাব দেওয়া",example:"The house is fully furnished.",categoryId:1},
        {id:1135,verb:"furrow",forms:{base:"furrow",presentParticiple:"furrowing",past:"furrowed",pastParticiple:"furrowed",thirdPerson:"furrows"},banglaMeaning:"চাষ দেওয়া বা কপালে ভাঁজ পড়া",example:"He furrowed his brow.",categoryId:1},
        {id:1136,verb:"further",forms:{base:"further",presentParticiple:"furthering",past:"furthered",pastParticiple:"furthered",thirdPerson:"furthers"},banglaMeaning:"এগিয়ে দেওয়া",example:"To further your education.",categoryId:11},
        {id:1137,verb:"fuse",forms:{base:"fuse",presentParticiple:"fusing",past:"fused",pastParticiple:"fused",thirdPerson:"fuses"},banglaMeaning:"গলিয়ে জোড়া দেওয়া",example:"Copper and tin fuse easily.",categoryId:8},
        {id:1138,verb:"fuss",forms:{base:"fuss",presentParticiple:"fussing",past:"fussed",pastParticiple:"fussed",thirdPerson:"fusses"},banglaMeaning:"উত্তেজিত হওয়া (তুচ্ছ বিষয়ে)",example:"Don't fuss over it.",categoryId:5},
        {id:1139,verb:"fabricate",forms:{base:"fabricate",presentParticiple:"fabricating",past:"fabricated",pastParticiple:"fabricated",thirdPerson:"fabricates"},banglaMeaning:"উদ্ভাবন বা জালিয়াতি করা",example:"He fabricated the story.",categoryId:6},
        {id:1140,verb:"fade",forms:{base:"fade",presentParticiple:"fading",past:"faded",pastParticiple:"faded",thirdPerson:"fades"},banglaMeaning:"ম্লান হওয়া",example:"The memory faded away.",categoryId:12},
        {id:1141,verb:"fag",forms:{base:"fag",presentParticiple:"fagging",past:"fagged",pastParticiple:"fagged",thirdPerson:"fags"},banglaMeaning:"ক্লান্ত হওয়া বা খাটানো",example:"I'm completely fagged out.",categoryId:1},
        {id:1142,verb:"fake",forms:{base:"fake",presentParticiple:"faking",past:"faked",pastParticiple:"faked",thirdPerson:"fakes"},banglaMeaning:"ছলনা করা",example:"He faked his death.",categoryId:1},
        {id:1143,verb:"fallify",forms:{base:"fallify",presentParticiple:"fallifying",past:"fallified",pastParticiple:"fallified",thirdPerson:"fallifies"},banglaMeaning:"মিথ্যা প্রতিপন্ন করা",example:"Science fallifies myths.",categoryId:4},
        {id:1144,verb:"falsify",forms:{base:"falsify",presentParticiple:"falsifying",past:"falsified",pastParticiple:"falsified",thirdPerson:"falsifies"},banglaMeaning:"মিথ্যা বর্ণনা করা",example:"The report was falsified.",categoryId:2},
        {id:1145,verb:"familiarise",forms:{base:"familiarise",presentParticiple:"familiarising",past:"familiarised",pastParticiple:"familiarised",thirdPerson:"familiarises"},banglaMeaning:"পরিচিত করা",example:"Familiarise with the app.",categoryId:4},
        {id:1146,verb:"fanaticize",forms:{base:"fanaticize",presentParticiple:"fanaticizing",past:"fanaticized",pastParticiple:"fanaticized",thirdPerson:"fanaticizes"},banglaMeaning:"ধর্মান্ধ করা",example:"He was fanaticized by them.",categoryId:4},
        {id:1147,verb:"fancy",forms:{base:"fancy",presentParticiple:"fancying",past:"fancied",pastParticiple:"fancied",thirdPerson:"fancies"},banglaMeaning:"কল্পনা করা",example:"Fancy meeting you here!",categoryId:5},
        {id:1148,verb:"farce",forms:{base:"farce",presentParticiple:"farcing",past:"farced",pastParticiple:"farced",thirdPerson:"farces"},banglaMeaning:"হাস্যকর করা",example:"They farced the play.",categoryId:6},
        {id:1149,verb:"fascinate",forms:{base:"fascinate",presentParticiple:"fascinating",past:"fascinated",pastParticiple:"fascinated",thirdPerson:"fascinates"},banglaMeaning:"বিমোহিত করা",example:"Egypt fascinates me.",categoryId:5},
        {id:1150,verb:"fault",forms:{base:"fault",presentParticiple:"faulting",past:"faulted",pastParticiple:"faulted",thirdPerson:"faults"},banglaMeaning:"ত্রুটি ধরা বা দোষ দেওয়া",example:"You can't fault his logic.",categoryId:4}
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

// Filter verbs based on search, category, and ID
function filterVerbs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryId = document.getElementById('categoryFilter').value;
    const idFilter = document.getElementById('idFilter').value;
    
    filteredVerbs = allVerbs.filter(verb => {
        // Category filter
        const categoryMatch = !categoryId || verb.categoryId == categoryId;
        
        // ID filter - show all verbs from this ID onwards
        const idMatch = !idFilter || verb.id >= parseInt(idFilter);
        
        // Search filter
        const searchMatch = !searchTerm || 
            verb.verb.toLowerCase().includes(searchTerm) ||
            verb.banglaMeaning.toLowerCase().includes(searchTerm) ||
            verb.example.toLowerCase().includes(searchTerm) ||
            Object.values(verb.forms).some(form => form.toLowerCase().includes(searchTerm));
        
        return categoryMatch && idMatch && searchMatch;
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
                <td class="px-1 py-1 text-gray-600 font-bold text-indigo-600">${verb.id}</td>
               
                 
                <td class="px-1 py-1">
                    <button onclick="showVerbModal(${verb.id})" class="font-semibold text-indigo-700 text-lg hover:text-indigo-900 hover:underline cursor-pointer transition-colors">
                        ${verb.verb}
                    </button>
                </td>
                <td class="px-1 py-1">
                    <span class="text-gray-600 italic">"${verb.example}"</span>
                </td>

                 <td class="px-1 py-1">
                    <button onclick="showVerbModal(${verb.id})" class="px-1 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                        <i class="fas fa-eye mr-0"></i>
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
    document.getElementById('modalExample').textContent = verb.banglaMeaning;
    
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
