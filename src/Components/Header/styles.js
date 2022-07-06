import styled from "styled-components";

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  &:hover {
    color: #e1e1e1;
  }
  margin-right: 15px;
  font-size: 1.5rem;
  align-items: center;
`;

export const Head = styled.header`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 50px 50px;
  justify-content: space-between;
  opacity: 80%;
`;

export const HeaderName = styled.h1`
  padding-left: 3%;
  color: ${props => props.theme.colors.headerText};
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
  li{
        font-size: 18px;
        margin-right: 20px;
        &:hover{
            color:white;
        }
    }
    i{
        font-size: 1.5rem;
        &:hover{
            color:white;
        }
    }

    a{
        text-decoration: none;
        color:rgb(73,22,3);
        transition: filter .2s;
    }

    a:hover{
        color:white;
    }
`;
