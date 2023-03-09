import { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import '../style/home.css';
import '../style/items.css';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, createCategorie } from '../redux/ecommerce/ecommerce';

const Sell = () => {
  const [categorieId, setCategorieId] = useState(1);
  const [name, setname] = useState('default categorie');
  const [img, setimg] = useState(
    'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg',
  );
  const [title, settitle] = useState('default product');
  const [price, setprice] = useState(21);
  const [description, setdescription] = useState('default description');
  const [pimg, setpimg] = useState(
    'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-335257.jpg&fm=jpg',
  );

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // Handle textfield or selcet
    if (event.type === 'change') {
      switch (event.target.id) {
        case 'categorie-name':
          setname(event.target.value);
          break;

        case 'categorie-img':
          setimg(event.target.value);
          break;
        case 'product-title':
          settitle(event.target.value);
          break;

        case 'product-price':
          setprice(Number(event.target.value));
          break;

        case 'product-description':
          setdescription(event.target.value);
          break;

        case 'product-img':
          setpimg(event.target.value);
          break;
        default:
          break;
      }
    } else {
      setCategorieId(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    if (event.target.id === 'submit-p') {
      dispatch(createProduct(title, price, description, pimg, categorieId));
    } else {
      dispatch(createCategorie(name, img));
    }
  };
  return (
    <div className="cards-container outside">
      <h2>Create Categorie</h2>
      <form className="cards-container">
        <TextField
          id="categorie-name"
          label="Name"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="categorie-img"
          label="Image link"
          variant="standard"
          onChange={handleChange}
        />
        <Button
          id="submit-c"
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </form>
      <h2>Create Product</h2>
      <form className="cards-container">
        <TextField
          id="product-title"
          label="title"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-price"
          label="price"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-description"
          label="description"
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          id="product-img"
          label="Image link"
          variant="standard"
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="product-categorieid">Categorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorieId}
            label="Categorie Id"
            onChange={handleChange}
          >
            {categories.map((categorie) => (
              <MenuItem key={categorie.id} value={categorie.id}>
                {categorie.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          id="submit-p"
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default Sell;
