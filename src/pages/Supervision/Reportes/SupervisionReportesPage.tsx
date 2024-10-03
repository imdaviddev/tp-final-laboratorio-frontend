import { styled } from "styled-components";
import { Container, Controles, TituloDescripcion, TituloPage } from "../ComponentsUI";

const SupervisionReportesPage = () => {
  const datos = [
    { id: 200, conductor: "Leandro" },
    { id: 201, conductor: "Miguel Angel" },
    { id: 202, conductor: "Santiago Pérez" },
    { id: 203, conductor: "Carla Gómez" }
  ]

  const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #e32d15;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  align-items: center;
  box-shadow: 0px 2px 2px 2px gray;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`



  return (
    <>
      <TituloPage>Reportes</TituloPage>
      <Controles style={{ flexDirection: "column" }}>
        <Container
          style={{
            backgroundColor: "#d5d3d5",
            padding: "1rem 3.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <TituloDescripcion
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#a545304",
              marginBottom: '1rem',
            }}
          >
            Reporte de Rutas 23/08/2024
          </TituloDescripcion>
          <Wrapper>
            {datos.map((fila) => (
              <Row key={fila.id}>
                <div style={{textAlign:'center'}}>
                  Recorrido:#{fila.id}
                  <br />
                  Conductor: {fila.conductor}
                </div>
                <div style={{textDecoration:'underline'}}>ver detalle</div>
              </Row>
            ))}
          </Wrapper>
        </Container>
        <Container></Container>
      </Controles>
    </>
  )
}

export default SupervisionReportesPage;
