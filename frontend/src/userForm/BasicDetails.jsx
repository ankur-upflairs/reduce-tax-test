import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { Box, Button, TextField, Grid } from "@mui/material";

const PanCardForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    pan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
          backgroundColor: 'white',
        }}
      >
        <div className="text-center mb-4">
          <div className="bg-primary text-white rounded-circle p-3 mb-3">
            <FaTwitter size={30} />
          </div>
          <h2 className="fw-bold">Fill PAN Card Details</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Middle Name"
                variant="outlined"
                fullWidth
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="PAN Number"
                variant="outlined"
                fullWidth
                name="pan"
                value={formData.pan}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>

        <p className="text-muted text-center mt-3">
          Please ensure the details match exactly with your PAN card.
        </p>

        <p className="text-center mt-2">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </Box>
    </Box>
  );
};

export default PanCardForm;
