import { useState, useEffect } from "react";
import { getCommentsByReviewId } from "../utils/api";
import { DateFormatter } from "./DateFormatter";

export const Comments = ({ review_id, comment_count}) => {

    const [comments, setComments] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsError(false);
        setIsLoading(true)

        if(comment_count ===  '0'){
            setIsLoading(false)
            setIsError(false)
        } else {
        getCommentsByReviewId(review_id)
            .then((commentData) => {
                setComments(commentData)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            }
            )}
    }, [review_id, comment_count])

    

    if(isLoading){
        return(
        <section>
            <p>Loading Comments... </p>)
         </section>)
    }

    if(comment_count === '0'){
        return(
        <section>
            <p>There are no comments here yet! </p>
         </section>)
    }

    if(isError){
        return(
        <section>
            <p>An error has occurred fetching comments!</p>)
         </section>)
    }

    return ( comments.map((comment) => {
            return (<section key={comment.comment_id} className="IndividualComment">
                <p className="CommentAuthor"> {comment.author} </p>
                <p>{comment.body}</p>

                <p className="commentPageInfo">
                    <span className="commentPageInfoTitles" > Votes: </span>
                    <span className="commentPageInfoValues"> {comment.votes} </span>
                    <span className="commentPageInfoTitles"> Created: </span>
                    <DateFormatter created_at={comment.created_at} />

                </p>
            </section>)
        })
    )

}