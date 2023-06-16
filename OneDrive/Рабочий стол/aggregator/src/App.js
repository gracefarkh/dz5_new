import "./App.css";
import { Route, Routes } from "react-router-dom";
import ServicePage from "./pages/SevicePage/ServicePage";
import DesignerPage from "./pages/DesignerPage/DesignerPage";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LayOut from "./components/LayOut/LayOut";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import AllCompaniesPage from "./pages/AllCompaniesPage/AllCompaniesPage";
import companies from "./components/MainPage/SliderCompany/mock.json";
import ProfileHistoryPage from './pages/ProfileHistoryPage/ProfileHistoryPage'

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<MainPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="designer" element={<DesignerPage />} />
            <Route path="about" element={<AboutCompany />} />
            <Route path="allCompanies"element={<AllCompaniesPage companies={companies} />}/>
            <Route path="profileHistory" element={<ProfileHistoryPage/>}/>
            </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signUp" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
