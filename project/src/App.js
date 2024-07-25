import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

import Header from './components/Header';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      
      
    </Router>

  );
}

export default App;
