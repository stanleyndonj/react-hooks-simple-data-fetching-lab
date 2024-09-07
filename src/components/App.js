// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false); // Ensure loading state is updated on error
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display dog image
      )}
    </div>
  );
}

export default App;
