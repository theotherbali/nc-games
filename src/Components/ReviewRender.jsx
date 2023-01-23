import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"



export const ReviewRender = ({sort_by, order}) => {

    const [reviews, setReviews] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const {categories} = useParams()

    useEffect(() => {
        setIsError(false);
        setIsLoading(true);

        getReviews(categories, sort_by, order)
            .then((reviewData) => {
                setReviews(reviewData)
                setIsLoading(false)

            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            }
            )
    }, [categories, sort_by, order])

    if (isError) {
        return <p>There's been an error</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <section>
            <ul className="List" >
                {reviews.map((review) => (<ReviewCard key={review.review_id} {...review} />
                ))}
            </ul>
        </section>
    )
}