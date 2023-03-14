import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { PropTypes } from 'prop-types';
import HamburguerMenu from './HamburguerMenu';
import Cart from './Cart';

const MobileBar = (props) => {
  const { items } = props;
  return (
    <div className="search-bar">
      <HamburguerMenu
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      />
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
      <Cart items={items} />
    </div>
  );
};

MobileBar.propTypes = {
  items: PropTypes.instanceOf(Array),
};

MobileBar.defaultProps = {
  items: [],
};

export default MobileBar;
