
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomBreadcrumb } from '../../shared/widgets/customBreadcrumb/CustomBreadcrumb';
import { CoinInfoButtonContainer } from './CoinInfoButtonContainer';
import { TagListContainer } from './TagListContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bigBox: {
        border: "1px solid blue",
        height: '100%',
    },
    smallBox: {
        border: "1px solid blue",
        height: '50%',
    },
}));

export const InfoTop = () => {
    const classes = useStyles();

    const breadcrumbTitles = ["CryptoCurrencies", "Coin", "Bitcoin"];

    return (
        <div style={{flexGrow: 1,height: "30%"}}>
            <Container maxWidth="xl">
                <Box >
                    <Grid sx={{
                        width: "100%",
                        height: "570px"
                    }} 
                    container alignItems="center" justifyContent="space-between">

                    <Grid item xs={4} sx={{height: "570px"}}>
                        <Box className={classes.bigBox}>
                            <Box sx={{ width: '100%', padding: "0.5rem" }}>
                                <CustomBreadcrumb titles={breadcrumbTitles} />
                                <CoinInfoButtonContainer coinTitle={"Bitcoin"} abbrev={"BTC"} />
                                <TagListContainer />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item sx={{height: "570px"}} xs={8}>
                        <Grid item>
                            <Box sx={{height: "285px"}} className={classes.smallBox}>
                                Box1   
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box sx={{height: "285px"}} className={classes.smallBox}>
                                Box2 
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
                </Box> 
            </Container>
        </div>
    );
}
