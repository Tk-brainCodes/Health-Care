import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Login from './Components/Login/Login'
const HomePage = lazy(() => import('./Components/Homepage/Home'))
const Lab = lazy(() => import('./Components/Lab/Labs'))
const Header = lazy(() => import('./Components/Header/Header'))
const Register = lazy(() => import('./Components/Register/Register'));
const Email = lazy(() => import('./Components/Login/Login'))

function App() {
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
        <Switch>
          <Header />
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/labs'>
            <Lab />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
