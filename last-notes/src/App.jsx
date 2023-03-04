import Header from "./components/Header";
import Logo from "./components/Logo";
import Actions from "./components/Actions";
import Main from "./components/Main";
import Notes from "./components/Notes";

import NoteListProvider from "./context/NoteListContext";
import NoteManagerProvider from "./context/NoteManagerContext";
import NoteManager from "./components/NoteManager";

function App() {
  return (
    <NoteListProvider>
      <NoteManagerProvider>
        <Header>
          <Logo />
          <Actions />
        </Header>
        <Main>
          <Notes />
          <NoteManager />
        </Main>
      </NoteManagerProvider>
    </NoteListProvider>
  );
}

export default App;
