import { Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledToolBar, Icons, UserBox } from "../Styles/componentStyles";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundImage: "linear-gradient(to top, #fad0c4 10%, #e76868 100%)",
      }}
    >
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          E-CROSS
        </Typography>
        <LocalHospitalOutlinedIcon
          sx={{ display: { xs: "block", sm: "none" }, width: 40, height: 40 }}
        />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={10} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jeeiZFn4sJVpD_ihjgxJtwHaEK%26pid%3DApi&f=1"
          />
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
            }}
          >
            logout
          </Button>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jeeiZFn4sJVpD_ihjgxJtwHaEK%26pid%3DApi&f=1"
          />
          <Typography variant="span">John Doe</Typography>
          <Tooltip title="Sign Out">
            <IconButton>
              <LogoutOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
