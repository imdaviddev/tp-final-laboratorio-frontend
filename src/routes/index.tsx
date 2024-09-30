import { Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import GerenciaHomePage from '../pages/gerencia/gerencia';
import ReportesGerencia from '../pages/reportesGerencia/ReportesGerencia';
import ControlesGerencia from '../pages/controlesGerencia/ControlesGerencia';
import { CrearRecorridoPage, SupervisionHomePage, SupervisionPageLayout } from '../pages/Supervision';
import ConductoresPage from '../pages/Supervision/Conductores/Conductores';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route element={<Inicio />} path="/" />
      <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />
      <Route element={<GerenciaHomePage/>} path="/gerencia" />
      <Route element={<ReportesGerencia/>} path="/gerencia/reportes" />
      <Route element={<ControlesGerencia/>} path="/gerencia/controles" />
      <Route element={<SupervisionPageLayout/>} path='/supervision'>
        <Route index element={<SupervisionHomePage/>} />
        <Route element={<CrearRecorridoPage/>} path='crear-recorrido'/>  
        <Route element={<ConductoresPage/>} path='conductores'/>  
      </Route>      
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
