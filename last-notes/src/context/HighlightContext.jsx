import { createContext, useState } from "react";

export const HighlightContext = createContext();

export default function HighlightProvider({ children }) {
  const [highlight, setHighlight] = useState(false);

  return (
    <HighlightContext.Provider
      value={{
        highlight,
        setHighlight,
      }}
    >
      {children}
    </HighlightContext.Provider>
  );
}
