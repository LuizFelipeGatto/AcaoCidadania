import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
// import Notificacao from "./Notificacao";
import logoAcao from "../assets/imagens/logoAcao.png";
import "./header.css";

const AppHeader = (props) => {
  return (
    <Navbar id="navH" bg="white" expand="lg" className="box-shadow">
      <Row>
        <Col md={6}>
          <Navbar.Brand href="/">
            <img
              className="pl-md-5"
              src={logoAcao ? logoAcao : null}
              alt="logo Legalis"
            />
          </Navbar.Brand>
        </Col>
        <Col md={6}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-4 mx-5">
              <Nav.Link href="/" className="titleQuatro mr-2">
                Início
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  if (document.getElementById("sobre")) {
                    window.scrollTo({
                      top: document.getElementById("sobre").offsetTop,
                      behavior: "smooth",
                    });
                  } else {
                    props.history.push({
                      pathname: "/",
                      state: { elemento: "sobre" },
                    });
                  }
                }}
                className="titleQuatro"
              >
                Quem somos
              </Nav.Link>
              <Nav.Link href="#/podcasts" className="titleQuatro">
                Contato
              </Nav.Link>
              {/* <Nav.Link className="navSocial mt-2 mb-2 ml-3">
            <Notificacao usuario={props.currentUser} />
          </Nav.Link> */}
            </Nav>
            <Nav className="text-center mt-3">
              {!props.authenticated && !props.currentUser ? (
                <>
                  <Nav.Link href="/login" className="buttonStyle">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  className="linkNome"
                  title={
                    props.currentUser
                      ? props.currentUser.nome.split(" ")[0]
                      : ""
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#/modulos">
                    <i className="icones-header fa fa-home fa-fw"></i> Módulos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#/profile">
                    <i className="icones-header fa fa-user fa-fw"></i> Dados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#/pagamentos">
                    <i className="icones-header fa fa-usd  fa-fw"></i>{" "}
                    Pagamentos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#/contratar">
                    <i className="icones-header fa fa-edit fa-fw"></i> Contratar
                    pacote
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={props.onLogout}>
                    <i
                      className="icones-header fa fa-sign-out fa-fw"
                      aria-hidden="true"
                    ></i>
                    Sair
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
};

export default AppHeader;
