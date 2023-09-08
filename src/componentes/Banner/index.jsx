import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
    display: flex;
    align-items: center;

    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    border-radius: 20px;

    flex-grow: 1;

    margin: 0;

    min-height: 328px;
    max-width: 100%;
`;

const TituloEstilizado = styled.h1`
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;

    max-width: 300px;
    padding: 0 64px;
`;

const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    )
};

export default Banner;