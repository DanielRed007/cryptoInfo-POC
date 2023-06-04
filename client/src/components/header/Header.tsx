
import React from 'react';
import { 
    AppBar ,
    Toolbar, 
    Typography, 
    IconButton, 
    Grid, 
    Box, 
    Container,
    Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddchartIcon from '@mui/icons-material/Addchart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AutoComplete } from "../../shared/widgets/autocomplete/AutoComplete";

export const Header = () => {
  return (
    <AppBar>
        <Toolbar>
            <Container maxWidth="lg">
                <Box>
                    <Grid container alignItems="center" justifyContent="space-between">

                    <Grid item>
                        <Typography variant="h6" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                            <MonetizationOnIcon style={{ marginRight: '0.5rem' }} />
                            <span>CryptoInfo</span>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Button sx={{ml:1, textTransform: 'capitalize'}}>Cryptocurrency</Button>
                        <Button sx={{ml:1, textTransform: 'capitalize'}}>Exchanges</Button>
                        <Button sx={{ml:1, textTransform: 'capitalize'}}>Community</Button>
                        <Button sx={{ml:1, textTransform: 'capitalize'}}>Products</Button>
                        <Button sx={{ml:1, textTransform: 'capitalize'}}>Learn</Button>
                    </Grid>

                    <Grid item>
                        <IconButton>
                            <DarkModeIcon />
                        </IconButton>
                        <IconButton>
                            <StarBorderIcon />
                        </IconButton>
                        <IconButton>
                            <AddchartIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <AutoComplete 
                            id={"search-header"} 
                            icon={<SearchIcon />} 
                            size={"small"}
                            label={""}
                        />
                    </Grid>

                    </Grid>
                </Box> 
            </Container>
        </Toolbar>
    </AppBar>
  )
}
