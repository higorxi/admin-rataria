'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import UserTable from '../../components/dashboard/TableUsers';
import UserStats from '@/app/(DashboardLayout)/components/dashboard/DataUsers1';
import UserStatsByRegion from '../../components/dashboard/DataUsers2';

const UserDashboard = () => {
  return (
    <PageContainer title="Dashboard - Usuário" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
          <UserStats />
          </Grid>
          <Grid item xs={12} lg={6}>
          <UserStatsByRegion />
          </Grid>
          <Grid item xs={12} lg={12}>
          <UserTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default UserDashboard;
