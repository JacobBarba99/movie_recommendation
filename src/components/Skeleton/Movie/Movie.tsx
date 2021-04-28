import "./Movie.scss"

const Movie = () => {
    return (
        <div className="movie">
            <div className="movie_backImage loader-effect" />
            <div className="movie_main">
                <div className="movie_main-groupImage">
                    <div className="movie_main-groupImage-image" />
                    <div className="movie_main-groupImage-group">
                        <div className="movie_main-groupImage-group-genres" />
                        <div className="movie_main-groupImage-group-genres" />
                        <div className="movie_main-groupImage-group-genres" />
                    </div>
                </div>
                <div className="movie_main-description">
                    <div className="movie_main-description-overview" />
                    <div className="movie_main-description-production" >
                        <div className="movie_main-description-production-logo" />
                        <div className="movie_main-description-production-logo" />
                        <div className="movie_main-description-production-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie
