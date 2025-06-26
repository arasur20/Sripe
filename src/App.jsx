import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/stripeSignIn'
import SignUp from './pages/stripeSignUp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App
