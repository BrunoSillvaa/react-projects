import { useContext, useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { NoteManagerContext } from "../../context/NoteManagerContext";

import "./NoteManager.css";

export default function NoteManager() {
  const {
    visibility,
    setVisibility,
    titleHandler,
    descriptionHandler,
    createNote,
  } = useContext(NoteManagerContext);

  return (
    <form className={`note-manager ${!visibility && "disabled"}`}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          onChange={titleHandler}
          type="text"
          placeholder="Informe um título"
        />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          type="text"
          id="note"
          onChange={descriptionHandler}
          rows="10"
          placeholder="Escreva a sua nota"
        />
      </div>
      <div className="buttons">
        <button className="cancel">
          <FaBan
            className="icon"
            onClick={(event) => {
              event.preventDefault();
              setVisibility(false);
            }}
          />
        </button>
        <button className="confirm" type="submit">
          <FaCheck
            className="icon" 
            onClick={createNote}
          />
        </button>
      </div>
    </form>
  );
}
