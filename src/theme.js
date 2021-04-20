import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { deepOrange, grey, } from '@material-ui/core/colors'
import createTypography from "@material-ui/core/styles/createTypography";
const theme = createMuiTheme();
theme.palette.primary = {
    light: deepOrange[50],
    main: deepOrange[500],
    dark: deepOrange.A700,
    contrastText: grey[100]
};
theme.palette.secondary = {
    light: grey[50],
    main: grey[100],
    dark: grey.A100,
    contrastText: grey[100],
};
theme.typography = createTypography(theme.palette, {
    fontFamily: 'Josefin sans'
});
theme.typography.button.textTransform = 'none'
export default responsiveFontSizes(theme);