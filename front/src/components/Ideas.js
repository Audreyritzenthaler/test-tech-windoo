import React, { useEffect, useState } from "react"
import axios from 'axios'
import Idea from "./Idea"

const Ideas = () => {
  const [ideas, setIdeas] = useState([])
  const [loaded, setLoaded] = useState(false)
  // console.log(ideas)
      
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:8000/api/ideas'
          );
          setIdeas(result.data)
          setLoaded(true)
      }
      fetchData()
    }, [])
    
    return(
      <div className="main">
        {
          loaded ? 
          <ul>
              {
                  ideas.map((idea, i) => 
                      <li key={i}>
                          <Idea title={idea.title} author={idea.author} date={idea.createdAt} score={idea.score} />
                      </li>
                  )
              }
          </ul>
          : <p>Loading</p>
        }
        
      </div>
    )
}

export default Ideas