import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import styles from './AuthForms.module.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const handleDemoLogin = async (email, password) => {
    await dispatch(login(email, password))
  };

  return (
    <div className={styles.formBackground}>
      <div className={styles.loginFormContainer}>
        <form onSubmit={onLogin}>
          <h2 className={styles.loginTitle}>Log in</h2>
          {errors.length > 0 && (
            <div className={styles.errorsContainer}>
              {errors.length > 0 && 'The email address and password you entered do not match our records.'}
              {/* {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))} */}
            </div>
          )}
          <div>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              className={styles.input}
            />
          </div>
          <div>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              className={styles.input}
            />
            <div className={styles.btnContainer}>
              <button type='submit' className={styles.btn}>Login</button>
              <button
                type='button'
                className={styles.demoBtn}
                onClick={() => handleDemoLogin("marnie@aa.io", "password")}
              >Demo</button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.signUpLinkContainer}>
        <p>New to Quickstarter?
          <span>
            <NavLink to='/sign-up' className={styles.signUpLink}> Sign up</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
