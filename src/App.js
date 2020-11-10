// eslint-disable-next-line
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PlanetsContainer from './containers/PlanetsContainer'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/planets" component={PlanetsContainer} />
        <Redirect to="/planets" />
      </Switch>
    </>
  )
}

export default App
