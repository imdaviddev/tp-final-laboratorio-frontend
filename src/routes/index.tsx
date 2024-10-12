import Inicio from '../pages/inicio/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';

import RecorridoDetails from '../components/RecorridoDetails'

import { GerenciaHomePage, GerenciaControles, GerenciaReportes, GerenciaPageLayout } from '../pages/gerencia'
import { ConductorInicio, ConductorRecorrido, ConductorReportes, ConductorPageLayout } from '../pages/Conductor';
import { SupervisionConductoresPage, SupervisionCrearRecorridoPage, SupervisionHomePage, SupervisionPageLayout, SupervisionReportesPage, SupervisionVehiculosPage } from '../pages/Supervision';
import MantenimientoPageLayout, { MantenimientoHistorial, MantenimientoInicio } from '../pages/Mantenimiento';
import Mantenimientoingresos from '../pages/Mantenimiento/Mantenimientoingresos';
import MantenimientoReparaciones from '../pages/Mantenimiento/MantenimientoReparaciones';

import AdministracionPageLayout from '../pages/Administracion/AdministracionPageLayout';
import AdministracionInicio from '../pages/Administracion/AdministracionInicio';
import AdministracionRepuestos from '../pages/Administracion/AdministracionRepuestos';
import AdministracionDeProveedores from '../pages/Administracion/AdministracionDeProveedores';
import AdministracionReportes from '../pages/Administracion/AdministracionReportes';

const Router = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Inicio/>} path="/" />
        <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />

        <Route element={<GerenciaPageLayout />} path="/gerencia">
          <Route index element={<GerenciaHomePage />} />
          <Route element={<RecorridoDetails/>} path='recorrido/:id'/>
          <Route element={<GerenciaControles />} path='controles' />
          <Route element={<GerenciaReportes />} path='reportes' />
        </Route>

        <Route element={<SupervisionPageLayout />} path='/supervision'>
          <Route index element={<SupervisionHomePage />} />
          <Route element={<SupervisionCrearRecorridoPage />} path='crear-recorrido' />
          <Route element={<SupervisionConductoresPage />} path='conductores' />
          <Route element={<SupervisionVehiculosPage />} path='vehiculos' />
          <Route element={<SupervisionReportesPage />} path='reportes' />
        </Route>

        <Route element={<MantenimientoPageLayout />} path='/mantenimiento'>
          <Route index element={<MantenimientoInicio />} />
          <Route element={<Mantenimientoingresos />} path='ingresos' />
          <Route element={<MantenimientoReparaciones />} path='reparaciones' />
          <Route element={<MantenimientoHistorial />} path='historial-de-tickets' />
        </Route>

        <Route element={<ConductorPageLayout />} path='/conductor'>
          <Route index element={<ConductorInicio />} />
          <Route element={<ConductorReportes />} path='reportes' />
          <Route element={<ConductorRecorrido />} path='recorridos' />

        </Route>

        <Route element={<AdministracionPageLayout />} path='/administracion'>
          <Route index element={<AdministracionInicio />} />
          <Route element={<AdministracionRepuestos />} path='repuestos' />
          <Route element={<AdministracionDeProveedores />} path='proveedores' />
          <Route element={<AdministracionReportes />} path='reportes' />
        </Route>

      </Routes>
    </BrowserRouter>
  </>
};

export default Router;
