import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
`;

export const LoginArea = styled.div`
    background-color:rgb(206,170,147);;
    width: 30vw;
    height: 70vh;
    border-radius: 30px;
    box-shadow: 0 2px 15px 0 rgba(136, 136, 136, 0.77);
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction:column;
    margin-top: 1%;
`;

export const Text = styled.h2`
    font-size: 1.8rem;
    color: white;
    border-bottom: 2px solid rgb(73,22,3);
    width: 80%;
    text-align: center;
`;

export const Entrar = styled.button`
    background-color: rgb(179,123,86);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.2 ease-out;
    &:hover{
        background: rgb(73,22,3);
        transition: 0.2s ease-out;
        color: white;
    }
    font-family: 'Montserrat', sans-serif;
    margin-bottom:30px;
`;

export const Link = styled.a`
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin:8px;
`;