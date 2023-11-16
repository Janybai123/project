import React from 'react';
import { NavLink } from 'react-router-dom';
const MovieCard = ({elem}) => {
    return (
        <div className='movie'>
            <NavLink to={`/movie-datail/${elem.id}`}>
            <img 
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${elem.poster_path}`}
             alt=""
             />  
            </NavLink>
          
            </div>
    );
};

export default MovieCard;