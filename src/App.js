
import './App.css';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path='/signin' element= {<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
