## 🕒 Live Clock Tracker

A simple and elegant React application that displays the current time and updates every second using useEffect and useState. This project demonstrates React Hooks, side effects, and cleanup functions.

---
## 📌 Features
* Live Time Update — Displays the current time in real-time.
* Automatic Refresh — Updates every second without page reload.
* Cleanup Handling — Properly clears the timer to prevent memory leaks.
* Minimal & Responsive Design — Simple UI with central alignment.

---
## 🛠️ Tech Stack
* React (Hooks: useState, useEffect)
* JavaScript (ES6)
* CSS Inline Styling

---
## 📂 Project Structure
```
src/
 ├── App.js         # Main React component
 ├── index.js       # Entry point for ReactDOM rendering
 └── index.css      # Global styles (optional)
```

---
## 🚀 Getting Started
1️⃣ Clone the repository
```
git clone https://github.com/MausamGaikwad/React-useEffect-Live-Clock-Project.git
cd live-clock-tracker
```
2 Install dependencies
```
npm install
```
3 Run the application
```
npm run dev
```
---

## 📖 How It Works

1 State Initialization:
```
const [time, setTime] = useState(new Date().toLocaleTimeString());
```
Stores the current time as a state variable.

2 useEffect with setInterval:
  * Creates a timer that updates the time every second.
  * Returns a cleanup function to clear the interval when the component unmounts.

3 Rendering:
  * Displays the current time in a large, centered format.

---
## 🧹 Cleanup Importance
```
return () => {
  clearInterval(intervalId);
  console.log("🧹 Interval cleared!");
};
```
Ensures no unnecessary timers run after the component is removed.

---
## 📜 License
This project is open-source and available under the MIT License.
