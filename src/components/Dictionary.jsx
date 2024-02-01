import React, { useState } from "react";

export default function Diction() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const lowerInput = searchInput.toLowerCase();
    const wordFound = dictionary.find(
      (e) => e.word.toLowerCase() === lowerInput
    );

    if (wordFound) {
      setResult(wordFound.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </>
  );
}