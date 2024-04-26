# SearchBar React Component

## Overview

The `SearchBar` component is a flexible input field component designed for implementing search functionalities in React applications. It not only provides dynamic suggestions based on user input but also offers options for fuzzy and exact matching, enhancing the user experience by accommodating different types of search needs.

## Features

- **Dynamic Suggestions**: Displays suggestions that update as the user types, based on the input.
- **Fuzzy Search Option**: Includes an optional fuzzy search mode that can match partial strings and out-of-order characters, making the search more flexible.
- **Exact Match Filtering**: By default, the component filters suggestions to match from the start of the string, providing precise control over the auto-suggestions.
- **Customizable Interaction**: Handles user interaction by updating the input field and calling a provided onChange function with the selected or typed value.
- **Styling**: Comes with CSS styling capabilities that can be customized to fit the design of any application.

## Installation

1. Download `SearchBar.js` and `SearchBar.css`.
2. Include them in your project directory where components are normally kept.

## Usage

Below is an example of how to use the `SearchBar` component within a React application:

```jsx
import React, { useState } from 'react';
import SearchBar from './path/to/SearchBar';

function App() {
  const [suggestions, setSuggestions] = useState(['Example', 'Sample', 'Test']);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchBar
        suggestions={suggestions}
        onChange={handleInputChange}
        fuzzySearch={true} // Set to false or remove for exact match
      />
      <p>Search Value: {searchValue}</p>
    </div>
  );
}

export default App;
```

## Props

- `suggestions` (Array): An array of string suggestions for auto-completion.
- `onChange` (Function): Callback function that is called when the input changes. It receives the current input value as a parameter.
- `fuzzySearch` (Boolean): When true, enables fuzzy searching within the suggestions list. Defaults to <code>false</code>

## License

Provided under the MIT License. See LICENSE file for more details.
