import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home'

export default function App (){
  return <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element = {<Register/>}/>
  </Routes>
</Router>
}
