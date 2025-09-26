
import './App.css'
import { SignUp } from './components/SignUp'
import {SignIn} from "./components/SignIn"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Protected } from './components/Protected'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='protected' element={<Protected/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
