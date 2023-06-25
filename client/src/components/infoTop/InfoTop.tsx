
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomBreadcrumb } from '../../shared/widgets/customBreadcrumb/CustomBreadcrumb';
import { CoinInfoButtonContainer } from './CoinInfoButtonContainer';
import { TagListContainer } from './TagListContainer';
import { CoinInfoDropdownContainer } from './CoinInfoDropdownContainer';
import { SmallTagContainer } from './SmallTagContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export const InfoTop = () => {
    const classes = useStyles();

    const breadcrumbTitles = ["CryptoCurrencies", "Coin", "Bitcoin"];

    return (
        <div style={{flexGrow: 1,height: "20%", marginTop: "2rem"}}>
            <Container maxWidth="xl">
                <Box >
                    <Grid sx={{
                        width: "100%",
                        height: "370px"
                    }} 
                    container alignItems="center" justifyContent="space-between">

                    <Grid item xs={4} sx={{height: "370px"}}>
                        <Box>
                            <Box sx={{ width: '100%', padding: "0.5rem" }}>
                                <CustomBreadcrumb titles={breadcrumbTitles} />
                                <CoinInfoButtonContainer coinTitle={"Bitcoin"} abbrev={"BTC"} />
                                <TagListContainer />
                                <CoinInfoDropdownContainer />
                                <SmallTagContainer />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={4} sx={{height: "370px"}}>
                        <Box>
                            <Box sx={{ width: '100%', padding: "0.5rem" }}>
                                <CustomBreadcrumb titles={breadcrumbTitles} />
                                <CoinInfoButtonContainer coinTitle={"Bitcoin"} abbrev={"BTC"} />
                                <TagListContainer />
                                <CoinInfoDropdownContainer />
                                <SmallTagContainer />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={4} sx={{height: "370px"}}>
                        <Box>
                            <Box sx={{ width: '100%', padding: "0.5rem" }}>
                                <CustomBreadcrumb titles={breadcrumbTitles} />
                                <CoinInfoButtonContainer coinTitle={"Bitcoin"} abbrev={"BTC"} />
                                <TagListContainer />
                                <CoinInfoDropdownContainer />
                                <SmallTagContainer />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                </Box> 
            </Container>
        </div>
    );
}
