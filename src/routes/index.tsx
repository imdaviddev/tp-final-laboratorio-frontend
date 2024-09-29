import { Dashboard, Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import CrearRecorridoPage from '../pages/Supervision/CrearRecorrido/CrearRecorridoPage';
import SupervisonHomePage from '../pages/Supervision/SupervisionHomePage';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route  element={<Dashboard/>} path='/' />
      <Route element={<Inicio />} path="/Inicio" />
      <Route element={<IniciarSesionPage />} path="/iniciar-sesion" />
      <Route path="/supervision" element={<SupervisonHomePage />}>
          <Route path="crear-recorrido" element={<CrearRecorridoPage />} />
        </Route>
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
