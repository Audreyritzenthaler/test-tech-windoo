import React from 'react'
import './Idea.css'

const Idea = (props) => {
    return(
        <div>
            <p className='ideaNumber' >Idée n°{props.id} proposée par {props.author}</p>
            <div className='quote'>
                <i class="fas fa-quote-left"></i>
                <p>{props.title}</p>
                <i class="fas fa-quote-right"></i>
            </div>
            <p>Posté le {props.date}</p>
            <p>Score : {props.score} / 50</p>
            <div id='circle'></div>
        </div>
    )
}

export default Idea