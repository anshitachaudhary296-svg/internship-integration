# 🚀 InternPulse - Modern Responsive Tech Internship Board

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An elegant, high-performance, and fully responsive **Tech Internship Board** built entirely with semantic **HTML5**, **CSS3**, and **vanilla modern JavaScript (ES6+)**. Designed to deliver a state-of-the-art job searching experience with zero third-party frameworks, zero libraries, and zero build tools.

**Designed & Developed by:** **Anshita Chaudhary**

---

## 🌐 Live Demo & Repository

- **Live Demo:** [https://internpulse-board.netlify.app](https://internpulse-board.netlify.app) *(Replace with your Netlify URL after deployment)*
- **GitHub Repository:** [https://github.com/anshitachaudhary296-svg/internship-board](https://github.com/anshitachaudhary296-svg/internship-board)

---

## 📖 Project Overview

**InternPulse** connects aspiring engineers, designers, and tech students with hand-curated internship opportunities across 5 high-demand technology tracks:
1. **Web Development** (Frontend, Backend, Full Stack, Next.js)
2. **Data Science** (Analytics, Quantitative Research, BI, Analytics Engineering)
3. **AI / Machine Learning** (Generative AI/LLMs, Computer Vision, MLOps, NLP)
4. **UI / UX Design** (Product Design, Design Systems, Mobile UX Research, Visual Brand)
5. **Cybersecurity** (SOC Analysis, Application Pentesting, Cloud Security, Threat Intelligence)

Every card is dynamically generated from structured JSON data, supporting instant search matching, multi-criteria filtering, local storage bookmarking, accessible modals, and a built-in error/retry simulation for evaluator testing.

---

## ✨ Key Features

### 🔍 Real-Time Search & Multi-Filter Engine
- **Debounced Instant Search:** Search across role titles, company names, locations, descriptions, and technology tags with intelligent debouncing.
- **Domain Category Tabs:** Dedicated domain filters with dynamic live count badges that update based on active inventory.
- **Work Type Filtering:** Instant filtering between Remote, Hybrid, and On-Site positions.
- **Dynamic Sorting:** Sort listings by *Recently Posted*, *Highest Stipend*, *Lowest Stipend*, *Company Name (A–Z)*, and *Duration*.
- **Active Filter Chips:** Removable filter tags displaying currently active criteria with one-click removal and bulk reset.

### 💼 Dynamic Card Generation & Detailed Modals
- **Dynamic DOM Rendering:** Cards are built cleanly from structured data using semantic `<article>` tags.
- **Accessible `<dialog>` Details Modal:** Inspect full role descriptions, bulleted key responsibilities, requirements, and stipends.
- **Quick Apply Form:** Integrated modal application form with field validation (Name, Email, Portfolio URL) and feedback toast.
- **Persistent Bookmarking:** Save and unsave favorite internships stored securely in browser `localStorage`.

### 🛡️ Robust UI States & Evaluator Tools
- **Skeleton Shimmer Loading:** Pulsing placeholder cards while listings are asynchronously fetched.
- **Empty / No-Results State:** Clean empty-state graphic when searches or filter combinations return zero results, complete with a **"Reset All Filters"** action button.
- **Error State with Retry Button:** A complete error boundary view featuring an error banner, custom message, and an interactive **"Retry Now"** button.
- **"Test Error State" Demo Button:** A dedicated header button allowing recruiters and reviewers to trigger simulated network failures and test retry recovery instantly.

### 🎨 Visual Excellence & Accessibility
- **Light & Dark Mode:** Smooth theme toggling with automated system preference detection (`prefers-color-scheme`) and persistent preference caching.
- **Fluid Responsiveness:** Tailored layouts powered by CSS Grid and Flexbox for mobile smartphones (320px+), tablets (768px), and widescreen desktop displays (1280px+).
- **WCAG 2.1 Accessibility (A11y):**
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`)
  - Full ARIA markup (`role="region"`, `aria-live="polite"`, `aria-selected`, `aria-pressed`, `aria-modal`)
  - Accessible keyboard navigation (Tab navigation, Esc to close modals, Enter/Space for triggers)
  - Visible focus indicators (`:focus-visible`)
  - Screen reader "Skip to main content" link

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible dialogs, ARIA roles, and native form elements |
| **CSS3** | Modern CSS custom properties (variables), Grid, Flexbox, keyframe animations, glassmorphism, responsive media queries |
| **Vanilla JavaScript (ES6+)** | State management, dynamic DOM rendering, debounced event listeners, LocalStorage API, modal controller |
| **Google Fonts** | *Plus Jakarta Sans* and *Outfit* for modern typography |

> **Note:** Zero frameworks or dependencies used. No React, Vue, Angular, Bootstrap, Tailwind, or jQuery.

---

## 📸 Screenshots Section

### 1. Desktop Light Mode
![Desktop Light Mode Overview](screenshots/desktop-light.png)
*Desktop view showing hero stats, domain category tabs, secondary filters, and the 3-column internship card grid.*

### 2. Desktop Dark Mode
![Desktop Dark Mode Overview](screenshots/desktop-dark.png)
*Sleek dark mode interface with deep slate tones, contrasting typography, and glowing accents.*

### 3. Accessible Details & Application Modal
![Job Details and Application Modal](screenshots/modal-view.png)
*Accessible `<dialog>` view with in-depth role specs, responsibilities, required skills, and the Quick Apply form.*

### 4. Empty State & Error State with Retry
![Empty and Error States](screenshots/ui-states.png)
*Demonstration of the interactive no-results state and simulated error state with the Retry button.*

*(To add actual screenshot images, create a `screenshots/` directory in your repo and place the corresponding PNG/JPEG files inside).*

---

## 📂 Project Structure

```text
internship-board/
├── index.html       # Semantic HTML5 markup, accessible modal dialog, and containers
├── style.css        # Pure CSS3 styling, design tokens, light/dark themes, media queries
├── script.js        # Vanilla JS dataset, filtering, search, modal logic, local storage
├── README.md        # Comprehensive documentation, setup guide, and features
└── netlify.toml     # Optional Netlify static site configuration
```

---

## 🚀 Setup & Local Development

No build steps, compilers, or package installations are required!

### Option 0: Integrated with Node.js REST API Backend (Recommended)
Start the backend server and open the board at `http://localhost:5000/board/`:
```bash
# In Backend/internship-api directory:
npm start
# Open http://localhost:5000/board/
```
The frontend automatically fetches live listings from `/api/internships` and submits candidates to `/api/applications`.

### Option 1: Direct File Preview
Simply double-click `index.html` or open it directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Option 2: Using VS Code Live Server
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/internship-board.git
   cd internship-board
   ```
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension if you haven't already.
4. Right-click `index.html` and click **"Open with Live Server"**.
5. Your default browser will open the site at `http://127.0.0.1:5500`.

### Option 3: Using Python HTTP Server
```bash
# In the project directory:
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

### Option 4: Using Node.js `npx serve`
```bash
npx serve .
```

---

## ☁️ Deployment Guide

### Deploying to Netlify (Recommended)

#### Method A: Netlify Drag-and-Drop (Instant 30 Seconds)
1. Sign in to your [Netlify Account](https://app.netlify.com/).
2. Navigate to the **"Sites"** tab.
3. Drag and drop the `internship-board` project folder directly into the Netlify deployment drop zone.
4. Netlify will instantly provide your live URL (e.g. `https://your-site-name.netlify.app`).

#### Method B: Netlify Git Continuous Deployment
1. Initialize Git and commit the project:
   ```bash
   git init
   git add .
   git commit -m "feat: complete responsive internship board"
   git branch -M main
   git remote add origin https://github.com/your-username/internship-board.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and authorize your repository.
4. Configure site settings:
   - **Branch to deploy:** `main`
   - **Build command:** *(Leave blank — static site)*
   - **Publish directory:** `.` *(Current root directory)*
5. Click **"Deploy Site"**. Your site is now live with automatic updates on every Git push!

---

## 📋 Evaluation Checklist

- [x] **HTML5, CSS3 & Vanilla JavaScript only** (No React, Bootstrap, or Tailwind).
- [x] **Semantic HTML** used throughout (`<header>`, `<nav>`, `<main>`, `<article>`, `<dialog>`, `<footer>`).
- [x] **Dynamic Card Generation** using structured JavaScript data.
- [x] **Real-time Search** with debouncing and multi-attribute matching.
- [x] **Domain Filters** for Web Development, Data Science, AI/ML, UI/UX, and Cybersecurity.
- [x] **Empty / No-Results State** with a working "Reset All Filters" button.
- [x] **Error State with Retry Button** including a "Test Error State" button for evaluators.
- [x] **Accessible Labels & Keyboard Navigation** (WCAG compliant with ARIA tags and focus trapping).
- [x] **Fully Responsive** across Mobile, Tablet, and Desktop screens.
- [x] **Clean, Modern & Professional UI** with Light/Dark mode toggling and micro-animations.
- [x] **Realistic Internship Data** (20 rich listings with stipends, requirements, tags, and durations).
- [x] **Ready for GitHub & Netlify Deployment**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
