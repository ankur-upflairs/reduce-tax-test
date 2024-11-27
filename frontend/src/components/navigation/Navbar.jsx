import React, { useState } from "react";
import { Box, Stack, Button, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box>
      <Stack
        width={"90%"}
        mt={2}
        mx={"auto"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack color={"primary.main"}>REDUCE TAX</Stack>

        {/* Menu for Small Screens */}
        {isSmallScreen ? (
          <>
            <IconButton onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={toggleMenu}
              PaperProps={{
                sx: { width: "70%" }, // Adjust drawer width
              }}
            >
              <Stack
                spacing={2}
                mt={2}
                mx={2}
                direction={"column"}
                alignItems={"flex-start"}
              >
                <Button variant="text" color="text" onClick={toggleMenu}>
                  Tools
                </Button>
                <Button variant="text" color="text" onClick={toggleMenu}>
                  Services
                </Button>
                <Button variant="contained" color="primary" onClick={toggleMenu}>
                  Signup
                </Button>
                <Button variant="contained" color="primary" onClick={toggleMenu}>
                  Login
                </Button>
              </Stack>
            </Drawer>
          </>
        ) : (
          // Menu for Larger Screens
          <Stack spacing={2} direction={"row"}>
            <Button variant="text" color="text">
              Tools
            </Button>
            <Button variant="text" color="text">
              Services
            </Button>
            <Button variant="contained" color="primary">
              Signup
            </Button>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default ResponsiveNavbar;
