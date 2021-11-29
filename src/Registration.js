import React, { useState,useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Login from './Login'
import { styled } from '@mui/material/styles';
import './App.css';

const theme = createTheme();

const Reg =(val) =>{
        const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [open, setOpen] = React.useState(false);
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

  //    const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
// on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("SubmissionEmail", JSON.stringify(email));
            localStorage.setItem("SubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }

    return(
        <>
        <nav>
              <div className="container" onClick={infoClick}>
               <Button variant="contained">Comapny Info</Button>
                </div>
        </nav>
          <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="bgDesign">
        {info ? <div>{login ?
         <FormControl onSubmit={handleFormSubmit}>
      
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={name}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
            <FormControl sx={{ minWidth: 190 }}>
        <InputLabel id="controll-label"> Profession</InputLabel>
        <Select
          labelId="controll-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={profession}
          label="Profession"
          onChange={(e)=>setProfession(e.target.value)}
          
        >
          <MenuItem value="Developer">
            <em>Developer</em>
          </MenuItem>
          <MenuItem value="Artist">Artist</MenuItem>
          <MenuItem value="Photographer">Photographer</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  label="phone Number"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <p>
              Already have an account?  <a href="#" onClick={handleClick} >log in?</a>
            </p>
            {
              flag && 
              <Alert severity="error">                        
              I got it you are in hurry! But every Field is important!
              </Alert>
            }
              </Grid>
            </Grid>
          </Box>
        </Box>
     
        </FormControl>:<Login/>}
      
        </div>:<div>
              <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                    <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                    <p><strong>Phone:</strong> XXXXXXXXXX09</p>
                    <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
        </div>}
        
           </Container>
    </ThemeProvider>
            
        </>
    )
}

export default Reg;