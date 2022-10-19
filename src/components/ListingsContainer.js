import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
  const renderListing = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/>
  })  
  
  return (
    <main>
      <ul className="cards">
        {renderListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
