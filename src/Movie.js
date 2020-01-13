//Movies를 render할꺼임
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster,genres}){ //id는 사실 넣을 필요는 없다.
    return <div className = "movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className = "movie_title">{title}</h3>
            <h5 className = "movie_year">{year}</h5>
            <ul className ="genres">
                {genres.map((genre,index) => ( //map은 (item, [item number]) 의 argument를 가지고 있다.
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className = "movie_summary">{summary.slice(0,180)}...</p>
        </div>
    </div>;
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;
