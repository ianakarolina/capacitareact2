import React from "react";
import { useState, useEffect } from "react";

import { Container, BooksProducts, ProductList, Image, Button, Description, Text, Quantity} from "./styles";

import book1 from "../../img/autodacompadecida.jpg"
import book2 from "../../img/naoconteaninguem.jpg"
import book3 from "../../img/Umdia.jpg"


export default function Produtos({
  marginLeft,
  marginRight,
  src
}) {
  const [quantity, setQuantity] = useState(0);

  function Increment() {
    setQuantity(quantity + 1);
  }

  function Decrement() {
    if (quantity === 0) {
        console.log("Não é possível decrementar mais a função");
    } else {
        setQuantity(quantity - 1);
    }
}

  useEffect(()=>{
    if (quantity >= 10) {
      setQuantity(10);
    }
  }, [quantity])

  const products = [
    {
      id: 1,
      name: "Um Dia",
      price: "R$33,80",
      desc: "Romance",
      image: book3    
    },
    {
      id: 2,
      name: "Não conte a ninguém",
      price: "R$35,90",
      desc: "Suspense",
      image: book2
    },
    {
      id: 3,
      name: "Auto da Compadecida",
      price: "R$20,90",
      desc: "Comédia",
      image:book1
    },
  ];

  return (
    <Container marginLeft={marginLeft} marginRight={marginRight}>
      <Quantity>
        <Text>
        Quantidade: {quantity}
        </Text>      
      </Quantity>
      <ProductList>
        {products.map((product) => (
          <BooksProducts>
            <Image src={product.image}/>
            <Text>{product.name}</Text>
            <Description>{product.desc}</Description>
            <Text>{product.price}</Text>
            <Button onClick={Increment}>Adicionar</Button>
            <Button onClick={Decrement}>Remover</Button>
          </BooksProducts>
        ))}
      </ProductList>
      
    </Container>
  );
}