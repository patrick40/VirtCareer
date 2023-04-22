import React, { useEffect } from "react";
import * as auth from "src/data/authServises";

function Logout(props) {

  useEffect(() => {
    auth.logout();
    window.location = "/login";
  });
  return null;
}

export default Logout;
