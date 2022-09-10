import { Logout } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import menuList from "../configFiles/menu-list";

const Sidebar = () => {
  return (
    <Box flex={1}>
      <Box
        position={"fixed"}
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(to bottom, #fad0c4 50%, #e76868 100%)",
        }}
      >
        <List>
          {menuList.map((menu) => {
            const { id, icon, text } = menu;
            return (
              <ListItem disablePadding key={id}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <Button
            endIcon={<Logout />}
            sx={{
              color: "#222",
              marginTop: "calc(100% + 50px)",
              marginLeft: "10px",
            }}
          >
            Logout
          </Button>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
