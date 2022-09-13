//

// @mui material components
import Divider from "@mui/material/Divider";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

function Separator() {
  return (
    <CustomBox position="relative" py={0.25}>
      <Divider />
      <CustomBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <CustomTypography variant="button" fontWeight="medium" color="secondary">
          or
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
}

export default Separator;
