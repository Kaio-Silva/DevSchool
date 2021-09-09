import React from "react"; 

import { useState } from "react";

import Botôes from "../components/botoes";
import Barra from "../components/barra";
import { Inputs } from "../components/inputs/styled.js";

import { Container } from "./styled";

import Api from "../service/api";
import { Botoes } from "../components/botoes/styled";

const api = new Api();


export default function conteudo() {
     return(
        <Container>
            <div className="menu">
                <div className="menu-cabecalho">
                    <img alt="Logo DevSchool" src="/assets/images/Logo.png"/>
                    <div className="Titulo-Menu"> <span>Dev</span>School </div>
                </div>
                <div className="Back-Menu"></div>
                <div className="menu-itens">
                    <div className="gerenciamento"> 
                         Gerenciamento
                         <div className="item-alunos"> Alunos </div> 
                    </div>
                </div>
            </div>
            <div className ="alunos">
                <div className="alunos-cabecalho">
                    <div>
                        <img alt="Logo DevSchool" src="/assets/images/Brunex.svg"/>
                        <div className="alunos-notificacoes"> 3 </div>
                        <div className="notificacao"> Olá, Bruno de Oliveira </div>
                    </div>
                    <div>
                        <Botoes> <img alt="atualizar" src="/assets/images/Atualizar.png"/> </Botoes>
                        <Botoes> <img alt="atualizar" src="/assets/images/Sair.png"/> </Botoes>
                    </div>
                </div>
                <hr/>
                <div className="novo-aluno">
                    <div>
                        <Barra/>
                        <div className="Titulo"> Novo Aluno </div>
                    </div>
                    <div className="Alinhar-Aluno">
                        <div className="Alinhar-Inputs">
                            <label>
                                Nome:
                                <Inputs/>
                            </label>
                            <label>
                                Curso:
                                <Inputs/>
                            </label>
                        </div>
                        <div className="Alinhar-Inputs">
                            <label>
                                Chamada:
                                <Inputs/>
                            </label>
                            <label>
                                Turma:
                                <Inputs/>
                            </label>
                        </div> 
                    </div>
                    <button className="Botao-NovoAluno"> Cadastrar </button>
                </div>
                <div className="Alunos-Matriculados">
                    <div>
                        <Barra/>
                        <div className="Titulo"> Alunos Matriculados </div>
                    </div>
                    <div className="Tabela">
                        <div className="Cabecalho-Tabela">
                            <div className="Informacoes-Cabecalho">ID</div>
                            <div className="Informacoes-Cabecalho">Nome</div>
                            <div className="Informacoes-Cabecalho">Chamada</div>
                            <div className="Informacoes-Cabecalho">Turma</div>
                            <div className="Informacoes-Cabecalho">Curso</div>
                        </div>
                        <div className="Conteudo-Tabela">
                            <div className="Registro-Tabela">
                                <div className="Informacoes-Tabela">1</div>
                                <div className="Informacoes-Tabela">Fulano da Silva Salro</div>
                                <div className="Informacoes-Tabela">14</div>
                                <div className="Informacoes-Tabela">InfoX</div>
                                <div className="Informacoes-Tabela">Informatica</div>
                                <Botoes> <img alt="atualizar" src="/assets/images/editar.svg"/>  </Botoes>
                                <Botoes> <img alt="atualizar" src="/assets/images/delete.svg"/>  </Botoes>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>   
    );
}