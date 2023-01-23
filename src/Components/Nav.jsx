import { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryLinks } from "./CategoryLinks";


export const Nav = () => {

    const [showCategoryLinks, setShowCategoryLinks] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        if (!showCategoryLinks) {
            setShowCategoryLinks(true)
        }
        else {
            setShowCategoryLinks(false)
        }

    }


    return (
        <nav  >
            <button className="buttonStyling" onClick={handleClick}>Categories</button>
            <Link to="/users" className="buttonStyling">Users</Link>
            <section>
                <CategoryLinks showCategoryLinks={showCategoryLinks} />
            </section>

        </nav>

    )
}
