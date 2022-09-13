import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import ShopIcon from '@mui/icons-material/Shop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
/* eslint-disable react/jsx-props-no-spreading */
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition';

const Cart = (props) => {
  const { items } = props;
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const handleClickOpen = () => {
    items.forEach((item) => setTotal(total + item.price));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        <ShoppingCartOutlined color="primary" />
      </Button>
      <Dialog
        fullScreen
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="h1">
              Total: US$
              {' '}
              {total}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Continue Shopping
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {items.map((item) => (
            <ListItem key={item.id} button>
              <ListItemText primary={item.title} secondary={item.price} />
              <Fab variant="extended" sx={{ mr: 10 }} color="error">
                <DeleteForeverIcon />
                Delete Item
              </Fab>
              <ListItemAvatar>
                <Avatar
                  alt={item.title}
                  src={item.images[0]}
                  sx={{ height: 100, width: 100 }}
                />
              </ListItemAvatar>
              <Divider />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.instanceOf(Array),
};

Cart.defaultProps = {
  items: [],
};

export default Cart;
