import { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow/MovieRow'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'

import './App.css'
import api from './utils/api'
import Header from './components/Header/Header'

function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

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
  
  
  return (
    <div className='page'>

      <Header />

      {featuredData && 
        <FeaturedMovie featuredFilm={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((list, key) => {
          return <MovieRow key={key} title={list.title} filmList={list.filmList}/>
        })}
      </section>
    </div>
  )
}

export default App
