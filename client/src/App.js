import React, { Fragment } from 'react'
import { Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Fragment>
  <Link exact to="/">Home</Link>
  <hr />
  <Link to="/about">About</Link>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  </Fragment>
)

export default App