// src/App.jsx
import  { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Preloader Component
const Preloader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
  </div>
);

// Timer Component
const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  return (
    <div className="mt-4 text-2xl font-bold">
      {timeLeft > 0 ? `${timeLeft} seconds left` : "Time is up!"}
    </div>
  );
};

// Optin Component
const Optin = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Opted in with email: ${email}`);
  };

  return (
    <div className="mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
};

// Main App Component
const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center bg-white p-8 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Website
        <br />
        Coming Soon
      </h1>
      <Timer initialTime={60} />
      <Optin />
      <Preloader />
    </div>
  </div>
);

export default App;

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
