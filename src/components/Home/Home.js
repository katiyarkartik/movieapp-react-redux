import React, { useEffect, useState } from "react";
import Movielisting from "../../components/MovieListing/Movielisting";
import movieApi from "../../common/api/movieapi";
import { APIKey } from "../../common/api/Movieapikey";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";
const Home = () => {
  
  let movieText="man";
  
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div className="home">
      <input placeholder="Enter text"></input>
      <button>Go</button>
      <Movielisting />
    </div>
  );
};

export default Home;
