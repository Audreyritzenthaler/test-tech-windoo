import React from 'react'
import './Idea.css'

const Idea = (props) => {
    return(
        <div>
            <p>Idée n°{props.id} proposée par {props.author}</p>
            <p>{props.title}</p>
            <p>{props.date}</p>
            <p>Score : {props.score} / 50</p>
        </div>
    )
}

export default Idea