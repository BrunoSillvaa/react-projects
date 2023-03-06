import { useContext, useState } from "react";
import { NoteListContext } from "../../context/NoteListContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Note.css";

export default function Note({ id, title, description }) {
  const { noteList, setNoteList } = useContext(NoteListContext);

  // Change the selected state in the note
  const [selected, setSelected] = useState(false);
  function changeSelected(event) {
    if (event.target.tagName != "svg" && event.target.tagName != "path") {
      setSelected(!selected);

      let updatedNoteList = noteList.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            selected: !selected,
          };
        }
        return note;
      });

      setNoteList(updatedNoteList);
    }
  }

  // Change the favorite property in the note
  const [favorite, setFavorite] = useState(false);
  function toggleFavorite() {
    setFavorite(!favorite);

    let updatedNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          favorite: !favorite,
        };
      }
      return note;
    });

    setNoteList(updatedNoteList);
  }

  return (
    <div
      className={`note ${selected && "selected"}`}
      onClick={changeSelected}
      id={id}
    >
      <h2 className="note-title">{title}</h2>
      <hr className="note-line" />
      {favorite ? (
        <FaHeart
          className={`heart-icon ${favorite && "favorite"}`}
          onClick={toggleFavorite}
        />
      ) : (
        <FaRegHeart
          className={`heart-icon ${favorite && "favorite"}`}
          onClick={toggleFavorite}
        />
      )}
      <p className="note-description">{description}</p>
    </div>
  );
}
