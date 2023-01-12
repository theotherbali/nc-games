

export const DateFormatter = ({ created_at }) => {
    let datetime = []
    let date = ""
    let time = ""
    
    datetime = created_at.split("T")

    date = datetime[0]

    time = datetime[1].slice(0,5)

    return(
        <span className="reviewInfoValues" >{time + " " + date }</span>
    )

}