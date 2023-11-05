import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { key } from '../../API_KEY'
import MovieCard from '../MovieCard';

const Upcoming = () => {
    const [upComing,setUpcoming]=useState([])
    const getUpcoming = () => {
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=3`)
        .then(res=>{
            console.log(res);
            setUpcoming(res.data.results)
        })
    }
    useEffect(()=>{
        getUpcoming()
    },[]);
    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    <h1>Upcoming</h1>
                    <div className='popular-movie'>
                    {upComing.map((el)=> <MovieCard elem={el}/>) }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;