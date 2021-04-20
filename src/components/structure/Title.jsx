import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
    },
    typography: {
        textDecoration: 'underline black',
    }
}));
const Title = (props) => {
    const classes = useStyles();
    const { name } = props;
    return (
        <Grid className={classes.root} container justify="center" alignItems="center" direction="column">
            <Typography variant="h2" className={classes.typography}>{name}</Typography>
            {name !== "Home" && (
                <Typography variant="h6">Home/{name}</Typography>
            )

            }
        </Grid>
    );
}
export default Title