import { Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import GerenciaHomePage from '../pages/gerencia/gerencia';
import ReportesGerencia from '../pages/reportesGerencia/ReportesGerencia';
import ControlesGerencia from '../pages/controlesGerencia/ControlesGerencia';
import { SupervisionConductoresPage, SupervisionCrearRecorridoPage, SupervisionHomePage, SupervisionPageLayout, SupervisionReportesPage, SupervisionVehiculosPage } from '../pages/Supervision';
import MantenimientoPageLayout, { MantenimientoInicio } from '../pages/Mantenimiento';
import Mantenimientoingresos from '../pages/Mantenimiento/Mantenimientoingresos';
import MantenimientoReparaciones from '../pages/Mantenimiento/MantenimientoReparaciones';

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
        <Route element={<SupervisionCrearRecorridoPage/>} path='crear-recorrido'/>  
        <Route element={<SupervisionConductoresPage/>} path='conductores'/>
        <Route element={<SupervisionVehiculosPage/>} path='vehiculos'/>
        <Route element={<SupervisionReportesPage/>} path='reportes'/>
      </Route>      
      <Route element={<MantenimientoPageLayout/>} path='/mantenimiento'>
          <Route index element={<MantenimientoInicio/>}/>
          <Route element={<Mantenimientoingresos/>} path='ingresos'/>
          <Route element={<MantenimientoReparaciones/>} path='reparaciones'/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
