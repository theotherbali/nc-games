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
        <nav>
            <button onClick={handleClick}>Categories</button>
            <button>Users</button>
            <br/>
            <section>
                <CategoryLinks showCategoryLinks={showCategoryLinks} />
            </section>

        </nav>

    )
}
