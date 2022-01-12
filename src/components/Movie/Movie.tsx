import { Movie as movieInterface } from "../../interface/movieHomeInterface"
import NotImageH from "../../assets/NotImageH.png"

import "./Movie.scss"
import { Link } from "react-router-dom"

interface propsInterface {
    movie: movieInterface
}

const Movie = (props: propsInterface) => {
    const { movie } = props
    console.log(movie);
    return (
        <Link
            className="movie"
            to={`/movie/${movie.id}`}

        >
            <img
                src={movie.poster_path ? `http://image.tmdb.org/t/p/w500${movie.poster_path}` : NotImageH}
                alt={movie.title}
                className="movie-image"
            />
            <p className="movie-title">{movie.title}</p>
        </Link>
    )
}

export default Movie
