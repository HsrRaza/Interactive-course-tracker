import { Route, Routes } from 'react-router-dom'
import ReactPage from './pages/ReactPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
        <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path="/react" element={<ReactPage/>}/>
      </Routes>
   
  )
}

export default App