import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from './axois';
import { useHistory } from 'react-router-dom';

function Row({title, fetchUrl, isLargeRow = false }) {

    const [movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);

    const openMovie = (movieId) => {
        console.log("asas"+movieId);
       
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">

                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        onClick={() =>  history.push({ pathname:'/movieDetail',state:{movie:movie}}) }
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                        alt={movie.name}
                    />
                    )
                ))}
            </div>
            
            
        </div>
    )
}

export default Row;
