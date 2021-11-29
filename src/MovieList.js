import React, { useState } from 'react'
import axios from "axios"
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const theme = createTheme();

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");



    // THIS POST REQUESTION IS GIVING ERROR...
    function submitHanddler(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };

        console.log(first, second, third, fourth);

        alert("OOPS! coudnt Find Anythng")

        try {
            axios.post(`https://hoblist.com/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`)
                .then(response => {
                    console.log(response);

                })

        } catch (e) {
            alert("OOPS! Error occured")
            console.log(e);
        }

    }

    return (
        <>
           <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="bgDesign">
            <h1>Enter the Film Details.</h1>
            <form onSubmit={submitHanddler}>
                <FormControl>
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="eg. movies, etc" onChange={(event) => setFirst(event.target.value)} />
                </FormControl>

                <FormControl>
                    <label>Language</label>
                    <input type="text" className="form-control" placeholder="eg. kannada, etc" onChange={(event) => setSecond(event.target.value)} />
                </FormControl>


                <FormControl>
                    <label>Genre</label>
                    <input type="text" className="form-control" placeholder="eg. all" onChange={(event) => setThird(event.target.value)} />
                </FormControl>

                <FormControl>
                    <label>Sort</label>
                    <input type="text" className="form-control" placeholder="eg. voting" onChange={(event) => setFourth(event.target.value)} />
                </FormControl>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Post Request</button>
            </form>
               </Container>
    </ThemeProvider>
        </>
    )
}

export default Home
