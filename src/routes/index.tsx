import { Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import { SupervisionPageLayout, SupervisionHomePage, CrearRecorridoPage } from '../pages/Supervision';
import ConductoresPage from '../pages/Supervision/Conductores/Conductores';
import GerenciaHomePage from '../pages/gerencia/gerencia';
import ReportesGerencia from '../pages/reportesGerencia/ReportesGerencia';
import ControlesGerencia from '../pages/controlesGerencia/ControlesGerencia';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route element={<Inicio />} path="/" />
      <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />
      <Route path="/supervision" element={<SupervisionPageLayout />}>
        <Route index element={<SupervisionHomePage />} />
        <Route path="crear-recorrido" element={<CrearRecorridoPage />} />
        <Route path="vehiculos" element={<ConductoresPage />} />
      </Route>
      <Route element={<GerenciaHomePage/>} path="/gerencia" />
      <Route element={<ReportesGerencia/>} path="/gerencia/reportes" />
      <Route element={<ControlesGerencia/>} path="/gerencia/controles" />
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
