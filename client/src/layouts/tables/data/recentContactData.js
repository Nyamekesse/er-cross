import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";
import CustomAvatar from "components/CustomAvatar";

function Author() {
  return (
    <CustomBox display="flex" alignItems="center" px={1} py={0.5}>
      <CustomBox mr={2}>
        <CustomAvatar src="" alt={""} size="sm" variant="rounded" />
      </CustomBox>
      <CustomBox display="flex" flexDirection="column">
        <CustomTypography variant="button" fontWeight="medium">
          Samuel Nyamekesse
        </CustomTypography>
        <CustomTypography variant="caption" color="secondary">
          snyamekesse@gmail.com
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
}

const recentContactData = {
  columns: [
    { name: "Client Name", align: "left" },
    { name: "Email", align: "left" },
    { name: "Solved", align: "center" },
    { name: "Date", align: "center" },
    { name: "actions", align: "center" },
  ],

  rows: [
    {
      author: <></>,
      Email: <></>,
      Solved: <></>,
      Date: <></>,
      actions: <></>,
    },
  ],
};

export default recentContactData;
