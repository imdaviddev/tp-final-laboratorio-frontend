import './iniciar-sesion.css'
import type { SVGProps } from 'react';

export function MdiAccountCircleOutline(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#c92222" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11"></path></svg>);
}

const IniciarSesionPage = () => {
  return <div className="page-container">
  <div className="header-iniciar-sesion">
    <div className="header-top-iniciar-sesion">
        <div className="logo-amazona"></div>
        <div className="imagen-de-perfil">
          <MdiAccountCircleOutline width={'100%'} height={'100%'}/>
        </div>
    </div>
    <nav className="header-bottom-iniciar-sesion">
          <ul>
            <li>Seguimiento</li>
            <li>Sucursales</li>
            <li>Sobre Nosotros</li>
          </ul>
    </nav>
  </div>
  <div className='wrapper-iniciar-sesion'>

      <div className='formulario-iniciar-sesion'>
        <div className="titulo-formulario-iniciar-sesion">
          <p>Ingresa tus datos para iniciar sesion</p>
        </div>
        <form className='formulario-iniciar-sesion-container'>
            <div className='campo-formulario-iniciar-sesion'>
               <label htmlFor="username">ID de Usuario</label>
               <input type="text" id='username' key={'username'} placeholder='Value'/>     
            </div>
            <div className='campo-formulario-iniciar-sesion'>
               <label htmlFor="username">Contraseña</label>
               <input type="password" id='contrasenia' key={'contrasenia'} placeholder='Value'/>     
            </div>

            <button className='formulario-iniciar-sesion-btn-submit'>
              Iniciar Sesion
            </button>

            <p className='formulario-iniciar-sesion-olvidaste-tu-contrasenia'>¿Olvidaste tu contraseña?</p>
        </form>

    </div>
  </div>
  </div>;
}

export default IniciarSesionPage
