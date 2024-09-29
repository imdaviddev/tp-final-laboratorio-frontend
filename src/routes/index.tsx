import { Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import SupervisonHomePage from '../pages/Supervision/SupervisionHomePage';
import GerenciaHomePage from '../pages/gerencia/gerencia';
import ReportesGerencia from '../pages/reportesGerencia/ReportesGerencia';
import ReportesGerencia from '../pages/reportes/ReportesGerencia';
import ControlesGerencia from '../pages/controlesGerencia/ControlesGerencia';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route element={<Inicio />} path="/" />
      <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />
      <Route element={<SupervisonHomePage/>} path="/supervision" />
      <Route element={<GerenciaHomePage/>} path="/gerencia" />
      <Route element={<ReportesGerencia/>} path="/gerencia/reportes" />
      <Route element={<ControlesGerencia/>} path="/gerencia/controles" />
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
