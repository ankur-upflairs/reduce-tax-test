import React from "react";
import { Box, Typography, Button, Container, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const HeroSection = () => {
    return (
        <Box
            sx={{
                // backgroundColor: "#f5f5f5", // Light gray background
                color: "black", // Black text color
                py: 8,
                px: 2,
            }}
        >
            <Container >
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                >
                    {/* Left Section: Text Content */}
                    <Grid size={{ xs: 12, md: 12 ,lg:6}}>
                        <Box sx={{ textAlign: { xs: "center", md: "left" } }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    fontWeight: "bold",
                                    mb: 3,
                                    fontSize: { xs: "2.5rem", md: "3rem" },
                                }}
                            >
                                Tax Saving? <br />
                                Let’s Make It Easy!
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    fontSize: { xs: "1rem", md: "1.2rem" },
                                    lineHeight: 1.8,
                                }}
                            >
                                Save more on your income tax returns with expert planning and
                                smart strategies. Maximize deductions, simplify filing, and
                                achieve peace of mind—all in one place.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    gap: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    href="#file-now"
                                >
                                    File Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                    href="#know-more"
                                >
                                    Know More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Section: Card with Icon */}
                    <Grid size={{ xs: 12, md: 12 ,lg:6}} justifyContent={"center"}>
                        <Card
                            sx={{
                                maxWidth: 400,
                                margin: { xs: "auto", md: "0" },
                                textAlign: "center",
                                padding: 3,
                                boxShadow: 2,
                                borderRadius: "8px",
                                backgroundColor: "#f5f5f5",
                            }}
                        >
                            <FileCopyIcon
                                sx={{ fontSize: "4rem", color: "primary.main", mb: 2 }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 2,
                                    }}
                                >
                                    Simplify Your ITR Filing
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 3,
                                        color: "text.secondary",
                                    }}
                                >
                                    Upload your documents and file your income tax returns with
                                    ease. Our expert system guides you every step of the way.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="#file-itr"
                                >
                                    File ITR
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
