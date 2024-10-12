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

const WrapperCenterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  align-self: center;
`


const SupervisionPageLayout = () => {

  return <>
  <PageContainer>
    <Header rol="Supervisor"/>
    <WrapperCenterItems>
      <Outlet/>
    </WrapperCenterItems>

  </PageContainer>
  </>
}

export default SupervisionPageLayout
