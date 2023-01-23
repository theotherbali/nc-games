import { Link } from "react-router-dom";
import { DateFormatter } from "./DateFormatter";



export const ReviewCard = ({ review_id, title, designer, owner, review_img_url, review_body, category, created_at, votes, comment_count }) => {

    return (
        <Link to={`/review/${review_id}`} className="CardLinks" >
        <li className="ReviewCard" >
            
            <img className="reviewImage" src={review_img_url} alt={title} />
            <section className="ReviewCardText">
                
                <h3 className="reviewTitle">{title}</h3>

            <section className="reviewInfo">
                <span className="reviewInfoTitles" > Votes: </span>
                <span className="reviewInfoValues"> {votes} </span>
                <span className="reviewInfoTitles"> Comments: </span>
                <span className="reviewInfoValues">{comment_count} </span>
                <span className="reviewInfoTitles"> Created: </span>
                <DateFormatter created_at={created_at} />
            </section>

            </section>



        </li>
        </Link>


    )
}