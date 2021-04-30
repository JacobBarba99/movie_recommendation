import { useEffect, useState } from "react"

import Slider from "react-slick"
import RecommendationMovie from "../../components/RecommendationMovie"
import { NextArrow, PrevArrow } from "../../components/Arrows/Arrows"
import { listSelectionFetchApi, recommendationFetchApi } from "../../api/movie"

import "./Recommendation.scss"
import { Movie } from "../../interface/movieHomeInterface"
import Loading from "../../components/Loading"
import ListH from "../../components/ListH"


const Recommendation = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [recommendationCard, setRecommendationCard] = useState<Movie[]>([])
    const [recommendation, setRecommendation] = useState<any>(null)

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

    const selection = async () => {
        setLoading(true)
        const filter = recommendationCard.filter((item: Movie) => {
            if (item.rate) {
                return item.rate >= 2
            }
            return false
        })
        const selectionRate = filter.map((item: Movie) => { return item.title })
        const arrayMovies = await listSelectionFetchApi(selectionRate)
        if (arrayMovies) {
            setLoading(false)
            setRecommendation(arrayMovies)
        }
    }

    if (loading) {
        return (<Loading />)
    }
    if (recommendation) {
        return (
            <div className="recommendation_list" >
                <header >
                    <h2>
                        Recomendaciones en base a tu seleccion
                    </h2>
                </header>
                <div className="recommendation_list-movies" >
                    {
                        recommendation.map((item: any, index: number) => {
                            return (
                                <ListH key={index} title={item[0].title} list={item.slice(1, item.length)} />
                            )
                        })
                    }
                </div>
            </div>
        )
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
