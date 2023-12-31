import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from '../../API_KEY';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getId = () => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then((res) => {
                setDetail(res.data);
            });
    };

    useEffect(() => {
        getId();
    }, [getId]);

    return (
        <div id={'movieDetail'}>
            {detail && (
                <div className={"container"}>
                    <div className={"movieDetail"}>
                        <div className="movieDetail--img">
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} alt="" />

                        </div>
                        <div className="movieDetail--info">
                            <h1> <span style={{color: "green" }}>Name of the movie : </span>{detail.title}</h1>
                            <p> <span style={{color: "green" }}>Release date: </span> {detail.release_date}</p>
                            <p> <span style={{color: "green" }}>Description: </span> <br/>
                                {detail.overview}</p>

                            <div className="vote">
                                <p style={{color: "green" }}>Average vote: </p>
                                <div><p>{Math.round(detail.vote_average)}</p></div>
                            </div>

                            <div className="howManyVotes">
                                <p style={{color: "green" }}> All votes: </p>
                                <div>
                                    <p>{detail.popularity}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default MovieDetail;