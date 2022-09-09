import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchInitialData } from './redux/ecommerce/ecommerce';
import Home from './components/Home';
import Header from './components/Header';
import Item from './components/Item';

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
        <Route path="/items" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
