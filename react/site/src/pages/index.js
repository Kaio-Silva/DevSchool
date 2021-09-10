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
                                <Inputs className="input"/>
                            </label>
                            <label>
                                <div> Chamada: </div> 
                                <Inputs className="input"/>
                            </label>
                        </div>
                        <div className="Alinhar-Inputs">
                            <label>
                                <div> Curso: </div>
                                <Inputs className="input"/>
                            </label>
                            <label>
                                <div> Turma: </div>
                                <Inputs className="input"/>
                            </label>
                        </div>
                        <button className="Botao-NovoAluno"> Cadastrar </button> 
                    </div>
                </div>
                <div className="Alunos-Matriculados">
                    <div className="alinhando-matricula">
                        <Barra/>
                        <div className="Titulo"> Alunos Matriculados </div>
                    </div>
                    <table className="Tabela">
                        <thead>
                            <tr>
                                <th className="Informacoes-Cabecalho">ID</th>
                                <th className="Informacoes-Cabecalho">Nome</th>
                                <th className="Informacoes-Cabecalho">Chamada</th>
                                <th className="Informacoes-Cabecalho">Turma</th>
                                <th className="Informacoes-Cabecalho">Curso</th>
                                <th className="coluna-acao"></th>
                                <th className="coluna-acao"></th>
                            </tr>
                        </thead>
                        <tbody className="Conteudo-Tabela">
                            <tr className="Registro-Tabela">
                                <td className="Informacoes-Tabela">1 </td>
                                <td className="Informacoes-Tabela">Fulano da Silva Salro </td>
                                <td className="Informacoes-Tabela">14 </td>
                                <td className="Informacoes-Tabela">InfoX </td>
                                <td className="Informacoes-Tabela">Informatica </td>
                                <td> <button className="button-edit"> <img alt="edit" src="/assets/images/editar.svg"/>  </button> </td>
                                <td> <button className="button-remover"> <img alt="delete" src="/assets/images/delete.svg"/>  </button> </td>
                            </tr>
                            <tr className="Registro-Tabela">
                                <td className="Informacoes-Tabela">1 </td>
                                <td className="Informacoes-Tabela">Fulano da Silva Salro </td>
                                <td className="Informacoes-Tabela">14 </td>
                                <td className="Informacoes-Tabela">InfoX </td>
                                <td className="Informacoes-Tabela">Informatica </td>
                                <td> <button className="button-edit"> <img alt="edit" src="/assets/images/editar.svg"/>  </button> </td>
                                <td> <button className="button-remover"> <img alt="delete" src="/assets/images/delete.svg"/>  </button> </td>
                            </tr>
                            <tr className="Registro-Tabela">
                                <td className="Informacoes-Tabela">1 </td>
                                <td className="Informacoes-Tabela">Fulano da Silva Salro </td>
                                <td className="Informacoes-Tabela">14 </td>
                                <td className="Informacoes-Tabela">InfoX </td>
                                <td className="Informacoes-Tabela">Informatica </td>
                                <td> <button className="button-edit"> <img alt="edit" src="/assets/images/editar.svg"/>  </button> </td>
                                <td> <button className="button-remover"> <img alt="delete" src="/assets/images/delete.svg"/>  </button> </td>
                            </tr>
                            <tr className="Registro-Tabela">
                                <td className="Informacoes-Tabela">1 </td>
                                <td className="Informacoes-Tabela">Fulano da Silva Salro </td>
                                <td className="Informacoes-Tabela">14 </td>
                                <td className="Informacoes-Tabela">InfoX </td>
                                <td className="Informacoes-Tabela">Informatica </td>
                                <td> <button className="button-edit"> <img alt="edit" src="/assets/images/editar.svg"/>  </button> </td>
                                <td> <button className="button-remover"> <img alt="delete" src="/assets/images/delete.svg"/>  </button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>   
    );
}