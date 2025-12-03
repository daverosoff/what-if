
# What-If Grade Calculator

This React app allows students to input 12 quiz scores and see what letter grade they qualify for based on customizable thresholds.

## Features
- Input 12 quiz scores
- Compute grade based on bin thresholds
- Edit thresholds dynamically
- Show next grade goal hints and progress bars

## How to Run
```bash
npm install
npm start
```
Open http://localhost:3000 in your browser.


## Deployment: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**
   Add a `homepage` field and deploy scripts (replace `<your-github-username>`):
   ```json
   {
     "homepage": "https://<your-github-username>.github.io/what-if-grade-calculator",
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Commit & push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/what-if-grade-calculator.git
   git push -u origin main
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```
   Your app will be published at:
   `https://<your-github-username>.github.io/what-if-grade-calculator`

5. **Enable GitHub Pages (if needed)**
   - Go to your repo **Settings → Pages**
   - Source: **Deploy from a branch**, Branch: **gh-pages / (root)**

