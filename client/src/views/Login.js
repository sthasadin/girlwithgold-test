import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [loginCallBack, setLoginCallBack] = useState(false);
  let history = useHistory();
  function handleLogin(e) {
    e.preventDefault();
    const admin = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    Axios.post('/api/user/login', admin).then((response) => {
      if (response.data.status) {
        history.push('/admin/');
        return;
      }
      setLoginCallBack(true);
    });
  }
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Admin Login</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <input
            className="login__input login__input-email form__input"
            type="Email"
            placeholder="Email..."
            autoComplete="off"
            name="email"
            id="email"
          />
          <label className="login__label login__label-email" htmlFor="email">
            Email
          </label>
          <input
            className="login__input login__input-password form__input"
            name="password"
            type="Password"
            placeholder="Password..."
            id="password"
          />
          <label
            className="login__label login__label-password"
            htmlFor="password"
          >
            Password
          </label>
          {loginCallBack && <h4>Either email or password was incorrect.</h4>}

          <button className="login__button btn__inline--black">Login</button>
        </form>
      </div>
    </div>
  );
}
