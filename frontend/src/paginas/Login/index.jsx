import React, { useState } from "react";
import tela1 from "../../assets/imagens/teste.jpg";
import tela2 from "../../assets/imagens/teste.jpg";
import tela3 from "../../assets/imagens/teste.jpg";
import acaoSobre from "../../assets/imagens/acaoSobre.png";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import Alert from "react-s-alert";

const Login = () => {
  const [ativo, setAtivo] = useState(false);
  const handleClose = () => setAtivo(false);

  const submit = (values) => {
//     if (autorizado) {
//       login(values)
//         .then((data) => {
//           localStorage.setItem(ACCESS_TOKEN, data.accessToken);
//           props.loadCurrentlyLoggedInUser();
//         })
//         .catch(({ response }) => {
//           Alert.warning(
//             response && response.data
//               ? response.data
//               : "Verifique o usuario e senha!"
//           );
//         });
//     } else {
//       Alert.warning("Clique no Recaptcha!");
//     }
  };

  return (
    <>
    <Modal
        id="modCome"
        show={ativo}
        onHide={() => setAtivo(false)}
        className="robotM"
      >
        <Modal.Body className="text-center">
            <Modal.Title className="text-center titleDoisLogin">
                Faça seu login
            </Modal.Title>
          <p className="p">Insira seu e-mail e senha abaixo</p>
          <form className="">
                <div className="card-body">
                  <Formik
                    initialValues={{
                      email: "",
                      login: "",
                    }}
                    // validationSchema={loginValidation}
                    onSubmit={(values) => {
                      submit(values);
                    }}
                  >
                    {({ errors, touched, isValid }) => (
                      <Form className="p-2">
                        <div className="form-item">
                          {/* <label className="tituloLabel">E-mail: </label> */}
                          <div className="input-group mb-1">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon1"
                              >
                                <span className="fa fa-user"></span>
                              </span>
                            </div>
                            <Field
                              aria-label="Usuário"
                              aria-describedby="basic-addon1"
                              type="email"
                              name="email"
                              required="required"
                              placeholder="digite seu email"
                              className={`form-control ${
                                errors.email && touched.email ? "invalid" : ""
                              }`}
                            />
                          </div>
                          {/* <div>
                          {errors.email && touched.email ? (
                            <span className="error-text">{errors.email}</span>
                          ) : null}
                        </div> */}
                        </div>
                        <div className="form-item">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="basic-addon2"
                              >
                                <span className="fa fa-unlock-alt"></span>
                              </span>
                            </div>
                            <Field
                            //   type={type}
                              name="senha"
                              aria-label="Senha"
                              required="required"
                              aria-describedby="basic-addon2"
                              placeholder="digite sua senha"
                              className={`form-control ${
                                errors.senha && touched.senha ? "invalid" : ""
                              }`}
                            />
                            <div
                              className="input-group-prepend tipo2"
                            //   onClick={handleVisibility}
                            >
                              <span
                                className="input-group-text"
                                id="basic-addon2"
                              >
                                {/* <span className={`tipo ${icon}`}></span> */}
                              </span>
                            </div>
                          </div>
                          <div className="text-danger">
                            {errors.senha && touched.senha ? (
                              <span className="error-text">{errors.senha}</span>
                            ) : null}
                          </div>
                          <div className="input-group mt-2">
                            {/* <Recaptcha
                              sitekey={CHAVE_RECAPTCHA}
                              onChange={callback}
                              onExpired={onExpired}
                            /> */}
                          </div>
                          <button
                            type="submit"
                            onClick={() => {
                              if (!isValid) {
                                Alert.warning(
                                  "Preencha todos os campos destacados"
                                );
                              }
                            }}
                            className="btn buttonStyle btn-block mx-auto mt-3"
                          >
                            Continuar
                          </button>
                        </div>
                        <div className="float-left">
                          <button
                            onClick={() => setAtivo(false)}
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                          >
                            Voltar
                          </button>
                        </div>
                        <div className="float-right">
                          <a
                            href="#/signup"
                            className="p"
                          >
                            Esqueci minha senha
                          </a>
                        </div>
                      </Form>
                    )}
                  </Formik>
              </div>
          </form>
        </Modal.Body>
      </Modal>
      <section className="container mt-5">
        <h1 className="titleDoisLogin text-center">Faça seu Login ou cadastre-se</h1>
        <div className="row justify-content-center">
            <div className="card col-md-5">
                <div className="card-body">
                    <h5 className="titleDoisLogin">Já sou cadastrado</h5>
                    <p className="p">Informe seu e-mail ou CPF/CNPJ para se autenticar.</p>
                    <a className="buttonStyleOutline px-4" href="#" onClick={() => { setAtivo(true);}}>Login</a>
                </div>
            </div>
            <div className="card col-md-5">
                <div className="card-body">
                    <h5 className="titleDoisLogin">Não sou cadastrado</h5>
                    <p className="p">O nosso cadastro é simples e rápido!</p>
                    <a href="#" className="buttonStyle px-4">Cadastre-se</a>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Login;