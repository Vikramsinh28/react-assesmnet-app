
import './App.css';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/signin' element= {<SignIn />} />
          <Route path= '/profile' element = { <Profile/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
