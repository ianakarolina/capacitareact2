import React from "react";
import { FaUserCircle, FaHome, FaBars } from "react-icons/fa";
import { MenuItem, HeaderName, HeaderMenu, Head } from "./styles";

export default function Header() {
  const itens = [
    { nome: "Menu", icone: <FaHome /> },
    { nome: "Login", icone: <FaUserCircle/>},
    { nome: "", icone: <FaBars/>}
    ];

    const renderList = itens.map((item,index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ))

    return(
        <Head>
            <HeaderName>ACCErvo Cultural</HeaderName>
            <HeaderMenu>{renderList}</HeaderMenu>
        </Head>
    );
}