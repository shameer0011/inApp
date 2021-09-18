
import * as React from 'react';
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from '@material-ui/core/MenuItem';
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
                <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                    <Link to="/" className={ classes.commonBlack }>HOME</Link>
                </Typography>
                { auth && (
                    <div style={ { marginLeft: "1000px" } }>
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
                        <div >
                            <Menu

                                id="menu-appbar"
                                anchorEl={ anchorEl }
                                anchorOrigin={ {
                                    vertical: 'top',
                                    horizontal: 'right',
                                } }
                                keepMounted
                                transformOrigin={ {
                                    vertical: 'top',
                                    horizontal: 'right',
                                } }
                                open={ Boolean(anchorEl) }
                                onClose={ handleClose }
                            >

                                <MenuItem onClick={ handleClose }>
                                    <Link to="/about" onClick={ handleClose } className={ classes.commonBlack }>delete</Link>
                                </MenuItem>
                                <MenuItem onClick={ handleClose }>
                                    <Link to="/plan" onClick={ handleClose } className={ classes.commonBlack }>profile</Link>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                ) }
            </Toolbar>
        </AppBar>

    );
}
export default Header





// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useStyles } from "./header_style";
// import { Button } from "@material-ui/core";
// import AppBar from "@material-ui/core/AppBar";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu'
// const Header = ({ gotoDashbord }) => {
//     const history = useHistory();
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = event => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = event => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };
//     const gotoLogout = () => {
//         gotoDashbord(gotoLogout);
//     };
//     const gotoSign = () => {
//         history.push('/login')
//     }
//     const gotoRegister = () => {
//         history.push('/register')
//     }

//     const menuId = "primary-search-account-menu";
//     const mobileMenuId = "primary-search-account-menu-mobile";
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={ mobileMoreAnchorEl }
//             anchorOrigin={ { vertical: "top", horizontal: "right" } }
//             id={ mobileMenuId }
//             keepMounted
//             transformOrigin={ { vertical: "top", horizontal: "right" } }
//             open={ isMobileMenuOpen }
//             onClose={ handleMobileMenuClose }
//         />
//     );

//     return (
//         <>
//             <div>
//                 <div className={ classes.root }>
//                     <AppBar position="static" style={ { backgroundColor: "white" } }>
//                         <Toolbar>
//                             <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
//                                 <MenuIcon />
//                             </IconButton>
//                             <Typography className={ classes.title }>
//                                 <Link to="/" className={ classes.commonBlack }>HOME</Link>
//                             </Typography>
//                             <Typography className={ classes.title }>
//                                 <Link to="/about" className={ classes.commonBlack } > ABOUT US</Link>
//                             </Typography>
//                             <Button className={ classes.title } style={ { backgroundColor: "black", width: "5px" } }>
//                                 <Link to="/plan" className={ classes.commonWhite } > SLECT YOUR PLANS</Link>
//                             </Button>
//                             <Button color="black" onClick={ gotoSign } >Sign in</Button>
//                             <Button color="black" onClick={ gotoRegister }>Register</Button>
//                         </Toolbar>
//                     </AppBar>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default Header;