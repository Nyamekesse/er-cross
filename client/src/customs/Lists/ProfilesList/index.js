//

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomAvatar from "components/CustomAvatar";
import CustomButton from "components/CustomButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <CustomBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <CustomBox mr={2}>
        <CustomAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </CustomBox>
      <CustomBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <CustomTypography variant="button" fontWeight="medium">
          {name}
        </CustomTypography>
        <CustomTypography variant="caption" color="text">
          {description}
        </CustomTypography>
      </CustomBox>
      <CustomBox ml="auto">
        {action.type === "internal" ? (
          <CustomButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </CustomButton>
        ) : (
          <CustomButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </CustomButton>
        )}
      </CustomBox>
    </CustomBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <CustomBox pt={2} px={2}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CustomTypography>
      </CustomBox>
      <CustomBox p={2}>
        <CustomBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
