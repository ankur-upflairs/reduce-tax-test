import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const TaxesPaidPage = () => {
  //  State for sections
  const [showAdvanceTax, setShowAdvanceTax] = useState(false);
  const [showTDSOther, setShowTDSOther] = useState(false);
  const [showTDSRental, setShowTDSRental] = useState(false);
  const [showTCS, setShowTCS] = useState(false);

  //  State for each section's dynamic rows
  const [advanceTax, setAdvanceTax] = useState([]);
  const [tdsOther, setTdsOther] = useState([]);
  const [tdsRental, setTdsRental] = useState([]);
  const [tcs, setTcs] = useState([]);

  // Handlers for toggling sections
  const toggleSection = (setShowSection) => (e) => {
    setShowSection(e.target.value === "Yes");
  };

  // Handler for updating dynamic fields
  const handleFieldChange = (index, field, value, setData) => {
    const updatedData = [...setData];
    updatedData[index][field] = value;
    setData(updatedData);
  };
  // Handlers for adding/removing rows
  const addRow = (setData, initialRow) => () => {
    setData((prev) => [...prev, initialRow]);
  };

  const removeRow = (setData) => () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <Typography variant="h5" sx={{ mt: 5,  fontWeight: "bold", textAlign: "center" , color: "#253243", fontSize:"1.5rem" }}>
        ENTER TAXES PAID, TDS AND TCS
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, textAlign: "center" , color: "#253243", fontSize:"14px" }}>
      Have you paid anything before?
      </Typography>
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          p: 3,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Form 26AS Section */}
        <Box
          sx={{
            backgroundColor: "#e8f5e9",
            borderRadius: 2,
            p: 2,
            mb: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#253243",
              fontSize: "16px",
            }}
          >
            Do you have a Form 26AS? Click here to{" "}
            <a href="#" style={{ color: "blue"}}>
              Upload Form 26AS
            </a>{" "}
            and avoid manual entry.
          </Typography>
        </Box>

        {/* Section: Advance Tax */}
        <Typography variant="h6" sx={{ mb: 1 ,color: "#253252", fontWeight:"bold"}}>
          Advance Tax and Self-Assessment Tax Payment
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 , color: "#6c757d", fontSize:"13px" }}>
        Add details of any tax paid directly to the government via Challan 280
        </Typography>
        <RadioGroup
          row
          onChange={toggleSection(setShowAdvanceTax)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        {showAdvanceTax && (
          <Box sx={{ mb: 3 }}>
            {advanceTax.map((row, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="BSR Code"
                    value={row.bsrCode || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "bsrCode",
                        e.target.value,
                        setAdvanceTax
                      )
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Date of Challan"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={row.date || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "date",
                        e.target.value,
                        setAdvanceTax
                      )
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Challan No."
                    value={row.challanNo || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "challanNo",
                        e.target.value,
                        setAdvanceTax
                      )
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Tax Amount"
                    type="number"
                    value={row.taxAmount || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "taxAmount",
                        e.target.value,
                        setAdvanceTax
                      )
                    }
                  />
                </Grid>
              </Grid>
            ))}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={addRow(setAdvanceTax, {
                  bsrCode: "",
                  date: "",
                  challanNo: "",
                  taxAmount: "",

                })}
                sx={{fontWeight:"bold"}}
              >
                + 
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={removeRow(setAdvanceTax)}
                sx={{fontWeight:"bold"}}
              >
                - 
              </Button>
            </Box>
          </Box>
        )}

        {/* Section: TDS Paid on Other Than Salary */}
        <Typography variant="h6" sx={{ mb: 1 ,color: "#253252", fontWeight:"bold"}}>
          Details of TDS Paid on Other Than Salary
        </Typography>
        <Typography variant="body2" sx={{mb: 2 , color: "#6c757d", fontSize:"13px"}}>
        If you've had TDS deducted on any source of income except salary; like on interest, rent etc. then you can enter here. (refer Form 16A or 26AS)
        </Typography>
        <RadioGroup
          row
          onChange={toggleSection(setShowTDSOther)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        {showTDSOther && (
          <Box sx={{ mb: 3 }}>
            {tdsOther.map((row, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Name of Deductor"
                    value={row.name || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "name",
                        e.target.value,
                        setTdsOther
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="TAN of Deductor"
                    value={row.tan || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "tan",
                        e.target.value,
                        setTdsOther
                      )
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="Amount"
                    type="number"
                    value={row.amount || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "amount",
                        e.target.value,
                        setTdsOther
                      )
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="TDS"
                    type="number"
                    value={row.tds || ""}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "tds",
                        e.target.value,
                        setTdsOther
                      )
                    }
                  />
                </Grid>
              </Grid>
            ))}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={addRow(setTdsOther, {
                  name: "",
                  tan: "",
                  amount: "",
                  tds: "",
                })}
                sx={{fontWeight:"bold"}}
              >
                +
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={removeRow(setTdsOther)}
                sx={{fontWeight:"bold"}}
              >
                - 
              </Button>
            </Box>
          </Box>
        )}

        {/* Section: Tax Collected at Source */}
        <Typography variant="h6" sx={{ mb: 1 , color: "#253252", fontWeight:"bold" }}>
          Details of Tax Collected at Source
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 , color: "#6c757d", fontSize:"13px" }}>
        If at the time of sale of the specified category of goods, the seller has collected TCS from you then enter the details here. You can also check this from Form 26AS.
        </Typography>
        <RadioGroup row onChange={toggleSection(setShowTCS)} sx={{ mb: 2 }}>
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        {showTCS && (
          <Box sx={{ mb: 3 }}>
            {tcs.map((row, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Name of Collector"
                    value={row.name || ""}
                    onChange={(e) =>
                      handleFieldChange(index, "name", e.target.value, setTcs)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="TAN of Collector"
                    value={row.tan || ""}
                    onChange={(e) =>
                      handleFieldChange(index, "tan", e.target.value, setTcs)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="Amount"
                    type="number"
                    value={row.amount || ""}
                    onChange={(e) =>
                      handleFieldChange(index, "amount", e.target.value, setTcs)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="TCS"
                    type="number"
                    value={row.tcs || ""}
                    onChange={(e) =>
                      handleFieldChange(index, "tcs", e.target.value, setTcs)
                    }
                  />
                </Grid>
              </Grid>
            ))}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={addRow(setTcs, {
                  name: "",
                  tan: "",
                  amount: "",
                  tcs: "",
                })}
                sx={{fontWeight:"bold"}}
              >
                + 
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={removeRow(setTcs)}
                sx={{fontWeight:"bold"}}
              >
                - 
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TaxesPaidPage;
