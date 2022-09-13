import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/CustomBox";
import CustomTypography from "components/CustomTypography";

// MUI exampless
import DefaultNavbarDropdown from "customs/Navbars/DefaultNavbar/DefaultNavbarDropdown";

// PRO React contexts
import { useCustomController } from "context";

function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");
  const [controller] = useCustomController();
  const { darkMode } = controller;

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <CustomBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <CustomBox key={item.name} px={item.icon ? 1 : 2}>
                {item.collapse ? (
                  <>
                    <CustomBox width="100%" display="flex" alignItems="center" p={1}>
                      {item.icon && (
                        <CustomBox
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="1.5rem"
                          height="1.5rem"
                          borderRadius="md"
                          color="text"
                          mr={1}
                          fontSize="1rem"
                          lineHeight={1}
                        >
                          {typeof item.icon === "string" ? <Icon>{item.icon}</Icon> : item.icon}
                        </CustomBox>
                      )}
                      <CustomTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {item.name}
                      </CustomTypography>
                    </CustomBox>
                    {item.collapse.map((el, index) => (
                      <CustomTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={item.icon ? 5 : 2}
                        mb={index === item.collapse.length - 1 ? 2 : 0}
                        sx={({
                          palette: { white, grey, dark },
                          borders: { borderRadius },
                          functions: { rgba },
                        }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: rgba(grey[200], darkMode ? 0.1 : 1),
                            color: darkMode ? white.main : dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </CustomTypography>
                    ))}
                  </>
                ) : (
                  <CustomBox
                    key={item.key}
                    display="flex"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({
                      palette: { white, grey, dark },
                      borders: { borderRadius },
                      functions: { rgba },
                    }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: rgba(grey[200], darkMode ? 0.1 : 1),
                        color: darkMode ? white.main : dark.main,
                      },
                    })}
                  >
                    <CustomBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="1.5rem"
                      height="1.5rem"
                      borderRadius="md"
                      color="text"
                      mr={1}
                      fontSize="1rem"
                      lineHeight={1}
                    >
                      {typeof item.icon === "string" ? <Icon>{item.icon}</Icon> : item.icon}
                    </CustomBox>
                    <CustomBox>
                      <CustomTypography
                        display="block"
                        variant="button"
                        fontWeight={!item.description ? "regular" : "bold"}
                        mt={!item.description ? 0.25 : 0}
                        textTransform="capitalize"
                      >
                        {item.name || "&nbsp"}
                      </CustomTypography>
                      {item.description && (
                        <CustomTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={{ transition: "all 300ms linear" }}
                        >
                          {item.description}
                        </CustomTypography>
                      )}
                    </CustomBox>
                  </CustomBox>
                )}
              </CustomBox>
            ))}
        </CustomBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <CustomBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </CustomBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
