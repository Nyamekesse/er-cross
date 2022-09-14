//

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// MUI components
import CustomBox from "components/CustomBox";

// MUI example components
import DashboardLayout from "customs/LayoutContainers/DashboardLayout";
import Footer from "customs/Footer";
import ProfileInfoCard from "customs/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "customs/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/-dashboard-pro/assets/img/profile-layout-header.jpg";

function Overview() {
  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Header />
      <CustomBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I am Nyamekesse Samuel, A passionate software developer with project managerial skills and a never-ending drive to improve my skills. Mainly focuses on developing web applications with React js, Redux, and React Material UI for frontend and either Flask or Node js for backend with a relational database system specifically PostgreSQL or non-relational database specifically Mongo DB as the backing database."
              info={{
                fullName: "Nyamekesse Samuel",
                mobile: "0548313995",
                email: "snyamekesse@gmail.com",
                location: "Ghana",
              }}
              social={[
                {
                  link: "https://www.facebook.com/samuel.nyamekesse",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/nyamekesse_sam",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/cwesi_kesse/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="conversations" profiles={profilesListData} />
          </Grid>
        </Grid>
      </CustomBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
