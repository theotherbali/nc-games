import { useEffect } from "react"
import { useState } from "react"
import { getReviews } from "../utils/api"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {

    const [reviews, setReviews] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getReviews().then((reviewData) => {
            setIsLoading(false)
            setReviews(reviewData)
        })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
            }
            )
    })

    if (isError) {
        return <p>There's been an error</p>
    }

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <main key="ReviewListingPage">
            <h2>a list of reviews</h2>
            <ul className="ReviewList" key="ReviewList" >
                {reviews.map((review) => (<ReviewCard key={review.id} title={review.title} designer={review.designer} owner={review.designer} review_img_url={review.review_img_url} review_body={review.review_body} category={review.category} created_at={review.created_at} votes={review.votes}  />
                    ))}
            </ul>
        </main>
    )

}