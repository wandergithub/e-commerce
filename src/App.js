import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  NotificationContainer,
} from 'react-notifications';
import { fetchInitialData } from './redux/ecommerce/ecommerce';
import Home from './components/Home';
import Header from './components/Header';
import Items from './components/Items';
import CustomerService from './components/CustomerService';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="e-commerce/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/customer_service" element={<CustomerService />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <NotificationContainer />
    </div>
  );
}

export default App;
