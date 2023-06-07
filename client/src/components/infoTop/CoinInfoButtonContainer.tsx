import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Link, Typography, Chip, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import UploadIcon from '@mui/icons-material/Upload';
import BitcoinLogo from "../../assets/images/Bitcoin.png";
import "./CoinInfoButtonContainer.scss";

interface CoinInfoButtonContainerProps{
    coinTitle: string;
    abbrev: string;
}

export const CoinInfoButtonContainer: FC<CoinInfoButtonContainerProps> = ({ coinTitle, abbrev }) => {

    return (
        <Grid  className="coin-info-container" container spacing={2}>

            <Grid item xs={12} sm={6} md={2}>
                <Link href="https://example.com" target="_blank" rel="noopener">
                    <img className="img-logo" src={BitcoinLogo} alt="Bitcoin" />
                </Link>
            </Grid>

            <Grid style={{ paddingLeft: "0" }} item xs={12} sm={6} md={2}>
                <Typography className="coin-title" color="text.primary">
                    { coinTitle }
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
                <Chip className="abbreviation-chip" label={abbrev} />
            </Grid> 

            <Grid style={{ paddingLeft: "0" }} item xs={12} sm={6} md={2}>
                <Button 
                    className="follow-button" 
                    style={{ paddingLeft: "1rem" }}  
                    size="small" variant="contained"  
                    startIcon={<AddIcon/>}>
                    Follow
                </Button>
            </Grid>

            <Grid style={{ paddingLeft: "2rem", marginTop: "0.2rem" }} item xs={12} sm={6} md={2}>
                <IconButton aria-label="delete" size="medium">
                    <UploadIcon fontSize="inherit" />
                </IconButton>
            </Grid>

            <Grid style={{ paddingLeft: "0", marginTop: "0.2rem" }} item xs={12} sm={6} md={2}>
                <IconButton aria-label="delete" size="medium">
                    <StarIcon fontSize="inherit" />
                </IconButton>
            </Grid>
        </Grid>
    )
}
