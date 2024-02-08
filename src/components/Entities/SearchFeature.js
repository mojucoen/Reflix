import React, { useState } from 'react';

export const SearchFeature = ({ setCategories, categoriesData }) => {
  const [name, setName] = useState("");

  const searchStr = () => {
    const filteredCategories = categoriesData.filter(category =>
      category.title.toLowerCase().includes(name)
    );

    if (filteredCategories.length > 0) {
      setCategories(filteredCategories);
    } else {
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
