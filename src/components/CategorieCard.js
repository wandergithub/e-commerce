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
import { Link } from 'react-router-dom';
import { deleteCategorie } from '../redux/ecommerce/ecommerce';

const CategorieCard = (props) => {
  const { image, name, id } = props;
  const dispatch = useDispatch();

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
        <Button variant="outlined">
          <Link className="link" to="/items" state={{ filter: name }}>
            {' '}
            See items
          </Link>
        </Button>
        <Button variant="outlined" color="error" onClick={() => dispatch(deleteCategorie(id))}>
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

CategorieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

CategorieCard.defaultProps = {
  image: 'No URL',
  name: 'Unknown name',
  id: Math.random(),
};

export default CategorieCard;
