import { styled } from "styled-components";
import search from './search.svg';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    background: transparent;

    border: 2px solid #C98CF1;
    border-radius: 10px;

    box-sizing: border-box;

    padding: 12px 16px;

    height: 56px;
    width: 566px;

    color: #FFFFFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;

    &::placeholder {
        color: #D9D9D9;
    }
`

const IconeLupa = styled.img`
    cursor: pointer;

    position: absolute;

    top: 10px;
    right: 10px;
    height: 38px;
    width: 38px;
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto