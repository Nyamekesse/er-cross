import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const LogOut = () => {
  return (
    <Button
      endIcon={<Logout />}
      sx={{ color: "#222", display: "absolute", bottom: "0px" }}
    >
      Logout
    </Button>
  );
};

export default LogOut;
