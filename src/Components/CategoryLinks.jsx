import { Link } from "react-router-dom";


export const CategoryLinks = ({showCategoryLinks}) => {

    const navCategories = ["strategy", "hidden-roles", "dexterity", "push-your-luck", "roll-and-write", "deck-building", "engine-building"]

    if(showCategoryLinks){
    return (
        <section className="navLinks" >
            <Link to="/" className="categorylinks"> <span className="categoryLinkText"> all games</span> </Link>

            {navCategories.map((category) => {
                return (
                    <Link to={`/category/${category}`} key={category} className="categorylinks"> <span className="categoryLinkText" >{category}</span> </Link>)
            })}
        </section>
    )}
}