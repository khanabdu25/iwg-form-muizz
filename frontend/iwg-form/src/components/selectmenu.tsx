import React, { CSSProperties } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectLabelsProps {
    labelText: string;
    options: string[];  // New prop to accept the list of strings
}

const SelectLabels: React.FC<SelectLabelsProps> = ({ labelText, options }) => {
  const [selection, setSelection] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value);
  };

  // ... (Styles remain unchanged)

  return (
    <div style={containerStyle}>
        <div>
            <span style={labelStyle}>{labelText}</span>
            <span style={asteriskStyle}>*</span>
        </div>
        <div> 
            <FormControl sx={{ m: 0, minWidth: 180 }}>
                <Select
                  value={selection}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
            </FormControl>
        </div>
    </div>
  );
}

export default SelectLabels;


const labelStyle: CSSProperties = {
  color: '#a0aec0',
  fontSize: '15px',
  fontWeight: 'normal',
  fontFamily: 'Inter, sans-serif',
  textDecoration: 'underline',
};

const asteriskStyle: CSSProperties = {
  color: '#e3342f',
  fontSize: '15px',
  fontWeight: 'normal',
  fontFamily: 'Inter, sans-serif',
};

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '3px',
};
