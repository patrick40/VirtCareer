import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserContext from "./components/context/userContext";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  state = {};

  componentDidMount() {
   try {
     const user = (JSON.parse(localStorage.getItem("currentUserData")));
     const role = user.user_role
     console.log(role);
     this.setState({ user });
   } catch (error) {
    console.log(error);
   }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route
                exact
                path="/login"
                name="Login Page"
                element={<Login />}
              />
              <Route exact path="/logout" name="Logout" element={<Logout />} />
              <Route
                exact
                path="/register"
                name="Register"
                element={<Register />}
              />

              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route
                path="*"
                name="Home"
                element={
                  <ProtectedRoute>
                    <DefaultLayout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    {this.state.user?.user_role === 'coordinator' && (
                      <Navigate replace to="/coordinator/projects" />
                    )}

                    {this.state.user?.user_role === 'projectOwner' && (
                      <Navigate replace to="/owner_projects" />
                    )}

                    {this.state.user?.user_role === 'developer' && (
                      <Navigate replace to="/Pending" />
                    )}
                    
                  </ProtectedRoute>
                }
              />
              <Route path="" element={<Navigate replace to="/404" />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default App;
