import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft, IconArrowDownRight } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const UserStats = () => {
  // cores do gráfico
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;
  const warninglight = theme.palette.warning.light;

  // Estado para armazenar os dados dos usuários
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [usuariosUltimoMes, setUsuariosUltimoMes] = useState(0);
  const [usuariosComAnunciosAtivos, setUsuariosComAnunciosAtivos] = useState(0);

  // Dados simulados ou uma chamada de API para pegar os dados
  useEffect(() => {
    // Simulando a obtenção dos dados de usuários (exemplo)
    const fetchedTotalUsuarios = 1200;
    const fetchedUsuariosUltimoMes = 150;
    const fetchedUsuariosComAnunciosAtivos = 300;

    // Atualizando os estados com os dados
    setTotalUsuarios(fetchedTotalUsuarios);
    setUsuariosUltimoMes(fetchedUsuariosUltimoMes);
    setUsuariosComAnunciosAtivos(fetchedUsuariosComAnunciosAtivos);
  }, []);

  // Atualiza os valores do gráfico com base nos dados
  const seriescolumnchart: any = [
    (usuariosUltimoMes / totalUsuarios) * 100,
    (usuariosComAnunciosAtivos / totalUsuarios) * 100,
    100 - ((usuariosUltimoMes / totalUsuarios) * 100 + (usuariosComAnunciosAtivos / totalUsuarios) * 100),
  ];

  // configuração do gráfico
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, successlight, warninglight],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  return (
    <DashboardCard title="Estatísticas de Usuários">
      <Grid container spacing={3}>
        {/* Coluna com números */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {totalUsuarios} Usuários
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +{usuariosUltimoMes}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              novos usuários este mês
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mt={3} alignItems="center">
            <Avatar sx={{ bgcolor: warninglight, width: 27, height: 27 }}>
              <IconArrowDownRight width={20} color="#F8A900" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              {usuariosComAnunciosAtivos}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              usuários com anúncios ativos
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height={150} width={"100%"}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default UserStats;
