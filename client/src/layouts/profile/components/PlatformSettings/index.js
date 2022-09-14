//

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <CustomBox pt={2} px={2}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </CustomTypography>
      </CustomBox>
      <CustomBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <CustomTypography
          variant="caption"
          fontWeight="bold"
          color="text"
          textTransform="uppercase"
        >
          account
        </CustomTypography>
        <CustomBox display="flex" py={1} mb={0.25}>
          <CustomBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </CustomBox>
          <CustomBox width="80%" ml={2}>
            <CustomTypography variant="button" fontWeight="regular" color="text">
              Email me when health service arrives
            </CustomTypography>
          </CustomBox>
        </CustomBox>
        <CustomBox display="flex" py={1} mb={0.25}></CustomBox>
        <CustomBox display="flex" py={1} mb={0.25}></CustomBox>
        <CustomBox mt={3}>
          <CustomTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            application
          </CustomTypography>
        </CustomBox>
        <CustomBox display="flex" py={1} mb={0.25}>
          <CustomBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </CustomBox>
          <CustomBox width="80%" ml={2}>
            <CustomTypography variant="button" fontWeight="regular" color="text">
              New income request
            </CustomTypography>
          </CustomBox>
        </CustomBox>

        <CustomBox display="flex" py={1} mb={0.25}>
          <CustomBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </CustomBox>
          <CustomBox width="80%" ml={2}>
            <CustomTypography variant="button" fontWeight="regular" color="text">
              Subscribe to health news
            </CustomTypography>
          </CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default PlatformSettings;
