import { useContext } from "react";
import { HighlightContext } from "../context/HighlightContext";

export default function useHighlight() {
  const value = useContext(HighlightContext);
  const { highlight, setHighlight } = value;
  return { highlight, setHighlight };
}
