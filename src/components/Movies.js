import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, idx) => (
          <div key={idx}>
            <h3>Title: {m.title}</h3>
            <h4>Time: {m.time}</h4>
            <h4>Genres:</h4>
            <ul>
              {m.genres.map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        
        ))}
    </div>
  );
};

export default Movies;
