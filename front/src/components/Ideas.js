import React, { useEffect, useState } from "react"
import axios from 'axios'
import Idea from "./Idea"

const Ideas = () => {
  const [ideas, setIdeas] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')
  
const ascFilter = () => {
    const asc = [...ideas]
    
    asc.sort((a, b) => a.score - b.score)
    setIdeas(asc)
}

const descFilter = () => {
    const desc = [...ideas]
    
    desc.sort((a, b) => b.score - a.score)
    setIdeas(desc)
}
      
  useEffect(() => {
    const fetchData = () => {
      axios.get(
        'http://localhost:8000/api/ideas'
        ).then(res => {
          console.log(res.data)
          setIdeas(res.data)
          setLoaded(true)
        }
        )
    }
    fetchData()
  }, [])
  
  return(
    <div className="main">
      <button onClick={() => ascFilter()}>ASC</button>
      <button onClick={() => descFilter()}>DESC</button>
      <input onChange={(e) => setQuery(e.target.value)}/>
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
      <button onClick={ascFilter}>ASC</button>
    </div>
  )
}

export default Ideas