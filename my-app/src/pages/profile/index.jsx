import React from 'react'
// import { useStyles } from './planStyle';
import { useState } from "react";
import { useStyles } from "../../components/register/registerStyle";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";

const Profile = () => {
    const classes = useStyles();

    let dat = JSON.parse(localStorage.getItem('user'));

    const [inputField, setInputField] = useState({
        username: dat.username ? dat.username : '',
        password: dat.password ? dat.password : '',
        email: dat.email ? dat.email : '',
    });
    const [error, setError] = useState(false);
    const [errorFromStore, setErrorFromStore] = useState(false);
    const [show, setShow] = useState(false);
    const [errorMessage, seterrorMessage] = useState(false);
    const [validation, setValidation] = useState(true)

    const handleInputs = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };



    const onSubmitValues = (e) => {
        e.preventDefault();
        const order = {
            password: inputField.password,
            email: inputField.email,
            username: inputField.username,
        }
        console.log(order, "in profile")
        localStorage.setItem('user', JSON.stringify(order));


        if (
            order.password == "" ||
            order.email == "" ||
            order.username == ""
        ) {
            setError(true);
            setShow(false);
            setErrorFromStore(false);
        } else {
            setError(false);
        }
    }


    return (
        <div>

            <Grid
                container
                spacing={ 0 }
                justify="center"
                direction="row"
                style={ { marginTop: "10px" } }
            >
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={ 2 }
                        className={ classes.loginForm }
                    >
                        <Paper
                            variant="elevation"
                            elevation={ 4 }
                            className={ classes.loginBackground }
                        >
                            <Grid item>
                                <Typography component="h5">Profile Page</Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={ onSubmitValues }>
                                    <Grid
                                        container
                                        direction="column"
                                        spacing={ 2 }
                                        style={ { borderRadious: "50%" } }
                                    >
                                        <Grid item>
                                            <Typography component="h5">User Name*</Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="text"
                                                placeholder="User Name"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                value={ inputField.username }
                                                onChange={ handleInputs }
                                            // required
                                            />
                                        </Grid>

                                        <Grid item>
                                            <Typography component="h5">Email*</Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="email"
                                                variant="outlined"
                                                value={ inputField.email }
                                                onChange={ handleInputs }
                                            // required
                                            />
                                        </Grid>

                                        <Grid item>
                                            <Typography component="h5">Password*</Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={ inputField.password }
                                                onChange={ handleInputs }
                                            // required
                                            />
                                        </Grid>

                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className={ classes.buttonBlock }
                                            >
                                                Submit
                                            </Button>
                                            { error ? (
                                                <span style={ { color: "red" } }>
                                                    { " " }
                                                    Please fill all fields
                                                </span>
                                            ) : (
                                                ""
                                            ) }
                                            { !validation ? (
                                                <span style={ { color: "red" } }>
                                                    { " " }
                                                    Please enter correct email address
                                                </span>
                                            ) : (
                                                ""
                                            ) }
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Paper>
                    </Grid>
                    <div>
                        <div>
                            { show && errorMessage.length === 0 ? (
                                <span style={ { color: "red" } }>
                                    Username and Password is incorrected
                                </span>
                            ) : (
                                ""
                            ) }
                        </div>
                        <div>
                            <div>
                                { errorFromStore && (
                                    <span style={ { color: "red" } }>
                                        Username and Password is incorrected
                                    </span>
                                ) }
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
