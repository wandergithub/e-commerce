import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart, deleteItem } from '../redux/ecommerce/ecommerce';

const Item = (props) => {
  const dispatch = useDispatch();
  const {
    title, price, images, id,
  } = props;

  return (
    <Card variant="outlined" key={id}>
      <CardMedia
        component="img"
        height="200"
        image={images[0]}
        alt="Item image"
      />
      <CardContent>
        <Typography variant="5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          US$
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="contained">Item Details</Button> */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(addToCart(props))}
        >
          Add to cart
        </Button>
        <Button variant="outlined" color="error" onClick={() => dispatch(deleteItem(id))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.instanceOf(Array),
};

Item.defaultProps = {
  id: 0,
  title: 'Unknown title',
  price: Math.random(),
  images: [],
};

export default Item;
