import { useSelector } from 'react-redux';
import CategorieCard from './CategorieCard';

const Home = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <CategorieCard name={categories[0].name} image={categories[0].image} />
  );
};

export default Home;
