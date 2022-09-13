//

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for CustomInput
import CustomInputRoot from "components/CustomInput/CustomInputRoot";

// MUI context
import { useCustomController } from "context";

const CustomInput = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  const [controller] = useCustomController();
  const { darkMode } = controller;

  return (
    <CustomInputRoot
      {...rest}
      ref={ref}
      ownerState={{ size, error, success, disabled, darkMode }}
    />
  );
});

// Setting default values for the props of CustomInput
CustomInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the CustomInput
CustomInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CustomInput;
