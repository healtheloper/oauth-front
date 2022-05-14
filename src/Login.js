import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

export default function Login() {
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, token } = await api.login({
      id: idRef.current.value,
      password: pwRef.current.value,
    });
    if (ok) {
      localStorage.setItem('token', token);
      navigate('/');
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={idRef} placeholder='id' />
        <input type='password' ref={pwRef} placeholder='password' />
        <button>로그인</button>
      </form>
    </>
  );
}
