import { useState } from "react"
import StartRating from "../StartRating"
import NotImageH from "../../assets/NotImageH.png"

import "./RecommendationMovie.scss"

interface propsInterface {
    index: number,
    imageIndex: number,
    title: string,
    year: string,
    overview: string
    backImage: string
    image: string
    view: any
}

const RecommendationMovie = (props: propsInterface) => {
    const { index, imageIndex, title,
        year,
        overview,
        backImage,
        image, view } = props
    const [rating, setRating] = useState<number>(0)
    const setDataRating = (rating: number) => {
        setRating(rating)
        view(index, rating)
    }
    return (
        <div className={index === imageIndex ? "recommendationMovie active" : "recommendationMovie "}>
            <div className="movie_card" >
                <div className="backImage">
                    <img alt="movie" src={backImage ? `http://image.tmdb.org/t/p/w500${backImage}` : NotImageH} />
                </div>
                <div className="info_section">
                    <div className="movie_header">
                        <img
                            className="image"
                            alt="movie"
                            src={image ? `http://image.tmdb.org/t/p/w500${image}` : NotImageH}
                        />
                        <div className="info">
                            <h2>{title}</h2>
                            <h4>{year}</h4>
                        </div>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {overview}
                        </p>
                    </div>
                </div>

            </div>
            <div className="start">
                <StartRating rating={rating} setRating={setDataRating} />
            </div>
        </div>
    )
}

export default RecommendationMovie
