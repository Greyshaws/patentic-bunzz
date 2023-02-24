import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const categories = [
    'Method',
    'Song',
    'Writing',
    'Design',
  ];
  

export default function PatentCategory({category, onSelectCategory}) {

  const handleSelectCategory = (event) => {
    onSelectCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 2 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleSelectCategory }
          sx={{
            outline: "2px solid black",
            borderRadius: "8px",
          }}
        >

            {categories.map(cat => {
                return <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
