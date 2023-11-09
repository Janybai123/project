import React from 'react';

const Home = () => {
    return (
        <div id="home">
            <div className='container'>
                <div className='home'>
                <div className='container_inner'>
                <h1>Добро пожаловать...</h1>
                <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>

                
                </div>
                <input type="search"/>
                 <button>Search</button>
              </div>
            </div>
        </div>
    );
};

export default Home;