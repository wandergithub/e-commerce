import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import '../style/article.css';

const Article = () => {
  const state = useSelector((state) => state);
  const game = state.games[0];
  return (
    <div className="main-container">
      <div className="a1-container">
        <img src="https://i.pinimg.com/550x/36/eb/6b/36eb6bd7b0adaefd1357a464d78d2142.jpg" alt="Game cover" />
        <Container>
          <Typography variant="h2" className="mb-3" gutterBottom>{game.name}</Typography>
          <Typography variant="body1" className="p-description" gutterBottom>{game.description}</Typography>
          <Button variant="contained" className="mt-3">Buy now</Button>
        </Container>
      </div>
      <div className="a2-container">
        <div>
          <Typography variant="h5" className="mb-3" gutterBottom>More details</Typography>
          <Typography variant="body1" gutterBottom>
            {game.description}
          </Typography>
        </div>
        <div>
          <Typography variant="h5" className="mb-3" gutterBottom>Reviews</Typography>
          <Typography variant="body1" gutterBottom>
            {game.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Article;
