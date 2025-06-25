import { Route, Routes } from 'react-router-dom'
import './App.css'

import Card from './component/Card'
import SignIn from './pages/stripeSignIn'

function App() {

  return (
    // <Routes>
    //   <Route path='/' element={<SignIn />} />
    //   <Route path='/signup' element={<SignUp />} />
    // </Routes>
    <SignIn/>
  )
}

export default App
