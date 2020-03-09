import React from 'react';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import UserForm from './UserForm';
import Dashboard from './Dashboard';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch
} from "react-router-dom";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const FormWrapper = ({ children }) =>
  <React.Fragment>
    {children}
    <hr />
  </React.Fragment>;

const App = ({
  user,
  error,
  signOut,
  signInWithEmailAndPassword,
  signInWithGoogle,
  createUserWithEmailAndPassword,
}) => (
  <header>

  <Router>
  <React.Fragment>
  {
    user 
      ? <section>
          <div
            style={{
              height: '1000px',

          }}>
            <FormWrapper>
              <footer>
                <h3>Sign out.</h3>
                <button onClick={signOut} to="/login">sign out</button>

                <p>Signed in as: {JSON.stringify(user.email)}</p>
              </footer>
            </FormWrapper>
          </div>
        </section>
      : <section>
          <div>
            <footer>
              <FormWrapper>
                <h3>create user</h3>
                <UserForm onSubmit={createUserWithEmailAndPassword} />
              </FormWrapper>

              <FormWrapper>
                <h3>sign in</h3>
                <UserForm onSubmit={signInWithEmailAndPassword} />
              </FormWrapper>

              <FormWrapper>
                <h3>sign in with google</h3>
                <button onClick={signInWithGoogle}>sign in with google</button>
              </FormWrapper>            
            </footer>

          </div>
        </section>
  }
    {/* <FormWrapper>
      <h3>user data</h3>
      <textarea value={JSON.stringify(user)} />
    </FormWrapper>

    <FormWrapper>
      <h3>error data</h3>
      <textarea value={JSON.stringify(error)} />
    </FormWrapper> */}

    {
      error 
        ? <div>{alert(JSON.stringify(error))}</div>
        : <div></div>
    }
    {
      user 
        ? <div id="inner">
            <Redirect to="/dashboard" />
          </div>
        : <div id="inner">
            <p>Login to continue.</p>
          </div>
    }
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/dashboard">
            {
              user 
                ? <Dashboard />
                : <p></p>
            }
            </Route>
        </Switch>
      </React.Fragment>
    </Router>
  </header>
);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);