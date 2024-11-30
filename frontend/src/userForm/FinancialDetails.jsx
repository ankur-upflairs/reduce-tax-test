import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Typography,
} from "@mui/material";

const FinancialDetailsForm = () => {
  const [formData, setFormData] = useState({
    financialYear: "2023-2024", // Default selection
    pan: "",
    dob: "",
    prefill: "no", // Default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        // backgroundColor: "#f5f8fb",
        px: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 900,
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Grid container spacing={3}>
          {/* Financial Year */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="financialYear-label"></InputLabel>
              <Select
                labelId="financialYear-label"
                name="financialYear"
                value={formData.financialYear}
                onChange={handleChange}
                required
              >
                <MenuItem value="2023-2024">2023-2024</MenuItem>
                <MenuItem value="2024-2025">2024-2025</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* PAN Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="PAN Number"
              variant="outlined"
              fullWidth
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>

          {/* Pre-fill Data */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ mb: 1 }}>
                Do you want to pre-fill data?
              </FormLabel>
              <RadioGroup
                row
                name="prefill"
                value={formData.prefill}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FinancialDetailsForm;
