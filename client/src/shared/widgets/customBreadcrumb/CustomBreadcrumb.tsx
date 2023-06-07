
import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Paper, Breadcrumbs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface CustomBreadcrumbProps{
    titles: string[];
}

export const CustomBreadcrumb: FC<CustomBreadcrumbProps> = ({ titles }) => {
  return (
    <Stack direction="row" spacing={2}>
        <Item>
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
        </Item>
    </Stack>
  )
}
