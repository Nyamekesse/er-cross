// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// MUI example components
import DefaultNavbar from "customs/Navbars/DefaultNavbar";
import PageLayout from "customs/LayoutContainers/PageLayout";

function IllustrationLayout({ color, header, title, description, button, illustration, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar />
      <Grid container>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <CustomBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <CustomBox pt={3} px={3}>
              {!header ? (
                <>
                  <CustomBox mb={1}>
                    <CustomTypography variant="h4" fontWeight="bold">
                      {title}
                    </CustomTypography>
                  </CustomBox>
                  <CustomTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </CustomTypography>
                </>
              ) : (
                header
              )}
            </CustomBox>
            <CustomBox p={3}>{children}</CustomBox>
          </CustomBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomBox
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={2}
            px={13}
            sx={{ overflow: "hidden" }}
          >
            <CustomBox
              component="img"
              src={illustration.image}
              alt="background"
              width="100%"
              position="absolute"
              top={0}
              left={0}
            />
            <CustomBox
              bgColor={color}
              variant="gradient"
              width="100%"
              height="100%"
              position="absolute"
              topl={0}
              left={0}
              opacity={0.7}
            />
            <CustomBox position="relative">
              {illustration.title && (
                <CustomBox mt={6} mb={1}>
                  <CustomTypography variant="h4" color="white" fontWeight="bold">
                    {illustration.title}
                  </CustomTypography>
                </CustomBox>
              )}
              {illustration.description && (
                <CustomBox mb={1}>
                  <CustomTypography variant="body2" color="white">
                    {illustration.description}
                  </CustomTypography>
                </CustomBox>
              )}
            </CustomBox>
          </CustomBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  button: { color: "info" },
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
