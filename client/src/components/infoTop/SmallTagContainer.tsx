import React from 'react';
import { CustomTag } from '../../shared/widgets/customTag/CustomTag';
import { Stack } from '@mui/material';
import { smallDataTagList } from '../../mock/tagList';

export const SmallTagContainer = () => {
  return (
    <div>
      <h4>Tags</h4>

      <Stack direction="row" spacing={1}>
                {
                    smallDataTagList.map((tag,index) => (
                        <CustomTag 
                            key={index} 
                            size={tag.size} 
                            variant={tag.variant} 
                            label={tag.label}
                            showIcon={tag.showIcon} 
                        />
                    ))
                }
      </Stack> 
    </div>
  )
}
