import React, { useEffect, useState } from "react"
import axios from 'axios'
import Idea from "./Idea"

const Ideas = () => {
  const [ideas, setIdeas] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')
  const [sortScore, setSortScore] = useState(false)
  const [sortDate, setSortDate] = useState(false)

  const filterScore = () => {
      const tmp = [...ideas].sort((a, b) => {
        setSortScore(!sortScore)
        if (sortScore) {
          return a.score - b.score
        }
        return b.score - a.score
      })
      setIdeas(tmp)
  }

  const filterDate = () => {
      const tmp = [...ideas].sort((a, b) => {
        setSortDate(!sortDate)
        if (sortDate) {
          if(a.createdAt < b.createdAt) return 1
          if(a.createdAt > b.createdAt) return -1
          return 0
        }
        if(a.createdAt > b.createdAt) return 1
        if(a.createdAt < b.createdAt) return -1
        return 0
    })
      setIdeas(tmp)
  }
    
  useEffect(() => {
    setIdeas(
      ideas.filter( idea => {
        return idea.title.toLowerCase().includes(query.toLowerCase())  
      })
    )
  }, [query])

  useEffect(() => {
    const fetchData = () => {
      axios.get(
        'http://localhost:8000/api/ideas'
        ).then(res => {
          setIdeas(res.data)
          setLoaded(true)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchData()
  }, [])
  
  return(
    <div className="main">
      <button onClick={() => filterDate()}>Date {sortDate ? 'ASC' : 'DESC'}</button>
      <button onClick={() => filterScore()}>Score {sortScore ? 'ASC' : 'DESC'}</button>
      <input type='text' placeholder="search idea" onChange={(e) => setQuery(e.target.value)}/>
      {
        loaded ? 
        <ul>
            {
                ideas.map((idea, i) => 
                    <li key={i}>
                        <Idea title={idea.title} author={idea.author} date={idea.createdAt.replace('T', ' ').substr(0, 19).split(' ').join(' à ')} score={idea.score} />
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