import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src="/images/profile/user-1.jpg"
          alt="Profile"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "3px solid #007bff",
            position: "relative",
            transition: "all 0.3s ease",
            boxSizing: "content-box",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: "3px solid #007bff",
              borderRadius: "50%",
              opacity: 0,
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            },
            "&:hover:before": {
              opacity: 1,
              transform: "scale(1.1)",
            },
          }}
        />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>Meu Perfil</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>Minha Conta</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>Minhas Tarefas</ListItemText>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button
            href="/authentication/login"
            variant="outlined"
            color="primary"
            component={Link}
            fullWidth
          >
            Sair
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
