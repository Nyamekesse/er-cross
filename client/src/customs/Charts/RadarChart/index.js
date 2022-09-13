//

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Radar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// RadarChart configurations
import configs from "customs/Charts/RadarChart/configs";

// MUI Base Styles
import colors from "assets/theme/base/colors";

// MUI Helper Functions
import rgba from "assets/theme/functions/rgba";

function RadarChart({ title, description, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: colors[dataset.color]
          ? rgba(colors[dataset.color || "dark"].main, 0.2)
          : rgba(colors.dark.main, 0.2),
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

  const renderChart = (
    <CustomBox p={2}>
      {title || description ? (
        <CustomBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <CustomBox mb={1}>
              <CustomTypography variant="h6">{title}</CustomTypography>
            </CustomBox>
          )}
          <CustomBox mb={2}>
            <CustomTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </CustomTypography>
          </CustomBox>
        </CustomBox>
      ) : null}
      {useMemo(
        () => (
          <CustomBox p={6}>
            <Radar data={data} options={options} />
          </CustomBox>
        ),
        [chart]
      )}
    </CustomBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of RadarChart
RadarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the RadarChart
RadarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default RadarChart;
