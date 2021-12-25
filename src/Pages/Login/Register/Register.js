import React from 'react';
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { authError, registerUser, googleSignIn } = useAuth();
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const [loginData, setLoginData] = useState({});


    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);
        if (loginData.password !== loginData.password2) {
           return setIsPasswordMatch(false);
        }
        setIsPasswordMatch(true);
        registerUser(loginData.name, loginData.email, loginData.password, location, navigate);
        
    }
    return (
        <Container>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ padding: 5 }} className="login-card">
                    <Typography textAlign="center" variant="h3">Create an account</Typography>
                    <form style={{ textAlign: 'center', }} onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <Box>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/Login">
                                <Button variant="text">Already have an account? Login</Button>
                            </NavLink>
                        </Box>
                    </form>
                    <p style={{ textAlign: 'center' }}>-----------------------Or-------------------------</p>
                    {authError && <Alert  sx={{ mt: 2 }} severity="error">{authError}</Alert>}
                    {!isPasswordMatch && <Alert  sx={{ mt: 2 }} severity="error">Password is not match</Alert>}
                </Box>
            </Box>

        </Container>
    );
};

export default Register;