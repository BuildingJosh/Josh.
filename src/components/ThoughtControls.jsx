import React, { useState } from 'react';
import {
  Box,
  TextField,
  Chip,
  IconButton,
  Tooltip,
  InputAdornment,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const categories = [
  { name: 'All', color: '#ffffff' },
  { name: 'Consciousness', color: '#6ee7b7' },
  { name: 'Reality', color: '#facc15' },
  { name: 'Time', color: '#c084fc' },
  { name: 'Technology', color: '#f472b6' },
  { name: 'Robotics', color: '#7f5af0' },
  { name: 'Identity', color: '#f59e0b' },
  { name: 'Travel', color: '#38bdf8' },
  { name: 'Mind', color: '#6ee7b7' },
];

const ThoughtControls = ({
  onSearch,
  onCategoryChange,
  onRandomThought,
  onZoomToFit,
  selectedCategory,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        p: 2,
        zIndex: 1000,
        backgroundColor: 'rgba(14, 14, 16, 0.8)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(110, 231, 183, 0.1)',
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        <TextField
          fullWidth
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search thoughts..."
          variant="outlined"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'rgba(110, 231, 183, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(110, 231, 183, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6ee7b7',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#6ee7b7' }} />
              </InputAdornment>
            ),
          }}
        />
        <FormControl
          size="small"
          sx={{
            minWidth: 120,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'rgba(110, 231, 183, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(110, 231, 183, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6ee7b7',
              },
            },
          }}
        >
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            displayEmpty
            sx={{ color: 'white' }}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.name}
                value={category.name}
                sx={{
                  color: category.color,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(110, 231, 183, 0.1)',
                  },
                }}
              >
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Tooltip title="Random Thought">
          <IconButton
            onClick={onRandomThought}
            sx={{
              color: '#6ee7b7',
              '&:hover': {
                backgroundColor: 'rgba(110, 231, 183, 0.1)',
              },
            }}
          >
            <ShuffleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Zoom to Fit">
          <IconButton
            onClick={onZoomToFit}
            sx={{
              color: '#6ee7b7',
              '&:hover': {
                backgroundColor: 'rgba(110, 231, 183, 0.1)',
              },
            }}
          >
            <ZoomOutMapIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default ThoughtControls;
