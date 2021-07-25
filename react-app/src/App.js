import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Learn from './components/Learn';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList/UsersList';
import User from './components/User';
import Project from './components/Project';
import Discover from './components/Discover';
import ProjectEdit from './components/ProjectEdit';
import Home from './components/Home';
import Footer from './components/Footer';
import Section from './components/Section';
import { authenticate } from './store/session';
import { getProjects } from './store/project'
import SectionsNavBar from './components/SectionsNavBar';
import PageNotFound from './components/PageNotFound';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const everyProject = useSelector(state => state.projects);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getProjects())

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* <SectionsNavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <NavBar />
          <LoginForm />
          <Footer />
        </Route>
        <Route path='/sections/:id' exact={true}>
          <NavBar />
          <Section />
          <Footer />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
          <Footer />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <User />
          <Footer />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavBar />
          <SectionsNavBar />
          <Home />
          <Footer />
        </Route>
        <ProtectedRoute path='/learn' exact={true} >
          <NavBar />
          <Learn />
          <Footer />
        </ProtectedRoute>
        <Route path='/discover' exact={true}>
          <NavBar />
          <Discover />
          <Footer />
        </Route>
        <ProtectedRoute path='/projects/:projectId' exact={true}>
          <NavBar />
          <Project everyProject={everyProject} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path='/projects/:projectId/edit' exact={true}>
          <NavBar />
          <ProjectEdit everyProject={everyProject} />
          <Footer />
        </ProtectedRoute>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
