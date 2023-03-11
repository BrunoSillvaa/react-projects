import { createContext, useState } from "react";

export const noteListContext = createContext()

export default function noteListProvider({children}) {
  const [id, setId] = useState(1)
  const [noteList, setNoteList] = useState([])
  
  function createNote() {
    const textareaValue = document.querySelector('textarea').value
    
    if (textareaValue) {
      setNoteList([...noteList, {
        id,
        text: textareaValue
      }])

      setId(id + 1)
      document.querySelector('textarea').value = ""
    } else {
      alert("Acione um texto")
    }
  }

  function deleteNote(deleteID) {
    const newNoteList = noteList.filter(note => note.id !== deleteID)
    setNoteList(newNoteList)
  }

  return (
    <noteListContext.Provider value={{noteList, setNoteList, createNote, deleteNote}}>
      {children}
    </noteListContext.Provider>
  )
}