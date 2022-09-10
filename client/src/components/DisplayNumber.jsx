import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import number from "../configFiles/number";

const DisplayNumber = () => {
  const [count, setCount] = React.useState(5);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-number"
          select
          label="Number"
          value={count}
          onChange={handleChange}
          helperText="Please select the number"
        >
          {number.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
export default DisplayNumber;
