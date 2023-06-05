import React, { FC } from 'react'
import { LinkItem } from '../../../components/header/linkOptions';
import { Button, Tooltip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


interface TooltipButtonProps{
    title: string;
    linkOptions: any[];
}

export const TooltipButton: FC<TooltipButtonProps> = ({ title, linkOptions }) => {
  return (
    <Tooltip
        title={
          <List dense>
            {linkOptions.map((link: LinkItem, index) => (
              <ListItem key={index} component="a" href={link.url}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        }
        arrow
    >
        <Button sx={{ ml: 1, textTransform: 'capitalize' }}>{ title }</Button>
    </Tooltip>
  )
}
