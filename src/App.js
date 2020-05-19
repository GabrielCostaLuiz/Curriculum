import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Informações />
      <Objetivo />
      <Formação />
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Gabriel Costa Luiz</h1>
      </div>
    );
  }
}

class Informações extends React.Component {
  render() {
    return (
      <div className="info">
        <h2>Informações</h2>
        <h4>Brasileiro, 17 anos, solteiro</h4>
        <h4>
          Endereço: Rua Malva Isco nº 130, apto 77 – Vila Nova Curuçá – SP
        </h4>
        <h4>Telefone: (011) 97036-6994</h4>
        <h4>E-mail: gabrielbragacostaluiz@gmail.com</h4>
      </div>
    );
  }
}

class Objetivo extends React.Component {
  render() {
    return (
      <div className="objetivo">
        <h2>Objetivo</h2>
        <p>
          Procuro oportunidade na área de T.I (Primeiro Emprego), visando
          crescimento profissional, pessoal e intelectual de forma contínua,
          sempre visando a excelência em todas as atividades que me forem
          destinadas.
        </p>
      </div>
    );
  }
}

class Formação extends React.Component {
  render() {
    return (
      <div className="formacao">
        <h2>Formação</h2>

        <div>
        <p><strong>Escolaridade</strong></p>
        <p>Ensino médio completo</p>
        </div>

        <div>
        <p><strong>Graduação</strong></p>
        <p>Técnico em Informática (cursando)<br></br>
        Duração: 3 semestres <br></br>
        Senac Tatuapé </p>

       <p> Excel 2016 <br></br>
        Duração: 24 horas<br></br>
        Senac Tatuapé</p>

        <p>Excel 2016 Avançado <br></br>
        Duração: 39 horas<br></br>
        Senac Tatuapé </p>

        <p>Orientação Profissional com Inclusão Digital<br></br>
        Duração: 8 horas<br></br>
        Server – Educação Profissional</p>
        </div>
      </div>
    );
  }
}

export default App;
