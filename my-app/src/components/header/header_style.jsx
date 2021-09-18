import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
    grow: {
        // flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        // alignContent: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },

    inputRoot: {
        color: "inherit",
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    commonBlack: {
        textDecoration: "none",
        color: "black"
    },
    commonWhite: {
        textDecoration: "none",
        color: "white"
    }
}));