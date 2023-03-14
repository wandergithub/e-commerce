import { useState, forwardRef } from 'react';
import {
  Button, Dialog,
  AppBar,
  Toolbar, IconButton, Typography, Fab, Slide,
} from '@mui/material';
import {
  Shop as ShopIcon, Close as CloseIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const Transition = forwardRef((props, ref) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Slide direction="right" ref={ref} {...props} />
));
Transition.displayName = 'Transition';

const HamburguerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <MenuIcon color="primary" />

      </Button>
      <Dialog
        fullScreen
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="h1">
              Shopping cart
            </Typography>
            <Fab variant="extended" color="success">
              <ShopIcon sx={{ mr: 1 }} />
              Complete Buy
            </Fab>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Continue Shopping
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
};

export default HamburguerMenu;
