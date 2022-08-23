import React from "react";
import tela1 from "../../assets/imagens/teste.jpg";
import tela2 from "../../assets/imagens/teste.jpg";
import tela3 from "../../assets/imagens/teste.jpg";
import acaoSobre from "../../assets/imagens/acaoSobre.png";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 img-fluid"
              src={tela1 ? tela1 : null}
              alt="First slide"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={tela2 ? tela2 : null}
              alt="Second slide"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("pod").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="btn btn-info btn-lg bur2"
              >
                Ouça já
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={tela3 ? tela3 : null}
              alt="terceiro slide"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("pod").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="btn butPod btn-lg bur2"
              >
                Ouça já
              </button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="jumbotron">
        <h1 className="display-4">Seja bem-vindo(a)!</h1>
        <p className="lead">
          Conheça a Legalis Soluções e deixe-nos facilitar o seu trabalho.
        </p>
        <hr className="my-3"></hr>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="d-block w-100 img-fluid"
              src={acaoSobre ? acaoSobre : null}
              alt="First slide"
            ></img>
          </div>
          <div className="col-md-6">
            <h1 className="titleDois">
              Olá, somos a{" "}
              <span className="font-weight-bold">Ação Cidadania!</span>
            </h1>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a href="#" className="buttonStyle">
              Saiba mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
