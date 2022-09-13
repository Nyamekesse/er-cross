// MUI components
import CustomBox from "components/CustomBox";

// MUI Base Styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <CustomBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <CustomBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()} ER-Cross | All Rights reserved
      </CustomBox>
    </CustomBox>
  );
}

// Setting default values for the props of Footer

export default Footer;
