import ReactPlayer from "react-player"

import NotImageH from "../../assets/NotImageH.png"
import { FetchAllMovie, Genre } from "../../interface/movieHomeInterface"

import "./InfoMovie.scss"

const InfoMovie = (props: FetchAllMovie) => {
    const { title, overview, video, poster_path, genres, providers, production_companies, backdrop_path, vote_average, tagline, vote_count } = props
    return (
        <div className="movieInfo">
            <div className="movieInfo-backImage">
                <div className="movieInfo-backImage-opacity" />
                <img src={backdrop_path ? `http://image.tmdb.org/t/p/w500${backdrop_path}` : NotImageH} alt="backdrops" className="backImage" />
            </div>
            <div className="movieInfo-main">
                <div className="movieInfo-main-image">
                    <a href={`https://www.google.com/search?q=${title}&oq=${title}&aqs=chrome..69i57j35i39j0i131i433j0i433l2j69i60l3.574j0j7&sourceid=chrome&ie=UTF-8`}
                    ><img src={poster_path ? `http://image.tmdb.org/t/p/w500${poster_path}` : NotImageH} alt={title} /></a>
                    <div className="movieInfo-main-image-genres">
                        {genres?.map((item: Genre) => (
                            <span key={item.id} className="movieInfo-main-image-genres-tag">{item.name}</span>
                        ))}
                    </div>
                    <div className="movieInfo-main-image-providers">
                        {providers?.flatrate && providers?.flatrate.map((item: any, index: number) => (
                            <a
                                key={index}
                                target="blank"
                                href={`https://www.google.com/search?q=${item.provider_name}&oq=${item.provider_name}&aqs=chrome..69i57j35i39j0i131i433j0i433l2j69i60l3.574j0j7&sourceid=chrome&ie=UTF-8`}>
                                <img src={item?.logo_path ? `http://image.tmdb.org/t/p/w500${item?.logo_path}` : NotImageH} alt={item?.provider_name} />
                            </a>
                        ))}
                        {providers?.rent && providers?.rent.map((item: any, index: number) => (
                            <a
                                key={index}
                                target="blank"
                                href={`https://www.google.com/search?q=${item.provider_name}&oq=${item.provider_name}&aqs=chrome..69i57j35i39j0i131i433j0i433l2j69i60l3.574j0j7&sourceid=chrome&ie=UTF-8`}>
                                <img src={item?.logo_path ? `http://image.tmdb.org/t/p/w500${item?.logo_path}` : NotImageH} alt={item?.provider_name} />
                            </a>
                        ))}

                        {providers?.buy && providers?.buy.map((item: any, index: number) => (
                            <a
                                key={index}
                                target="blank"
                                href={`https://www.google.com/search?q=${item.provider_name}&oq=${item.provider_name}&aqs=chrome..69i57j35i39j0i131i433j0i433l2j69i60l3.574j0j7&sourceid=chrome&ie=UTF-8`}
                            >
                                <img src={item?.logo_path ? `http://image.tmdb.org/t/p/w500${item?.logo_path}` : NotImageH} alt={item?.provider_name} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="movieInfo-main-data">
                    <div className="movieInfo-main-data-details">
                        <div className="movieInfo-main-data-details-title1">{title}</div>
                        <div className="movieInfo-main-data-details-title2">{tagline}</div>
                        <fieldset className="movieInfo-main-data-details-rating">
                            {vote_average?.toFixed(1)}
                        </fieldset>
                        <span className="movieInfo-main-data-details-likes">{vote_count} likes</span>
                    </div>
                    <div className="movieInfo-main-data-overview">
                        <h3>Overview</h3>
                        <p> {overview} </p>
                    </div>
                    {production_companies?.length !== 0 &&
                        <>
                            <h4  >Production companies</h4>
                            <div className="movieInfo-main-data-overview-companies">
                                {production_companies?.map((item: any, index: number) => (
                                    <a
                                        key={index}
                                        target="blank"
                                        href={`https://www.google.com/search?q=${item.name}&oq=${item.name}&aqs=chrome..69i57j35i39j0i131i433j0i433l2j69i60l3.574j0j7&sourceid=chrome&ie=UTF-8`}
                                        data-tooltip={item?.name}
                                        data-placement="top">
                                        <img src={item?.logo_path ? `http://image.tmdb.org/t/p/w500${item?.logo_path}` : NotImageH} alt={item?.name} />
                                    </a>
                                ))}
                            </div>
                        </>
                    }

                </div>
            </div>
            {
                video &&
                <div className="movieInfo-trailer">
                    <ReactPlayer
                        controls
                        height="100%"
                        width="100%"
                        url={`https://www.youtube.com/watch?v=${video?.key}`} />
                </div>
            }
        </div>
    )
}

export default InfoMovie
