import { useState, useEffect } from 'react';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

interface RegionData {
  region: string;
  users: number;
}

const UserStatsByRegion = () => {
  const [usuariosPorRegiao, setUsuariosPorRegiao] = useState<Record<string, number>>({
    Norte: 0,
    Sul: 0,
    Leste: 0,
    Oeste: 0,
    CentroOeste: 0,
  });

  useEffect(() => {
    const fetchedUsuarios: Record<string, number> = {
      Norte: 150,
      Sul: 350,
      Leste: 450,
      Oeste: 200,
      CentroOeste: 100,
    };

    setUsuariosPorRegiao(fetchedUsuarios);
  }, []);

  const regionsSorted: RegionData[] = Object.entries(usuariosPorRegiao)
    .sort(([, a], [, b]) => b - a)
    .map(([region, users]) => ({ region, users }));

  return (
    <DashboardCard title="Ranking de Regiões">
      <Stack direction="row" spacing={3}>
        {regionsSorted.slice(0, 3).map((regionData, index) => (
          <Stack direction="column" spacing={1.5} alignItems="center" key={regionData.region}>
            <Avatar sx={{ bgcolor: index === 0 ? '#4CAF50' : index === 1 ? '#FF9800' : '#F44336', width: 40, height: 40 }}>
              {index === 0 ? <IconArrowUpRight width={20} /> : index === 1 ? <IconArrowUpRight width={20} /> : <IconArrowDownRight width={20} />}
            </Avatar>

            <Typography variant="h6" fontWeight="600">
              {regionData.region}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {regionData.users} Usuários
            </Typography>

            <Typography variant="h6" fontWeight="600" color={index === 0 ? 'green' : index === 1 ? 'orange' : 'red'}>
              {index === 0 ? 'Top 1' : index === 1 ? 'Top 2' : 'Top 3'}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </DashboardCard>
  );
};

export default UserStatsByRegion;
