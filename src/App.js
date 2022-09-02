import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from './redux/ecommerce/ecommerce';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  return (
    <h1>Hello</h1>
  );
}

export default App;
