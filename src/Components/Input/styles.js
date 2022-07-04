import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.input`
  width: 100%;
  height: 55px;
  background-color: #8B4D23;
  border-radius: 10px;
  padding-left: 20px;
  color: white;
  border: none;
  outline: none;
  font-size: 16px;
  ::placeholder {
       color: white;
  }
  opacity: 80%;
  align-self: center;
`;
