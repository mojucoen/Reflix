import React, { useState } from 'react';

export const SearchFeature = ({ setCategories, categories, categoriesData }) => {
  const [name, setName] = useState("");

  const searchStr = () => {
    const filteredCategories = categoriesData.filter(category =>
      category.title.toLowerCase().includes(name)
    );

    if (filteredCategories.length > 0) {
      setCategories(filteredCategories);
    } else {
      // If the search string is empty, reset to the original categoriesData
      setCategories(categoriesData);
    }
  };

  return (
    <div>
      <input
        id="name-input"
        value={name}
        onChange={(e) => setName(e.target.value.toLowerCase())}
      />
      <button onClick={searchStr}>Search</button>
    </div>
  );
};
