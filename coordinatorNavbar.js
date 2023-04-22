import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilHandPointUp,
  cilInfo,
  cilLayers,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSync,
  cilTask,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,

    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Project",
  },

  {
    component: CNavItem,
    name: "Opportunities",
    to: "/coordinator/opportunities",
    icon: <CIcon icon={cilSync} customClassName="nav-icon" />,

  },

  {
    component: CNavItem,
    name: "Assign Project",
    to: "/coordinator/assign_project",
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Projects',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    to: '/coordinator/projects',
  },
];

export default _nav;

