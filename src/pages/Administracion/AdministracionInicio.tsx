import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloDescripcion, TituloPage, VerDetalle } from '../ComponentsUI';
import camionRojo from '../../../Imagenes/camionRojo.svg';

const AdministracionInicio = () => {
  return <>
    <TituloPage>
        Hola, David    
    </TituloPage>   
    <ContainerGeneral>
         <TituloDescripcion style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
           Ultimos Reportes
         </TituloDescripcion>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
    </ContainerGeneral>
  </>
  }
export default AdministracionInicio;