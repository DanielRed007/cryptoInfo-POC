import React, { FC } from 'react'
import { Button, Tooltip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LinkItem } from '../../../mock/linkOptions';


interface TooltipButtonProps{
  title: string;
  linkOptions: any[];
  buttonSize?: any;
  buttonVariant?: any;
}

export const TooltipButton: FC<TooltipButtonProps> = ({ title, linkOptions, buttonSize, buttonVariant }) => {
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
        <Button 
          size={buttonSize ? buttonSize : "medium"}
          variant={buttonVariant ? buttonVariant : "outlined"} 
          sx={{ ml: 1, textTransform: 'capitalize' }}
        >{ title }</Button>
    </Tooltip>
  )
}
