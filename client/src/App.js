import "./App.css";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Feeds from "./components/Feeds";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Feeds />
        <RightBar />
      </Stack>
    </>
  );
}

export default App;
