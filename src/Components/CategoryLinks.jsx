export const CategoryLinks = (showCategoryLinks) => {

    const navCategories = ["Strategy", "Hidden-Roles", "Dexterity", "Push-Your-Luck", "Roll-and-Write", "Deck-Building", "Engine-Building"]

    if(showCategoryLinks){
    return (
        <section className="navLinks" >
            <Link to="/" className="categorylinks"> <span> All Games</span> </Link>

            {navCategories.map((category) => {
                return (
                    <Link to={`/category/${category}`} className="categorylinks"> <span >{category}</span> </Link>)
            })}
        </section>
    )}
}