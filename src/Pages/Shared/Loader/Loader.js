import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loader = () => {
    return (
        <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height:'80vh'}}>
            <CircularProgress/>
        </Box>
    );
};

export default Loader;