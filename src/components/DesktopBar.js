import {
  Badge,
  IconButton, InputBase, Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { PropTypes } from 'prop-types';
import Cart from './Cart';
import logo from '../assets/logos/logo.png';

const DesktopBar = (props) => {
  const { cart } = props;
  return (
    <div className="option-bar">
      <div className="logo">
        <img className="e-com" src={logo} alt="e commerce logo" />
      </div>
      <div className="country-input">
        <IconButton type="button" sx={{ px: '10px' }} aria-label="search">
          <AddLocationAltIcon color="primary" />
        </IconButton>
      </div>
      <div className="search-bar">
        <Paper>
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
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <LanguageIcon color="primary" />
        </IconButton>
      </div>
      <div className="log-menu">
        {/* Menu desplegable sign in, log in */}
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <AccountCircle color="primary" />
        </IconButton>
      </div>
      <div className="cart">
        <Badge badgeContent={cart.length} color="primary">
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Cart items={cart} />
          </IconButton>
        </Badge>
      </div>
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
