import '../style/Login.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {IconButton, TextField, useMediaQuery} from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";


const LoginForm = () => {
    if (useMediaQuery('(min-width:650px)')) {
        return (
            <div  className="center">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    border: '1px dashed grey'
                }}
                noValidate
                autoComplete="off"
            >
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
                <div className="center"><Button variant="outlined">Login</Button></div>
                <Link to="/register" className="link">
                    <div className="center"><Button variant="outlined">Register</Button></div>
                </Link>

                <div className="center"><Button variant="outlined">Forgot Password</Button></div>

            </Box>
            </div>
        );
    }

    return null;
};



export default LoginForm;