import React from "react";
import ShowHide from "../showHide";
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";

import useStyles from "./styles";

const Header = ({ containerRef, mode, setMode }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Box display="flex">            
                    <div className={classes.search} style={{}}>
                        <div ref={containerRef} />

                    </div>
                    
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
