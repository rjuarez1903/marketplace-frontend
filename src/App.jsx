import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Classes from "./pages/Classes";
import { ClassDetail } from "./pages/ClassDetail";
import ServiceRequest from "./pages/ServiceRequest";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import ServiceContracts from "./pages/ServiceContracts";
import MyClasses from "./pages/MyClasses";
import { ClassCreation } from "./pages/ClassCreation";
import ClassEdit from "./pages/ClassEdit";
import Comments from "./pages/Comments";
import { UserProvider } from "./UserContext";
import { SnackbarProvider } from "./SnackbarContext";
import RequestPasswordReset from "./pages/RequestPasswordReset";
import PasswordReset from "./pages/PasswordReset";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <UserProvider>
      <SnackbarProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/clases/:category" element={<Classes />} exact />
            <Route path="/clases/detalle/:id" element={<ClassDetail />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route
              path="/solicitud-restablecer-password"
              element={<RequestPasswordReset />}
              exact
            />
            <Route path="/reset-password" element={<PasswordReset />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route element={<PrivateRoutes />}>
              <Route path="/mi-perfil" element={<Profile />} exact />
              <Route path="/mis-clases" element={<MyClasses />} exact />
              <Route path="crear-clase" element={<ClassCreation />} exact />
              <Route path="/editar-clase/:id" element={<ClassEdit />} exact />
              <Route
                path="/mis-clases/:id/comentarios"
                element={<Comments />}
                exact
              />
              <Route
                path="/mis-contrataciones/"
                element={<ServiceContracts />}
                exact
              />
              <Route
                path="/solicitud-clase/:id"
                element={<ServiceRequest />}
                exact
              />
            </Route>
          </Routes>
        </Layout>
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
