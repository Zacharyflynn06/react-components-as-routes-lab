import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, idx) => (
        <div key={idx} className="actor">
          <h3>Name: {a.name}</h3>
          <h3>Movies:</h3>
            <ul>
              {a.movies.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
