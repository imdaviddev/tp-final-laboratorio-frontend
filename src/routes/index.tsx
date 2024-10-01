import { Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import GerenciaHomePage from '../pages/gerencia/gerencia';
import ReportesGerencia from '../pages/reportesGerencia/ReportesGerencia';
import ControlesGerencia from '../pages/controlesGerencia/ControlesGerencia';
import { SupervisionConductoresPage, SupervisionCrearRecorridoPage, SupervisionHomePage, SupervisionPageLayout, SupervisionReportesPage, SupervisionVehiculosPage } from '../pages/Supervision';
import MantenimientoPageLayout, { MantenimientoHistorial, MantenimientoInicio } from '../pages/Mantenimiento';
import Mantenimientoingresos from '../pages/Mantenimiento/Mantenimientoingresos';
import MantenimientoReparaciones from '../pages/Mantenimiento/MantenimientoReparaciones';
import ConductorInicio from '../pages/Conductor/ConductorInicio';
import ConductorRecorrido from '../pages/Conductor/ConductorRecorrido'
import ConductorReportes from '../pages/Conductor/ConductorReportes';
import AdministracionPageLayout from '../pages/Administracion/AdministracionPageLayout';
import AdministracionInicio from '../pages/Administracion/AdministracionInicio';
import AdministracionRepuestos from '../pages/Administracion/AdministracionRepuestos';
import AdministracionDeProveedores from '../pages/Administracion/AdministracionDeProveedores';
import AdministracionReportes from '../pages/Administracion/AdministracionReportes';

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
          <Route element={<MantenimientoHistorial/>} path='historial-de-tickets'/>
      </Route>
      <Route element={<ConductorInicio/>} path='/conductor'/>
      <Route element={<ConductorRecorrido/>} path='/conductor/recorridos'/>
      <Route element={<ConductorReportes/>} path='/conductor/reportes'/>
      <Route element={<AdministracionPageLayout/>} path='/administracion'>
          <Route index element={<AdministracionInicio/>} />
          <Route element={<AdministracionRepuestos/>} path='repuestos'/>
          <Route element={<AdministracionDeProveedores/>} path='proveedores'/>
          <Route element={<AdministracionReportes/>} path='reportes'/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
