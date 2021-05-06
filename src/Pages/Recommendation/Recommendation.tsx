import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Deck from "../../components/Deck"
import Loading from "../../components/Loading"
import ListH from "../../components/ListH"
import { Movie } from "../../interface/movieHomeInterface"
import { recommendationAction } from "../../redux/movieReducer"
import { recommendationFetchApi } from "../../api/movie"

import "./Recommendation.scss"

const Recommendation = () => {
    const [loading, setLoading] = useState(true)
    const [recommendationCard, setRecommendationCard] = useState<Movie[]>([])

    const dispatch = useDispatch()
    const selectionRecommendation = useSelector((state: { movie: { selectionRecommendation: string[] | null } }) => state.movie.selectionRecommendation)
    const recommendation = useSelector((state: { movie: { recommendation: [] } }) => state.movie.recommendation)
    useEffect(() => {
        setLoading(true)
        const recommendationApi = async () => {
            const local = await localStorage.getItem("movie_recommendation");
            if (local) {
                if (selectionRecommendation?.length !== 0)
                    dispatch(recommendationAction(selectionRecommendation, setLoading))
                return;
            }
            const recommendation = await recommendationFetchApi()
            setRecommendationCard(recommendation)
            setLoading(false)
        }

        recommendationApi()
    }, [selectionRecommendation, dispatch])


    const finishSelection = async (selection: Movie[]) => {
        if (selection.length === 0) {
            return
        }
        setLoading(true)
        const selectionFilter = selection.map((item: Movie) => { return item.title })
        await dispatch(recommendationAction(selectionFilter, setLoading))
    }

    if (loading) {
        return (<Loading />)
    }
    if (recommendation && recommendation.length !== 0) {
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
            <h1>Rate the movies you've already seen </h1>
            <Deck data={recommendationCard} finishSelection={finishSelection} />
        </div>
    )
}

export default Recommendation
