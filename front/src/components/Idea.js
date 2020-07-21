import React from 'react'

const Idea = (props) => {
    return(
        <div>
            {/* <p>{props.id}</p> */}
            <p>{props.title}</p>
            <p>Submited by {props.author}</p>
            <p>{props.date}</p>
            <p>Score : {props.score} / 50</p>
        </div>
    )
}

export default Idea