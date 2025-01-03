"use client";

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Rating,
  Button,
  TextField,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Switch,
  Pagination,
} from "@mui/material";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

interface Ad {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  active: boolean;
  rating: number;
}

const adsData: Ad[] = [
  {
    id: 1,
    title: "Anúncio 1",
    description: "Descrição do Anúncio 1",
    imageUrl: "/static/images/cards/yosemite.jpeg",
    active: true,
    rating: 4,
  },
  {
    id: 2,
    title: "Anúncio 2",
    description: "Descrição do Anúncio 2",
    imageUrl: "/static/images/cards/yellowstone.jpeg",
    active: false,
    rating: 5,
  },
  // Adicione mais anúncios para testar a paginação
];

const AdDashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [ads, setAds] = useState(adsData);
  const [page, setPage] = useState(1);
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const rowsPerPage = 6; // Atualizado para 6 anúncios por página

  const handleSearch = () => {
    const searchResults = adsData.filter((ad) =>
      ad.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setAds(searchResults);
    setPage(1);
  };

  const handleOpenModal = (ad: Ad) => {
    setSelectedAd(ad);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedAd(null);
    setOpenModal(false);
  };

  const toggleActive = (adId: number) => {
    setAds((prevAds) =>
      prevAds.map((ad) => (ad.id === adId ? { ...ad, active: !ad.active } : ad))
    );
  };

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const paginatedAds = ads.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const adsWithPlaceholders: (Ad | null)[] = [...paginatedAds];
  while (adsWithPlaceholders.length < rowsPerPage) {
    adsWithPlaceholders.push(null);
  }

  return (
    <PageContainer title="Anúncios" description="Dados dos usuários">
      <DashboardCard title="Gerenciamento de Anúncios">
        <>
          <Stack direction="row" spacing={2} style={{ marginBottom: "20px" }}>
            <TextField
              label="Buscar anúncio"
              variant="outlined"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {adsWithPlaceholders.map((ad, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                {ad ? (
                  <Card>
                    <CardMedia
                      component="img"
                      alt={ad.title}
                      height="140"
                      image={ad.imageUrl}
                    />
                    <Stack
                      direction="row"
                      alignItems="center"
                      p={2}
                      spacing={3}
                    >
                      <Stack direction="column" spacing={0.5}>
                        <Typography variant="h6" noWrap>
                          {ad.title}
                        </Typography>
                        <Typography variant="body2" noWrap>
                          {ad.description}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            size="small"
                            label={ad.active ? "Ativo" : "Inativo"}
                            color={ad.active ? "success" : "default"}
                          />
                          <Rating value={ad.rating} size="small" readOnly />
                        </Stack>
                      </Stack>
                      <Switch
                        checked={ad.active}
                        onChange={() => toggleActive(ad.id)}
                        color="primary"
                      />
                    </Stack>
                    <Stack direction="row" justifyContent="space-around" p={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpenModal(ad)}
                      >
                        Ver Detalhes
                      </Button>
                      <Button variant="outlined" color="secondary">
                        Editar
                      </Button>
                    </Stack>
                  </Card>
                ) : (
                  // Placeholder vazio
                  <div style={{ width: "100%", height: "300px" }} />
                )}
              </Grid>
            ))}
          </Grid>

          <Pagination
            count={Math.ceil(ads.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />

          {/* Modal de detalhes do anúncio */}
          <Dialog
            open={openModal}
            onClose={handleCloseModal}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Detalhes do Anúncio</DialogTitle>
            <DialogContent>
              {selectedAd && (
                <>
                  <CardMedia
                    component="img"
                    alt={selectedAd.title}
                    height="200"
                    image={selectedAd.imageUrl}
                    style={{ marginBottom: "20px" }}
                  />
                  <Typography variant="h6">{selectedAd.title}</Typography>
                  <Typography>{selectedAd.description}</Typography>
                  <Typography>
                    Ativo: {selectedAd.active ? "Sim" : "Não"}
                  </Typography>
                  <Rating value={selectedAd.rating} readOnly />
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default AdDashboard;
