import { styled } from 'styled-components';
import Header from '../../components/HeaderComponent/Header';
import { Outlet } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: red;

    font-family: sans-serif;
`;


const SupervisionPageLayout = () => {
  return <PageContainer>
    <Header rol="Supervisor"/>

    {/** Acá iran las diferentes areas de Supervision */}
    <Outlet/>

  </PageContainer>
}

export default SupervisionPageLayout
