import styled from "styled-components";

export const MenuItem = styled.div`
    height: 5vh;
    width: 5vw;
    cursor:pointer;
    display: flex;
    &:hover{
        color:#E1E1E1 ;
    }
    margin-right: 15px;  
`;

export const Head = styled.header`
  background-color: rgb(179, 123, 86);
  display: flex;
  padding: 50px 50px;
  justify-content: space-between;
  opacity: 80%;
`;

export const HeaderName = styled.h1`
  padding-left: 3%;
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  font-weight: bold;
  color: rgb(73, 22, 3);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


