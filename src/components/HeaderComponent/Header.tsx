import React from 'react';
import './header.css'
import type { SVGProps } from 'react';
import logoAmazona from '../../../public/LogoAmazona.png'
import { Link } from "react-router-dom";

const apiURL: string = import.meta.env.REACT_APP_API_URL;


const conductores = `${apiURL}/conductor/`;
const clientes = `${apiURL}/`;
const administracion = `${apiURL}/administracion/`;
const mantenimiento = `${apiURL}/mantenimiento/`;
const supervision = `${apiURL}/supervision/`;
const gerencia = `${apiURL}/gerencia/`;

export function MdiAccountCircleOutline(props: SVGProps<SVGSVGElement>) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#c92222" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11"></path></svg>);
}

const NavbarCliente = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={clientes+""}>Seguimiento</Link>
        <li>Sobre Nosotros</li>
      </ul>
    </nav>
  )
}

const NavBarConductor = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={conductores+""}>Inicio</Link>
        <Link to={conductores+"recorridos"}>Tus recorridos</Link>
        <Link to={conductores+"reportes"}>Reportes</Link>
      </ul>
    </nav>

  )
}


const NavbarSupervisor = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={supervision+""}>Inicio</Link>
        <Link to={supervision+"crear-recorrido"}>Crear Recorrido</Link>
        <Link to={supervision+"conductores"}>Conductores</Link>
        <Link to={supervision+"reportes"}>Reportes</Link>
      </ul>
    </nav>

  )
}

const NavbarGerencia = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={gerencia + ""}>Inicio</Link>
        <Link to={gerencia + "reportes"}>Estadisticas</Link>
        <Link to={gerencia + "controles"}>Controles</Link>
      </ul>
    </nav>

  )
}

const NavbarMantenimiento = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={mantenimiento+ ""}>Inicio</Link>
        <Link to={mantenimiento+ "ingresos"}>Ingresos</Link>
        <Link to={mantenimiento+ "reparaciones"}>Reparaciones</Link>
        <Link to={mantenimiento+ "historial-de-tickets"}>Historial de Tickets</Link>
      </ul>
    </nav>

  )
}

const NavbarAdministracion = () => {
  return (
    <nav className="header-bottom">
      <ul>
        <Link to={administracion+ ""}>Inicio</Link>
        <Link to={administracion+ "repuestos"}>Repuestos</Link>
        <Link to={administracion+ "proveedores"}>Proveedores</Link>
        <Link to={administracion+ "reportes"}>Reportes</Link>
      </ul>
    </nav>

  )
}

const roles: string[] = [
  "Cliente", "Supervisor", "Gerente", "Mantenimiento", "Administracion", "Conductor"
]

interface Props {
  rol: string
}

const Header: React.FC<Props> = ({ rol }) => {
  return <div className="header">
    <div className="header-top">
      <img src={logoAmazona} className="logo-amazona"/>
      <div className="perfil">
        {rol == "Supervisor" ? <p>Supervisor</p> : null}
        {rol == "Mantenimiento" ? <p>Mantenimiento</p> : null}
        {rol == "Administracion" ? <p>Administracion</p> : null}
        {rol == "Gerente" ? <p>Gerente</p> : null}
        {rol == "Conductor" ? <p>Conductor</p> : null}

        <div className="imagen-de-perfil">
          <MdiAccountCircleOutline width={'100%'} height={'100%'} />
        </div>

      </div>
    </div>
    {rol == "Cliente" ? <NavbarCliente /> : null}
    {rol == "Supervisor" ? <NavbarSupervisor /> : null}
    {rol == "Gerente" ? <NavbarGerencia /> : null}
    {rol == "Conductor" ? <NavBarConductor /> : null}
    {rol == "Mantenimiento" ? <NavbarMantenimiento /> : null}
    {rol == "Administracion" ? <NavbarAdministracion /> : null}
  </div>
}

export default Header
