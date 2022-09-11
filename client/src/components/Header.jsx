import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button>E-cross</Button>
        <div>
          <Button
            variant="outlined"
            size="small"
            sx={{ margin: "0 3px" }}
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ margin: "0 3px" }}
            onClick={() => {
              navigate("/log-in");
            }}
          >
            Sign In
          </Button>
        </div>
      </Toolbar>
    </>
  );
};

export default Header;
