import {Box, Typography} from '@mui/material';
import logo from '../sources/logo-removebg-preview.png';
import * as React from 'react';
import app1 from '../sources/app1.jpg';
import app2 from '../sources/app2.jpg';

export const Footer = () => {
    return (
        <Box p={5} sx={{backgroundColor: '#0b111e'}} display="flex" justifyContent="space-between">
            <Box>

                <Typography variant="h3" align="center" color="white">About Amie
                </Typography>
                <ul>
                    <li>
                        <Typography variant="h5" align="center" color="white">Together In your journey
                        </Typography>
                    </li>
                </ul>
            </Box>
            <Box>
                <img src={logo} height="250px"/>
            </Box>

            <Box>
                <Typography variant="h3" align="center" color="white">Download Amie Now
                </Typography>
                <br/>
                <br/>
                <Box display="flex" gap={2}>

                    <Box>
                        <img src={app1} height={400}/>
                    </Box>
                    <Box>
                        <img src={app2} height={400}/>
                    </Box>

                </Box>

            </Box>
        </Box>
    );
};
