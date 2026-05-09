import { Route, Routes } from 'react-router-dom'
import ReactPage from './pages/ReactPage'
import HomePage from './pages/HomePage'
import JavaScriptPage from './pages/JavaScriptPage'
import NodePage from './pages/NodePage'

const App = () => {
  return (
        <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path="/react" element={<ReactPage/>}/>
        <Route path="/javascript" element={<JavaScriptPage/>}/>
        <Route path="/node" element={<NodePage/>}/>
      </Routes>
   
  )
}

export default App