import { Link } from 'react-router-dom'
import NotImageH from '../../assets/NotImageH.png';
import ListMovie from '../Skeleton/ListMovie';
import { Movie } from '../../interface/movieHomeInterface';

import "./ListH.scss"

interface listH {
    title: string,
    list: Movie[] | undefined
}

const loader = [1, 2, 3, 4, 5, 6, 7, 8]

const ListH = (props: listH) => {
    const { title, list } = props

    return (
        <div className="list">
            {list?.length !== 0 ?
                <h2 >{title}</h2> :
                <div className="list_title loader-effect" />
            }
            <div className="list_scroll">

                {list?.length !== 0 ? list?.map((item: Movie, index: number) => {
                    if (index > 10) {
                        return null
                    }
                    return (
                        <div key={item.id} className="list_scroll-item">
                            <Link
                                to={`/movie/${item.id}`}
                                className="list_scroll-item-container btn "
                            >
                                <img
                                    src={item.poster_path ? `http://image.tmdb.org/t/p/w500${item.poster_path}` : NotImageH}
                                    alt="PL"
                                />
                                <span className="list_scroll-item-container-vote">{item.vote_average?.toFixed(1)}</span>
                                <p className="list_scroll-item-container-title" >{item.title}</p>
                                <p>{item.release_date?.split("-")[0]}</p>
                            </Link>
                        </div>
                    )
                }) : loader.map((item: number) => (
                    <div key={item} className="list_scroll-item">
                        <ListMovie />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListH
