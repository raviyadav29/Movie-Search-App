import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const { movieData } = useContext(MovieContext);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movieData.map((movie) => (
                    <li key={movie.imdbID}>{movie.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
