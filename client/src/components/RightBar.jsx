import Category from "./Category";
import DisplayNumber from "./DisplayNumber";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        position={"fixed"}
        width={"30%"}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(to bottom, #fad0c4 30%, #e76868 100%)",
        }}
      >
        <Typography variant="h6" mt={2} mb={2} align={"center"}>
          Customize Feeds
        </Typography>
        <Category />
        <DisplayNumber />
        <Button
          variant="outlined"
          sx={{
            margin: "5% 0 2% 2%",
            color: "#e76868",
            borderColor: "#e76868",
            ":hover": {
              color: "white",
              borderColor: "white",
            },
          }}
        >
          display
        </Button>
      </Box>
    </Box>
  );
};

export default RightBar;
