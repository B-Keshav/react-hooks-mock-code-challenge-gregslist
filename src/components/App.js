import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [lists, setLists] = useState([])
  const [searchDescrip, setSearchDescrip] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setLists(data))
  }, [])

  function handleDelete(deleteListing) {
    const updatedListings = lists.filter((listing) => {
      return listing.id !== deleteListing.id
    })

    setLists(updatedListings)
  }

  function handleAddItem(newItem){
    setLists([...lists,newItem])
  }

  function onSearchSubmit(searchQuerry) {
    setSearchDescrip(searchQuerry)
  }
  const filteredListings = lists.filter((listing) => {
    return listing.description.toLowerCase().includes(searchDescrip)
  })

  return (
    <div className="app">
      <Header onSearchSubmit={onSearchSubmit} handleAddItem={handleAddItem}/>
      <ListingsContainer listings={filteredListings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
