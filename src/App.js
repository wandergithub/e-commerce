import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchInitialData } from './redux/ecommerce/ecommerce';
import Home from './components/Home';
import Header from './components/Header';
import Items from './components/Items';
import CustomerService from './components/CustomerService';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import {
  NotificationContainer,
} from 'react-notifications';

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
        <NotificationContainer />
        <Route path="/items" element={<Items />} />
        <Route path="/customer_service" element={<CustomerService />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
