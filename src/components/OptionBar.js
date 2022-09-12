import {
  IconButton, InputBase, Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logos/logo.png';
import '../style/optionBar.css';

const desktop = () => (
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
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ShoppingCartOutlinedIcon color="primary" />
      </IconButton>
    </div>
  </div>
);

const mobile = () => (
  <div className="search-bar">
    <Paper>
    <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
);

const OptionBar = () => {
  if (useMediaQuery('(min-width:450px)')) {
    return (
      desktop()
    );
  }

  return (
    mobile()
  );
};

export default OptionBar;
