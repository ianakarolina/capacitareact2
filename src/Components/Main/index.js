import { Container } from "./styles";

import Input from "../../Components/Input";
import Produtos from "../../Components/Products";

export default function Main() {
  return (
    <Container>
      <Input
        placeholder={"Email"}
        marginLeft={0}
        marginTop={10}
      />
      <Input
        placeholder={"Senha"}
        marginLeft={0}
        marginTop={6}
        type={"password"}
      />
      <Produtos />
    </Container>
  );
}
