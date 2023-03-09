import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import createNotification from './shared/Notifications';

const NavBar = () => {
  if (useMediaQuery('(min-width:650px)')) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                <MenuIcon />
                All
              </Button>
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                Today&apos;s Deals
              </Button>
              <Button variant="outlined">
                <Link to="customer_service/" className="link">
                  Customer Service
                </Link>
              </Button>
              <Button variant="outlined">
                <Link to="Register" className="link">
                  Registry
                </Link>
              </Button>
              <Button
                variant="outlined"
                onClick={createNotification('info')}
                disabled
              >
                Gift cards
              </Button>
              <Button variant="outlined">
                <Link to="sell" className="link">
                  Create new
                </Link>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return null;
};

export default NavBar;
