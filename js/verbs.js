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
                                    {id:450,verb:"benefit",forms:{base:"benefit",presentParticiple:"benefiting",past:"benefited",pastParticiple:"benefited",thirdPerson:"benefits"},banglaMeaning:"উপকার করা",example:"The new law benefits everyone.",categoryId:8}
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
                <td class="px-1 py-1 text-gray-600 font-medium">${rowNumber}</td>
                  <td class="px-1 py-1">
                    <button onclick="showVerbModal(${verb.id})" class="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                        <i class="fas fa-eye mr-1"></i>
                    </button>
                </td>
                <td class="px-1 py-1">
                    <button onclick="showVerbModal(${verb.id})" class="font-semibold text-indigo-700 text-lg hover:text-indigo-900 hover:underline cursor-pointer transition-colors">
                        ${verb.verb}
                    </button>
                </td>
                <td class="px-1 py-1">
                    <span class="text-gray-600 italic">"${verb.example}"</span>
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
