import React from 'react'


const Movie=(movie)=>{
    //console.log(movie.info);
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
        <div className='movie'>
            <img src={img_path + movie.info.poster_path} className="poster" alt="Movie Poster"></img>
            <div className='movie-details'>
                <div className='box'>
                    <h4 className='title'>{movie.info.title}  {movie.info.name}</h4>
                    <p className='rating'>{movie.info.vote_average}</p>
                    
                    
                </div>
                <div className='overview'>
                    <h1>Overview</h1>
                    <p>{movie.info.overview}</p>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Movie;