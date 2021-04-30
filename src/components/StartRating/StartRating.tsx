import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const StartRating = (props: { rating: number, setRating: any }) => {
    const { rating, setRating } = props
    const [hover, setHover] = useState<number | null>(null)

    return (
        <>
            {[...Array(5)].map((start: number, i: number) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            onClick={() => setRating(ratingValue)}
                            name="rating"
                            value={ratingValue} />
                        <FontAwesomeIcon
                            size="3x"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#c8c9cc"}
                            className="star"
                            icon={faStar} />
                    </label>
                )
            })}

        </>
    )
}

export default StartRating
