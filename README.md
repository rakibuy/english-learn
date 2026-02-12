# 📘 English Verb Learning Web Application

একটি সম্পূর্ণ **Interactive, Responsive, এবং User-Friendly** ইংরেজি ভার্ব শেখার ওয়েব অ্যাপ্লিকেশন।

## 🎯 Features

### ✅ Main Features

- 🏠 **Dashboard Page** - সুন্দর Navigation কার্ড সহ মূল পেজ
- 📚 **Main Verbs Page** - সম্পূর্ণ Category System সহ
- 🔤 **Auxiliary Verbs Page** - Be, Do, Have, Modal Verbs
- 🔍 **Advanced Search** - Verb Name, Meaning, Example দিয়ে খুঁজুন
- 🎯 **Smart Filtering** - Category এবং Group অনুযায়ী Filter
- 📄 **Pagination System** - সহজে Navigate করুন
- 📱 **Fully Responsive** - Mobile এবং Desktop উভয়ের জন্য

### 🗂 Main Verbs Features

- **5 Verb Forms:**
  - Base Form (মূল রূপ)
  - Present Participle (V-ing)
  - Past Form (V2)
  - Past Participle (V3)
  - 3rd Person Singular (V+s/es)

- **Category System:**
  - Action Verbs (কাজের ভার্ব)
  - Communication Verbs (যোগাযোগের ভার্ব)
  - Movement Verbs (চলাচলের ভার্ব)
  - Thinking Verbs (চিন্তার ভার্ব)
  - Emotion Verbs (আবেগের ভার্ব)
  - Creation Verbs (সৃষ্টির ভার্ব)
  - Perception Verbs (উপলব্ধির ভার্ব)
  - Change Verbs (পরিবর্তনের ভার্ব)

- **প্রতিটি Verb এ আছে:**
  - Bangla Meaning (বাংলা অর্থ)
  - English Example Sentence (উদাহরণ)
  - Category Tag (শ্রেণী)

### 🔤 Auxiliary Verbs Features

- **Be Verbs:** am, is, are, was, were, be, being, been
- **Do Verbs:** do, does, did, doing, done
- **Have Verbs:** have, has, had, having
- **Modal Verbs:** can, could, may, might, must, shall, should, will, would, ought to

## 🏗 Project Structure

```
einglish/
│
├── index.html              # Dashboard Page (Main Navigation)
├── verbs.html              # Main Verbs Page
├── auxiliary.html          # Auxiliary Verbs Page
│
└── js/
    ├── verbs.js           # Main Verbs Logic
    └── auxiliary.js       # Auxiliary Verbs Logic
```

## 🚀 How to Run

### Method 1: Direct Browser
1. প্রজেক্ট ফোল্ডার ওপেন করুন
2. `index.html` ফাইলে ডাবল ক্লিক করুন
3. ব্রাউজারে ওপেন হবে

### Method 2: VS Code Live Server
1. VS Code এ প্রজেক্ট ওপেন করুন
2. Live Server Extension ইন্সটল করুন
3. `index.html` এ রাইট ক্লিক করে "Open with Live Server" সিলেক্ট করুন

### Method 3: Simple HTTP Server

#### Python (যদি ইন্সটল থাকে):
```bash
cd einglish
python -m http.server 8000
```
তারপর ব্রাউজারে যান: `http://localhost:8000`

#### Node.js (যদি ইন্সটল থাকে):
```bash
cd einglish
npx http-server
```

## 📖 Usage Guide

### Dashboard থেকে শুরু করুন:
1. **Main Verbs** কার্ডে ক্লিক করুন → সকল Main Verbs দেখুন
2. **Auxiliary Verbs** কার্ডে ক্লিক করুন → Auxiliary Verbs দেখুন

### Main Verbs Page:
- 🔎 **Search Box** ব্যবহার করে verb খুঁজুন
- 🎯 **Category Filter** দিয়ে নির্দিষ্ট category দেখুন
- 📄 প্রতি পেজে 10টি verb দেখা যাবে
- ⬅️➡️ Pagination buttons দিয়ে navigate করুন

### Auxiliary Verbs Page:
- 🔤 সব auxiliary verbs group অনুযায়ী সাজানো
- 🔍 Search করে নির্দিষ্ট verb খুঁজুন
- 🎯 Group filter দিয়ে নির্দিষ্ট group দেখুন

## 💻 Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | HTML5 |
| Styling | Tailwind CSS (CDN) |
| Icons | Font Awesome 6 |
| JavaScript | Vanilla JS (ES6+) |
| Data | JavaScript Objects |

## 🎨 Design Highlights

- ✨ **Modern UI/UX** - Clean এবং Professional Design
- 🎨 **Gradient Effects** - সুন্দর Color Gradients
- 🌈 **Color Coded** - প্রতিটি section এর জন্য আলাদা রঙ
- 📱 **Responsive Layout** - Mobile থেকে Desktop সব ডিভাইসে perfect
- ⚡ **Smooth Animations** - Hover effects এবং transitions
- 🔄 **Interactive Elements** - Click করলে instant feedback

## 📊 Sample Data

### বর্তমানে আছে:
- ✅ 20+ Main Verbs (Sample Data)
- ✅ 27 Auxiliary Verbs (Complete)
- ✅ 8 Categories
- ✅ সব verbs এ Bangla meaning এবং examples

## 🔮 Future Enhancements

### আপনি যা যুক্ত করতে পারেন:

1. **আরও Verbs যোগ করুন:**
   - `js/verbs.js` ফাইলে `loadVerbs()` function এ নতুন verb object যোগ করুন

2. **নতুন Category যোগ করুন:**
   - `js/verbs.js` ফাইলে `loadCategories()` function এ নতুন category যোগ করুন

3. **Database Integration:**
   - JSON ফাইল বা Backend API যুক্ত করুন

4. **Additional Features:**
   - Quiz System
   - MCQ Tests
   - Progress Tracking
   - User Authentication
   - Favorite Verbs
   - Print/Export Feature
   - Audio Pronunciation
   - Dark Mode

## 📝 How to Add New Verbs

### Main Verbs যোগ করতে:

`js/verbs.js` ফাইলে `loadVerbs()` function এ নতুন object যোগ করুন:

```javascript
{
    id: 21,  // নতুন ID
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
    categoryId: 4  // Existing category ID
}
```

### Auxiliary Verbs যোগ করতে:

`js/auxiliary.js` ফাইলে `loadAuxiliaryVerbs()` function এ যোগ করুন:

```javascript
{
    id: 28,
    verb: "dare",
    group: "Modal",
    banglaMeaning: "সাহস করা",
    example: "How dare you say that!"
}
```

## 🎓 Learning Tips

### এই App থেকে সর্বোচ্চ শিখতে:

1. **প্রতিদিন 10-15 টি verb পড়ুন**
2. **Example sentences গুলো মুখস্থ করুন**
3. **Category অনুযায়ী শিখুন** - এক এক category এক এক সময়ে
4. **নিজের sentence তৈরি করুন** - প্রতিটি verb দিয়ে
5. **Regular practice করুন** - রোজ অন্তত 15 মিনিট

## 📞 Support

কোনো সমস্যা বা প্রশ্ন থাকলে:
- GitHub Issues ব্যবহার করুন
- Documentation পড়ুন
- Code comments দেখুন

## 📜 License

এই প্রজেক্ট সম্পূর্ণ **ফ্রি এবং ওপেন সোর্স**। আপনি চাইলে:
- ✅ ব্যবহার করতে পারবেন
- ✅ Modify করতে পারবেন
- ✅ Share করতে পারবেন
- ✅ নিজের প্রয়োজনমতো customize করতে পারবেন

## 🎉 Credits

Made with ❤️ for English learners

---

## 🚀 Quick Start Command

```bash
# প্রজেক্ট ফোল্ডারে যান
cd einglish

# index.html ফাইল ওপেন করুন
# অথবা Live Server দিয়ে run করুন
```

---

**Happy Learning! 📚✨**

শুভ শিক্ষা! ইংরেজি ভার্ব শেখা এখন আরও সহজ! 🎓
