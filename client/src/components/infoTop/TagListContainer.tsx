import React from 'react';
import Stack from '@mui/material/Stack';
import { CustomTag } from '../../shared/widgets/customTag/CustomTag';
import { dataTagList } from '../../mock/tagList';

export const TagListContainer = () => {
    

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
