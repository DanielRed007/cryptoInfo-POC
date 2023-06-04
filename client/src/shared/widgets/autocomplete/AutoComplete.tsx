import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

interface AutoComplete{
    id: string;
    options?: any[],
    width?: number;
    size: any;
    label: string;
    icon: any; 
}

export const AutoComplete: FC<AutoComplete> = ({ id, options, width, size, label, icon }) => {
  return (
    <Stack spacing={2} sx={{ width: width || 300 }}>
      <Autocomplete
        id={id}
        size={size || "small"}
        disableClearable
        options={options || top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <>
                { icon }
                {params.InputProps.startAdornment}
                </>
              )
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];