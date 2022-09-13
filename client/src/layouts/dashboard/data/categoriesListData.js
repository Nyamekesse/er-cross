//

// MUI components
import CustomTypography from "components/CustomTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </CustomTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </CustomTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </CustomTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Happy Users",
    description: (
      <>
        <CustomTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;430
        </CustomTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
