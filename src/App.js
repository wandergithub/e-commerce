import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchInitialData } from './redux/ecommerce/ecommerce';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <h1>Hello e commerce app</h1>
  );
}

export default App;
