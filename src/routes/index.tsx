import { Dashboard, Inicio } from '../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import IniciarSesionPage from '../pages/IniciarSesion/IniciarSesionPage';
import SupervisonHomePage from '../pages/Supervision/SupervisionHomePage';
import GerenciaHomePage from '../pages/gerencia/gerencia';

const Router = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route  element={<Dashboard/>} path='/' />
      <Route element={<Inicio />} path="/Inicio" />
      {/*<Route element={<IniciarSesionPage />} path="/iniciar-sesion" />*/}
      <Route element={<SupervisonHomePage/>} path="/supervision" />
      <Route element={<GerenciaHomePage/>} path="/gerencia" />
    </Routes>
  </BrowserRouter>
  </>
};

export default Router;
