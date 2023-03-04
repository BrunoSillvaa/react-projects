import { useContext, useState } from "react";
import { NoteListContext } from "../../context/NoteListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Note.css";

export default function Note({ id, title, description, highlight }) {
  const { noteList, setNoteList } = useContext(NoteListContext);
  const [isHighlighted, setIsHighlighted] = useState(highlight);

  // Change the highlight property in the note
  function toggleHighlight() {
    const updatedNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          highlight: !isHighlighted,
        };
      }
      return note;
    });
    setNoteList(updatedNoteList);
    setIsHighlighted(!isHighlighted);
  }

  return (
    <div
      onClick={toggleHighlight}
      className={`note ${highlight && "highlight"}`}
      id={id}
    >
      <h2 className="note-title">{title}</h2>
      <hr className="note-line" />
      {highlight ? <FaHeart className="heart-icon" /> : <FaRegHeart className="heart-icon" />}
      <p className="note-description">{description}</p>
    </div>
  );
}
