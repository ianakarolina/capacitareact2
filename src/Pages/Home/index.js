import { useState, useEffect } from "react";

import { Container } from "./styles";

import Input from "../../Components/Input";
import Header from "../../Components/Header";
import Main from "../../Components/Main"

export default function Home() {
  return (
    <Container>
      <Header />
      <Main/>
    </Container>
  );
}