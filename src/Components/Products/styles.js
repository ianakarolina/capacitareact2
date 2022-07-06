import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  flex-direction: row;
`;

export const BooksProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  width: 20%;
  line-height: 2;
  padding: 20px;
`;

export const Image = styled.img`
  height: 50%;
  width: 70%;
  margin-bottom: 10px;
  src: ${(props) => props.Image};
  box-shadow: 0 2px 15px 0 rgba(136, 136, 136, 0.77);
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: rgb(179, 123, 86);
  color: #fff;
  cursor: pointer;
  transition: 0.2 ease-out;
  &:hover {
    background: rgb(223, 157, 60);
    transition: 0.2s ease-out;
    color: #000;
  }
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const Text = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Quantity = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  margin-top: 10px;
  border-radius: 10px;
`;
