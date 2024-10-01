import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloDescripcion, TituloPage, VerDetalle } from '../ComponentsUI';
import repuesto from '../../../Imagenes/camion.svg'; // hay que modificar esto.
import { ButtonGeneral } from '../Mantenimiento/MantenimientoReparaciones';

const AdministracionRepuestos = () => {
  return <>
  <TituloPage>
      Repuestos
  </TituloPage>   
  <ContainerGeneral style={{padding: '1rem 4rem'}}>
      <FilaGeneral>
        <BoxGeneral>
          <img src={repuesto} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
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
          <img src={repuesto} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
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
          <img src={repuesto} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
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
          <img src={repuesto} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
        </BoxGeneral>
        <BoxGeneral>
           <div style={{marginBottom: '1rem'}}>
            <p>Vehiculo: #c4m10l2</p>
            <p>Diagnostico VTV vencida</p>
          </div>
          <VerDetalle/>
        </BoxGeneral>
      </FilaGeneral>
      <ButtonGeneral style={{borderRadius: '0.3rem'}}>
        CAMBIAR UMBRAL
      </ButtonGeneral>
  </ContainerGeneral>
</>
}

export default AdministracionRepuestos