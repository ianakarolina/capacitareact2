import React from "react";

import { Container, InputText } from "./styles";

const Input = ({
  marginTop,
  marginLeft,
  placeholder,
  type
}) => (
  <Container marginTop={marginTop} marginLeft={marginLeft} >
    <InputText
      placeholder={placeholder}
      type={type}/>
  </Container>
);

export default Input;