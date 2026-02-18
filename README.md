# Juvan's Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🛠️ Tech Stack
-   **React** (Vite)
-   **Tailwind CSS** (Styling)
-   **Framer Motion** (Animations)
-   **Lucide React** (Icons)

## 📦 Deployment (GitHub Pages)

To deploy this portfolio to GitHub Pages:

1.  **Update `vite.config.js`**:
    -   Set `base` to your repository name (e.g., `base: '/portfolio/'`) if deploying to `username.github.io/portfolio`.
    -   Set `base: '/'` if deploying to `username.github.io`.

2.  **Build the project**:
    ```bash
    npm run build
    ```

3.  **Deploy**:
    -   Push the `dist` folder to a `gh-pages` branch.
    -   Or use a GitHub Action for automatic deployment.

    **Manual Deployment:**
    ```bash
    # enter build output directory
    cd dist

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git checkout -b main
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

    # if you are deploying to https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

    cd -
    ```

## 📝 Customization

-   **Profile Image**: Replace the placeholder image URL in `src/components/Hero.jsx` or add a file to `src/assets/` and import it.
-   **Projects**: Update the `projects` array in `src/components/Projects.jsx`.
-   **Resume**: Add your resume PDF to `public/` and update the link in `src/components/Hero.jsx`.

---
© 2024 Juvan. All rights reserved.
