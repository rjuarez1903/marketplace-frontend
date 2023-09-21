import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import Classes from "./pages/Classes";
import { ClassDetail } from "./pages/ClassDetail";
import ServiceRequest from "./pages/ServiceRequest";
import Nav from "./components/Nav";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/mi-perfil" element={<Profile />} exact /> */}
          {/* <Route path="/pagar" element={<Payment />} exact /> */}
          {/* <Route path="/depositar" element={<Deposit />} exact /> */}
          {/* <Route path="/transferir" element={<Transfer />} exact /> */}
          {/* <Route path="/plazo-fijo" element={<FixedTerm />} /> */}
          {/* </Route> */}
          <Route path="/" element={<Home />} exact />
          <Route path="/clases" element={<Classes />} exact />
          <Route path="/clases/:id" element={<ClassDetail />} exact />
          <Route path="/solicitud-clase/:id" element={<ServiceRequest />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
