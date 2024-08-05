import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Category from './components/Category';
import NewArrival from './components/NewArrival';
import Home from './components/Home';
import Footer from './components/Footer';
import Ridetoy from './components/Ridetoy';
import Dollhouse from './components/Dollhouse';
import Gun from './components/Gun';
import Babywalker from './components/Babywalker';
import Educational from './components/Educational';
import Music from './components/Music';
import Threeage from './components/Threeage';
import Eightage from './components/Eightage';
import Lastage from './components/Lastage';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import Feedback from './components/Feedback';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import AdminProfile from './components/AdminProfile';
import AdminProfileEdit from './components/AdminProfileEdit';
import AddressPage from './components/AddressPage';
import CartPage from './components/CartPage';
import WishlistPage from './components/WishlistPage';
import Profile from './components/Profile';
import DeliveryTracking from './components/DeliveryTracking';
import OrderTrackingPage from './components/OrderTrackingPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import ShippedDeliveryPage from './components/ShippedDeliveryPage';
import CancelledDeliveryPage from './components/CancelledDeliveryPage';
import ProcessingDeliveryPage from './components/ProcessingDeliveryPage';

const initialProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://via.placeholder.com/150',
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [search, setSearch] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };


  return (
    
    <AuthProvider>
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cartItemCount={cartItemCount}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/ride' element={<Ridetoy/>}/>
        <Route path='/doll' element={<Dollhouse/>}/>
        <Route path='/gun' element={<Gun/>}/>
        <Route path='/baby' element={<Babywalker/>}/>
        <Route path='/edu' element={<Educational/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/threeage' element={<Threeage/>}/>
        <Route path='/eightage' element={<Eightage/>}/>
        <Route path='/lastage' element={<Lastage/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin-profile' element={<AdminProfile/>}/>
        <Route path='/edit-profile' element={<AdminProfileEdit/>}/>
        <Route path='/address' element={<AddressPage/>}/>
        <Route path='/wish' element={<WishlistPage/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path='/delivery' element={<DeliveryTracking/>}/>
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/order-tracking/:id" element={<OrderTrackingPage />} />
        <Route path="/shipped-delivery/:id" element={<ShippedDeliveryPage />} />
        <Route path="/cancelled-delivery/:id" element={<CancelledDeliveryPage />} />
        <Route path="/processing-delivery/:id" element={<ProcessingDeliveryPage />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  
  );
}

export default App;
