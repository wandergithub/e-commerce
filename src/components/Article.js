import { useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';
import '../style/article.css';

const Article = () => {
  const state = useSelector((state) => state);
  const game = state.games[0];
  return (
    <div className="main-container">
      <div className="a1-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aOQBjZ1u6ypjPz-KYYSXj9xtqaIT93qm9Q&usqp=CAU" alt="Game cover" />
        <Container>
          <Typography variant="h2" className="mb-3" gutterBottom>{game.name}</Typography>
          <Typography variant="body1" className="p-description" gutterBottom>{game.description}</Typography>
          <Button variant="outlined" className="mt-3">Buy now</Button>
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
