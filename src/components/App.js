import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((response) => response.json())
    .then((data) => {
        setListings(data);
        setFilteredListings(data); // Initially, show all listings
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = listings.filter(listing =>
      listing.description.toLowerCase().includes(query.toLowerCase()) ||
      listing.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer listings={filteredListings} setListings={setListings} />
    </div>
  );
}

export default App;
