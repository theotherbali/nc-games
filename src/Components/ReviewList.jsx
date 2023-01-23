import { useState } from "react"
import { ReviewListNav } from "./ReviewListNav";
import { ReviewRender } from "./ReviewRender";

export const ReviewList = () => {

    const [sort_by, setSort_By] = useState("created_at")
    const [order, setOrder] = useState("DESC")


    return (
        <main className="ReviewListingPage">
            <h2 className="ReviewTitle" >Reviews</h2>
            <ReviewListNav sort_by={sort_by} order={order} setOrder={setOrder} setSort_By={setSort_By} />
            <ReviewRender sort_by={sort_by} order={order} setOrder={setOrder} setSort_By={setSort_By} />

        </main>
    )

}