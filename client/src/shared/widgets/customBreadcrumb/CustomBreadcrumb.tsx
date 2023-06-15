
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Typography } from '@mui/material';

interface CustomBreadcrumbProps{
    titles: string[];
}

export const CustomBreadcrumb: FC<CustomBreadcrumbProps> = ({ titles }) => {
  return (
    <Stack direction="row" spacing={4}>
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {titles.map((crumb) => (
                    <Typography style={{fontSize: "12px"}} key="3" color="text.primary">
                        {crumb}
                    </Typography>
                ))}
            </Breadcrumbs>
        </Stack>
    </Stack>
  )
}
