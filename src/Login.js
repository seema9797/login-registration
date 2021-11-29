import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MovieList from './MovieList';
import PropTypes from 'prop-types'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';


const Login =() =>{
   const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    const theme = createTheme();
    return(
        <>
        
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {home ? <FormControl onSubmit={handleLogin}>
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
            <LockOpenRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
        </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={emaillog}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmaillog(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={passwordlog} placeholder="Password" onChange={(e)=>setPasswordlog(e.target.value)} /><br />
                
              </Grid>
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              >Login
            </Button>
           {
              flag && 
              <Alert severity="error">                        
              I got it you are in hurry! But every Field is important!
              </Alert>
            }
          </Box>
        </Box>
      </FormControl>:<MovieList/>}
       
      </Container>
    </ThemeProvider>
        </>
    )
}
Login.propTypes={
  setToken:PropTypes.func.isRequired
}
export default Login;