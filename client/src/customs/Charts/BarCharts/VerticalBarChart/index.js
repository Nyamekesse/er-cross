//

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// VerticalBarChart configurations
import configs from "customs/Charts/BarCharts/VerticalBarChart/configs";

// MUI Base Styles
import colors from "assets/theme/base/colors";

function VerticalBarChart({ title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: false,
        maxBarThickness: 35,
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
          <CustomBox height={height}>
            <Bar data={data} options={options} />
          </CustomBox>
        ),
        [chart, height]
      )}
    </CustomBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of VerticalBarChart
VerticalBarChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the VerticalBarChart
VerticalBarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default VerticalBarChart;
