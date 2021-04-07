import { Fab, makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


const ScrollTop = (props) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}
const ScrollButton = (props) => {
    return (
        <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll para regreso">
                <KeyboardArrowUp />
            </Fab>
        </ScrollTop>
    )
}
export default ScrollButton;