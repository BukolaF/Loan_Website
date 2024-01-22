import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, About, Contact, Loans, Login} from './pages/';


function App() {
  
  const ROUTE_PATHS ={
    about: 'About',
    contact: 'Contact',
    loans: 'Loans',
    login: 'Login',
  
  }
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
      <Route path={ROUTE_PATHS.about} element={<About />} />
      <Route path={ROUTE_PATHS.contact} element={<Contact />} />
      <Route path={ROUTE_PATHS.loans} element={<Loans />} />
      <Route path={ROUTE_PATHS.login} element={<Login />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

