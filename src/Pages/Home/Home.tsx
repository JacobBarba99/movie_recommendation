import { useSelector } from "react-redux"
import ListH from "../../components/ListH"
import { movieHomeInterface } from "../../interface/movieHomeInterface"

import "./Home.scss"

const Home = () => {
    const nowPlaying = useSelector((state: { movie: movieHomeInterface }) => state.movie.nowPlaying)
    const top = useSelector((state: { movie: movieHomeInterface }) => state.movie.top)
    const popular = useSelector((state: { movie: movieHomeInterface }) => state.movie.popular)

    return (
        <div className="home">
            <div className="home_header">
            </div>
            <div className="home_list">
                <ListH title="Popular" list={popular} />
                <ListH title="Top Rate" list={top} />
                <ListH title="Now playing" list={nowPlaying} />
            </div>
        </div>
    )
}

export default Home
