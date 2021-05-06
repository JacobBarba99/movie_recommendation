
import "./RecommendationMovie.scss";

interface propsInterface {
    index: number;
    title: string;
    year: string;
    overview: string;
    backImage: string;
    image: string;
}

const RecommendationMovie = (props: propsInterface) => {
    const { title, year, overview, backImage, image } = props;

    return (
        <div className="card">
            <div className="card_backImage">
                <img
                    src={`http://image.tmdb.org/t/p/w500${backImage}`}
                    alt="profilePicture"
                />
            </div>
            <div className="card_text">
                <div className="card_text-movie">
                    <img
                        className="card_text-movie-image"
                        alt="movie"
                        src={`http://image.tmdb.org/t/p/w500${image}`}
                    />
                    <div className="card_text-movie-info">
                        <h3>{title}</h3>
                        <h5>{year}</h5>
                    </div>
                </div>
                <div className="card_text-overview">
                    <p className="card_text-overview-text">{overview}</p>
                </div>
            </div>
        </div>
    );
};

export default RecommendationMovie;
