import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import requests, { API_KEY } from '../Requests';
import './MovieDetail.css'
import Nav from '../Nav'

function MovieDetail() {
    const location = useLocation();
    const [movie,setMovie] = useState(null);
    useEffect(()=>{
        setMovie(location.state.movie);
    },[location])
    return (
        <header className='movieBanner' style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
       }}>
           <Nav/>
            <div className="movieBanner__contents">
                <h1 className="movieBanner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="movieBanner__buttons">
                    <button className="movieBanner__button">Play</button>
                    <button className="movieBanner__button">My List</button>
                </div>
                <h2 className="">

                </h2>
                <h1 className="movieBanner__description">
                    {movie?.overview}
                </h1>
            </div> 
            <div className="movieBanner--fadeBottom" />
        </header>
    )
}

export default MovieDetail