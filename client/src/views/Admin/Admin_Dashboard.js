import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Auth from '../../components/Auth';

export default function Admin_Dashboard() {
  const [countCallBack, setCountCallBack] = useState('loading...');
  const [message, setMessage] = useState('');
  Auth();
  let history = useHistory();
  // useEffect(() => {
  //   Axios.get('/api/product/count').then((response) => {
  //     setCountCallBack(response.data.count);
  //   });
  // }, []);

  function handleHttp(e, url) {
    e.preventDefault();
    history.push(url);
  }

  function handleCredential(e) {
    e.preventDefault();
    if (e.target.password.value === e.target.cpassword.value) {
      Axios.patch('/api/user/update', {
        password: e.target.password.value,
      }).then((response) => {
        if (response.data.status) {
          return setMessage('Password Changed');
        }
        setMessage('Something went wrong.');
      });
    } else {
      setMessage("Passwords doesn't match");
    }
  }
  function handleLogout(e) {
    e.preventDefault();
    Axios.get('/api/user/logout');
    history.push('/');
  }

  return (
    <div className="admin">
      <div className="admin__container">
        <h1 className="admin__title">Admin Dashboard</h1>
        <h2 className="admin__count">Total products: {countCallBack}</h2>
        <a
          href="/admin/create"
          className="admin__btn-create btn"
          onClick={(e) => handleHttp(e, '/admin/create')}
        >
          Create Product
        </a>
        <a
          href="/admin/update"
          className="admin__btn-update btn"
          onClick={(e) => handleHttp(e, '/admin/update')}
        >
          Update Product
        </a>
        <a href="#admincredential" className="admin__credential btn">
          Admin Credential Update
        </a>
        <div id="admincredential" className="popup">
          <div className="popup__container">
            <a href="#" className="popup__close"></a>

            <div className="admin_popup-container">
              <form
                onSubmit={handleCredential}
                className="product-create__form"
              >
                <label htmlFor="description" className="product-create__label">
                  Password
                </label>
                <input
                  type="Password"
                  className="product-create__input"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="description" className="product-create__label">
                  Confirm Password
                </label>
                <input
                  type="Password"
                  className="product-create__input"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
                {message && <h4>{message}</h4>}

                <button className="btn admin__btn-submit">Update</button>
              </form>
            </div>
          </div>
        </div>
        <a
          href="/url/user/logout"
          className="logout btn"
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
