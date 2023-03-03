import { useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import useNoteList from "../../hooks/useNoteList";
import "./NoteManager.css";

export default function NoteManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { noteList, setNoteList } = useNoteList();

  function inputTitleHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function createNote(event) {
    event.preventDefault();
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description,
      },
    ]);
  }

  return (
    <form className="note-manager">
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          value={title}
          onChange={inputTitleHandler}
          type="text"
          placeholder="Informe um título"
        />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          type="text"
          id="note"
          value={description}
          onChange={descriptionHandler}
          rows="10"
          placeholder="Escreva a sua nota "
        />
      </div>
      <div className="buttons">
        <button className="cancel">
          <FaBan className="icon" />
        </button>
        <button type="submit" className="confirm" onClick={createNote}>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
