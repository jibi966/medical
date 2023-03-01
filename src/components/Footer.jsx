import {Box, Typography} from '@mui/material';
import logo from '../sources/logo-removebg-preview.png';
import * as React from 'react';
import app1 from '../sources/app1.jpg';
import app2 from '../sources/app2.jpg';

export const Footer = () => {
    return (
        <Box p={5} sx={{backgroundColor: '#0b111e'}} display="flex" justifyContent="space-between">
            <Box width={400}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant="h4" align="center" color="white">we would love to walk with you holding
                    hands, caring with love and cherishing it.
                </Typography>
                <br/>
                <Typography variant="h4" align="center" color="white"> Your Friend, Your Amie
                </Typography>
            </Box>
            <Box>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
