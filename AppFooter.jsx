import React from "react";
import { CFooter } from "@coreui/react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <CFooter>
      <div >
        <span> &copy; 2022, N@tcom Ltd.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
        <a href="https://www.natcomservice.com/" target="_blank">
          N@tcom Services
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
