import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="username"
          mb="5px"
        >
          Usuário
        </Typography>
        <CustomTextField variant="outlined" fullWidth />
      </Box>
      <Box mt="25px">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
        >
          Senha
        </Typography>
        <CustomTextField type="password" variant="outlined" fullWidth />
      </Box>
    </Stack>
    <Box mt='2rem'>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
      >
        Login
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
