import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewByID } from "../utils/api";


export const ReviewPage = () => {

    const [ review, setReview ] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { review_id } = useParams()

    console.log(review_id)
    
    useEffect(() => {
        setIsError(false);
        setIsLoading(true);

        getReviewByID( review_id )
            .then((reviewData) => {
                setReview(reviewData)
                setIsLoading(false)

            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            }
            )
    }, [review_id])


    if (isError) {
        return <p>There's been an error</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (

        <main className="ReviewPage">
              <h2 className="reviewPageTitle">{review.title}</h2>

            <img className="reviewPageImage" src={review.review_img_url} alt={review.title} />

            <section className="reviewPageText">
                <p id="reviewPageOwner" >by {review.owner}</p>
            <section className="reviewPageContent">
                <p>{review.review_body}</p>
            </section>

            <section className="reviewPageInfo">
                <span className="reviewPageInfoTitles" > Votes: </span>
                <span className="reviewPageInfoValues"> {review.votes} </span>
                {/* <span className="reviewInfoTitles"> Comments: </span>
                <span className="reviewInfoValues">{review.comment_count} </span> */}
                <span className="reviewPageInfoTitles"> Created: </span>
                <span className="reviewPageInfoValues">{review.created_at} </span>
            </section>

            </section>

        </main>

    )


}