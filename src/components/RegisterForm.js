import React, { useState } from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to register the user here
    };

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
                <div className="center">Register</div>
                <div className="center">
                    <TextField
                        Email
                        label="Email"
                    />
                </div>
                <div>
                    <TextField
                        First Name
                        label="First Name"
                    />
                    <TextField
                        Last Name
                        label="Last Name"
                    />
                </div>
                <div className="center">
                    <TextField
                        Confirm Password
                        label="Confirm Password"
                    />
                </div>
                <div className="center">
                    <TextField
                        Password
                        label="Password"
                    />
                </div>

                <Link to="/e-commerce/" className="link">
                    <div className="center"><Button variant="outlined">Register</Button></div>
                </Link>

            </Box>
        </div>
    );
return null;
};

export default RegisterForm;