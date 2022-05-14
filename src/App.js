import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='join' element={<Join />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
