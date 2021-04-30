import { useEffect, useState } from "react"

import Slider from "react-slick"
import RecommendationMovie from "../../components/RecommendationMovie"
import { NextArrow, PrevArrow } from "../../components/Arrows/Arrows"
import { listSelectionFetchApi, recommendationFetchApi } from "../../api/movie"

import "./Recommendation.scss"
import { Movie } from "../../interface/movieHomeInterface"
import Loading from "../../components/Loading"


const Recommendation = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [recommendationCard, setRecommendationCard] = useState<Movie[]>([])

    const recommendationApi = async () => {
        setLoading(true)
        const recommendation = await recommendationFetchApi()
        setRecommendationCard(recommendation)
        setLoading(false)
    }

    useEffect(() => {
        recommendationApi()
    }, [])

    const settings = {
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    dots: true,
                }
            },
        ]
    }
    const view = (index: number, rate: number) => {
        recommendationCard[index].rate = rate
    }

    const selection = () => {
        const filter = recommendationCard.filter((item: Movie) => item.rate)
        const selectionRate = filter.map((item: Movie) => { return { title: item.title, rate: item.rate } })
        listSelectionFetchApi(selectionRate)

    }
    if (loading) {
        return (<Loading />)
    }
    return (
        <div className="recommendation">
            <h2>Rate the movies you've already seen </h2>
            <Slider {...settings} >
                {recommendationCard.map((item: Movie, index: number) => (
                    <RecommendationMovie
                        key={item.id}
                        title={item.title}
                        overview={item.overview}
                        image={item.poster_path}
                        backImage={item.backdrop_path}
                        year={item.release_date?.split("-")[0]}
                        index={index} imageIndex={imageIndex}
                        view={view}

                    />
                ))}
            </Slider>
            <button onClick={selection} className="recommendation-btn">Ready</button>
        </div>
    )
}

export default Recommendation
