import { useState } from "react"
import { getUsers, postComment } from "../utils/api"
import { DateFormatter } from "./DateFormatter"

export const CommentCreator = ({ review_id }) => {
    
    const [username, setUsername] = useState("")
    const [commentPosted, setCommentPosted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [newComment, setNewComment] = useState({})
    const [isError, setIsError] = useState(false)
    const [checkMessage, setCheckMessage] = useState("")

    let usernamesCheck = []

    const handleBlur = (event) => {
        getUsers().then((users) => {
            users.map((user) => {
                return usernamesCheck.push(user.username)
            })
            if(!usernamesCheck.contains(event.target.value)){
                setCheckMessage("Username not recognised!")
            }  
        }).catch((error) => {
            setCheckMessage("error confirming username")
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsError(false)
        setIsLoading(true)
        setDisabled(true)
        setCommentPosted(false)

        postComment(review_id, username, commentText)
        .then((comment) => {
            setCommentPosted(true);
            setIsLoading(false)
            setUsername("")
            setCommentText("")
            setNewComment(comment)
        })
        .catch((error) => {
            setIsLoading(false)
            setIsError(true)
            setDisabled(false)
            })
    }

    if(isError){
        return(<p className="commentNotPostedNotification" >There was an error posting your comment, please ensure your username is correct and try again!</p>)
    }

    if(isLoading){
        return(<p className="commentNotPostedNotification" >Loading...</p>)
    }

    if(commentPosted){
        return(
        
        <section>
            <p className="commentPostedNotification">Your comment has been posted: </p>
        <section className="IndividualComment">
            <p className="CommentAuthor"> {newComment.author} </p>
            <p>{newComment.body}</p>

            <p className="commentPageInfo">
                <span className="commentPageInfoTitles" > Votes: </span>
                <span className="commentPageInfoValues"> {newComment.votes} </span>
                <span className="commentPageInfoTitles"> Created: </span>
                <DateFormatter created_at={newComment.created_at} />

            </p>
        </section>
        </section>)
    }

    return (
        <section >
            <p>Leave a Comment</p>
            <fieldset disabled={disabled}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input className="commentInput" type="text" required={true} value={username} onChange={(e) => setUsername(e.target.value)} onBlur={handleBlur} />
                    </label>
                    <br />
                    <p>{checkMessage}</p>
                    <br />
                    <label>
                        Comment:
                        <input className="commentInput" id="commentText" type="text" required={true} value={commentText} onChange={(e) => setCommentText(e.target.value)} />

                    </label>
                    <br />
                    <button className="buttonStyling" id="commentPostButton">Post Comment</button>
                </form>
            </fieldset>
        </section>
    )

}