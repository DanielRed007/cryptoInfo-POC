
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    bigBox: {
      backgroundColor: 'blue',
      height: '100%',
    },
    smallBox: {
      backgroundColor: 'green',
      height: '50%',
    },
}));

export const InfoTop = () => {
    const classes = useStyles();

    return (
        <div style={{flexGrow: 1,height: "30%"}}>
            <Container maxWidth="lg">
                <Box>
                    <Grid container alignItems="center" justifyContent="space-between">

                    <Grid item xs={8}>
                        <Box className={classes.bigBox}>
                            Big Box
                        </Box>
                    </Grid>

                    <Grid item xs={4} container direction="column" spacing={2}>
                        <Grid item>
                            <Box className={classes.smallBox}>
                                Box1   
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box className={classes.smallBox}>
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
