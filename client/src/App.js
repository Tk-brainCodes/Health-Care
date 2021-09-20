import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const HomePage = lazy(() => import("./Components/Homepage/Home"));
const Lab = lazy(() => import("./Components/Lab/Labs"));
const Header = lazy(() => import("./Components/Header/Header"));
const Register = lazy(() => import("./Components/Register/Register"));
const Onboarding = lazy(() => import("./Components/Onboarding/Onboarding"));

function App() {
  const userProfile = useSelector((state) => state.auth.userProfile);
  return (
    <div className="App">
      <Switch>
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          {userProfile && <Header />}

          {!userProfile ? (
            <>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </>
          ) : (
            <Redirect to="/" />
          )}
          <PrivateRoute moduleName="USER" exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute moduleName="USER" exact path="/onboarding">
            <Onboarding />
          </PrivateRoute>
          <PrivateRoute moduleName="USER" exact path="/labs">
            <Lab />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
