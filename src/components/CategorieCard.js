import {
  Card, CardContent, CardMedia, Typography, CardActions, Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CategorieCard = (props) => {
  const { image, name } = props;
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Items categorie"
      />
      <CardContent>
        <Typography variant="5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/items" state={{filter: name}}> See items</Link>
      </CardActions>
    </Card>
  );
};

CategorieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

CategorieCard.defaultProps = {
  image: 'No URL',
  name: 'Unknown name',
};

export default CategorieCard;
