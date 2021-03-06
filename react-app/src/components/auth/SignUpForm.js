import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import { login } from '../../store/session';
import styles from './AuthForms.module.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [openConfirmEmailInput, setOpenConfirmEmailInput] = useState(false);
  const [openConfirmPasswordInput, setOpenConfirmPasswordInput] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    if (password !== repeatPassword) {
      setErrors([
        ': Please make sure your passwords match.'
      ])
    } else if (email !== repeatEmail) {
      setErrors([
        ': Please make sure your emails match.'
      ])
    } else {
      const data = await dispatch(signUp(username, email, password, repeatPassword));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateRepeatEmail = (e) => {
    setRepeatEmail(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const handleDemoLogin = async (email, password) => {
    await dispatch(login(email, password))
  };

  return (
    <div className={styles.formBackground}>
      <div className={styles.logInLinkContainer}>
        <p>Have an account?
          <span>
            <NavLink to='/login' className={styles.logInLink}> Log in</NavLink>
          </span>
        </p>
      </div>
      <div className={styles.signUpFormContainer}>
        <form onSubmit={onSignUp}>
          <h2 className={styles.loginTitle}>Sign up</h2>
          {errors.length > 0 && (
            <div className={styles.errorsContainer}>
              {/* {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))} */}
              {errors[0].includes("This field is required.") ? (<div>All fields are required.</div>) : errors.map((error, ind) => (
                <div key={ind}>
                  {error.split(': ')[1]}</div>
              ))}
            </div>
          )}
          <div>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='Username'
              className={styles.input}
            ></input>
          </div>
          <div>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              onFocus={() => setOpenConfirmEmailInput(true)}
              value={email}
              placeholder='Email'
              className={styles.input}
            ></input>
          </div>
          <div>
            {(openConfirmEmailInput &&
              <input
                type='text'
                name='repeat_email'
                onChange={updateRepeatEmail}
                value={repeatEmail}
                placeholder='Re-enter email'
                className={styles.input}
              ></input>)}
          </div>
          <div>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              onFocus={() => setOpenConfirmPasswordInput(true)}
              value={password}
              placeholder='Password'
              className={styles.input}
            ></input>
          </div>
          <div>
            {(openConfirmPasswordInput &&
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                placeholder='Re-enter password'
                className={styles.input}
              ></input>
            )}
          </div>
          <div className={styles.btnContainer}>
            <button type='submit' className={styles.btn}>Create account</button>
            <button
              type='button'
              className={styles.demoBtn}
              onClick={() => handleDemoLogin("marnie@aa.io", "password")}
            >Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
