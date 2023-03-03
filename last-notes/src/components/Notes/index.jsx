import useNoteList from "../../hooks/useNoteList";
import Note from "../Note";
import "./Notes.css";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();

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
