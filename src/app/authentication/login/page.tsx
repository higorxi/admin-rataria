"use client";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";

const Login2 = () => {
  const svgBackground = `
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
      <defs>
        <linearGradient id="gradient" x1="97%" y1="33%" x2="3%" y2="67%">
          <stop offset="5%" stop-color="#fcb900"></stop>
          <stop offset="95%" stop-color="#36c6c6"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,600 L 0,150 C 60.78468899521536,166.2775119617225 121.56937799043072,182.55502392344496 238,173 C 354.4306220095693,163.44497607655504 526.5071770334927,128.05741626794259 625,119 C 723.4928229665073,109.9425837320574 748.4019138755982,127.2153110047847 817,142 C 885.5980861244018,156.7846889952153 997.8851674641148,169.08133971291866 1109,170 C 1220.1148325358852,170.91866028708134 1330.0574162679427,160.45933014354068 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.8" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
      <defs>
        <linearGradient id="gradient" x1="97%" y1="33%" x2="3%" y2="67%">
          <stop offset="5%" stop-color="#fcb900"></stop>
          <stop offset="95%" stop-color="#36c6c6"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,600 L 0,350 C 90.57416267942583,315.37799043062205 181.14832535885165,280.75598086124404 289,298 C 396.85167464114835,315.24401913875596 521.9808612440191,384.35406698564594 629,406 C 736.0191387559809,427.64593301435406 824.9282296650717,401.82775119617224 904,382 C 983.0717703349283,362.17224880382776 1052.3062200956938,348.3349282296651 1140,344 C 1227.6937799043062,339.6650717703349 1333.846889952153,344.83253588516743 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
    </svg>
  `;

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          "&:before": {
            content: '""',
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(svgBackground)}")`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.7,
            zIndex: -1,
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Painel Administrativo
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
