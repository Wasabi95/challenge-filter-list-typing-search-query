// Challenge:
// Create a React component that displays a list of items and allows the user to filter the list by typing in a search query. The component should have the following features:
// A list of items should be displayed, each item should have a name and description.
// The user should be able to filter the list by typing in a search query.
// The search should be case-insensitive and should match against both the name and description of each item.
// The list should update as the user types in the search query.
// The component should be reusable and should accept a list of items as a prop.
//
import React, { useState } from "react";

const ItemList = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
