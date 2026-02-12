# 📝 Data Addition Guide

এই গাইড আপনাকে দেখাবে কিভাবে নতুন verbs এবং categories যোগ করবেন।

## 🎯 Quick Navigation

1. [Main Verbs যোগ করা](#main-verbs-যোগ-করা)
2. [Categories যোগ করা](#categories-যোগ-করা)
3. [Auxiliary Verbs যোগ করা](#auxiliary-verbs-যোগ-করা)
4. [Data Validation Tips](#data-validation-tips)

---

## 📚 Main Verbs যোগ করা

### Step 1: File ওপেন করুন
- `js/verbs.js` ফাইল ওপেন করুন
- `loadVerbs()` function খুঁজে বের করুন

### Step 2: নতুন Verb Object যোগ করুন

```javascript
{
    id: 21,                              // নতুন unique ID (শেষ ID এর পরের নম্বর)
    verb: "study",                       // Verb এর base form
    forms: {
        base: "study",                   // Base form (V1)
        presentParticiple: "studying",   // Present Participle (V-ing)
        past: "studied",                 // Past form (V2)
        pastParticiple: "studied",       // Past Participle (V3)
        thirdPerson: "studies"           // 3rd person singular (V+s/es)
    },
    banglaMeaning: "পড়া, অধ্যয়ন করা",    // বাংলা অর্থ
    example: "She studies every night.", // Example sentence
    categoryId: 4                        // Category ID (1-8)
}
```

### Step 3: Array তে যোগ করুন

`return [` এর ভিতরে শেষ verb এর পরে কমা (,) দিয়ে নতুন object paste করুন:

```javascript
async function loadVerbs() {
    return [
        // ... existing verbs ...
        {
            id: 20,
            verb: "teach",
            // ... rest of data
        },
        // 👇 এখানে নতুন verb যোগ করুন
        {
            id: 21,
            verb: "study",
            forms: {
                base: "study",
                presentParticiple: "studying",
                past: "studied",
                pastParticiple: "studied",
                thirdPerson: "studies"
            },
            banglaMeaning: "পড়া, অধ্যয়ন করা",
            example: "She studies every night.",
            categoryId: 4
        }
    ];
}
```

---

## 🗂 Categories যোগ করা

### Step 1: File ওপেন করুন
- `js/verbs.js` ফাইল ওপেন করুন
- `loadCategories()` function খুঁজে বের করুন

### Step 2: নতুন Category যোগ করুন

```javascript
{
    id: 9,                                    // নতুন unique ID
    name: "Learning Verbs (শিক্ষার ভার্ব)"   // Category name (English + Bangla)
}
```

### Step 3: Complete Example

```javascript
async function loadCategories() {
    return [
        { id: 1, name: "Action Verbs (কাজের ভার্ব)" },
        { id: 2, name: "Communication Verbs (যোগাযোগের ভার্ব)" },
        // ... existing categories ...
        { id: 8, name: "Change Verbs (পরিবর্তনের ভার্ব)" },
        // 👇 নতুন category এখানে যোগ করুন
        { id: 9, name: "Learning Verbs (শিক্ষার ভার্ব)" }
    ];
}
```

---

## 🔤 Auxiliary Verbs যোগ করা

### Step 1: File ওপেন করুন
- `js/auxiliary.js` ফাইল ওপেন করুন
- `loadAuxiliaryVerbs()` function খুঁজে বের করুন

### Step 2: নতুন Auxiliary Verb যোগ করুন

```javascript
{
    id: 28,                           // নতুন unique ID
    verb: "need",                     // Verb name
    group: "Modal",                   // Group: "Be", "Do", "Have", or "Modal"
    banglaMeaning: "প্রয়োজন",        // বাংলা অর্থ
    example: "You need to study."     // Example sentence
}
```

### Step 3: Group অনুযায়ী যোগ করুন

```javascript
async function loadAuxiliaryVerbs() {
    return [
        // Be Verbs
        { id: 1, verb: "am", group: "Be", ... },
        
        // Do Verbs
        { id: 9, verb: "do", group: "Do", ... },
        
        // Have Verbs
        { id: 14, verb: "have", group: "Have", ... },
        
        // Modal Verbs
        { id: 18, verb: "can", group: "Modal", ... },
        { id: 27, verb: "ought to", group: "Modal", ... },
        // 👇 নতুন modal verb এখানে যোগ করুন
        {
            id: 28,
            verb: "need",
            group: "Modal",
            banglaMeaning: "প্রয়োজন",
            example: "You need to study."
        }
    ];
}
```

---

## ✅ Data Validation Tips

### ID Guidelines:
- ✅ প্রতিটি ID unique হতে হবে
- ✅ Sequential order maintain করুন (1, 2, 3, ...)
- ✅ Delete করলে ID gap থাকতে পারে
- ❌ একই ID দুইবার ব্যবহার করবেন না

### Verb Forms Guidelines:
- ✅ সব forms ছোট হাতের অক্ষরে লিখুন
- ✅ Spelling check করুন
- ✅ Irregular verbs এর forms ভালো করে check করুন

### Category ID Guidelines:
- ✅ Valid category ID ব্যবহার করুন (1-8, অথবা যা আছে)
- ✅ নতুন category তৈরি করলে সেই ID ব্যবহার করুন
- ❌ Invalid category ID ব্যবহার করবেন না

### Bangla Text Guidelines:
- ✅ সঠিক বানান ব্যবহার করুন
- ✅ একাধিক meaning এ কমা দিয়ে আলাদা করুন
- ✅ সহজ এবং বোধগম্য ভাষা ব্যবহার করুন

### Example Sentence Guidelines:
- ✅ সহজ এবং বোধগম্য sentence লিখুন
- ✅ Proper grammar ব্যবহার করুন
- ✅ Quotation marks (" ") এর ভিতরে লিখুন
- ✅ Period (.) দিয়ে শেষ করুন

---

## 🔥 Bulk Data Addition

একসাথে অনেক verbs যোগ করতে চাইলে:

### Template:

```javascript
// Copy this template and fill in the details
{
    id: __,
    verb: "______",
    forms: {
        base: "______",
        presentParticiple: "______",
        past: "______",
        pastParticiple: "______",
        thirdPerson: "______"
    },
    banglaMeaning: "______",
    example: "______",
    categoryId: __
},
```

### Excel থেকে Data Import:

1. Excel এ data prepare করুন
2. JSON format এ convert করুন (online tools available)
3. Array তে paste করুন

---

## 🧪 Testing Your Changes

নতুন data যোগ করার পর:

1. ✅ File save করুন
2. ✅ Browser refresh করুন (Ctrl + F5)
3. ✅ Search functionality test করুন
4. ✅ Filter functionality test করুন
5. ✅ Pagination check করুন
6. ✅ Console error check করুন (F12)

---

## 🚨 Common Errors & Solutions

### Error: Duplicate ID
**Problem:** দুটো verb এ same ID আছে
**Solution:** প্রতিটি verb এ unique ID দিন

### Error: Category Not Found
**Problem:** Invalid category ID ব্যবহার করেছেন
**Solution:** Valid category ID ব্যবহার করুন (1-8)

### Error: Syntax Error
**Problem:** JavaScript syntax ভুল আছে (কমা, ব্র্যাকেট)
**Solution:** Browser console (F12) দেখুন, line number check করুন

### Error: Verb Not Showing
**Problem:** Data format ভুল বা file save হয়নি
**Solution:** 
- File save করেছেন কিনা check করুন
- Browser cache clear করুন (Ctrl + Shift + Delete)
- Hard refresh করুন (Ctrl + F5)

---

## 📊 Data Statistics

### বর্তমান Data:
- Main Verbs: 20
- Categories: 8
- Auxiliary Verbs: 27
- Total Verbs: 47

### আপনার Target:
- [ ] 50+ Main Verbs
- [ ] 100+ Main Verbs
- [ ] 500+ Main Verbs
- [ ] 10+ Categories

---

## 💡 Pro Tips

1. **Regular Backup:**
   - Data add করার আগে file backup করুন
   - Version control (Git) ব্যবহার করুন

2. **Data Organization:**
   - Category অনুযায়ই verb গুলো organize করুন
   - Comment ব্যবহার করে section আলাদা করুন

3. **Quality over Quantity:**
   - সঠিক meaning এবং example দিন
   - Copy-paste এর সময় সাবধান থাকুন

4. **Consistency:**
   - Formatting consistent রাখুন
   - Naming convention follow করুন

---

## 🎓 Example: Adding 5 Verbs at Once

```javascript
async function loadVerbs() {
    return [
        // ... existing verbs ...
        
        // ===== NEW VERBS (Added on 2026-02-12) =====
        {
            id: 21,
            verb: "begin",
            forms: {
                base: "begin",
                presentParticiple: "beginning",
                past: "began",
                pastParticiple: "begun",
                thirdPerson: "begins"
            },
            banglaMeaning: "শুরু করা",
            example: "Let's begin the class.",
            categoryId: 1
        },
        {
            id: 22,
            verb: "choose",
            forms: {
                base: "choose",
                presentParticiple: "choosing",
                past: "chose",
                pastParticiple: "chosen",
                thirdPerson: "chooses"
            },
            banglaMeaning: "বেছে নেওয়া, নির্বাচন করা",
            example: "Choose your favorite color.",
            categoryId: 4
        },
        {
            id: 23,
            verb: "drive",
            forms: {
                base: "drive",
                presentParticiple: "driving",
                past: "drove",
                pastParticiple: "driven",
                thirdPerson: "drives"
            },
            banglaMeaning: "গাড়ি চালানো",
            example: "He drives to work every day.",
            categoryId: 3
        },
        {
            id: 24,
            verb: "feel",
            forms: {
                base: "feel",
                presentParticiple: "feeling",
                past: "felt",
                pastParticiple: "felt",
                thirdPerson: "feels"
            },
            banglaMeaning: "অনুভব করা",
            example: "I feel happy today.",
            categoryId: 5
        },
        {
            id: 25,
            verb: "give",
            forms: {
                base: "give",
                presentParticiple: "giving",
                past: "gave",
                pastParticiple: "given",
                thirdPerson: "gives"
            },
            banglaMeaning: "দেওয়া",
            example: "She gives me a book.",
            categoryId: 1
        }
        // ===== END NEW VERBS =====
    ];
}
```

---

## 🎯 Next Steps

1. ✅ এই guide follow করে verb add করুন
2. ✅ Test করুন
3. ✅ Feedback collect করুন
4. ✅ আরও verbs add করতে থাকুন

---

**Happy Data Adding! 🚀**

কোনো প্রশ্ন থাকলে README.md file দেখুন অথবা code comments পড়ুন।
