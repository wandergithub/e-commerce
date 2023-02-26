import React from 'react';
import Box from '@mui/material/Box';
import {TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="login">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          border: '1px dashed grey',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography textAlign="center" variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          It's free and only takes a minute
        </Typography>
        <div>
          <TextField
              First
              Name
              label="First Name"
          />
        </div>
        <div>
        <TextField
            Last
            Name
            label="Last Name"
        />
    </div>
        <div>
          <TextField
            Email
            label="Email"
          />
        </div>
        <div>
          <TextField
            Confirm
            Password
            label="Confirm Password"
          />
        </div>
        <div>
          <TextField
            Password
            label="Password"
          />
        </div>

        <Link to="/e-commerce/" className="link">
          <div className="login"><Button variant="outlined">Register</Button></div>
        </Link>
      </Box>
    </div>
  );
}

export default RegisterForm;
