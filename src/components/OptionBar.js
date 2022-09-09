import {
  IconButton, InputBase, Paper, Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../assets/logos/logo.png';
import '../style/optionBar.css';

const OptionBar = () => (
  <div className="option-bar">
    <div className="logo">
      <img className="e-com" src={logo} alt="e commerce logo" />
    </div>
    <div className="country-input" />
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
    <div className="language" />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <LanguageIcon color="primary" />
    </IconButton>
    <div className="log-menu">
      {/* Menu desplegable sign in, log in */}
      <Button variant="outlined">
        Sign/log in
      </Button>
    </div>
    <div className="cart">
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ShoppingCartOutlinedIcon color="primary" />
      </IconButton>
    </div>
  </div>
);

export default OptionBar;
