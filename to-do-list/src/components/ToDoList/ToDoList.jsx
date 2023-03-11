import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import './ToDoList.css'
import Note from '../Note/Note';

export default () => {
  const [noteList, setNoteList] = useState([])

  function createNote() {
    const textareaValue = document.querySelector('textarea').value
    
    if (textareaValue) {
      setNoteList([...noteList, {
        text: textareaValue
      }])
      document.querySelector('textarea').value = ""
    } else {
      alert("Acione um texto")
    }
  }

  return (
    <main>
      <h1>To Do List</h1>
      <div className="textarea-container">
        <textarea rows={3} type="text" placeholder="Type your text here..."/>
        <FontAwesomeIcon icon={faPlus} className="icon" onClick={createNote}/>
      </div>
      <div className="notes-container">
        {noteList.map((note, index) => {
          return <Note text={note.text} key={index} noteList={noteList} setNoteList={setNoteList}/>
        })}
      </div>
    </main>
  )
}