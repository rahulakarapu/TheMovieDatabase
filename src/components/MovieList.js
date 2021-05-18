import React from 'react'

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div>
                        <img src={movie.Poster} alt={movie.Title}></img>
                    </div>
                );                
            })}
        </>
    );
}

export default MovieList;