import { useContext, useState } from "react";
import { NoteListContext } from "../../context/NoteListContext";
import Note from "../Note";
import "./Notes.css";

export default function Notes() {
  const { noteList } = useContext(NoteListContext);

  return (
    <section className="notes">
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
        />
      ))}
    </section>
  );
}
