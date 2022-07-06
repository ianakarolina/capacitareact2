import styled from "styled-components";

export const Container = styled.div`
  width: 23vw;
  height: 8vh;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.input`
  width: 100%;
  height: 100%;
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
  box-shadow: 0 2px 15px 0 rgba(136, 136, 136, 0.77);
`;
