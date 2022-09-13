//

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// MUI components
import CustomBox from "components/CustomBox";

// Custom styles for the CustomAlert
import CustomAlertRoot from "components/CustomAlert/CustomAlertRoot";
import CustomAlertCloseIcon from "components/CustomAlert/CustomAlertCloseIcon";

function CustomAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <CustomAlertRoot ownerState={{ color }} {...rest}>
        <CustomBox display="flex" alignItems="center" color="white">
          {children}
        </CustomBox>
        {dismissible ? (
          <CustomAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </CustomAlertCloseIcon>
        ) : null}
      </CustomAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of CustomAlert
CustomAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the CustomAlert
CustomAlert.propTypes = {
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
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomAlert;
