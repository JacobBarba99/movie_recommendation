import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./Arrows.scss"

const NextArrow = ({ onClick }: any) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <FontAwesomeIcon size="2x" icon={faArrowRight} />
        </div>
    )
}
const PrevArrow = ({ onClick }: any) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        </div>
    )
}
export {
    NextArrow,
    PrevArrow
}