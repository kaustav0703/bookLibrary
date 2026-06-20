# Online Library Management System 📚

A modern, responsive, and fully featured Online Library System built as a React application using Vite, Redux Toolkit, and Tailwind CSS.

## 🚀 Features Implemented

### 1. Home Page
*   **Welcome Banner**: Clean greeting section introducing the library system.
*   **Book Categories**: Navigable shortcuts for various book categories (Fiction, Non-Fiction, Sci-Fi, etc.).
*   **Popular Books**: Visual display cards showcasing popular selections with direct links to details.
*   **Navigation Bar**: Global header containing active links for Home, Browse Books, and Add Book pages.

### 2. Browse Books Page
*   **Dynamic Filtering**: Category-specific views matching dynamic route patterns like `/books/:category`.
*   **Live Search Bar**: Real-time filtering engine searching through book titles or author names simultaneously.
*   **View Details**: Smooth routing integration directing users to dedicated profile slots.

### 3. Book Details Page
*   **Dynamic Route Profile**: Pulls matching parameters to show detailed metadata (Title, Author, Description, Rating).
*   **Navigation Recovery**: Quick-action back-links to seamlessly return to the book browsing dashboard.

### 4. Add Book Page
*   **Dynamic Form Engine**: Controlled input fields structured with native validation layers.
*   **Redux State Insertion**: Dispatches actions that append new books to the front of the catalogue array.
*   **Automatic Redirect**: Gracefully pushes the browser view back to the browsing area upon form completion.

### 5. Custom 404 Fallback
*   **Route Interceptor**: Catches invalid URL mutations, showing the exact broken path string on-screen.
*   **Isolated Canvas**: Completely hides the main header component to strictly fit evaluation specifications.

---

## 🛠️ Tech Stack Used

*   **Build Tool**: Vite (React)
*   **State Management**: Redux Toolkit
*   **Routing Framework**: React Router v7
*   **Styling Engine**: Tailwind CSS

---

## 💻 Getting Started (How to Run)

Follow these simple steps to set up and run the application locally:

### 1. Clone the Repository
```bash
git clone <your-github-repo-link>
cd <your-project-folder-name>
```

### 2. Install Project Dependencies
Run this command to build your local `node_modules` workspace:
```bash
npm install
```

### 3. Launch Development Server
Start the local server compiler environment:
```bash
npm run dev
```
Once compilation completes, open your browser and navigate to the local host address provided in your terminal (usually `http://localhost:5173`).

---

## 📝 Script Compilation Commands

*   `npm run dev` - Starts the reactive development environment server tool.
*   `npm run build` - Compiles production-ready application assets inside the `/dist` directory.
*   `npm run preview` - Locally serves your compiled production build folder for verification.
