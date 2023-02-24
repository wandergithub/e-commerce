import './App.css';
import {
  NotificationContainer,
} from 'react-notifications';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchInitialData } from './redux/ecommerce/ecommerce';
import Home from './components/Home';
import Header from './components/Header';
import Items from './components/Items';
import CustomerService from './components/CustomerService';

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
      </Routes>
      <NotificationContainer />
    </div>
  );
}

export default App;
