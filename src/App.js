import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Navbar from './components/Navbar';

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && 
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              {user ? <Home /> : <Redirect to='/login' />}
            </Route>
            <Route path='/login'>
              {user ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path='/signup'>
              {user ? <Redirect to='/' /> : <Signup />}
            </Route>
            
          </Switch>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
