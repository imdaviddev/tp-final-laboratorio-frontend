import './iniciar-sesion.css'

const IniciarSesionPage = () => {
  return <div className='wrapper-iniciar-sesion'>
    <div className="wrapper-fondo-iniciar-sesion">
        <img src="1.png"/>
    </div>
    <div className="wrapper-formulario-iniciar-sesion">

      <div className='formulario-iniciar-sesion'>

        <div className="titulo-formulario-iniciar-sesion">
          <p>Iniciar Sesion</p>
        </div>
        <form className='formulario-iniciar-sesion-container'>
            <div className='campo-formulario-iniciar-sesion'>
               <label htmlFor="username">Nombre de Usuario</label>
               <input type="text" id='username' key={'username'}/>     
            </div>
            <div className='campo-formulario-iniciar-sesion'>
               <label htmlFor="username">Contraseña</label>
               <input type="password" id='contrasenia' key={'contrasenia'}/>     
            </div>
        </form>
      </div>
    </div>
  </div>
}

export default IniciarSesionPage
