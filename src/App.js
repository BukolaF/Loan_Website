import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, UserDashboard, About, Contact, Loans, Login, SignUp} from './pages/';


function App() {
  
  const ROUTE_PATHS ={
    about: 'About',
    contact: 'Contact',
    loans: 'Loans',
    login: 'Login',
    signup: 'SignUp',
    dashboard: 'UserDashboard',
  
  }
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
      <Route path={ROUTE_PATHS.about} element={<About />} />
      <Route path={ROUTE_PATHS.contact} element={<Contact/>} />
      <Route path={ROUTE_PATHS.loans} element={<Loans />} />
      <Route path={ROUTE_PATHS.login} element={<Login />} />
      <Route path={ROUTE_PATHS.signup} element={<SignUp />} />
      <Route path={ROUTE_PATHS.dashboard} element={<UserDashboard />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;

