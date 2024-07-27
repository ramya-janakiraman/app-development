import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Category from './components/Category';
import NewArrival from './components/NewArrival';
import Profile from './components/Profile';
import Home from './components/Home';
import Footer from './components/Footer';
import Wish from './components/Wish';
import AddToCartPage from './components/AddToCartPage';
import Order from './components/Order';






function App() {
  return (
  
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/category" element={<Category/>}/>
          <Route path='/newarrival' element={<NewArrival/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/wish' element={<Wish/>}/>
          <Route path='/cart' element={<AddToCartPage/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
        <Footer/>
      </Router>

  );
}

export default App;
