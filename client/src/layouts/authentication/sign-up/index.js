//
import docsImg from "../../../assets/images/group-of-doctors.jpg";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
const bgImage = docsImg;

function Cover() {
  return (
    <CoverLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        <CustomBox p={3} mb={1} textAlign="center">
          <CustomTypography variant="h5" fontWeight="medium">
            Register with
          </CustomTypography>
        </CustomBox>
        <CustomBox mb={2}>
          <Socials />
        </CustomBox>
        <CustomBox px={12}>
          <Separator />
        </CustomBox>
        <CustomBox pt={2} pb={3} px={3}>
          <CustomBox component="form" role="form">
            <CustomBox mb={2}>
              <CustomInput placeholder="Name" />
            </CustomBox>
            <CustomBox mb={2}>
              <CustomInput type="email" placeholder="Email" />
            </CustomBox>
            <CustomBox mb={2}>
              <CustomInput type="password" placeholder="Password" />
            </CustomBox>
            <CustomBox display="flex" alignItems="center">
              <Checkbox defaultChecked />
              <CustomTypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </CustomTypography>
              <CustomTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </CustomTypography>
            </CustomBox>
            <CustomBox mt={4} mb={1}>
              <CustomButton variant="gradient" color="dark" fullWidth>
                sign up
              </CustomButton>
            </CustomBox>
            <CustomBox mt={2}>
              <CustomTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <CustomTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </CustomTypography>
              </CustomTypography>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
