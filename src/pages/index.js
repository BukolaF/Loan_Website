import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Loans } from './Loans';
import { Login } from './Login';


export * from './About'
export * from './Contact'
export * from './Home'
export * from './Loans'
export * from './Login'

export const index = () => {
  return (
    <div>
        <About />
        <Contact />
        <Home />
        <Loans />
        <Login />
    </div>
  )
}

