import { PageContainer } from "../ComponentsUI";
import Header from "../../components/HeaderComponent/Header";
import { Outlet } from 'react-router-dom';


const GerenciaPageLayout = () => {
    return <PageContainer>
        <Header rol="Gerente" />
            <Outlet />  {/*Contenido renderizado*/}

    </PageContainer>
}

export default GerenciaPageLayout;