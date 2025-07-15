import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Addstud from './components/Addstud';
import Searchstudent from './components/Searchstudent';
import Deletestudent from './components/Deletestudent';
import Viewstudent from './components/Viewstudent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/h' element={<Home/>}/>
    <Route path='/a' element={<Addstud/>}/>
    <Route path='/s' element={<Searchstudent/>}/>
    <Route path='/d' element={<Deletestudent/>}/>
    <Route path='/v' element={<Viewstudent/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
