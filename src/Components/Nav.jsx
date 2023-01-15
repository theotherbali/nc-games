import { useState } from "react";
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
            <button className="navigationButton" onClick={handleClick}>Categories</button>
            <button className="navigationButton">Users</button>
            <section>
                <CategoryLinks showCategoryLinks={showCategoryLinks} />
            </section>

        </nav>

    )
}
