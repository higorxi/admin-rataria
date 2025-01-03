"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Pagination,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import theme from "@/utils/theme";
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import UserDetailsModal from "../../components/modal/modal-info-user";

export interface SelectedUser {
  id: number;
  name: string;
  cpf: string;
  planType: string;
  creationDate: string;
  email: string;
  address: string;
}

const UserTable = () => {
  const allUsers = [
    {
      id: 1,
      name: "João Silva",
      cpf: "123.***.***-45",
      planType: "Premium",
      creationDate: "2023-05-20",
      email: "joao@exemplo.com",
      address: "Rua A, 123",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      cpf: "456.***.***-78",
      planType: "Standard",
      creationDate: "2022-10-15",
      email: "maria@exemplo.com",
      address: "Rua B, 456",
    },
    // Adicione mais usuários conforme necessário
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const rowHeight = 53;
  const totalTableHeight = rowsPerPage * rowHeight;

  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleSearch = () => {
    const searchTerm = searchValue.trim();
    if (!searchTerm) {
      setFilteredUsers(allUsers);
      return;
    }

    const isCPF = /^\d+$/.test(searchTerm); // Verifica se o termo de busca é apenas números
    const searchResults = allUsers.filter((user) =>
      isCPF
        ? user.cpf.includes(searchTerm)
        : user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(searchResults);
    setPage(1); // Reinicia para a primeira página
  };

  const handleOpenModal = (userId: number) => {
    const user = allUsers.find((user) => user.id === userId);
    if (!user) {
      return console.log("Não contém usuário");
    }
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    // Resetando o usuário selecionado antes de fechar o modal

    setOpenModal(false);
    setSelectedUser(null);
  };

  // Paginando os dados
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const emptyRows = rowsPerPage - paginatedUsers.length;

  // Completar com linhas vazias se necessário
  const rowsToDisplay = [...paginatedUsers, ...Array(emptyRows).fill({})];

  return (
    <PageContainer title="Usuários" description="Dados dos usuários">
      <DashboardCard title="Tabela de Usuários">
        <>
          <div style={{ display: "flex", marginBottom: "20px", gap: "10px" }}>
            <TextField
              label="Buscar por Nome ou CPF"
              variant="outlined"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </div>

          <TableContainer
            component={Paper}
            style={{ minHeight: totalTableHeight }}
          >
            <Table>
              <TableHead
                style={{ backgroundColor: theme.palette.secondary.dark }}
              >
                <TableRow>
                  <TableCell style={{ color: "white", width: "25%" }}>
                    <strong>Nome</strong>
                  </TableCell>
                  <TableCell style={{ color: "white", width: "20%" }}>
                    <strong>CPF</strong>
                  </TableCell>
                  <TableCell style={{ color: "white", width: "20%" }}>
                    <strong>Tipo do Plano</strong>
                  </TableCell>
                  <TableCell style={{ color: "white", width: "20%" }}>
                    <strong>Data de Criação</strong>
                  </TableCell>
                  <TableCell style={{ color: "white", width: "15%" }}>
                    <strong>Ações</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsToDisplay.map((user, index) => (
                  <TableRow key={index} style={{ height: rowHeight }}>
                    {user.name ? (
                      <>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.cpf}</TableCell>
                        <TableCell>{user.planType}</TableCell>
                        <TableCell>{user.creationDate}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleOpenModal(user.id)}
                          >
                            Ver Mais
                          </Button>
                        </TableCell>
                      </>
                    ) : (
                      // Linha vazia
                      <TableCell colSpan={5} />
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={Math.ceil(filteredUsers.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="secondary"
            />
          </div>

          <UserDetailsModal
        open={openModal}
        onClose={handleCloseModal}
        selectedUser={selectedUser}
      />
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default UserTable;
