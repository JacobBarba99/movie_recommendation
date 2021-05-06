import { animated, to } from "react-spring";
import { Movie } from "../../interface/movieHomeInterface";
import RecommendationMovie from "../RecommendationMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import "./CardRecommendation.scss";

interface interfaceProps {
    i: number,
    x: any,
    y: any,
    bind: any,
    data: Movie,
    move: any,
}
const Card = (props: interfaceProps) => {
    const { i, x, y, bind, data, move } = props;


    return (
        <animated.div
            className="transform1"
            style={{
                transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
            }}
        >
            <animated.div {...bind(i)} className="transform2" >
                <RecommendationMovie
                    index={i}
                    title={data.title}
                    year={data.release_date?.split("-")[0]}
                    overview={data.overview}
                    backImage={data.backdrop_path}
                    image={data.poster_path}
                />
            </animated.div>
            <div className="buttons">
                <button className="buttons-btn" onClick={() => move(i, false)}><FontAwesomeIcon size="1x" icon={faThumbsDown} /> dislike </button>
                <button className="buttons-btn" onClick={() => move(i, true)}><FontAwesomeIcon size="1x" icon={faThumbsUp} /> like </button>
            </div>
        </animated.div>
    );
};

export default Card;
