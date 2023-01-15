

export const ReviewListNav = ({ sort_by, order, setOrder, setSort_By}) => {

    const sortByOptions = [{"Title": "title"}, {"Number of Votes": "votes"}, {"Number of Comments": "comment_count"}, {"Date Posted": "created_at"}, {"Category": "category"}, {"Game Designer": "designer"}]
    const orderByOptions = [{Ascending: 'ASC'}, {Descending: 'DESC'}]

    return (
        <form >
            <select value={sort_by} onChange={((e) => setSort_By(e.target.value) & e.preventDefault())}>
                {sortByOptions.map((option) => {
                    const displayText = Object.keys(option)
                    const queryText = Object.values(option)
                    return (
                        <option key={queryText[0]} value={queryText[0]} >
                            {displayText[0]}
                        </option>
                    )
                })}
            </select>
            <select value={order} onChange={((e) => setOrder(e.target.value) & e.preventDefault())}>
                {orderByOptions.map((option) => {
                    const displayText = Object.keys(option)
                    const queryText = Object.values(option)
                    return (
                        <option key={queryText[0]} value={queryText[0]} >
                            {displayText[0]}
                        </option>
                    )
                })}
            </select>
        </form>
    )
}