import fotboll from "../assets/fotboll.png";

import { useState, useEffect } from "react";

const YourComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    const fetchData = async () => {
      // Your asynchronous code here
      // For example, fetching data from an API
      await fetch("https://api.example.com/data");

      // Set loading to false when data is fetched
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        // Your content when not loading
        <div>Your content goes here</div>
      )}
    </div>
  );
};

export default YourComponent;
