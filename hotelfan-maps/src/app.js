import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [directions, setDirections] = useState([]);

  const fetchDirections = async () => {
    try {
      const response = await axios.post('http://localhost:5000/get-directions', {
        start: start,
        end: end
      });
      setDirections(response.data.directions);
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Starting location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        placeholder="Destination location"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={fetchDirections}>Get Directions</button>

      {directions.length > 0 && (
        <ol>
          {directions.map((direction, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: direction }}></li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;