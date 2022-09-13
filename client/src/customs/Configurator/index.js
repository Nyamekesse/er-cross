// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";

import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomButton from "components/CustomButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "customs/Configurator/ConfiguratorRoot";

// MUI context
import {
  useCustomController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useCustomController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <CustomBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <CustomBox>
          <CustomTypography variant="h5">Configurator</CustomTypography>
          <CustomTypography variant="body2" color="text">
            See our dashboard options.
          </CustomTypography>
        </CustomBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </CustomBox>

      <Divider />

      <CustomBox pt={1.25} pb={3} px={3}>
        <CustomBox>
          <CustomTypography variant="h6">Sidenav Colors</CustomTypography>

          <CustomBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColor === color && dark.main,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </CustomBox>
        </CustomBox>

        <CustomBox mt={3} lineHeight={1}>
          <CustomTypography variant="h6">Sidenav Type</CustomTypography>
          <CustomTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </CustomTypography>

          <CustomBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
            <CustomButton
              color="info"
              variant={darkSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              fullWidth
            >
              White
            </CustomButton>
            <CustomButton
              color="info"
              variant={darkSidenav ? "gradient" : "outlined"}
              onClick={handledarkSidenav}
              fullWidth
              sx={{
                ml: 1,
              }}
            >
              Dark
            </CustomButton>
          </CustomBox>
        </CustomBox>
        <CustomBox display="flex" justifyContent="space-between" mt={3} lineHeight={1}>
          <CustomTypography variant="h6">Navbar Fixed</CustomTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </CustomBox>

        <Divider />

        <CustomBox display="flex" justifyContent="space-between" lineHeight={1}>
          <CustomTypography variant="h6">Sidenav Mini</CustomTypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </CustomBox>

        <Divider />

        <CustomBox display="flex" justifyContent="space-between" lineHeight={1}>
          <CustomTypography variant="h6">Light / Dark</CustomTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </CustomBox>
      </CustomBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
