import NoteManager from "../NoteManager";
import "./Main.css";

export default function Main({ children }) {
  return (
    <article className="notes-area">
      {children}
      <NoteManager />
    </article>
  );
}
