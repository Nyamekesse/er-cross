// MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import MedicalServices from "layouts/medical-services";
import Groups from "layouts/groups";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// MUI components
import CustomBox from "components/CustomBox";

const routes = [
  {
    type: "route",
    name: "Daily Feeds",
    key: "dashboard",
    route: "/dashboard",
    icon: <CustomBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Recent Contacts",
    key: "tables",
    route: "/tables",
    icon: (
      <CustomBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Groups",
    key: "groups",
    route: "/groups",
    icon: <CustomBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Groups />,
  },
  {
    type: "route",
    name: "Medical Services",
    key: "medical-services",
    route: "/medical-services",
    icon: <CustomBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <MedicalServices />,
  },

  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <CustomBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <CustomBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
