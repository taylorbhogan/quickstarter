import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import styles from './AuthForms.module.css'
import LoginErrorModal from './LoginErrorModal';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
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

  return (
    <div className={styles.formBackground}>
      <div className={styles.loginFormContainer}>
        <form onSubmit={onLogin}>
          <h2 className={styles.loginTitle}>Log in</h2>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
            {/* {errors.length ? <LoginErrorModal /> : "bye"} */}
          </div>
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
            <button type='submit' className={styles.btn}>Login</button>
          </div>
        </form>
      </div>
      <div className={styles.signUpLinkContainer}>
        <p>New to Placeholder?
          <span>
            <NavLink to='/sign-up' className={styles.signUpLink}> Sign up</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
