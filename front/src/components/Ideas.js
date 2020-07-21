import React, { useEffect, useState } from "react"
import axios from 'axios'
import Idea from "./Idea"
import './Ideas.css'

const Ideas = () => {
  const [ideas, setIdeas] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredIdeas, setFilteredIdeas] = useState([])
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
    setFilteredIdeas(
      ideas.filter( idea => {
        return idea.title.toLowerCase().includes(query.toLowerCase())  
      })
    )
  }, [query, ideas])

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
        <button className="myButton" onClick={() => filterDate()}>Filtrer les dates {sortDate ? <i class="fas fa-arrow-up"></i> : <i class="fas fa-arrow-down"></i>}</button>
        <button className="myButton" onClick={() => filterScore()}>Filtrer les scores {sortScore ? <i class="fas fa-arrow-up"></i> : <i class="fas fa-arrow-down"></i>}</button>
        <input className="search" type='text' placeholder="Rechercher une idée..." onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div>
          { filteredIdeas.length === 0 ? <p className="existe">Cette idée n'existe pas !</p> : "" }
      </div>
      {
        loaded ? 
        <ul>
            {
                filteredIdeas.map((idea, i) => 
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