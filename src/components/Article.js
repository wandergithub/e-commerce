import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';

const Article = () => {
  const state = useSelector((state) => state);
  const game = state.games[0];
  return (
    <div>
      <div className="a1-container">
        <Container>
          <Typography variant="h2" gutterButtom>{game.name}</Typography>
          <Typography variant="body1" gutterButtom>{game.description}</Typography>
          <Button variant="contained">Buy now</Button>
        </Container>
        <Container>
          <img src="https://i.pinimg.com/550x/36/eb/6b/36eb6bd7b0adaefd1357a464d78d2142.jpg" alt="Game cover" />
        </Container>
      </div>
      <div className="a2-container">
        <div>
          <Typography variant="h5" gutterButtom>More details</Typography>
          <Typography variant="body1" gutterButtom>
            {game.description}
          </Typography>
        </div>
        <div>
          <Typography variant="h5" gutterButtom>Reviews</Typography>
          <Typography variant="body1" gutterButtom>
            {game.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Article;
