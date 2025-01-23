import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [hotelNames, setHotelNames] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch hotel names on component mount
    fetch("https://www.gocomet.com/api/assignment/hotels-name")
      .then((response) => response.json())
      .then((data) => {
        setHotelNames(data);
      })
      .catch((error) => console.error("Error fetching hotel names:", error));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = hotelNames.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(query) ||
          hotel.city.toLowerCase().includes(query)
      );
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels([]);
    }
  };

  const handleHotelSelect = (hotel) => {
    setSearchQuery(`${hotel.name}, ${hotel.city}`);
    setFilteredHotels([]);
  };

  return (
    <div className="hero-main">
      <div className="hero-content">
        <h1 className="hero-heading">Find the Perfect deal, always.</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          officia non corrupti pariatur aspernatur sint modi commodi cum
          possimus blanditiis facilis beatae repellendus, autem voluptas ratione
          delectus architecto quae dolore.
        </p>
        <div className="search-bar">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Type city, place, or hotel name"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {filteredHotels.length > 0 && (
              <ul className="suggestions-list">
                {filteredHotels.map((hotel) => (
                  <li
                    key={hotel.id}
                    onClick={() => handleHotelSelect(hotel)}
                    className="suggestion-item"
                  >
                    <span className="hotel-name">{hotel.name}</span>
                    <span className="hotel-city">{hotel.city}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input type="date" className="date-input" />
          <input type="date" className="date-input" />
          <input type="number" className="guest-input" placeholder="2" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
