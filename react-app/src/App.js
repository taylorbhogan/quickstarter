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
      <NavBar />
      {/* <SectionsNavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sections/:id' exact={true}>
          <Section />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SectionsNavBar />
          <Home />
        </Route>
        <ProtectedRoute path='/learn' exact={true} >
          <Learn />
        </ProtectedRoute>
        <Route path='/discover' exact={true}>
          <Discover />
        </Route>
        <ProtectedRoute path='/projects/:projectId' exact={true}>
          <Project everyProject={everyProject} />
        </ProtectedRoute>
        <ProtectedRoute path='/projects/:projectId/edit' exact={true}>
          <ProjectEdit everyProject={everyProject} />
        </ProtectedRoute>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
