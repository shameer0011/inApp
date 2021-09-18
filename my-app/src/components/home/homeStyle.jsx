import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
    grow: {
        // flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        // alignContent: "center",
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: '10px'
    },

}));