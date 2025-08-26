import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Paylogin from "./Pages/Paylogin";
import Certificate from "./Pages/Certificate";
import Home from "./Pages/Home";
import PayLogin from "./Components/Login/PayLogin";
import AdminBoard from "./Components/Dashboard/AdminBoard";
import Ifonyintedoward from "./Components/Ward/Ifonyintedoward";
import Tubeward from "./Components/Ward/Tubeward";
import Maunward from "./Components/Ward/Maunward";
import Idirokoward from "./Components/Ward/Idirokoward";
import Ajegunleward from "./Components/Ward/Ajegunleward";
import Agosasaward from "./Components/Ward/Agosaward";
import Ipokiaward from "./Components/Ward/Ipokiaward";
import Ijofinward from "./Components/Ward/Ijofin";
import Maunward2 from "./Components/Ward/Maunward2";
import Sport from "./Components/Admin/Sport";
import Health from "./Components/Admin/Health";
import Agric from "./Components/Admin/Agric";
import Water from "./Components/Admin/Water";
import Budget from "./Components/Admin/Budget";
import Chairman from "./Components/Executives/Chairman";
import Secetary from "./Components/Executives/Secetary";
import ViceChairman from "./Components/Executives/ViceChairman";
import Agadaward from "./Components/Ward/Agadaward";
import Ilase from "./Components/Ward/Ilase";
import CommunitySocialDevelopment from "./Components/Admin/Social";
import Leader from "./Components/Legislative/Leader";
import Audit from "./Components/Department/Audit";
import Housing from "./Components/Department/Housing";
import SpecialAdviser from "./Components/Executives/SpecialAdviser";
import Works from "./Components/Supervisors/Works";
import Agriculture from "./Components/Department/Agriculture";
import Education from "./Components/Supervisors/Education";
import Director from "./Components/Department/DIrector";
import DeputyLeader from "./Components/Legislative/DeputyLeader";
import Nulge from "./Components/Department/Nulge";
import Waters from "./Components/Supervisors/Waters";
import CertificatePageWrapper from "./Components/Form/CertificatePageWraper";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import Rate from "./Components/Form/Rate";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import PayheadBreakdown from "./Components/Dashboard/FinacialReport";
import AdminManager from "./Components/Dashboard/AdminRegistration";
import AdminFillSection2 from "./Components/Dashboard/AdminForm2";
import AdminLayout from "./Components/Dashboard/AdminLayout";
import Finance from "./Components/Department/Finance";
import AboutIpokia from "./Pages/AboutIpokia";
import Footer from "./Components/Footer";
import CertificateFlow from "./Pages/CertificateFow";
import AdminPrivateRoute from "./Components/PrivateRoute";
import UserPrivateRoute from "./Components/PrivateCertificate";
import "./App.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const hiddenPaths = [
    "/login",
    "/admin",
    "/certificate",
    "/dashboard",
    "/admin/forms",
    "/admin/rate",
    "/admin/financial-report",
    "/admin/manager",
  ];

  const hideFooter =
    hiddenPaths.includes(location.pathname.toLowerCase()) ||
    /^\/certificates\/[\w-]+$/i.test(location.pathname) ||
    /^\/admin\/fill-section2\/\d+$/i.test(location.pathname);

  const hideNavbar = hideFooter; // reuse same condition

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paylogin" element={<Paylogin />} />
          <Route 
          path="/certificate" 
          element={
            <UserPrivateRoute>
              <Certificate />
            </UserPrivateRoute>
          } 
        />
          <Route path="/login" element={<PayLogin />} />
          <Route 
          path="/admin" 
          element={
            <AdminPrivateRoute>
          <AdminLayout/>
          </AdminPrivateRoute>}>
          <Route index element={<AdminBoard />}/>
          <Route path="rate" element={<Rate />} />
          <Route path="forms" element={<AdminDashboard />} />
          <Route path="financial-report" element={<PayheadBreakdown />} />
          <Route path="manager" element={<AdminManager />} />
          <Route path="fill-section2/:id" element={<AdminFillSection2 />} />
           </Route>
          <Route path="/ifonyintedoward" element={<Ifonyintedoward />} />
          <Route path="/tubeward" element={<Tubeward />} />
          <Route path="/maunward" element={<Maunward />} />
          <Route path="/idirokoward" element={<Idirokoward />} />
          <Route path="/ajegunleward" element={<Ajegunleward />} />
          <Route path="/agosasaward" element={<Agosasaward />} />
          <Route path="/ipokiaward1" element={<Ipokiaward />} />
          <Route path="/certificateflow" element={<CertificateFlow />} />
          <Route path="/ijofin" element={<Ijofinward />} />
          <Route path="/ilase" element={<Ilase />} />
          <Route path="/maunward2" element={<Maunward2 />} />
          <Route path="/agadaward" element={<Agadaward />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/health" element={<Health />} />
          <Route path="/agric" element={<Agric />} />
          <Route path="/water" element={<Water />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/secetary" element={<Secetary />} />
          <Route path="/vicechairman" element={<ViceChairman />} />
          <Route path="/social" element={<CommunitySocialDevelopment />} />
          <Route path="/leader" element={<Leader />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/works" element={<Housing />} />
          <Route path="/adviser" element={<SpecialAdviser />} />
          <Route path="/work" element={<Works />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/education" element={<Education />} />
          <Route path="/director" element={<Director />} />
          <Route path="/deputyleader" element={<DeputyLeader />} />
          <Route path="/nulge" element={<Nulge />} />
          <Route path="/waters" element={<Waters />} />
          <Route path="/certificates/:payref" element={<CertificatePageWrapper />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/aboutipokia" element={<AboutIpokia />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
