import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

const BankAndAadhaarDetails = () => {
  // State for form fields
  const [bankDetails, setBankDetails] = useState([
    {
      ifsc: "",
      bankName: "",
      accountNumber: "",
      accountType: "Savings Account",
    },
  ]);
  const [aadhaarNumber, setAadhaarNumber] = useState("");

  // Handle input change for bank details
  const handleBankDetailsChange = (index, field, value) => {
    const updatedBankDetails = [...bankDetails];
    updatedBankDetails[index][field] = value;
    setBankDetails(updatedBankDetails);
  };

  // Handle Aadhaar input change
  const handleAadhaarChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  // Add new bank detail row
  const handleAddBank = () => {
    setBankDetails([
      ...bankDetails,
      {
        ifsc: "",
        bankName: "",
        accountNumber: "",
        accountType: "Savings Account",
      },
    ]);
  };

  // Remove last bank detail row
  const handleRemoveBank = () => {
    if (bankDetails.length > 1) {
      setBankDetails(bankDetails.slice(0, -1));
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Bank Details:", bankDetails);
    console.log("Aadhaar Number:", aadhaarNumber);
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            mt: 5,
            textAlign: "center",
            color: "#253243",
            fontSize: "22px",
          }}
        >
          ENTER YOUR BANK & AADHAAR DETAILS
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 4,
            textAlign: "center",
            color: "#253243",
            fontSize: "16px",
          }}
        >
          Provide your bank details correctly to receive an income tax refund.
        </Typography>
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#253243",
                fontSize: "22px",
              }}
            >
              1. Bank Details - To Receive Income Tax Refund
            </Typography>
            {bankDetails.map((bank, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                {/* IFSC Code */}
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="IFSC Code of the Bank"
                    value={bank.ifsc}
                    onChange={(e) =>
                      handleBankDetailsChange(index, "ifsc", e.target.value)
                    }
                  />
                </Grid>

                {/* Bank Name */}
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Name of the Bank"
                    value={bank.bankName}
                    onChange={(e) =>
                      handleBankDetailsChange(index, "bankName", e.target.value)
                    }
                  />
                </Grid>

                {/* Account Number */}
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Account Number"
                    value={bank.accountNumber}
                    onChange={(e) =>
                      handleBankDetailsChange(
                        index,
                        "accountNumber",
                        e.target.value
                      )
                    }
                  />
                </Grid>

                {/* Account Type */}
                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth>
                    {/* <InputLabel></InputLabel> */}
                    <Select
                      value={bank.accountType}
                      onChange={(e) =>
                        handleBankDetailsChange(
                          index,
                          "accountType",
                          e.target.value
                        )
                      }
                    >
                      <MenuItem value="Savings Account">
                        Savings Account
                      </MenuItem>
                      <MenuItem value="Current Account">
                        Current Account
                      </MenuItem>
                      <MenuItem value="Current Account">
                        Cash Credit Account
                      </MenuItem>
                      <MenuItem value="Current Account">
                        Over Draft Account
                      </MenuItem>
                      <MenuItem value="Current Account">
                        Non Resident Account
                      </MenuItem>
                      <MenuItem value="Current Account">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            ))}

            {/* Add/Remove Bank Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#09345A", fontSize: "14px" }}
                onClick={handleAddBank}
              >
                + Add Bank
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleRemoveBank}
                disabled={bankDetails.length === 1}
              >
                - Remove Bank
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Aadhaar Details Section */}
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            p: 3,
            mt: 5, // Margin-top for spacing
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#253243",
                fontSize: "22px",
              }}
            >
              Aadhaar Details
            </Typography>
            <TextField
              fullWidth
              label="Aadhaar Card / Enrollment Number"
              value={aadhaarNumber}
              onChange={handleAadhaarChange}
              required
            />
          </Box>

          {/* Submit Button */}
          {/* <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handleSubmit}
        >
          CONTINUE
        </Button>
        </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default BankAndAadhaarDetails;
