import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("🧹 Interval cleared!");
    };
  }, []);
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>🕒Live Clock Tracker</h2>
      <h1>{time}</h1>
    </div>
  );
}
export default App;
