import React, { Fragment } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Menu from './components/Menu'
import ProtectedRoute from './components/ProtectedRoute'



const App = () => (
  <Fragment>
  <NavBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exaxt path="/Login" component={Login} />
    <Route exact path="/about" component={About} />
    <ProtectedRoute exaxt path="/dashboard" component={Dashboard} />
    <ProtectedRoute exact path="/menus/:id" component={Menu} />
    <Route component={NoMatch} />
  </Switch>
  </Fragment>
)

export default App