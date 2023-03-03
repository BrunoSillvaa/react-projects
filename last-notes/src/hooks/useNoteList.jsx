import { useContext } from "react";
import { NoteListContext } from "../context/NoteListContext";

export default function useNoteList() {
  const context = useContext(NoteListContext);
  const { noteList, setNoteList } = context;
  return { noteList, setNoteList };
}
