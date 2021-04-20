import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { change as changeHeader } from '../../actions/header'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core"
import { FaPaypal as DonateIcon } from 'react-icons/fa'
import { FiLogIn as LoginIcon } from 'react-icons/fi'

import list from '../../routes/routes'
import { NavLink } from 'react-router-dom';

import imagen from '../../assets/img/microphone.png'

const useStyles = makeStyles((theme) => ({
    grid: {
        '& > button': {
            margin: theme.spacing(1),
            width: 120,
            fontSize: 17
        }
    },
    button: {
        fontSize: 19,
        margin: theme.spacing(1.25)
    }
}));
export const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    dispatch(changeHeader());
    const title = useSelector(store => store.header.name);

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Grid xs={3} item>
                    <Grid container
                        alignItems="center"
                        justify="flex-end">
                        <img src={imagen} alt="BLOG" />
                        <Typography variant="h3" color="textPrimary"><strong>MELVIN</strong></Typography>
                    </Grid>
                </Grid>
                <Grid xs={5} item>
                    <Grid container
                        direction='row'
                        alignItems="flex-end"
                        justify="center">
                        {list.map((element, index) => (
                            <Button key={index} className={classes.button}
                                component={NavLink} to={element.path}
                                color={title === element.title ? "primary" : "default"}
                                onClick={() => dispatch(changeHeader(element.title))}
                            >
                                <strong>{element.title}</strong>
                            </Button>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={4} item>
                    <Grid container
                        justify="center"
                        className={classes.grid}>
                        <Button
                            variant="contained"
                            disableElevation
                            color="primary"

                            startIcon={<LoginIcon />}>
                            Login
                </Button>
                        <Button
                            variant="outlined"
                            disableElevation
                            color="primary"
                            startIcon={<DonateIcon />}>
                            Donate
                </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;