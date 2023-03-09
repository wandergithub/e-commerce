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
import { useSelector } from 'react-redux';

const Sell = () => {
  const [categorieId, setCategorieId] = useState('');
  const [name, setname] = useState('');
  const [img, setimg] = useState('');
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [pimg, setpimg] = useState('');

  const categories = useSelector((state) => state.categories);

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
          setprice(event.target.value);
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
        <Button variant="contained" color="success">
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

        <Button variant="contained" color="success">
          Create
        </Button>
      </form>
    </div>
  );
};

export default Sell;
