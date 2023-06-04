
import React from 'react';
import { AppBar ,Toolbar, Typography, InputBase, IconButton, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            <Grid container spacing={12} alignItems="center">

                <Grid item sx={{ flexGrow: 1 }}>
                </Grid>

                <Grid item>
                <Typography variant="h6" component="div">
                    Your Logo
                </Typography>
                </Grid>

                <Grid item>
                <Typography variant="body1" component="div">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </Typography>
                </Grid>

                <Grid item>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Grid>

                <Grid item>
                    <SearchIcon />
                    <InputBase placeholder="Search..." />
                </Grid>

                <Grid item sx={{ flexGrow: 1 }}>
                </Grid>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
