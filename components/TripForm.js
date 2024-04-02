import React, { useState } from 'react';

function TripForm() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    // Add activity to the activities list
    setActivities([...activities, '']);
  };

  const handleActivityChange = (index, value) => {
    // Update activity at specified index
    const updatedActivities = [...activities];
    updatedActivities[index] = value;
    setActivities(updatedActivities);
  };

  const handleRemoveActivity = (index) => {
    // Remove activity at specified index
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  const handleSubmit = () => {
    // Validate form fields
    if (!destination || !dates || activities.length === 0) {
      alert('Please fill all fields');
      return;
    }

    // Implement form submission logic here (e.g., call API)
    console.log('Submitting trip form...');
  };

  return (
    <div>
      <h2>Create Trip</h2>
      <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="text" placeholder="Dates" value={dates} onChange={(e) => setDates(e.target.value)} />
      <button onClick={handleAddActivity}>Add Activity</button>
      {activities.map((activity, index) => (
        <div key={index}>
          <input type="text" placeholder="Activity" value={activity} onChange={(e) => handleActivityChange(index, e.target.value)} />
          <button onClick={() => handleRemoveActivity(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TripForm;
