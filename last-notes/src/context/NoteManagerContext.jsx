import { createContext, useContext, useState } from "react";
import { NoteListContext } from "./NoteListContext";

export const NoteManagerContext = createContext();

export default function NoteManagerProvider({ children }) {
  const [visibility, setVisibility] = useState(false);

  // Create Note Title
  const [noteTitle, setNoteTitle] = useState();
  function titleHandler(event) {
    setNoteTitle(event.target.value);
  }
  
  // Create Note Description
  const [noteDescription, setNoteDescription] = useState();
  function descriptionHandler(event) {
    setNoteDescription(event.target.value);
  }
  
  // Create Note
  const { noteList, setNoteList } = useContext(NoteListContext);
  function createNote(event) {
    event.preventDefault();
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title: noteTitle,
        description: noteDescription
      },
    ]);
  }

  return (
    <NoteManagerContext.Provider
      value={{
        visibility,
        setVisibility,
        titleHandler,
        noteTitle,
        descriptionHandler,
        noteDescription,
        createNote
      }}
    >
      {children}
    </NoteManagerContext.Provider>
  );
}
