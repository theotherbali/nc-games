import { useState } from "react"
import { patchReviewVoteCount } from "../utils/api"
import { DateFormatter } from "./DateFormatter"
import emptyHeart from "../images/iconvote.png"
import fullHeart from "../images/iconvoted.png"

export const ReviewPageInfo = ({ review_id, votes, comment_count, created_at }) => {

    const [voteCount, setVoteCount] = useState(votes)

    const [voteImage, setVoteImage] = useState(emptyHeart)
    const [errMessage, setErrMessage ] = useState("")
    const [alreadyVoted, setAlreadyVoted] = useState(false)
    let voteNumber = (votes*1)
    let votesAdded = 1
    
    const handleClick = (event) => {
        event.preventDefault();
        if(!alreadyVoted){
        setVoteCount(JSON.stringify(voteNumber +1))
        setVoteImage(fullHeart)
        setAlreadyVoted(true)
        votesAdded = 1

        patchReviewVoteCount(review_id, votesAdded).catch( (error) => {
            setVoteCount(JSON.stringify(voteNumber))
            setVoteImage(emptyHeart)
            setAlreadyVoted(false)
            setErrMessage("Something went wrong, please try again!")
        })
    } else {
        setVoteCount(JSON.stringify(voteNumber))
        setVoteImage(emptyHeart)
        setAlreadyVoted(false)
        votesAdded = -1

        patchReviewVoteCount(review_id, votesAdded).catch( (error) => {
            setVoteCount(JSON.stringify(voteNumber +1))
            setVoteImage(fullHeart)
            setAlreadyVoted(true)
            setErrMessage("Something went wrong, please try again!")
        })

    }
    }

    return (<section className="reviewPageInfo">

        <button className="buttonStyling"  id="VotingButton" onClick={handleClick}><img className="VoteButtonImage" src={voteImage} alt="vote" /></button>
        <p>{errMessage}</p>
        <span className="reviewPageInfoTitles" > Votes: </span>
        <span className="reviewPageInfoValues"> {voteCount} </span>
        <span className="reviewPageInfoTitles"> Comments: </span>
        <span className="reviewPageInfoValues">{comment_count} </span>
        <span className="reviewPageInfoTitles"> Created: </span>
        <DateFormatter created_at={created_at} />
    </section>)

}