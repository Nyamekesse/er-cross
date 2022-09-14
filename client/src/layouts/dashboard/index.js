//

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// MUI examples
import DashboardLayout from "customs/LayoutContainers/DashboardLayout";
import DashboardNavbar from "customs/Navbars/DashboardNavbar";
import Footer from "customs/Footer";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox py={3}>
        <CustomBox mb={3}>
          <Card>
            <CustomBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <CustomTypography variant="h6">Dashboard</CustomTypography>
            </CustomBox>
            <CustomBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            ></CustomBox>
          </Card>
        </CustomBox>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
