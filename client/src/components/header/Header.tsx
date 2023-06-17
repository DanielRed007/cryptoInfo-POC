
import React from 'react';
import { 
    AppBar ,
    Toolbar, 
    Typography, 
    IconButton, 
    Grid, 
    Box, 
    Container
    } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddchartIcon from '@mui/icons-material/Addchart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AutoComplete } from "../../shared/widgets/autocomplete/AutoComplete";
import { TooltipButton } from "../../shared/widgets/tooltipButton/TooltipButton";
import { cryptoLinks } from '../../mock/linkOptions';

export const Header = () => {
    

    return (
        <div style={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Box>
                            <Grid container alignItems="center" justifyContent="space-between">

                            <Grid item>
                                <Typography variant="h6" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <MonetizationOnIcon style={{ marginRight: '0.5rem' }} />
                                    <span>CryptoInfo</span>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <TooltipButton title="Cryptocurrency" linkOptions={cryptoLinks}/>
                                <TooltipButton title="Exchanges" linkOptions={cryptoLinks}/>
                                <TooltipButton title="Community" linkOptions={cryptoLinks}/>
                                <TooltipButton title="Products" linkOptions={cryptoLinks}/>
                                <TooltipButton title="Learn" linkOptions={cryptoLinks}/>
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
        </div>
    )
}
