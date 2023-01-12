import { DateFormatter } from "./DateFormatter"

export const NewCommentRender = ({newComment}) => {
    return(<section key={newComment.comment_id} className="IndividualComment">
            <p className="CommentAuthor"> {newComment.author} </p>
            <p>{newComment.body}</p>

            <p className="commentPageInfo">
                <span className="commentPageInfoTitles" > Votes: </span>
                <span className="commentPageInfoValues"> {newComment.votes} </span>
                <span className="commentPageInfoTitles"> Created: </span>
                <DateFormatter created_at={newComment.created_at} />

            </p>
        </section>)
    }