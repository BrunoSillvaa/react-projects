import Header from './components/Header'
import Logo from './components/Logo'
import Actions from './components/Actions'
import Main from './components/Main'
import Notes from './components/Notes'

import NoteListProvider from './context/NoteListContext'
import HighlightProvider from './context/HighlightContext'

function App() {

  return (
    <HighlightProvider>
      <NoteListProvider>
        <Header>
          <Logo />
          <Actions />
        </Header>
        <Main>
          <Notes />
        </Main>
      </NoteListProvider>
    </HighlightProvider>
  )
}

export default App
