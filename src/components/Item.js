import {
  Card, CardContent, CardMedia, Typography, CardActions, Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';

const Item = (props) => {
  const {
    title, price, images,
  } = props;

  return (
    <Card variant="outlined">
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
        <Button variant="text">
          Item Details
        </Button>
        <Button variant="text" color="secondary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.instanceOf(Array),
};

Item.defaultProps = {
  title: 'Unknown title',
  price: Math.random(),
  images: [],
};

export default Item;
