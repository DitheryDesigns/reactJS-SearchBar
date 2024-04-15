// Importing React and the useState hook, as well as a CSS file
import React, { useState } from 'react';
import './styles/SearchBar.css';

// Define the SearchBar functional component that takes 'suggestions' and 'onChange' as props
const SearchBar = ({ suggestions, onChange }) => {
  // Declare a state variable named 'value' to hold the current search text, initialized as an empty string
  const [value, setValue] = useState('');

  // Function to handle when a suggestion is clicked
  const handleSuggestionClick = (suggestion) => {
    // Update the parent component using the 'onChange' prop and also set 'value' to the clicked suggestion
    onChange(suggestion);
    setValue(suggestion);
  };

  // Function to handle changes in the input box
  const handleChange = (e) => {
    // Extract the new value from the event object
    const newValue = e.target.value;
    // Update the parent component using the 'onChange' prop and also update the 'value' state
    onChange(newValue);
    setValue(newValue);
  };

  // Render the component
  return (
    <div className="searchBar-container">
      {/* Text input for search */}
      <input
        type="text"
        className="searchBar-input"
        value={value} // Controlled component: the value is bound to the state
        onChange={handleChange} // Event handler for input changes
        placeholder="Search..."
      />

      {/* List of suggestions */}
      <ul className="searchBar-suggestions">
        {/* Filter and map over the 'suggestions' array to create list items */}
        {suggestions
          .filter((suggestion) =>
            // Only include suggestions that contain the text from the search input
            suggestion.toLowerCase().includes(value.toLowerCase())
          )
          .map((suggestion, index) => (
            // Create a list item for each filtered suggestion
            <li
              key={index} // Unique key for each list item
              className="searchBar-suggestion"
              onClick={() => handleSuggestionClick(suggestion)} // Handle click on this suggestion
            >
              {suggestion}
            </li>
          ))}
      </ul>
    </div>
  );
};

// Export the SearchBar component
export default SearchBar;
