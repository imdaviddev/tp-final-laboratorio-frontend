import { styled } from 'styled-components'
import { IPaquete } from '../../api/models/paquetes.models'
import imgPaquete from "../../../public/paquete.svg"

const WrapperListaPaquetes = styled.div`
    border: solid 1px red;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
`

const ListPaquetes = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`

const ItemPaquete = styled.li`
    display: flex;
    flex-direction: row;
    border: solid 1px red;
    align-items: center;
    p {
        font-size: 12px;
        font-weight: bold;
        font-family: sans-serif;
    }
`
const ImgPaquete = () => {
    return <img src={imgPaquete} style={{width:"100%"}}/>
}

interface Props {
    paquetes: IPaquete[]
}

const ListaDePaquetes: React.FC<Props> = ({paquetes}) => {
  return (
    <WrapperListaPaquetes>
    <ListPaquetes>
        {paquetes.map(paquete => {
            return<ItemPaquete key={paquete.id}>
                <div style={{width: "70px", padding:"0.5rem"}}>
                    <ImgPaquete/>
                </div>
                <div style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'center',alignItems:"center"}}>
                        <p>{paquete.id}</p>
                        <p>{paquete.direccion_entrega}</p>
                        <p>KG:{paquete.peso_kg}</p>
                        <p>Volumen:{paquete.volumen}</p>

                </div>
            </ItemPaquete>
        })}
        </ListPaquetes>
    </WrapperListaPaquetes>
  )
}

export default ListaDePaquetes