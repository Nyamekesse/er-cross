//

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

function CategoriesList({ title, categories }) {
  const renderItems = categories.map(({ color, icon, name, description, route }, key) => (
    <CustomBox
      key={name}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={categories.length - 1 === key ? 0 : 1}
    >
      <CustomBox display="flex" alignItems="center">
        <CustomBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={color}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          variant="gradient"
        >
          <Icon
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {icon}
          </Icon>
        </CustomBox>
        <CustomBox display="flex" flexDirection="column">
          <CustomTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </CustomTypography>
          <CustomTypography variant="caption" color="text">
            {description}
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox display="flex">
        <CustomTypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  ));

  return (
    <Card>
      <CustomBox pt={2} px={2}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CustomTypography>
      </CustomBox>
      <CustomBox p={2}>
        <CustomBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
