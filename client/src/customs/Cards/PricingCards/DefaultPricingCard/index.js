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
import CustomButton from "components/CustomButton";

function DefaultPricingCard({ title, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <CustomBox key={label} display="flex" alignItems="center" p={1}>
      <CustomBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <CustomTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
        </CustomTypography>
      </CustomBox>
      <CustomTypography variant="body2" color="text">
        {label}
      </CustomTypography>
    </CustomBox>
  ));

  return (
    <Card>
      <CustomBox pt={3} pb={2} px={2} textAlign="center">
        <CustomTypography
          variant="body2"
          color="dark"
          textTransform="uppercase"
          fontWeight="medium"
        >
          {title}
        </CustomTypography>
        <CustomBox my={1}>
          <CustomTypography variant="h1">
            <CustomTypography display="inline" component="small" variant="h2">
              {price.currency}
            </CustomTypography>
            {price.value}
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <CustomBox mt={3}>
            <CustomButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </CustomButton>
          </CustomBox>
        ) : (
          <CustomBox mt={3}>
            <CustomButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </CustomButton>
          </CustomBox>
        )}
      </CustomBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
};

export default DefaultPricingCard;
