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
import Table from "customs/Tables/Table";

// Data
import medicalServicesData from "layouts/tables/data/recentContactData";

function Tables() {
  const { columns, rows } = medicalServicesData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox py={3}>
        <CustomBox mb={3}>
          <Card>
            <CustomBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <CustomTypography variant="h6">Medicals Service</CustomTypography>
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
            >
              <Table columns={columns} rows={rows} />
            </CustomBox>
          </Card>
        </CustomBox>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
