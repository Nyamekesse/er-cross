//

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Doughnut } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// DefaultDoughnutChart configurations
import configs from "customs/Charts/DoughnutCharts/DefaultDoughnutChart/configs";

function DefaultDoughnutChart({ title, description, height, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {}, chart.cutout);

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
            <Doughnut data={data} options={options} />
          </CustomBox>
        ),
        [chart, height]
      )}
    </CustomBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of DefaultDoughnutChart
DefaultDoughnutChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the DefaultDoughnutChart
DefaultDoughnutChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default DefaultDoughnutChart;
