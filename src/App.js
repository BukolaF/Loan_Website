import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, UserDashboard, About, Contact, Loans, Login, SignUp, Admin, LoanHistory, NewUserForm, UserProfile} from './pages';
import { LoanApplications } from './userpages';

function App() {
  
  const ROUTE_PATHS = {
    about: 'About',
    contact: 'Contact',
    loans: 'Loans',
    login: 'Login',
    signup: 'SignUp',
    userDashboard: 'UserDashboard',
    admin: 'Admin',
    newuserform: 'NewUserForm',
    userprofile: 'UserProfile',
    loanhistory: 'LoanHistory',
    loanapplications: 'LoanApplications'

  };


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
      <Route path={ROUTE_PATHS.userDashboard} element={<UserDashboard />} />
      <Route path={ROUTE_PATHS.admin} element={<Admin />} />
      <Route path={ROUTE_PATHS.newuserform} element={<NewUserForm />} />
      <Route path={ROUTE_PATHS.userprofile} element={<UserProfile />} />
      <Route path={ROUTE_PATHS.loanhistory} element={<LoanHistory />} />
      <Route path={ROUTE_PATHS.loanapplications} element={<LoanApplications />} />
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;

