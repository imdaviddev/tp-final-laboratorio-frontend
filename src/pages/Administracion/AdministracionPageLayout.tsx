import { Outlet } from "react-router-dom"
import Header from "../../components/HeaderComponent/Header"
import { PageContainer, WrapperCenterItems } from "../ComponentsUI"

const AdministracionPageLayout = () => {
    return <PageContainer>
      <Header rol="Mantenimiento"/>  
        <WrapperCenterItems>
            <Outlet/>
        </WrapperCenterItems>
    </PageContainer>
  }
  
export default AdministracionPageLayout