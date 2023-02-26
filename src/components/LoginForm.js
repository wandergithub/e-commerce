import '../style/Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Typography, useMediaQuery } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LoginForm = () => {
  if (useMediaQuery('(min-width:650px)')) {
    return (
      <div className="login">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 3, width: '25ch' },
            border: '1px dashed grey',
          }}
          noValidate
          autoComplete="off"
        >
          <Typography textAlign="center" variant="h4" gutterBottom>
            Login
          </Typography>
          <div>
            <TextField
              Email
              label="Email"
            />
          </div>
          <div>
            <TextField
              Password
              label="Password"
            />
          </div>
          <div className="login"><Button variant="outlined">Login</Button></div>
          <div className="login"><Button variant="outlined">Forgot Password</Button></div>
          <div className="login">
            <Typography textAlign="center" variant="subtitle1" gutterBottom>
              Not have an Account?
              {' '}
              <Link to="/register" className="link">Sign Up here  </Link>
            </Typography>
          </div>
        </Box>
      </div>
    );
  }

  return null;
};

export default LoginForm;
