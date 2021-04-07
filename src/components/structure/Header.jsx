import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core"
import { FaPaypal as DonateIcon } from 'react-icons/fa'
import { FiLogIn as LoginIcon } from 'react-icons/fi'

import list from '../../routes/routes'
import { NavLink, useHistory } from 'react-router-dom';

import imagen from '../../assets/img/microphone.png'

const useStyles = makeStyles((theme) => ({
    grid: {
        '& > button': {
            margin: theme.spacing(1),
        }
    },
}));
export const Header = () => {
    const classes = useStyles();
    const paths = useHistory().location.pathname.split("/");
    let initSelected = 0
    if (paths[1] !== undefined) {
        initSelected = list.findIndex(x => x.title.toLowerCase() === paths[1].toLowerCase());
    }
    const [selected, setselected] = useState(initSelected);
    return (
        <AppBar color="inherit" >
            <Toolbar>
                <Grid xs={4} item>
                    <Grid container
                        alignItems="center"
                        justify="center">
                        <img src={imagen} title="BLOG" />
                        <Typography variant="h3" component="strong">Melvin</Typography>
                    </Grid>
                </Grid>
                <Grid xs={4} item>
                    <Grid container
                        direction='row'
                        alignItems="flex-end"
                        justify="center">
                        {list.map((element, index) => (
                            <Button key={index}
                                component={NavLink}
                                to={element.path}
                                color={selected === index ? "secondary" : "inherit"}
                                onClick={() => setselected(index)}>
                                {element.title}
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
                            color="secondary"
                            startIcon={<LoginIcon />}>
                            Login
                </Button>
                        <Button
                            variant="outlined"
                            disableElevation
                            color="secondary"
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