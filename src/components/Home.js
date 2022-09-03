import { useSelector } from "react-redux";
import CategorieCard from "./categorieCard";

const Home = () => {
  const categories = useSelector(state => state.categories)
  return(
    <CategorieCard />
  );
};

export default Home;
