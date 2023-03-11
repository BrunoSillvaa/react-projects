import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './Note.css'

export default ({text, noteList, setNoteList}) => {
  const [selected, setSelected] = useState(false)

  function markOnSquare() {
    setSelected(true)
  }
  function markOffSquare() {
    setSelected(false)
  }

  function deleteNote(event) {
    // const newNoteList = noteList.map(note => {
    //   if (note)
    // })
    console.log(event)
  }

  return (
    <section className="note">
      <div className="icons">
        {selected ? 
          <FontAwesomeIcon className='icon' icon={faSquareCheck} onClick={markOffSquare}/> : 
          <FontAwesomeIcon className='icon' icon={faSquare} onClick={markOnSquare}/>
        }
        <FontAwesomeIcon className='icon' icon={faTrash} onClick={deleteNote}/>
      </div>
      <p className='text'
         style={selected ?
          {textDecoration: "line-through",
           color: "rgba(0, 0, 0, 0.5)"} :
          {textDecoration: "none"}}>{text}
      </p>
    </section>
  )
}