import { useState, forwardRef, useEffect } from 'react';
import {
  Button, Dialog, ListItemText, ListItem,
  ListItemAvatar, List, Divider, AppBar,
  Toolbar, IconButton, Typography, Fab, Avatar, Slide,
} from '@mui/material';
import {
  Shop as ShopIcon, DeleteForever as DeleteForeverIcon, ShoppingCartOutlined, Close as CloseIcon,
} from '@mui/icons-material';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../redux/ecommerce/ecommerce';

/* eslint-disable react/jsx-props-no-spreading */
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition';

const Cart = (props) => {
  const { items } = props;

  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  
  // Behavior functions
  useEffect(() => {
    let a = 0;
    items.forEach(element => {
      a += element.price;
    });
    setTotal(a);
  }, [items]);

  const handleClickOpen = () => {
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
              <Fab variant="extended" sx={{ mr: 10 }} color="error" onClick={() => dispatch(deleteFromCart(item.id))}>
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
