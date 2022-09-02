import './App.css';
import Article from './components/Article';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchCategories } from './redux/ecommerce/ecommerce';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchCategories);
  }, []);

  return (
    <Article />
  );
}

export default App;
