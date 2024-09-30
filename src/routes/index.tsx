import { Dashboard, Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';

import { SupervisionPageLayout, SupervisionHomePage, CrearRecorridoPage } from '../pages/Supervision';
import ConductoresPage from '../pages/Supervision/Conductores/Conductores';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route  element={<Dashboard/>} path='/' />
      <Route element={<Inicio />} path="/Inicio" />
      <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />
      <Route path="/supervision" element={<SupervisionPageLayout />}>
        <Route index element={<SupervisionHomePage />} />
        <Route path="crear-recorrido" element={<CrearRecorridoPage />} />
        <Route path="vehiculos" element={<ConductoresPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
