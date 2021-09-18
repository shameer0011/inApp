import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useStyles } from "./header_style";
const Header = () => {
    const history = useHistory();
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={ { mr: 2 } }
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h7"
                    component="div"
                    style={ { display: "flex", justifyContent: "space-between" } }
                    sx={ { flexGrow: 1 } }
                >
                    <Link to="/" className={ classes.commonBlack }>
                        HOME
                    </Link>
                </Typography>

                { auth && (
                    <>
                        <div style={ { marginLeft: "900px", display: "flex" } }>
                            <Typography
                                variant="h7"
                                style={ { marginTop: "10px" } }
                            >
                                <Link style={ { fontSize: '15px', } } to="/readlater" className={ classes.commonBlack }>
                                    Read Later
                                </Link>
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={ handleMenu }
                                color="inherit"
                            >

                                <AccountCircle />
                            </IconButton>
                            <div>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={ anchorEl }
                                    anchorOrigin={ {
                                        vertical: "top",
                                        horizontal: "right",
                                    } }
                                    keepMounted
                                    transformOrigin={ {
                                        vertical: "top",
                                        horizontal: "right",
                                    } }
                                    open={ Boolean(anchorEl) }
                                    onClose={ handleClose }
                                >
                                    <MenuItem onClick={ handleClose }>
                                        <Link
                                            to="#"
                                            onClick={ handleClose }
                                            className={ classes.commonBlack }
                                        >
                                            delete
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={ handleClose }>
                                        <Link
                                            to="/profile"
                                            onClick={ handleClose }
                                            className={ classes.commonBlack }
                                        >
                                            profile
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </>
                ) }
            </Toolbar>
        </AppBar>
    );
};
export default Header;
