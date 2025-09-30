# 🌐 Integrate Bootstrap Template

## 📄 Description

This project is a **responsive personal portfolio webpage** built using **React.js**. It introduces John Deo, a freelance web developer from London. The layout is clean and professional, highlighting his expertise and social media presence, along with a hero section and image.

⚡ **Light/Dark theme toggle** is implemented using React’s Context API, allowing users to switch between two color modes dynamically.

---

## 💻 Features

- ✅ Responsive layout using **Bootstrap grid system**
- ✅ Social Media integration using **React Icons**
- ✅ Light/Dark theme switching using **React Context API**
- ✅ Image resizing with **CSS Media Queries**
- ✅ Organized structure with reusable components
- ✅ Built using **React functional components**

---

## 🧩 Components Breakdown

### `HeroSection.jsx`

- Displays a short bio, call-to-action button, and personal image.
- Includes a **theme toggle icon** (`🌞/🌙`) to switch between light and dark modes.
- Uses Bootstrap classes for responsiveness.
- Imports and renders the `<SocialMediaButtons />` component.

### `SocialMediaIcons.jsx`

- Contains styled social media buttons using React Icons like:
  - LinkedIn
  - GitHub
  - X (Twitter)
  - Instagram
  - Facebook
- Icon colors change dynamically based on the current theme.

### `ThemeChanger.jsx`

- Manages global theme state using `useState` and `createContext`.
- Provides theme data and toggle handler to the entire app.

---

### 📁 Folder Structure

```
src/
│
├── assets/
│   └── Person.png
├── components/
│   ├── HeroSection.jsx
│   └── SocialMediaIcons.jsx
├── Context/
│   └── ThemeChanger.jsx
├── style/
│   └── style.css
└── App.jsx
```
## 📦 Installation

```bash
npm install
npm run dev
```
