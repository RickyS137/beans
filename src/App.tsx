import { Route, Routes } from 'react-router-dom'
import { PATHS } from './constants/paths'
import MainPage from './pages/main/main-page'

function App() {

  return (
    <div>
      <Routes>
        <Route path={PATHS.main} element={<MainPage/>}/>
      </Routes>
    </div>
  )
}

export default App
