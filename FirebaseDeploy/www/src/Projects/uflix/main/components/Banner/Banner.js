import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './Banner.css';

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState();
    const [handleshow, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', this);
        };
    }, []);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <>
            {!handleshow ? (
                <>
                    <img
                        className="nav__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Movie_Web_Site.png"
                        alt="Netflix Logo"
                    />
                    <img
                        className="nav__avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Netflix-Avatar"
                    />
                </>
            ) : null}

            <header
                className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: 'center center',
                }}
            >
                <div className="banner__contents">
                    {/* Background Image */}
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
                <div className="banner--fadeBottom"></div>
            </header>
        </>
    );
}

export default Banner;
