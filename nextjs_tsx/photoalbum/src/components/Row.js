import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import axios from '../api/axios';
import '../styles/Row.css';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original/';
//VideoId: XtMThy8QKqU

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        console.log('Movie: ', movie);
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '', { id: true, multi: true })
                .then((response) => {
                    console.log('response:', response);
                    // const urlParams = new URLSearchParams(new URL(url).search);
                    // console.log('urlParams', urlParams);
                    // setTrailerUrl(urlParams.get('v'));
                    setTrailerUrl(response ? response : '');
                })
                .catch((error) => console.log(error));
        }
    };

    //console.table(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => {
                    if (
                        movie.backdrop_path !== null &&
                        movie.poster_path !== null
                    ) {
                        //console.log(movie);
                        return (
                            <img
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className={`row__poster ${
                                    isLargeRow && 'row__posterLarge'
                                }`}
                                src={`${baseURL}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={movies.name}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
