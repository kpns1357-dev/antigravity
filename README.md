# Interactive Developer Portfolio Website

A modern, responsive, zero-build portfolio website engineered with vanilla HTML5, CSS3, and ES6+ JavaScript. Designed to stand out on tech resumes, showcase engineering skills to recruiters, and deploy seamlessly to GitHub Pages, Vercel, or Netlify.

---

## 🌟 Key Highlights

- **Embedded Interactive Terminal / CLI**: Visitors and recruiters can type commands (`help`, `whoami`, `skills`, `projects`, `contact`, `theme light/dark`, `repo`, `clear`) with tab-completion and command history navigation.
- **Interactive Constellation Canvas**: Ambient particle background rendered on HTML5 Canvas that responds to cursor proximity and device screen size.
- **Dynamic Project Showcase & Case Study Modals**: Filterable project gallery (Full Stack, Frontend UI, Backend & Systems, AI & Automation) with detailed modal popups describing problem statements, engineering solutions, features, and performance metrics.
- **Dark / Light Mode Toggle**: Smooth theme switching with CSS custom variables, icon morphing, and persistence via `localStorage`.
- **Typewriter Effect**: Multi-role cycling animation for the hero section with blinking cursor.
- **Animated Metric Counters**: Numbers count up when scrolled into view using the `IntersectionObserver` API.
- **Accessible & Responsive**: Clean semantic HTML5, keyboard navigation (`Esc` to close modals, `Tab` focus rings), and CSS Grid/Flexbox layouts optimized for mobile, tablet, and widescreen.
- **Client-Side Contact & Toast Notifications**: Interactive form validation and one-click "Copy Email" with instant toast alerts.

---

## 📁 Project Structure

```
developer-portfolio/
├── index.html              # Main semantic HTML5 markup & sections
├── css/
│   └── style.css           # Design system tokens, light/dark palettes, responsive rules
├── js/
│   ├── particles.js        # Interactive HTML5 canvas constellation network
│   ├── terminal.js         # Interactive CLI terminal emulator
│   └── main.js             # Theme switcher, typewriter, modal dialogs, toast alerts
├── assets/
│   └── resume-sample.pdf   # Placeholder for your downloadable resume PDF
└── README.md               # Customization, deployment, and resume guide
```

---

## 🚀 Quick Start (Local Preview)

No `npm install` or bundlers required!

### Option 1: Open Directly in Browser
Simply double-click `index.html` or drag it into any web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Run with Python HTTP Server
```bash
# Python 3
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

### Option 3: VS Code Live Server
If using VS Code, right-click `index.html` and choose **"Open with Live Server"**.

---

## 🛠️ How to Customize for Your Resume

1. **Your Name & Social Links**:
   - Open `index.html` and search for `Alex Morgan`. Replace with your actual name.
   - Update social links (`github.com/...`, `linkedin.com/...`, `mailto:...`).

2. **Customizing Projects**:
   - Open `js/main.js` and locate the `PROJECTS_DATA` array.
   - Edit the project titles, descriptions, tags, and repo/live URLs to reflect your real work!

3. **Customizing Skills**:
   - Open `index.html` and modify the `<div class="skills-grid">` section to add your exact languages, frameworks, and databases.

4. **Terminal Personalization**:
   - Open `js/terminal.js` and customize `cmdWhoami()`, `cmdSkills()`, and `cmdProjects()` to output your personalized info when recruiters use the terminal.

5. **Your Resume PDF**:
   - Place your exported resume as `assets/resume-sample.pdf` (or update the filename in `index.html`).

---

## 🌐 Free Deployment in 2 Minutes

### Method 1: GitHub Pages (Recommended)
1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to your repository on GitHub:
   - Click **Settings** > **Pages**.
   - Under **Build and deployment**, set **Source** to `Deploy from a branch`.
   - Select `main` branch and `/ (root)` folder, then click **Save**.
3. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`!

### Method 2: Vercel or Netlify
- Drag and drop the `developer-portfolio` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on [vercel.com](https://vercel.com).

---

## 📝 Resume Bullet Points (Copy & Paste to your Resume)

You can list this project under your **Projects** section on your resume:

```text
Personal Portfolio & Interactive Developer Terminal | HTML5, CSS3, JavaScript (ES6+), Canvas API
• Engineered a zero-dependency, responsive portfolio web application achieving a 100/100 Lighthouse performance rating with sub-second page loads.
• Built an interactive in-browser CLI terminal emulator featuring command parsing, autocompletion, and command history navigation.
• Implemented an interactive HTML5 Canvas particle/constellation animation with cursor proximity physics and dynamic theme synchronization.
• Designed a modular CSS design system supporting seamless Dark/Light theming with localStorage persistence and accessible focus management.
• Integrated a filterable project showcase with deep-dive modal case studies and a client-side contact validation system with custom toast alerts.
```

---

## 📄 License
MIT License. Feel free to use, modify, and build upon this template for your own career!
