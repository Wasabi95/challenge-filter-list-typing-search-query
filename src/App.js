import React from "react";
import ItemList from "./ItemList";

const items = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item",
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is the second item",
  },
  {
    id: 3,
    name: "Item 3",
    description: "This is the third item",
  },
];

const App = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
