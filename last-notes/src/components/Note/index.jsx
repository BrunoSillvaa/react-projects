import "./Note.css";
import useHighlight from "../../hooks/useHighlight";

export default function Note({ id, title, description }) {
  const { highlight, setHighlight } = useHighlight();

  return (
    <div
      className={`note ${highlight ? "highlight" : ""}`}
      id={id}
      onClick={() => {
        setHighlight(!highlight);
      }}
    >
      <h2 className="note-title">{title}</h2>
      <hr className="note-line" />
      <p className="note-description">{description}</p>
    </div>
  );
}
