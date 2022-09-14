//

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomAvatar from "components/CustomAvatar";

// MUI example components
import DashboardNavbar from "customs/Navbars/DashboardNavbar";

// MUI Base Styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import kesse from "assets/images/kesse.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <CustomBox position="relative">
      <DashboardNavbar absolute light />
      <CustomBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <CustomAvatar src={kesse} alt="profile-image" variant="rounded" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <CustomBox height="100%" mt={0.5} lineHeight={1}>
              <CustomTypography variant="h5" fontWeight="medium">
                Nyamekesse Samuel
              </CustomTypography>
              <CustomTypography variant="button" color="text" fontWeight="medium">
                Student
              </CustomTypography>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}></Grid>
        </Grid>
      </Card>
    </CustomBox>
  );
}

export default Header;
