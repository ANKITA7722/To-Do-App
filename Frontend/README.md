# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1.using redux toolkit create insert data, edit, delete, complete, uncomplete operration perfom
2.This ToDo App Is Help Us For Manage our Daily Day-To-Day Task in this Project i Add Multipe Functionality 
# 📝 To-Do List Application (React + Redux)

## 📌 Project Overview

This is a simple and user-friendly **To-Do List Application** built using **React** and **Redux**.
The purpose of this project is to help users add, manage, and track their daily tasks efficiently.

The application allows users to:

* Add new tasks
* Mark tasks as complete or incomplete using a checkbox
* Edit existing tasks
* Delete tasks

This project is mainly created for **learning React, Redux state management, and frontend deployment**.

---

## 🚀 Features

* Add new tasks easily
* Circular checkbox to mark tasks as completed
* Edit tasks inline
* Delete tasks
* Clean and modern UI
* Responsive design
* State management using Redux

---

## 🛠️ Technologies Used

* **React JS** – for building the user interface
* **Redux Toolkit** – for managing application state
* **CSS** – for styling the application
* **JavaScript (ES6)**

---

## 📂 Project Structure

```
src/
│── App.jsx
│── Style.css
│── todoSlice.js
│── store.js
│── index.js
```

---

## ⚙️ How the Application Works

* The task input is controlled using React state.
* When a task is added, it is stored in the **Redux store**.
* The UI reads task data using `useSelector`.
* Actions like add, delete, edit, complete, and uncomplete are handled using Redux reducers.
* The data is stored temporarily in memory (Redux store).

⚠️ **Note:**
Since no backend or database is used, data will be lost when the page is refreshed.

---

## ▶️ How to Run the Project Locally

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd ToDoApp
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The app will run on:

```
http://localhost:3000
```
## 🌐 Deployment

This project can be deployed as a **frontend-only application** using platforms like:
* Vercel
* Netlify

The application will work the same as in localhost, but data will not persist after refresh.

## 👩‍💻 Author

**Ankita Bobde**
Frontend Developer (React)/Mern Full Stack Developer

---
## 📄 License

This project is for learning and educational purposes.

