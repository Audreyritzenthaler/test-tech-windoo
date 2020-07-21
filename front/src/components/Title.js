import React, { useEffect } from 'react'
import Typed from 'typed.js'
import './Title.css'

const Title = () => {

    useEffect(() => {
        const options = {
            strings: ["Boîte à idées" ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            cursorChar: "|"
        }
    const typed = new Typed('#title', options)

    }, [])

    return(
        <div>
            <h1 className="title"><span id='title'></span></h1>
            <i className="far fa-lightbulb icone"></i>
        </div>
    )
}

export default Title