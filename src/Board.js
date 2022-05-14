import { useEffect, useRef, useState } from 'react';
import api from './api';

export default function Board() {
  const [comments, setComments] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem('token');
    await api.createComment({ comment: inputRef.current.value }, userToken);
    setRenderFlag(!renderFlag);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const { comments: newComments } = await api.getComments();
      setComments(newComments);
    };
    fetchComments();
  }, [renderFlag]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' placeholder='등록할 말' />
        <button>등록</button>
      </form>
      <ul>
        {comments?.map(({ userId, comment }) => (
          <li key={`${comment}-${userId}`}>
            <span>{userId}: </span>
            <span>{comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
