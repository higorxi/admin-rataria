import {
  IconBadgeAd,
  IconLayoutDashboard,
  IconLogin,
  IconUserPlus,
  IconUsers,
  IconWorldWww,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Gráficos",
  },
  {
    id: uniqueId(),
    title: "Usuários",
    icon: IconUsers,
    href: "/graficos/usuarios",
  },
  {
    id: uniqueId(),
    title: "Anúncios",
    icon: IconBadgeAd,
    href: "/graficos/anuncios",
  },
  {
    id: uniqueId(),
    title: "WebSites",
    icon: IconWorldWww,
    href: "/graficos/websites",
  },
  {
    navlabel: true,
    subheader: "Editar",
  },
  {
    id: uniqueId(),
    title: "Assinaturas",
    icon: IconLogin,
    href: "/editar/assinaturas",
  },
  {
    id: uniqueId(),
    title: "Usuários",
    icon: IconUserPlus,
    href: "/editar/usuarios",
  },
];

export default Menuitems;
