import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
  
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>

  );
}

export default App;
