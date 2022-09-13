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
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox py={3}>
        <CustomBox mb={3}>
          <Card>
            <CustomBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <CustomTypography variant="h6">Authors table</CustomTypography>
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
        <Card>
          <CustomBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <CustomTypography variant="h6">Projects table</CustomTypography>
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
            <Table columns={prCols} rows={prRows} />
          </CustomBox>
        </Card>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
