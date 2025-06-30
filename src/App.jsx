import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/stripeSignIn'
import SignUp from './pages/stripeSignUp'
import Pricing from './pages/pricing'

function App() {

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/pricing' element={<Pricing/>} />
    </Routes>
  )
}

export default App
