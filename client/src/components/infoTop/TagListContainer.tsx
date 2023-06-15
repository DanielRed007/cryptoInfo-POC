import React from 'react';
import Stack from '@mui/material/Stack';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { CustomTag } from '../../shared/widgets/customTag/CustomTag';

export const TagListContainer = () => {
    const dataTagList = [
        {
            size: "small",
            variant: "filled",
            label: "Rank #1",
            showIcon: true,
            icon: <CurrencyBitcoinIcon />
        },
        {
            size: "small",
            variant: "outlined",
            label: "Coin",
            showIcon: false,
        },
        {
            size: "small",
            variant: "outlined",
            label: "On 7,234,221 watchlists",
            showIcon: false
        }
    ];

    return (
        <>
            <Stack direction="row" spacing={1}>
                {
                    dataTagList.map((tag,index) => (
                        <CustomTag 
                            key={index} 
                            size={tag.size} 
                            variant={tag.variant} 
                            label={tag.label}
                            icon={tag.icon}
                            showIcon={tag.showIcon} 
                        />
                    ))
                }
            </Stack>   
        </>
    )
}
