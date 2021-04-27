import { useEffect, useState } from "react"
import { initialFetchApi } from "../../api/movie"
import ListH from "../../components/ListH"
import { movieHomeInterface } from "../../interface/movieHomeInterface"

import "./Home.scss"

const Home = () => {
    const [movies, setMovies] = useState<movieHomeInterface>({
        nowPlaying: [],
        popular: [],
        top: []
    })

    useEffect(() => {
        initialFetchApi().then((res: movieHomeInterface) => {
            setMovies(res)
        })
    }, [])

    return (
        <div className="home">
            <div className="home_header">
            </div>
            <div className="home_list">
                <ListH title="Popular" list={movies.popular} />
                <ListH title="Top Rate" list={movies.top} />
                <ListH title="Now playing" list={movies.nowPlaying} />
            </div>
        </div>
    )
}

export default Home
