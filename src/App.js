import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import  Loans from './pages/Loans';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Loans' element={<Loans />} /> 
        <Route path='Login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

