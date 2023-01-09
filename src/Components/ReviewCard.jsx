export const ReviewCard = ({ title, designer, owner, review_img_url, review_body, category, created_at, votes}) =>{
    return(
        <li className="ReviewCard" >
            <p className="reviewTitle">{title}</p>
            <img className="reviewImage" src={`${review_img_url}`} alt={`${title}`} />
        </li>

    )
}