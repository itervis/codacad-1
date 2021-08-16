import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import Protected from './components/Protected'

// import Navbar from './components/Navbar';
// import Home from './pages/home';
const Home = lazy(() => import ('./pages/home'));
const CreateNews = lazy(() => import ('./pages/create-news'));
const Register = lazy(() => import ('./pages/register'));
const Signin = lazy(() => import ('./pages/signin'));


function App() {

  // const [username, setUsername] = useState('')

  //   useEffect(()=> {
  //       (
  //           async () => {
  //               const res = await fetch('http://localhost:8000/api/user', {
  //                   headers: {'Content-Type':'application/json'},
  //                   credentials: 'include', 
  //           })
  //               const content = await res.json()
  //               setUsername(content.username)
  //           }
  //       )()
  //   })
  
  return (
    <Router>
      
      
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          {/* <Route exact path="/" component={() => <Home username={username} setUsername={setUsername}/>}/> */}
          <Route path={ROUTES.CREATE_NEWS}>
            <Protected Cmp={CreateNews}/>
          </Route> 
          <Route path={ROUTES.REGISTER} component={Register}/>
          <Route path={ROUTES.SIGNIN} component={Signin}/>
        </Switch>
      </Suspense>

    </Router> 

  )
}

export default App
