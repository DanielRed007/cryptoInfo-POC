import React from 'react'
import { Grid } from '@mui/material'
import { cryptoLinks } from '../../mock/linkOptions';
import { TooltipButton } from '../../shared/widgets/tooltipButton/TooltipButton';
import "./CoinInfoDropdownContainer.scss";

export const CoinInfoDropdownContainer = () => {
  return (
    <Grid  className="coin-info-dropdown-container" container spacing={2}> 
      <TooltipButton buttonVariant={"text"} buttonSize={"small"} title="bitcoin.org" linkOptions={cryptoLinks}/>
      <TooltipButton buttonVariant={"text"} buttonSize={"small"} title="Explorers" linkOptions={cryptoLinks}/>
      <TooltipButton buttonVariant={"text"} buttonSize={"small"} title="Community" linkOptions={cryptoLinks}/>
      <TooltipButton buttonVariant={"text"} buttonSize={"small"} title="Source code" linkOptions={cryptoLinks}/>
      <TooltipButton buttonVariant={"text"} buttonSize={"small"} title="Whitepaper" linkOptions={cryptoLinks}/>
    </Grid>
  )
}
