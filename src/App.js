import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import Login from './Login';

const GITHUB_LOGIN_PAGE =
  'https://github.com/login/oauth/authorize?client_id=Iv1.af98f0e9dc07b4d4';

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
