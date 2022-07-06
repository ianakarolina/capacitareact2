import React from "react";
import { FaUserCircle, FaHome, FaBars } from "react-icons/fa";
import { HeaderName, HeaderMenu, Head } from "./styles";
import { BrowserRouter as Link } from "react-router-dom";

export default function Header() {
  const itens = [
    { nome: "Menu", icone: <FaHome />, path: "/" },
    { nome: "Login", icone: <FaUserCircle />, path: "/login" },
    { nome: "", icone: <FaBars />, path: "/bar" },
  ];

  return (
    <Head>
      <HeaderName>ACCErvo Cultural</HeaderName>
      <HeaderMenu>
        {itens.map((item, index) => {
          return (
            <>
              <i key={index}>
                <Link to={item.path}>{item.icone}</Link>
              </i>
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            </>
          );
        })}
      </HeaderMenu>
    </Head>
  );
}
