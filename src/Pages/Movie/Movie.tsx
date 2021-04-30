
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import InfoMovie from "../../components/InfoMovie";
import ListH from "../../components/ListH";
import SkeletonMovie from "../../components/Skeleton/Movie";
import { searchMovieFetchApi } from "../../api/movie";
import { FetchAllMovie, Movie as movieInterface } from "../../interface/movieHomeInterface"
interface paramsId {
    id: string
}

const Movie = () => {
    const { id } = useParams<paramsId>()
    const [movie, setMovie] = useState<FetchAllMovie | undefined>()
    const [recommendation, setRecommendation] = useState<movieInterface[] | undefined>()

    useEffect(() => {
        const searchMovie = async () => {
            const response = await searchMovieFetchApi(id)
            setMovie(response.data)
            setRecommendation(response.recommendation)
        }
        window.scrollTo(0, 0)
        setRecommendation(undefined)
        setMovie(undefined)
        searchMovie()
    }, [id])
    if (!movie) {
        return (
            <SkeletonMovie />
        )
    }

    return (
        <>
            <InfoMovie {...movie} />
            <ListH title="Recommendation" list={recommendation} />
        </>
    )
}

export default Movie
