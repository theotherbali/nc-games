import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://ncgamesproject.onrender.com/api"
})

export const getReviews = () => {

    return gamesApi.get(`/reviews`).then((res) => {
        return res.data.reviews
    })
}

export const getReviewByID = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.reviews
    })
}

export const getCommentsByReviewId = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}

export const patchReviewVoteCount = (review_id) => {
    return gamesApi.patch(`/reviews/${review_id}`, { inc_votes: 1 }).then((res) => {
        return res.data.review.votes
    })
}