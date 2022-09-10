import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Stack spacing={2} direction="row">
          <Button variant="text">
            <MenuIcon />
            All
          </Button>
          <Button variant="text">Day offers</Button>
          <Button variant="text">Client Service</Button>
          <Button variant="text">Lists</Button>
          <Button variant="text">Gift cards</Button>
          <Button variant="text">Sell</Button>
          <Button variant="text">
            <Link to="/" className="link">Show categories</Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
