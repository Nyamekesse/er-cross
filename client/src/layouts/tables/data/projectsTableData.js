/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomProgress from "components/CustomProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <CustomBox display="flex" alignItems="center">
      <CustomTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </CustomTypography>
      <CustomBox width="8rem">
        <CustomProgress value={value} color={color} variant="gradient" label={false} />
      </CustomBox>
    </CustomBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          working
        </CustomTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          done
        </CustomTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </CustomTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </CustomTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          working
        </CustomTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <CustomTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </CustomTypography>
      ),
      status: (
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          done
        </CustomTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
