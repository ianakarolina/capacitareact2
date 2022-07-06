import React from "react";
import { Container, LoginArea, Text, Entrar, Link } from "./styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";

export default function Login() {
  return (
    <Container>
      <Header />
      <LoginArea>
        <Text>Login</Text>
        <Input
          placeholder={"Email"}
          marginLeft={0}
          marginTop={10}
          backgroundColor={"white"}
        />
        <Input
          placeholder={"Senha"}
          marginLeft={0}
          marginTop={10}
          backgroundColor={"white"}
          type={"password"}
        />
        <Link>Esqueci minha senha</Link>
        <Entrar>Entrar</Entrar>
        <Link>Ainda não possui uma conta? Cadastre-se!</Link>
      </LoginArea>
    </Container>
  );
}
