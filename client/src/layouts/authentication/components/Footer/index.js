// @mui material components
import Grid from "@mui/material/Grid";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

function Footer() {
  return (
    <CustomBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <CustomTypography variant="body2" color="secondary">
            Copyright &copy; ER-Cross | All Rights reserved
          </CustomTypography>
        </Grid>
      </Grid>
    </CustomBox>
  );
}

export default Footer;
