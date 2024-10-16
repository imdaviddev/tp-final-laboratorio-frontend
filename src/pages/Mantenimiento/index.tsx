import MantenimientoInicio from "./MantenimientoInicio";
import MantenimientoHistorial from "./MantenimientoHistorial";
import MantenimientoIngresos from "./Mantenimientoingresos";

import { styled } from 'styled-components';
import Header from '../../components/HeaderComponent/Header';
import { Outlet } from 'react-router-dom';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: red;

    font-family: sans-serif;
`;

export const WrapperCenterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  align-self: center;
`


const MantenimientoPageLayout = () => {
  return <PageContainer>
    <Header rol="Mantenimiento"/>

    {/** Acá iran las diferentes areas de Supervision */}
    <WrapperCenterItems>
      <Outlet/>
    </WrapperCenterItems>

  </PageContainer>
}


export {
    MantenimientoInicio,
    MantenimientoHistorial,
    MantenimientoIngresos,
    MantenimientoPageLayout
}
