import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

export default function Join() {
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok } = await api.join({
      id: idRef.current.value,
      password: pwRef.current.value,
    });
    if (ok) {
      navigate('/');
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={idRef} placeholder='id' />
        <input type='password' ref={pwRef} placeholder='password' />
        <button>가입</button>
      </form>
    </>
  );
}
