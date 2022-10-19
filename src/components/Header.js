import React, { useState } from "react";
import Search from "./Search";

function Header({ onSearchSubmit, handleAddItem }) {
  const [newItem, setNewItem] = useState({
    description: "",
    location: "",
    image: ""
  })

  function handleFormChange(e) {
    const { name, value } = e.target

    setNewItem({ ...newItem, [name]: value })
  }

  function hanldeNewItemSubmit(e) {
    e.preventDefault()
    const submitedItem = {
      description: newItem.description, 
      image: newItem.image,
      location: newItem.location
    }
    fetch("http://localhost:6001/listings",{
      method : "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(submitedItem)
    })
    .then(res => res.json())
    .then(data => handleAddItem(data))

    setNewItem({
      description: "",
      location: "",
      image: ""
    })
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
      <form onSubmit={hanldeNewItemSubmit}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleFormChange}
          value={newItem.description}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleFormChange}
          value={newItem.location}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          onChange={handleFormChange}
          value={newItem.image}
        />
        <button>Add New Item</button>
      </form>
    </header>
  );
}

export default Header;
