import { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow/MovieRow'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'

import './App.css'
import api from './utils/api'
import Header from './components/Header/Header'

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    async function loadAll() {
      // Fetching All Movie Lists
      const allLists = await api.getHomeList()
      setMovieList(allLists)

      // Choicing The Featured Serie
      let originals = allLists.filter(film => film.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].filmList.results.length -1))
      let movieChosen = originals[0].filmList.results[randomChosen]

      // Fetching and Seting The Featured Serie
      let setChochen = await api.getFeatured(movieChosen.id, 'tv')
      setFeaturedData(setChochen)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  
  return (
    <div className='page'>

      <Header blackHeader={blackHeader} />

      {featuredData && 
        <FeaturedMovie featuredFilm={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((list, key) => {
          return <MovieRow key={key} title={list.title} filmList={list.filmList}/>
        })}
      </section>

      <footer>
        <p>Made by <strong>Bruno Silva</strong> using React JS</p>
      </footer>

      {(movieList <= 0 && featuredData == null) && 
        <div className="loading-icon">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading Icon" />
        </div>
      }
      
    </div>
  )
}

export default App
