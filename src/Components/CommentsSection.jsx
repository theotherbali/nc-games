import { useState } from "react"
import { CommentCreator } from "./CommentCreator"
import { Comments } from "./Comments"



export const CommentsSection = ({ review_id, comment_count }) => {


    return (
    <section className="CommentsSection">
        <h3>Comments</h3>

        <CommentCreator review_id={review_id}  />

        <Comments review_id={review_id} comment_count={comment_count} />
    </section>
    )
}