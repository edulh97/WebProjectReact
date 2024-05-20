import React, { useState } from 'react';

function TextInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      placeholder="Project name"
    />
  );
}

export default TextInput;
