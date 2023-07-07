import { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieDetails = () => {
    const { movieData } = useContext(MovieContext);
    return (
        <div>
            <h2>Movie Details</h2>
            <ul>
                {movieData.map((movie) => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>Year: {movie.Year}</p>
                        <p>Type: {movie.Type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetails;
