import React from "react";
import RightBar from "./components/RightBar";
import Feeds from "./components/Feeds";
import SideBar from "./components/Sidebar";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
const DashBoard = () => {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
      <Navbar />
      <SideBar />
      <Feeds />
      <RightBar />
    </Stack>
  );
};

export default DashBoard;
