//

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// Timeline context
import { TimelineProvider } from "customs/Timeline/context";

function TimelineList({ title, dark, children }) {
  return (
    <TimelineProvider value={dark}>
      <Card>
        <CustomBox bgColor={dark ? "dark" : "white"} variant="gradient">
          <CustomBox pt={3} px={3}>
            <CustomTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </CustomTypography>
          </CustomBox>
          <CustomBox p={2}>{children}</CustomBox>
        </CustomBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
