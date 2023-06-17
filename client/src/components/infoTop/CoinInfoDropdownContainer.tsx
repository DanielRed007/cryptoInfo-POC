
import { Grid } from '@mui/material'
import React from 'react'
import { cryptoLinks } from '../../mock/linkOptions';
import { TooltipButton } from '../../shared/widgets/tooltipButton/TooltipButton';
import "./CoinInfoDropdownContainer.scss";

export const CoinInfoDropdownContainer = () => {
  return (
    <Grid  className="coin-info-dropdown-container" container spacing={2}> 
        <TooltipButton buttonSize={"small"} title="bitcoin.org" linkOptions={cryptoLinks}/>
        <TooltipButton buttonSize={"small"} title="Explorers" linkOptions={cryptoLinks}/>
        <TooltipButton buttonSize={"small"} title="Community" linkOptions={cryptoLinks}/>
        <TooltipButton buttonSize={"small"} title="Source code" linkOptions={cryptoLinks}/>
        <TooltipButton buttonSize={"small"} title="Whitepaper" linkOptions={cryptoLinks}/>
    </Grid>
  )
}
