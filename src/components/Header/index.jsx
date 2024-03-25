import React from "react";
import logo from "../../assets/logo-dio.png";

import { Button } from "../Button";

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";
import { useNavigate } from "react-router-dom/dist";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <img
            src={logo}
            onClick={() => {
              handleClick("/");
            }}
            alt="Logo da dio"
          />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button
                title="Entrar"
                onClick={() => {
                  handleClick("login");
                }}
              />
              <Button
                title="Cadastrar"
                onClick={() => {
                  handleClick("cadastro");
                }}
              />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
