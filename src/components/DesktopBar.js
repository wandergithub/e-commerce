import {
  Badge, IconButton, InputBase, Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import Cart from './Cart';
import logo from '../assets/logos/logo.png';
import 'react-notifications/lib/notifications.css';

const DesktopBar = (props) => {
  const { cart } = props;
  // Notifications
  const createNotification = (type) => () => {
    switch (type) {
      case 'info':
        NotificationManager.info('This is a demo version, we are working on this feature right now.');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning(
          'Warning message',
          'Close after 3000ms',
          3000,
        );
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="option-bar">
      <div className="logo">
        <Link to="e-commerce/" className="link">
          <img className="e-com" src={logo} alt="e commerce logo" />
        </Link>
      </div>
      <div className="country-input">
        <IconButton
          type="button"
          sx={{ px: '10px' }}
          aria-label="search"
          onClick={createNotification('info')}
        >
          <AddLocationAltIcon color="primary" />
        </IconButton>
      </div>
      <div className="search-bar">
        <Paper onClick={createNotification('info')}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Item"
            inputProps={{ 'aria-label': 'search item' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon color="primary" />
          </IconButton>
        </Paper>
      </div>
      <div className="language">
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={createNotification('info')}
        >
          <LanguageIcon color="primary" />
        </IconButton>
      </div>
      <div className="log-menu">
        {/* Menu desplegable sign in, log in */}
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={createNotification('info')}
        >
          <AccountCircle color="primary" />
        </IconButton>
      </div>
      <div className="cart">
        <Badge badgeContent={cart.length} color="primary">
          <Cart items={cart} />
        </Badge>
      </div>
      <NotificationContainer />
    </div>
  );
};

DesktopBar.propTypes = {
  cart: PropTypes.instanceOf(Array),
};

DesktopBar.defaultProps = {
  cart: [],
};
export default DesktopBar;
