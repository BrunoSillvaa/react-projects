import { useContext } from "react";
import { FaPlus, FaMinus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { NoteManagerContext } from "../../context/NoteManagerContext";
import { NoteListContext } from "../../context/NoteListContext";
import "./Actions.css";

export default function Actions() {
  const { visibility, setVisibility } = useContext(NoteManagerContext);
  const { noteList } = useContext(NoteListContext);

  // Verifies if have any note selected
  let isSelected = false;
  noteList.forEach((note) => {
    if (note.selected) {
      isSelected = !isSelected;
    }
  });

  return (
    <div className="actions">
      <button
        className="create"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        {visibility ? (
          <FaMinus className="icon" />
        ) : (
          <FaPlus className="icon" />
        )}
      </button>

      <button
        className="edit"
        onClick={() => {
          if (isSelected) {
            editNote;
          }
        }}
      >
        <FaPencilAlt className={`icon ${!isSelected && "disabled"}`} />
      </button>

      <button className="delete">
        <FaTrash
          className="icon disabled"
          onClick={() => {
            if (isSelected) {
              deleteNote;
            }
          }}
        />
      </button>
    </div>
  );
}
