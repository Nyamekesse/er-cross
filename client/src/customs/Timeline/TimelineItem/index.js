//

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomBadge from "components/CustomBadge";

// Timeline context
import { useTimeline } from "customs/Timeline/context";

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from "customs/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <CustomBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <CustomBadge color={color} size="xs" badgeContent={badge} container />
            </CustomBox>
          );
        })
      : null;

  return (
    <CustomBox position="relative" sx={(theme) => timelineItem(theme, { lastItem })}>
      <CustomBox
        bgColor={isDark ? "dark" : "white"}
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
      </CustomBox>
      <CustomBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <CustomTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </CustomTypography>
        <CustomBox mt={0.5}>
          <CustomTypography
            variant="caption"
            fontWeight="medium"
            color={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </CustomTypography>
        </CustomBox>
        <CustomBox mt={2} mb={1.5}>
          {description ? (
            <CustomTypography variant="button" fontWeight="regular" color="text">
              {description}
            </CustomTypography>
          ) : null}
        </CustomBox>
        {badges.length > 0 ? (
          <CustomBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </CustomBox>
        ) : null}
      </CustomBox>
    </CustomBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
