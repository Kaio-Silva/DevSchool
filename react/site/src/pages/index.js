import React from "react"; 

import { useState } from "react";


import { Barra, Inputs, Botoes } from '../components/outros/styled.js'
import { Container } from "./styled";
import Menu from '../components/menu'
import Cabecalho from "../components/cabecalho-aluno/index.js";

import Api from "../service/api";

const api = new Api();


export default function conteudo() {
     return(
        <Container>
            <Menu />
            <div className ="alunos">
                <Cabecalho />
                <div className="novo-aluno">
                    <div className="alinhando-titulo">
                        <Barra/>
                        <div className="Titulo"> Novo Aluno </div>
                    </div>
                    <div className="Alinhar-Aluno">
                        <div className="Alinhar-Inputs">
                            <label>
                                <div className="nome"> Nome: </div>
                                <Inputs/>
                            </label>
                            <label>
                                <div> Chamada: </div> 
                                <Inputs/>
                            </label>
                        </div>
                        <div className="Alinhar-Inputs">
                            <label>
                                <div> Curso: </div>
                                <Inputs/>
                            </label>
                            <label>
                                <div> Turma: </div>
                                <Inputs/>
                            </label>
                        </div>
                        <button className="Botao-NovoAluno"> Cadastrar </button> 
                    </div>
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