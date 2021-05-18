import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div className="image-container movie-list d-flex justify-content-start m-3">
                        <img src={movie.Poster} alt={movie.Title}></img>
                        <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex justify-content-center align-items-center">
                            <FavouriteComponent />
                        </div>
                    </div>
                );                
            })}
        </>
    );
}

export default MovieList;