import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Tooltip,
  IconButton,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid2"; // Import Grid from @mui/material/Grid2

const questions = [
  {
    id: "q1",
    question: "Income from Salary/Pension?",
    info: "This includes all salary and pension income received during the financial year.",
  },
  {
    id: "q2",
    question: "Income from House Property (Home Loan/Rental Income, etc)?",
    info: "Includes income or loss from house properties, rental income, or deductions for home loans.",
  },
  {
    id: "q3",
    question: "Income from Business/Profession?",
    info: "Covers income earned from business activities or professional services.",
  },
  {
    id: "q4",
    question: "Income from Capital Gains (Shares/Mutual Funds/Property etc)?",
    info: "Capital gains include profits from selling shares, mutual funds, property, or other capital assets.",
  },
  {
    id: "q5",
    question: "Income from Other Sources?",
    info: "Includes income from dividends, interest, winnings from lotteries, or other sources.",
  },
  {
    id: "q6",
    question: "Income from Foreign Source?",
    info: "Includes income earned from foreign employment, investments, or other sources abroad.",
  },
];

const IncomeForm = () => {
  const [formData, setFormData] = useState({});

  const handleRadioChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          maxWidth: "lg",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Income Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {questions.map((item, index) => (
              <React.Fragment key={item.id}>
                <Grid item container xs={12} size={12} alignItems="center">
                  <Grid item xs={6} size={6}>
                    <Typography>
                      <strong>{`Q${index + 1}.`}</strong> {item.question}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    size={6}
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={1}
                  >
                    <Grid item>
                      <FormControl>
                        <RadioGroup
                          row
                          value={formData[item.id] || ""}
                          onChange={(e) => handleRadioChange(item.id, e.target.value)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Tooltip title={item.info} arrow>
                        <IconButton size="small">
                          <InfoIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} size={12}>
                  <Divider />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default IncomeForm;
