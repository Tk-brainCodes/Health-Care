import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Loader from 'react-loader-spinner'
const HomePage = lazy(() => import('./Components/Homepage/Home'))
const Lab = lazy(() => import('./Components/Lab/Labs'))
const Header = lazy(() => import('./Components/Header/Header'))

function App () {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <Loader
            type='Puff'
            color='#00BFFF'
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/labs'>
            <Lab />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
