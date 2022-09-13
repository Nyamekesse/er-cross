//

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { PolarArea } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// PolarChart configurations
import configs from "customs/Charts/PolarChart/configs";

function PolarChart({ title, description, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

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
          <CustomBox p={4}>
            <PolarArea data={data} options={options} />
          </CustomBox>
        ),
        [chart]
      )}
    </CustomBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PolarChart;
