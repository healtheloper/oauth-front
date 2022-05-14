import { useNavigate } from 'react-router-dom';
import Board from './Board';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>홈</h1>
      <button
        onClick={() => {
          navigate('/join');
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </button>
      <Board />
    </>
  );
}
