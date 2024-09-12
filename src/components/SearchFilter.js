import React from 'react';
import { TextField } from '@mui/material';

const SearchFilter = ({ value, onChange }) => {
  return (
    <TextField
      label="Pesquisar"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchFilter;
