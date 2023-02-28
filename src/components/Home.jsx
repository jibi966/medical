import * as React from 'react';
import {
    Button,
    Box,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Image1 from '../sources/one.JPG';
import Image2 from '../sources/two.JPG';
import Image3 from '../sources/three.JPG';
import Image4 from '../sources/four.JPG';
import Image5 from '../sources/PHOTO-2023-02-28-00-38-14.jpg';
import Image6 from '../sources/PHOTO-2023-02-28-00-38-15.jpg';
import Image7 from '../sources/PHOTO-2023-02-28-00-38-20.jpg';
import Image8 from '../sources/PHOTO-2023-02-28-00-38-38.jpg';
import Image9 from '../sources/PHOTO-2023-02-28-00-38-39.jpg';
import tip1 from '../sources/tip1.jpg';
import tip2 from '../sources/tip2.jpg';
import tip3 from '../sources/tip3.jpg';
import tip4 from '../sources/tip4.jpg';
import tip5 from '../sources/tip5.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneIcon from '@mui/icons-material/Done';
import styles from './home.module.css';
import {Footer} from './Footer'; // Import CSS module styles

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Home() {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('login');
    const [open, setOpen] = useState(false);
    const [doctor, setDoctor] = useState('');
    const [dateValue, setDateValue] = useState(dayjs(new Date()));
    const [timeValue, setTimeValue] = useState(dayjs('2023-01-11T21:11:54'));
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [tips, openTips] = useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleChangeAcc = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const handleClickSnack = () => {
        setOpenSnackbar(true);
    };
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    const handleChangeDate = (newValue) => {
        setDateValue(newValue);
    };
    const handleChange = (event) => {
        setDoctor(event.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };


    const logout = () => {
        localStorage.removeItem('login');
        navigate('/');
        window.location.reload();

    };
    return (
        <Box sx={{flexGrow: 1}}>

            <Dialog open={open} onClose={onClose} fullWidth>
                <DialogTitle>Add Appointment</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={1} justifyContent="center">
                        <DialogContentText>Select Your Preferred Doctor</DialogContentText>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={doctor}
                                label="Doctor"
                                onChange={handleChange}
                            >
                                <MenuItem value="Sharul">Sharul</MenuItem>
                                <MenuItem value="Abi">Abi</MenuItem>
                                <MenuItem value="Neethu">Neethu</MenuItem>
                                <MenuItem value="Arun">Arun</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <DialogContentText>Select Your Preferred Date</DialogContentText>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={dateValue}
                                disablePast
                                onChange={handleChangeDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <br/>
                        <DialogContentText>Select Your Preferred Time</DialogContentText>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Time"
                                value={timeValue}
                                onChange={(newValue) => setTimeValue(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="contained" startIcon={<CloseIcon/>}>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        handleClickSnack();
                        onClose();
                    }} disabled={doctor === ''} variant="contained"
                            endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success" sx={{width: '100%'}}>
                    Your Appointment Saved
                </Alert>
            </Snackbar>
            <nav className={styles.nav}>
                <div>
                    <Button onClick={() => navigate('/')} color="primary" variant="contained">Home</Button>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                <div>
                    <Button onClick={() => openTips(true)}
                            color="primary" variant="contained">Tips</Button>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                <div>
                    {loggedIn === 'true' && <Button onClick={() => setOpen(true)}
                                                    endIcon={<AddCircleIcon/>}
                                                    color="primary" variant="contained">Appointment</Button>}
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                <div>
                    {loggedIn === 'true' ? <Button onClick={logout} color="primary" variant="contained">Logout
                    </Button> : <Button onClick={() => navigate('/signin')} color="primary" variant="contained">Sign
                        In</Button>}
                </div>
            </nav>
            <Box display="flex" justifyContent="center" alignItems="center">
                <div>
                    <img src={Image1}/>
                </div>
                <div>
                    <Typography>Some details</Typography>
                    <Typography>Some details</Typography>
                    <Typography>Some details</Typography>
                </div>
            </Box>
            <Box>
            </Box>
            <Dialog open={tips} fullScreen>
                <DialogTitle justifyContent="center"> <Typography variant="h3" align="center">Tips To Improve Your
                    Health</Typography> </DialogTitle>
                <DialogContent>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAcc('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}>
                                Attend regular prenatal checkups
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={tip1} className={styles.center}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAcc('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}>Exercise Regularly</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <img src={tip2} className={styles.center}/>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChangeAcc('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}>
                                Eat a Healthy and balanced diet
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={tip3} className={styles.center}/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChangeAcc('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}>Practice Stress-Reducing
                                Techniques</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={tip4} className={styles.center}/>
                        </AccordionDetails>

                    </Accordion> <Accordion expanded={expanded === 'panel5'} onChange={handleChangeAcc('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>Bond With Your Baby</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <img src={tip5} className={styles.center}/>
                    </AccordionDetails>

                </Accordion>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => openTips(false)} variant="contained" startIcon={<DoneIcon/>}>
                        Home
                    </Button>

                </DialogActions>
            </Dialog>
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img src={Image5}/>
                    <p className="legend">Start Your Journey With Us</p>
                </div>
                <div>
                    <img src={Image6}/>
                    <p className="legend">We Are here to Help</p>
                </div>
                <div>
                    <img src={Image7}/>
                    <p className="legend">Together In your Magical journey</p>
                </div>
                <div>
                    <img src={Image8}/>
                    <p className="legend">Download Now</p>
                </div>

                <div>
                    <img src={Image9}/>
                    <p className="legend">Amie</p>
                </div>

            </Carousel>
            <Footer/>
        </Box>
    );
}

export default Home;