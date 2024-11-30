import React, { useState } from 'react';
import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';

function BasicDetails2() {
  const [formData, setFormData] = useState({
    pincode: '',
    flatDoorBuilding: '',
    buildingVillage: '',
    road: '',
    area: '',
    employerCategory: '',
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle submission here, like sending data to a backend or showing in the console
    console.log('Form Submitted:', formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        // backgroundColor: '#f5f8fb',
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          width: '100%',
          backgroundColor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'auto',
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}
        >
          Address and Employer Details
        </Typography>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Pincode */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Pincode"
                variant="outlined"
                fullWidth
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Flat / Door / Building */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Flat / Door / Building"
                variant="outlined"
                fullWidth
                name="flatDoorBuilding"
                value={formData.flatDoorBuilding}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Building / Village */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Building / Village"
                variant="outlined"
                fullWidth
                name="buildingVillage"
                value={formData.buildingVillage}
                onChange={handleChange}
              />
            </Grid>

            {/* Road */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Road"
                variant="outlined"
                fullWidth
                name="road"
                value={formData.road}
                onChange={handleChange}
              />
            </Grid>

            {/* Area */}
            <Grid item xs={12} sm={4}>
              <TextField
                label="Area"
                variant="outlined"
                fullWidth
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Employer Category */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="employerCategory-label">Employer Category</InputLabel>
                <Select
                  label="Employer Category"
                  labelId="employerCategory-label"
                  name="employerCategory"
                  value={formData.employerCategory}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="private">Private</MenuItem>
                  <MenuItem value="government">Government</MenuItem>
                  <MenuItem value="selfEmployed">Self-Employed</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default BasicDetails2;