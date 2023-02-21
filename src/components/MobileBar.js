import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const MobileBar = () => (
  <div className="search-bar">
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
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
);

export default MobileBar;
