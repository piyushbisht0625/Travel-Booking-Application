
import React, { useState, useEffect } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch trips from backend (e.g., call API)
    // Update state with fetched trips
    console.log('Fetching trips...');
  }, []);

  // Function to generate random image URL
  const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000); 
    return `https://picsum.photos/200/300?random=${randomId}`; 
  };

  return (
    <div>
      <h2>Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <img src={getRandomImageUrl()} alt="Random" />
            <span>{trip.destination}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
