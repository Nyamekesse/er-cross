// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

function Footer() {
  return (
    <CustomBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <CustomBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <CustomBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                Company
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                Team
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                Product
              </CustomTypography>
            </CustomBox>
            <CustomBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </CustomTypography>
            </CustomBox>
            <CustomBox>
              <CustomTypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </CustomTypography>
            </CustomBox>
          </CustomBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CustomBox display="flex" justifyContent="center" mt={1} mb={3}>
            <CustomBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </CustomBox>
            <CustomBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </CustomBox>
            <CustomBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </CustomBox>
            <CustomBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </CustomBox>
            <CustomBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </CustomBox>
          </CustomBox>
        </Grid>
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
