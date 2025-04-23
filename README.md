# StateKeeper

A minimal persistent state architecture demo using **Next.js App Router**, **Redux Toolkit**, and **IndexedDB** via `redux-persist`.

## 🌟 What is StateKeeper?

StateKeeper is a minimal, client-side persistent task manager that demonstrates how to:

- Use Redux to manage state
- Persist state to **IndexedDB** with `redux-persist`
- Retain state **across page reloads and navigations**
- Keep Redux state clean, minimal, and structured

> It’s designed as a prototype of a larger architectural pattern for state persistence and cross-page resilience.

## 🧱 Stack

- [Next.js 14+ (App Router + TypeScript)](https://nextjs.org)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [@piotr-cz/redux-persist-idb-storage](https://www.npmjs.com/package/@piotr-cz/redux-persist-idb-storage)
- [TailwindCSS](https://tailwindcss.com/) for styling

## ⚙️ Features

- Add, toggle, and delete tasks
- Store tasks in Redux state
- Persist state to IndexedDB (so it survives refresh & tab switch)
- Compatible with SSR-safe patterns in Next.js

## 🗂 Project Structure

```
src/
├── app/              # App Router pages
│   └── layout.tsx
│   └── page.tsx
├── components/       # UI components (AddTaskForm, TaskList)
├── features/         # Redux slice (tasks)
├── store/            # Redux + persist config
├── styles/           # Tailwind global styles
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` to use the demo.

## ✨ Notes

- This app avoids SSR errors by isolating Redux logic to client-only components
- IndexedDB is preferred for asynchronous, large-capacity local storage
- The design emphasizes clarity of data flow, not UI polish

---

Created by **Taylor** as an experiment in state persistence, clarity of architecture, and building structure-driven UI experiences.

---

> "状态守护者不止是技术，它是记忆系统的延伸，是跨页面的思考，是系统呼吸感的一部分。"
