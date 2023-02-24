import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';


export default function MessagesFilter({value, onChangeFilter}) {

    const handleChange = (event) => {
        onChangeFilter(event.target.value);
      };
    

  return (
    <FormControl sx={{
        display: "flex",
        alignItems: "right",
        my: 2,
    }}>
      {/* <FormLabel id="messages-filter">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="messages-filter"
        name="controlled-messages-filter-radio"
        value={value}
        onChange={handleChange}
        sx={{
            display: "flex",
            alignItems: "right",

            "& *:hover": {
                textDecoration: "none",
            }
        }}
      >
        <FormControlLabel value="sent" control={<Radio size="small" />} label={<Typography variant="body2">Size</Typography>} />
        <FormControlLabel value="received" control={<Radio size="small" />} label={<Typography variant="body2">Recieved</Typography>} />
        <FormControlLabel value="" control={<Radio size="small" />} label={<Typography variant="body2">All</Typography>} />
        
      </RadioGroup>
    </FormControl>
  );
}