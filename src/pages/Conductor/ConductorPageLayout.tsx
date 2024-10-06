import { PageContainer } from "../ComponentsUI";
import Header from "../../components/HeaderComponent/Header";
import { Outlet } from 'react-router-dom';


const ConductorPageLayout = () => {
    return <PageContainer>
        <Header rol="Conductor" />
            <Outlet />  {/*Contenido renderizado*/}

    </PageContainer>
}

export default ConductorPageLayout;