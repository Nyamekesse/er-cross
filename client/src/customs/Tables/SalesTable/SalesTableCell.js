//

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableCell from "@mui/material/TableCell";

// MUI components
import CustomTypography from "components/CustomTypography";
import CustomBox from "components/CustomBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <CustomBox display="flex" alignItems="center" width="max-content">
          <CustomBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <CustomBox display="flex" flexDirection="column" ml={3}>
            <CustomTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </CustomTypography>
            <CustomTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {content}
            </CustomTypography>
          </CustomBox>
        </CustomBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <CustomBox display="flex" flexDirection="column">
          <CustomTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </CustomTypography>
          <CustomTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {content}
          </CustomTypography>
        </CustomBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
