
import './App.css'

import { Routes,Route } from 'react-router-dom';

import Home from './page/Home'
import Animal from './page/Animal'
import Login from './page/Login'
import Register from './page/Register'
import SelectAnimal from './page/SelectAnimal'
import SelectSeat from './page/SelectSeat';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Animal" element={<Animal/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/SelectAnimal" element={<SelectAnimal/>}/>
        <Route path="/SelectSeat" element={<SelectSeat/>}/>
      </Routes>
    </div>
  )
}

export default App
