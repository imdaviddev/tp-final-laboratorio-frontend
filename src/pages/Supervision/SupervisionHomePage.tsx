import { useState } from 'react';
import Header from '../../components/HeaderComponent/Header';
import './supervision.css';

const SupervisonHomePage = () => {
  const [verRecorrido, setVerRecorrido] = useState(false);

  const handlerVerRecorrido = () => {
    setVerRecorrido(verRecorrido => !verRecorrido)
  }

  return <div className='page-container'>
    <Header rol='Supervisor' /> {/** ESTO DEBERIA CAMBIARSE PARA MEJOR UTILIDAD DEL COMPONENTE */}
    <div className="wrapper-mensaje-bienvenida">
      <h1>Hola, Val</h1>
    </div>

    <div className="panel-control-principal">
      <div className="wrapper-recorridos-en-curso">
        <h2>Hay 3 recorridos en curso</h2>
        <div className="recorridos-en-curso">
          <div className="tarjeta-recorrido-en-curso">
            <div className="imagen-vehiculo">
              <img src="3.png" width={"100%"} height={"100%"} />
            </div>
            <div className="informacion">
              <p>Recorrido {"#32"}</p>
              <p className='btn-ver-recorrido'>ver recorrido</p>
            </div>
          </div>
          <div className="tarjeta-recorrido-en-curso">
            <div className="imagen-vehiculo">
              <img src="3.png" width={"100%"} height={"100%"} />
            </div>
            <div className="informacion">
              <p>Recorrido {"#32"}</p>
              <p className='btn-ver-recorrido' onClick={handlerVerRecorrido}>ver recorrido</p>
            </div>
          </div>
        </div>
      </div>
      {verRecorrido ? <div className="wrapper-mapa">
        MAPA
      </div> : null}
    </div>



  </div>
}

export default SupervisonHomePage

