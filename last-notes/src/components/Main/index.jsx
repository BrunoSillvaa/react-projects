import NoteManager from "../NoteManager";
import Notes from "../Notes";
import "./Main.css";

export default function Main({ children }) {

  return (
    <article className="notes-area">
      <Notes />
      <NoteManager />
    </article>
  );
}
