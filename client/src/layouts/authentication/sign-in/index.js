//
import displayImage from "../../../assets/images/hospital-bed.jpg";
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage = displayImage;

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <CustomBox component="form" role="form">
        <CustomBox mb={2}>
          <CustomInput type="email" placeholder="Email" size="large" />
        </CustomBox>
        <CustomBox mb={2}>
          <CustomInput type="password" placeholder="Password" size="large" />
        </CustomBox>
        <CustomBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <CustomTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </CustomTypography>
        </CustomBox>
        <CustomBox mt={4} mb={1}>
          <CustomButton color="info" size="large" fullWidth>
            Sign In
          </CustomButton>
        </CustomBox>
        <CustomBox mt={3} textAlign="center">
          <CustomTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <CustomTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </CustomTypography>
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </IllustrationLayout>
  );
}

export default Illustration;
