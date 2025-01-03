"use client";

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Avatar, Box, Divider, Tabs, Tab, Grid, Card, CardMedia, CardContent } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SelectedUser } from '../dashboard/TableUsers';

interface Service {
  title: string;
  description: string;
  images: string[]; 
}

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  selectedUser?: SelectedUser | null;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ open, onClose, selectedUser }) => {
  const [tabIndex, setTabIndex] = useState(0);

  if (!open) return null;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const serviceDetails = {
    title: 'Serviço de Consultoria',
    description: 'Consultoria completa em gestão empresarial.',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>Perfil do Usuário</DialogTitle>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Detalhes do Usuário" />
        <Tab label="Detalhes do Serviço" />
      </Tabs>
      <DialogContent sx={{ height: 400, overflowY: 'auto' }}>  {/* Define uma altura fixa e rolagem */}
        {tabIndex === 0 && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" gutterBottom>
              {selectedUser?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {selectedUser?.planType} Member
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }} />
            <Box display="flex" flexDirection="column" alignItems="start" width="100%">
              <Typography variant="subtitle1" color="textSecondary">CPF:</Typography>
              <Typography variant="body1" gutterBottom>{selectedUser?.cpf}</Typography>
              <Typography variant="subtitle1" color="textSecondary">Data de Criação:</Typography>
              <Typography variant="body1" gutterBottom>{selectedUser?.creationDate}</Typography>
              <Typography variant="subtitle1" color="textSecondary">Email:</Typography>
              <Typography variant="body1" gutterBottom>{selectedUser?.email}</Typography>
              <Typography variant="subtitle1" color="textSecondary">Endereço:</Typography>
              <Typography variant="body1" gutterBottom>{selectedUser?.address}</Typography>
            </Box>
          </Box>
        )}

        {tabIndex === 1 && serviceDetails && (
          // Conteúdo da Aba Detalhes do Serviço
          <Box>
            <Typography variant="h6" gutterBottom>
              {serviceDetails.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {serviceDetails.description}
            </Typography>
            <Divider sx={{ width: '100%', my: 2 }} />

            {/* Galeria de Fotos */}
            <Grid container spacing={2}>
              {serviceDetails.images.map((image, index) => (
                <Grid item xs={6} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="120"
                      image={image}
                      alt={`Imagem do serviço ${index + 1}`}
                    />
                    <CardContent>
                      <Typography variant="caption" display="block" align="center">
                        Foto {index + 1}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary" variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailsModal;
