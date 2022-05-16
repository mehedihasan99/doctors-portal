import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Nav from './Pages/Shared/Nav';
import MyLogin from './Pages/Login/MyLogin';
import MySignUp from './Pages/Login/MySignUp';
function App() {
  return (
    <div className='max-w-7xl p-12 mx-auto'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<MyLogin></MyLogin>}></Route>
        <Route path='/signup' element={<MySignUp></MySignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
