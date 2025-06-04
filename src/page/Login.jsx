import React, { useContext, useState, useEffect } from 'react';
import '../assets/css/Login.css';
import logo from '../assets/img/PTPN-4.png';
import loginImage from '../assets/img/login image.png';
import axios from 'axios';
import config from '../config/config';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2';

export default function Login({ onStatus }) {
  const { setUserLoged } = useContext(AppContext);
  const tokenUser = localStorage.getItem('tokenUser');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //Handle Submit For Token
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.BASE_URL}/ptpn4-api-microservices/user/login`,
        {
          username,
          password,
        }
      );
      const { token } = await response.data;
      localStorage.setItem('tokenUser', token);
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil!',
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Login',
        text: 'Gagal login dengan sukses',
        confirmButtonText: 'Silahkan Coba Lagi',
        showCloseButton: true,
      });
    }
  };

  //Get User id And Detail Loged
  useEffect(() => {
    onStatus(false, false);
    const verifyToken = async () => {
      if (tokenUser) {
        onStatus(false, true);
        try {
          const response = await axios.get(
            `${config.BASE_URL}/ptpn4-api-microservices/user/verify`,
            {
              headers: {
                Authorization: `Bearer ${tokenUser}`,
              },
            }
          );
          const responseUser = await axios.get(
            `${config.BASE_URL}/ptpn4-api-microservices/users/${response.data.user.userId}`,
            {
              headers: {
                Authorization: `Bearer ${tokenUser}`,
              },
            }
          );
          if (responseUser.data && responseUser.data) {
            setUserLoged(responseUser.data[0]);
            onStatus(true, false);
          } else {
            console.log('User ID tidak ditemukan dalam response');
          }
        } catch (error) {
          localStorage.removeItem('tokenUser');
          onStatus(false, false);
        }
      }
    };
    verifyToken();
  }, [tokenUser]);

  return (
    <div className="bg-login">
      <div className="login-page">
        <div className="login-container">
          <div className="login-left">
            <img
              src={loginImage}
              alt="Illustration"
              className="login-illustration"
            />
          </div>
          <div className="login-right">
            <div className="logo-title">
              <img
                src={logo}
                alt="PTPN4 Logo"
                className="logo"
              />
              <h2 className="title">DASHBOARD TANAM ULANG</h2>
            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder='Masukkan Username'
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder = '&#9679;&#9679;&#9679;&#9679;&#9679;'
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-message">{error}</p>}

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
