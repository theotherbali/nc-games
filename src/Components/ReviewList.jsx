import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {

    const [reviews, setReviews] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const {categories} = useParams()
    console.log(categories)

    useEffect(() => {
        setIsError(false);
        setIsLoading(true);

        getReviews(categories)
            .then((reviewData) => {
                setReviews(reviewData)
                setIsLoading(false)

            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            }
            )
    }, [categories])

    if (isError) {
        return <p>There's been an error</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <main key="ReviewListingPage">
            <h2>Reviews</h2>
            <ul className="ReviewList" key="ReviewList" >
                {reviews.map((review) => (<ReviewCard key={review.review_id} {...review} />
                ))}
            </ul>
        </main>
    )

}