# 🚀 Abhijeet Kasera — Professional AI Research & Engineering Portfolio

Welcome to the source code of my high-performance, professional developer portfolio. This project is built using modern web technologies, specifically tailored for an **"IIT-style" premium aesthetic** with a focus on AI, Machine Learning, and Full-Stack Engineering.

---

## ✨ Key Features

-   **💎 Premium Design System**: A cohesive indigo-to-blue gradient theme with deep charcoal backgrounds.
-   **🧊 Glassmorphism UI**: High-end frosted glass effects on cards, navigation, and interactive elements.
-   **🖱️ Custom Interactive Cursor**: A unique, smooth dot-and-ring magnetic cursor that responds to hover states.
-   **🗺️ Multi-Page Routing**: Powered by `react-router-dom` for a seamless, fast navigation experience (Home, About, Projects, Growth, Resume, Contact).
-   **🎭 Advanced Animations**: Integrated with `framer-motion` for scroll-triggered entrance animations, pulsing glows, and smooth page transitions.
-   **📧 Integrated Contact Module**: Logic ready for **EmailJS** integration—send emails directly from the browser without a backend.
-   **📊 Dynamic GitHub Stats**: Fetches live repository data using the GitHub REST API.
-   **📱 Fully Responsive**: Optimized for high-resolution desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

-   **Frontend**: React.js (v19)
-   **Build Tool**: Vite (Lightning-fast HMR)
-   **Routing**: React Router (v7)
-   **Animation**: Framer Motion
-   **Icons**: Lucide React
-   **Typography**: 
    -   *Outfit*: Premium Headers
    -   *Inter*: Readable Body Text
    -   *JetBrains Mono*: Technical labels & code-style elements
-   **Styling**: Vanilla CSS (Premium variables & utility system)

---

## 📦 Prerequisites

Ensure you have the following installed on your local machine:
-   **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
-   **npm** (usually comes with Node.js)

---

## 📥 Installation & Running

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ABHIJEET-0001/Abhijeet_Portfolio.git
    cd Abhijeet_Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The site will be live at `http://localhost:5173/`.

4.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 📧 EmailJS Setup (Make the contact form work)

To allow the portfolio to send real emails to your inbox without a backend, follow these steps:

1.  **Sign up** for a free account at [EmailJS.com](https://www.emailjs.com/).
2.  **Add a Service**: Connect your Gmail/Outlook and copy your `SERVICE_ID`.
3.  **Add a Template**: Create an email template and copy your `TEMPLATE_ID`.
4.  **API Keys**: Go to 'Account' -> 'Public Key' and copy it.
5.  **Configure Code**: Open `src/components/Contact.jsx` and update these lines:
    ```javascript
    const SERVICE_ID = 'your_service_id'; 
    const TEMPLATE_ID = 'your_template_id'; 
    const PUBLIC_KEY = 'your_public_key';
    ```

---

## 🏗️ Project Structure

```text
src/
├── assets/             # Static assets (images, profile photo)
├── components/         # Independent UI Components
│   ├── About       
│   ├── Contact         # EmailJS integrated form
│   ├── CustomCursor    # Logic for magnetic cursor
│   ├── Hero            # Profile header & stats
│   ├── Navbar          # Responsive routing links
│   └── ...
├── utils/              # Helper functions (GitHub API, etc.)
├── App.jsx             # Main routing configuration
├── index.css           # Global design system & variables
└── main.jsx            # Application entry point
```

---

## 🧩 Recommended VS Code Extensions

For the best development experience, please install these extensions:

1.  **ES7+ React/Redux/React-Native snippets**: For fast component creation.
2.  **Prettier - Code formatter**: To maintain clean and consistent code.
3.  **Auto Rename Tag**: To speed up HTML/JSX editing.
4.  **Material Icon Theme**: Better folder/file visualization.
5.  **IntelliSense for CSS class names**: Helps with our custom variables.

---

## 👨‍💻 Created By

**Abhijeet Kasera**
*CS & Engineering Undergraduate | AI Research & Full-Stack Engineer*
[LinkedIn](https://www.linkedin.com/in/abhijeet-kasera-bb4416230/) | [GitHub](https://github.com/ABHIJEET-0001)
