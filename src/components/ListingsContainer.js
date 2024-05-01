import React, { useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ listings, setListings }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
    ...prev,
      [id]:prev[id]
    }));
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE',
      });
      setListings(currentListings => currentListings.filter(listing => listing.id!== id));
    } catch (error) {
      console.error('Failed to delete listing:', error);
    }
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            description={listing.description}
            location={listing.location}
            imageSrc={listing.image}
            isFavorited={!!favorites[listing.id]} 
            toggleFavorite={() => toggleFavorite(listing.id)}
            onDelete={() => handleDelete(listing.id)} 
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
