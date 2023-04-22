import React from "react";
import CIcon from "@coreui/icons-react";
import { cilLayers, cilSpeedometer, cilSync, cilTask } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const user = JSON.parse(localStorage.getItem("currentUserData"));

const developer_nav = [
  {
    component: CNavItem,

    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "Pending Projects",
    to: "/Pending",
    icon: <CIcon icon={cilSync} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Completed Projects",
    to: "/Completed",
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "View opportunities",
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    to: "/Opportunities",
  },
];

const projectOwner_nav = [
  {
    component: CNavItem,

    name: "Dashboard",
    to: "/owner_projects",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Projects",
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    to: "/owner_projects",
  },
  {
    component: CNavItem,
    name: "Submit Project",
    to: "/record_project",
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  },
];

const coordinator_nav = [
  {
    component: CNavItem,

    name: "Dashboard",
    to: "/coordinator/projects",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "Projects",
    to: "/coordinator/projects",
    icon: <CIcon icon={cilSync} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Assign Projects",
    to: "/coordinator/assign_project",
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Opportunities",
    to: "/coordinator/opportunities",
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
];

let _navItem = [];

if (user.user_role === "developer") {
  _navItem = developer_nav;
}

if (user.user_role === "projectOwner") {
  _navItem = projectOwner_nav;
}

if (user.user_role === "coordinator") {
  _navItem = coordinator_nav;
}

export default _navItem;
