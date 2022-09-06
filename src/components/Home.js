import { useSelector } from 'react-redux';
import CategorieCard from './CategorieCard';

const Home = () => {
  let name;
  let image;
  const categories = useSelector((state) => state.categories);
  try {
    name = categories[1].name;
    image = categories[1].image;
  } catch {
    name = 'Unknow';
    image = 'Unknow';
  }

  return (
    <CategorieCard name={name} image={image} />
  );
};

export default Home;
