import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// VirtCareer links

const Apply = React.lazy(() =>
  import(
    "./views/VirtcareerNatcom/dependants/projectDependants/sectionRegister"
  )
);

// VirtCareer view pages
const ViewPending = React.lazy(() =>
  import("./views/VirtcareerViewPages/pending")
);
const ProjectDetails = React.lazy(() =>
  import("./views/VirtcareerViewPages/PendingDetails")
);
const ViewCompleted = React.lazy(() =>
  import("./views/VirtcareerViewPages/completed")
);
const ActivityDetails = React.lazy(() =>
  import("./views/VirtcareerViewPages/completeDetails")
);
const ViewOpportunities = React.lazy(() =>
  import("./views/VirtcareerViewPages/opportunities")
);
const OpportunitytDetails = React.lazy(() =>
  import("./views/VirtcareerViewPages/opportunityDetails")
);
const RecordProject = React.lazy(() =>
  import("./views/VirtcareerViewPages/recordProject")
);
const MyProjects = React.lazy(() =>
  import("./views/VirtcareerViewPages/ownerProjects")
);
const ViewOwnerProject = React.lazy(() =>
  import("./views/VirtcareerViewPages/ownerViewProject")
);
const ViewOwnerCompletedProject = React.lazy(() =>
  import("./views/VirtcareerViewPages/ownerCompletedProject")
);

const CoordinatorAssignProject = React.lazy(() =>
  import("./views/VirtcareerViewPages/Coordinator/assignProject")
);
const CoordinatorOpportunities = React.lazy(() =>
  import("./views/VirtcareerViewPages/Coordinator/opportunities")
);

const CoordinatorProjects = React.lazy(() =>
  import("./views/VirtcareerViewPages/Coordinator/projects")
);

const CoordinatorViewProject = React.lazy(() =>
  import("./views/VirtcareerViewPages/Coordinator/viewProject")
);

const Testing = React.lazy(() =>
  import("./views/VirtcareerViewPages/Coordinator/test")
);

const user = JSON.parse(localStorage.getItem("currentUserData"));

const developerRoutes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },

  {
    path: "/Apply",
    name: "Apply for Opportunities",
    element: Apply,
  },

  { path: "/Pending/*", name: "View Pending Projects", element: ViewPending },

  {
    path: "/Completed/*",
    name: "View All completed projects",
    element: ViewCompleted,
  },

  {
    path: "/Opportunities/*",
    name: "All Opportunities",
    element: ViewOpportunities,
  },

  {
    path: "/OpportunityDetails",
    name: "Opportunity Details",
    element: OpportunitytDetails,
  },
  {
    path: "/test",
    name: "Testing",
    element: Testing,
  },

  { path: "/projects/:id", name: "ProjectDetails", element: ProjectDetails },
];

const projectOwnerRoutes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },

  {
    path: "/view_owner_projects/:id",
    name: "ViewOwnerProject",
    element: ViewOwnerProject,
  },

  {
    path: "/record_project",
    name: "RecordProject",
    element: RecordProject,
  },

  {
    path: "/owner_projects",
    name: "MyProjects",
    element: MyProjects,
  },

  {
    path: "/view_owner_projects/:id",
    name: "ViewOwnerProject",
    element: ViewOwnerProject,
  },
  {
    path: "/owner_completed_projects",
    name: "ViewOwnerCompletedProject",
    element: ViewOwnerCompletedProject,
  },
];

const coordinatorRoutes = [
  {
    path: "/coordinator/assign_project",
    name: "CoordinatorAssignProject",
    element: CoordinatorAssignProject,
  },
  {
    path: "/coordinator/opportunities",
    name: "CoordinatorOpportunities",
    element: CoordinatorOpportunities,
  },
  {
    path: "/coordinator/projects",
    name: "CoordinatorProjects",
    element: CoordinatorProjects,
  },
  {
    path: "/coordinator/projects/:id",
    name: "ViewCoordinatorProject",
    element: CoordinatorViewProject,
  },
];

let RoutesItem = [];
if (user.user_role === "developer") {
  RoutesItem = developerRoutes;
}

if (user.user_role === "projectOwner") {
  RoutesItem = projectOwnerRoutes;
}

if (user.user_role === "coordinator") {
  RoutesItem = coordinatorRoutes;
}

export default RoutesItem;
