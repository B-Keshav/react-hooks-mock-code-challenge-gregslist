import React, { useState } from "react";

function ListingCard({listing, handleDelete}) {
  const {description, image, location, id} = listing
  const [isClicked, setIsClicked] = useState(false)

  function handleFavorite(){
    setIsClicked(!isClicked)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method : "DELETE"
    })
    .then(res => res.json())
    .then(() => handleDelete(listing))  
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isClicked ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
