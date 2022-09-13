/* eslint-disable react/prop-types */
// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomAvatar from "components/CustomAvatar";
import CustomBadge from "components/CustomBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <CustomBox display="flex" alignItems="center" px={1} py={0.5}>
      <CustomBox mr={2}>
        <CustomAvatar src={image} alt={name} size="sm" variant="rounded" />
      </CustomBox>
      <CustomBox display="flex" flexDirection="column">
        <CustomTypography variant="button" fontWeight="medium">
          {name}
        </CustomTypography>
        <CustomTypography variant="caption" color="secondary">
          {email}
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
}

function Function({ job, org }) {
  return (
    <CustomBox display="flex" flexDirection="column">
      <CustomTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </CustomTypography>
      <CustomTypography variant="caption" color="secondary">
        {org}
      </CustomTypography>
    </CustomBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <CustomBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <CustomBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <CustomBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <CustomBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <CustomBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <CustomBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <CustomTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </CustomTypography>
      ),
      action: (
        <CustomTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </CustomTypography>
      ),
    },
  ],
};

export default authorsTableData;
