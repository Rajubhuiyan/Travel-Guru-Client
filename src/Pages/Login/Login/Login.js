import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {loginUser, authError} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    return (
        <Container>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ padding: 5}} className="login-card">
                        <Typography textAlign="center" variant="h3">Login</Typography>
                        <form style={{textAlign:'center',}} onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <Box>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="text">Already have an account? Login</Button>
                                </NavLink>
                            </Box>
                        </form>
                        <p style={{textAlign: 'center'}}>------------------------------------------------</p>
                        {authError && <Alert sx={{mt:2}} severity="error">{authError}</Alert>}
                </Box>
            </Box>

        </Container>
    );
};

export default Login;