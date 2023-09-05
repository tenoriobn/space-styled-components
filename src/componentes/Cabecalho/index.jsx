import { styled } from "styled-components"
import CampoTexto from "../../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto placeholder="O que você procura?" />
        </HeaderEstilizado>
    )
}

export default Cabecalho;