import React from "react";

function ListingCard({ imageSrc, id, description, location, isFavorited, toggleFavorite, onDelete }) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={imageSrc} alt={description} />
      </div>
      <div className="details">
        <button 
          className={`emoji-button favorite ${isFavorited? 'active' : ''}`} 
          onClick={toggleFavorite}
        >
          ★
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
