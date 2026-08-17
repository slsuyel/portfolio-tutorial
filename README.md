# ⚡ Suyel Haque — Personal Developer Portfolio

A modern, high-performance, single-page personal portfolio web application designed for **Suyel Haque (Fullstack Web Developer)**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, featuring dark glassmorphism aesthetics, dynamic typing effects, an interactive terminal simulator, project case study modals, and a futuristic neon cursor.

---

## 🚀 Quick Start Guide (For Complete Beginners)

Follow these simple step-by-step instructions to run this website on your computer.

### Step 1: Install Node.js

If you don't have Node.js installed yet:

1. Download Node.js (LTS Version) from [nodejs.org](https://nodejs.org/).
2. Run the installer and click **Next** until complete.

---

### Step 2: Open Terminal / Command Prompt

1. Open **Command Prompt** (on Windows) or **Terminal** (on Mac/Linux).
2. Navigate to your project folder:
   ```bash
   cd Desktop/Portfolio
   ```

---

### Step 3: Install Project Dependencies

Run this command to download all required packages:

```bash
npm install
```

---

### Step 4: Start the Local Web Server

Run the local development server:

```bash
npm run dev
```

You will see an output like this in your terminal:

```text
  VITE v5.4.21  ready in 450 ms

  ➜  Local:   http://localhost:3000/
```

Click or open `http://localhost:3000/` in your browser (Google Chrome, Edge, Safari) to view your portfolio live!

---

## 🛠️ How to Customize Your Portfolio Information

All portfolio text, biography, contact info, skills, education, career history, awards, and projects are neatly organized in **ONE single file**:

👉 `src/data/portfolioData.js`

### 1. Update Personal Info & Social Links

Open `src/data/portfolioData.js` and change the details in `PERSONAL_INFO`:

```javascript
export const PERSONAL_INFO = {
  name: "Suyel Haque",
  role: "Fullstack Web Developer",
  email: "slsuyel@gmail.com",
  phone: "+880 1722-597565",
  location: "Bangladesh",
  freelanceStatus: "Available",
  experienceYears: "3 Years",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/8801722597565",
  },
};
```

### 2. Update Skills Matrix

Edit `SKILLS_MATRIX` to add or remove your technical skills across **Frontend**, **Backend**, **Database**, and **Real-Time Tools**.

### 3. Update Career Timeline

Edit `CAREER_TIMELINE` to update your work history at **ZSI.AI**, **Softweb System Solution**, or add new companies.

### 4. Update Achievements & Awards

Edit `ACHIEVEMENTS` to showcase your employee of the year awards and certifications.

### 5. Update Featured Projects

Edit `FEATURED_PROJECTS` to add your live website links, GitHub repositories, screenshots, and case study breakdowns.

---

## 📁 Project Architecture Overview

```text
Portfolio/
├── index.html                  # HTML entry point with Google Fonts & Tailwind CDN
├── vite.config.js              # Vite server configuration
├── package.json                # Dependencies & script commands
├── README.md                   # Beginner user guide & instructions
├── src/
│   ├── main.jsx                # React app entry point
│   ├── App.jsx                 # Main application layout & state manager
│   ├── index.css               # Global glassmorphism CSS design system
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content & bio
│   └── components/
│       ├── Navbar.jsx          # Frosted glass navigation header & mobile drawer
│       ├── Hero.jsx            # High-impact introduction & dynamic typing subtitle
│       ├── About.jsx           # Bio, personal details matrix, & education timeline
│       ├── Philosophy.jsx      # 4 core engineering principles
│       ├── Skills.jsx           # Categorized skill toolbox grid & filter tabs
│       ├── Experience.jsx      # Interactive career timeline (ZSI.AI & Softweb)
│       ├── Achievements.jsx    # Trophy grid for awards & recognitions
│       ├── Projects.jsx        # Project showcase gallery & category filters
│       ├── ProjectModal.jsx    # Pop-up window for deep-dive project case studies
│       ├── TerminalWidget.jsx  # Interactive in-browser developer CLI
│       ├── Contact.jsx         # Contact info, copy email button, & message form
│       ├── Footer.jsx          # Copyright, social icons, & section links
│       ├── CustomCursor.jsx    # Futuristic dual-layer neon cursor follower
│       └── ScrollToTop.jsx     # Animated floating button to return to top
```

---

## 📦 How to Build & Deploy to Vercel or Netlify

When you are ready to publish your website online:

### 1. Build the Production Bundle

Run:

```bash
npm run build
```

This generates an optimized, compressed `dist` folder ready for production.

### 2. Free Hosting Options

- **Vercel** (Recommended):
  1. Push your code to GitHub.
  2. Log in to [vercel.com](https://vercel.com).
  3. Click **Add New Project**, select your GitHub repository, and click **Deploy**.
- **Netlify**: Drag and drop your generated `dist` folder into [netlify.com](https://www.netlify.com/).

---

## 📄 License

Created for **Suyel Haque**. Open-source under the [MIT License](LICENSE).
