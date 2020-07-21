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
      <div className="filter">
        <button onClick={() => filterDate()}>Filtrer les dates {sortDate ? <i class="fas fa-arrow-up"></i> : <i class="fas fa-arrow-down"></i>}</button>
        <button onClick={() => filterScore()}>Filtrer les scores {sortScore ? <i class="fas fa-arrow-up"></i> : <i class="fas fa-arrow-down"></i>}</button>
        <input type='text' placeholder="Rechercher une idée..." onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div>
          { ideas.length === 0 ? "Cette idée n'existe pas !" : "" }
      </div>
      {
        loaded ? 
        <ul>
            {
                ideas.map((idea, i) => 
                    <li key={i}>
                        <Idea id={idea.id} title={idea.title} author={idea.author} date={idea.createdAt.replace('T', ' ').substr(0, 19).split(' ').join(' à ')} score={idea.score} />
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