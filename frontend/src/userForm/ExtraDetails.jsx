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
  FormControlLabel,
  Switch,
  ListItem
} from "@mui/material";

const ITRForm = () => {
  const [formData, setFormData] = useState({
    filingType: "Return Filed Against Notice",
    noticeSection: "139(9)",
    originalAcknowledgment: "",
    DIN: "",
    receiptDate: "",
    expenditureAmount: "",
    electricityAmount: "",
    taxAmount: "",
    depositAmount: "",
    under1397: false,
    clause1391iv: false,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Box sx={{ padding: 4, minHeight: "100vh", width: "70%", margin: "0 auto"  }}>
      <Typography variant="h5" sx={{ marginBottom: 3 , textAlign: "center"}}>
        ITR Details
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: 3,
        }}
      >
        <Typography variant="h6" sx={{color:"#253243", fontSize:"18px", fontWeight: "bold"}}>Return Filing Type</Typography>
        <Typography variant="body1"  sx={{color:"#253243", fontSize:"14px"}}>If you have already filed ITR for this year and want to make corrections select Revised Return, else select Original Return</Typography>
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <Select
            value={formData.filingType}
            onChange={(e) => handleChange("filingType", e.target.value)}
          >
            <MenuItem value="Original Return">Original Return</MenuItem>
            <MenuItem value="Revised Return">Revised Return</MenuItem>
            <MenuItem value="Return Filed Against Notice">
              Return Filed Against Notice
            </MenuItem>
          </Select>
        </FormControl>
        <Typography variant="h6" sx={{ marginTop: 3 }}>Return Filed Against Notice u/s </Typography>
        <FormControl sx={{ marginTop: 2 , width: "40%" }} >
          <Select
            value={formData.noticeSection}
            onChange={(e) => handleChange("noticeSection", e.target.value)}
          >
            <MenuItem value="139(9)">139(9)</MenuItem>
            <MenuItem value="142(1)">142(1)</MenuItem>
            <MenuItem value="148">148</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Original ITR Acknowledgment no."
              value={formData.originalAcknowledgment}
              onChange={(e) =>
                handleChange("originalAcknowledgment", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date of Filing Original Return"
              type="date"
              value={formData.receiptDate}
              onChange={(e) => handleChange("receiptDate", e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Unique number/document identification number (DIN)"
              value={formData.DIN}
              onChange={(e) => handleChange("DIN", e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Receipt Date of notice"
              type="date"
              value={formData.receiptDate}
              onChange={(e) => handleChange("receiptDate", e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section 139(7) */}
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: 3,
        }}
      >
        <Typography variant="h6" sx={{color:"#253243", fontSize:"18px", fontWeight: "bold"}}>
          Are you filing return of income under seventh proviso to section
          139(1)?
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Select Yes, if your total income is less than Rs. 2.5 Lakh but:
        </Typography>
        <li>You have deposited more than Rs. 1 Crore in current account during the financial year</ li>
        <li>Or, incurred expenditure of more than Rs. 2 Lakh for foreign traveling</li>
        <li>Or, incurred expenditure of more than Rs. 1 Lakh for electricity bills</li>
        <FormControlLabel
          control={
            <Switch
              checked={formData.under1397}
              onChange={(e) => handleChange("under1397", e.target.checked)}
            />
          }
          label={formData.under1397 ? "Yes" : "No"}
        />
        {formData.under1397 && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{color:"#253243", fontSize:"13px"}}>
              Enter Expenditure Amount, If you incurred expenditure of an amount exceeding Rs. 2 lakhs for travel to a foreign country for yourself or for any other person
              </Typography>
              <TextField
                fullWidth
                label=""
                value={formData.expenditureAmount}
                onChange={(e) =>
                  handleChange("expenditureAmount", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body1" sx={{color:"#253243", fontSize:"13px"}}>
            Enter Expenditure Amount, If you incurred expenditure of an amount exceeding Rs. 1 lakh on consumption of electricity during the Financial Year
              </Typography>
              <TextField
                fullWidth
                label=""
                value={formData.electricityAmount}
                onChange={(e) =>
                  handleChange("electricityAmount", e.target.value)
                }
              />
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Section Clause (iv) */}
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{color:"#253243", fontSize:"18px", fontWeight: "bold"}}>
          Are you required to file a return as per other conditions prescribed
          under clause (iv) of seventh proviso to section 139(1)?
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={formData.clause1391iv}
              onChange={(e) => handleChange("clause1391iv", e.target.checked)}
            />
          }
          label={formData.clause1391iv ? "Yes" : "No"}
        />
        {formData.clause1391iv && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography  sx={{color:"#253243", fontSize:"13px"}}>
                Enter Tax Amount, If the sum of tax deducted at source and tax
                collected at source during the Financial Year is Rs. 25000 or
                more.
              </Typography>
              <TextField
                fullWidth
                label=""
                value={formData.taxAmount}
                onChange={(e) => handleChange("taxAmount", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{color:"#253243", fontSize:"13px"}}>
                Enter Deposit Amount, If you deposited amounts exceeding Rs. 50
                Lakh or more in one or more savings accounts during the
                Financial Year.
              </Typography>
              <TextField
                fullWidth
                label=""
                value={formData.depositAmount}
                onChange={(e) => handleChange("depositAmount", e.target.value)}
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ITRForm;
