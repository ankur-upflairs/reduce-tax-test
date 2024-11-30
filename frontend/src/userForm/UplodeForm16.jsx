import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function UploadForm16() {
  const [file, setFile] = useState(null); // State for uploaded file
  const [isWithoutForm16, setIsWithoutForm16] = useState(false); // State for "Continue without Form 16"

  // Handle file selection
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File selected:", uploadedFile.name);
    }
  };

  // Handle continue without Form 16
  const handleContinueWithoutForm16 = () => {
    setIsWithoutForm16(true);
    console.log("Continuing without Form 16");
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
        sx={{
          maxWidth: 900,
          width: "100%",
          backgroundColor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
        >
          UPLOAD FORM 16
        </Typography>

        {/* Information Section */}
        <Box
          sx={{
            mb: 4,
            p: 3,
            backgroundColor: "#f1f1f1",
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" align="center" sx={{ color: "#555" }}>
            Income Tax Return Filing is easy with Tax2win. The smartest way to
            file your taxes online is to just upload your Form 16 and get your
            ITR prepared automatically.
          </Typography>
        </Box>

        {/* Buttons in One Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2, // Adds space between the buttons
            mb: 4,
          }}
        >
          {/* Continue Without Form 16 Button */}
          <Button
            variant="outlined"
            sx={{
              //   backgroundColor: '#6415ff',
              color: "#6415ff",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#4b10cc", color: "white" },
            }}
            onClick={handleContinueWithoutForm16}
          >
            Continue without Form 16
          </Button>

          {/* Divider */}
          <Typography variant="h9" align="center" sx={{ my: 2, color: "#666", fontWeight: "bold" }}>
            OR
          </Typography>

          {/* Upload Form 16 Button */}
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#6415ff",
              color: "white",
              fontWeight: "bold",
              ":hover": { backgroundColor: "#4b10cc" },
            }}
          >
            Upload Form 16
            <input
              type="file"
              hidden
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </Button>
        </Box>

        {/* Display Selected File */}
        {file && (
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#555", textAlign: "center" }}
          >
            Selected File: {file.name}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default UploadForm16;
