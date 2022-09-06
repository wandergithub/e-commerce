import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CategorieCard from './CategorieCard';

const Home = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      {categories !== undefined ? categories.map((categorie) => (
        <li key={uuidv4()}>
          <CategorieCard name={categorie.name} image={categorie.image} />
        </li>
      )) : false }
    </div>
  );
};

export default Home;
