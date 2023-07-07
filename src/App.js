import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Component/MovieList'
import MovieDetails from './Component/MovieDetails';
import { MovieContext } from './Component/MovieContext';

const App = () => {
  const { setMovieData } = useContext(MovieContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://www.omdbapi.com/?s=movie&apikey=f3379005'
      );
      setMovieData(response.data.Search);
      console.log(response.data.Search);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<MovieList />} />
        <Route exact path="/details" component={<MovieDetails />} />
      </Routes>
    </Router>

  );
};

export default App;
