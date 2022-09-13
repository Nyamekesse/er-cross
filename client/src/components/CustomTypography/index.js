//

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for CustomTypography
import CustomTypographyRoot from "components/CustomTypography/CustomTypographyRoot";

// MUI context
import { useCustomController } from "context";

const CustomTypography = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => {
    const [controller] = useCustomController();
    const { darkMode } = controller;

    return (
      <CustomTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </CustomTypographyRoot>
    );
  }
);

// Setting default values for the props of CustomTypography
CustomTypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

// Typechecking props for the CustomTypography
CustomTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default CustomTypography;
