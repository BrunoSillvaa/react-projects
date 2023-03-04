import React, { createContext, useState, useContext } from "react";

export const NoteListContext = createContext();

export default function NoteListProvider({ children }) {
  const [noteList, setNoteList] = useState([]);

  return (
    <NoteListContext.Provider
      value={{
        noteList,
        setNoteList
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}