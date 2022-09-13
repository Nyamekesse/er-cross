//

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// MUI components
import CustomTypography from "components/CustomTypography";

// Custom styles for CustomProgress
import CustomProgressRoot from "components/CustomProgress/CustomProgressRoot";

const CustomProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <CustomTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </CustomTypography>
    )}
    <CustomProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of CustomProgress
CustomProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the CustomProgress
CustomProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default CustomProgress;
