import React from "react"; 

import { useState, useEffect, useRef } from "react";


import { Barra, Inputs } from '../components/outros/styled.js'
import { Container } from "./styled";
import Menu from '../components/menu'
import Cabecalho from "../components/cabecalho-aluno/index.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import Api from "../service/api.js";
const api = new Api();


export default function Conteudo() {
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    async function listar(){
        let r = await api.listar();
        setAlunos(r);
    }

    const loading = useRef(null);

    async function inserir(){
        loading.current.continuousStart();

        if(idAlterando === 0){
            let r = await api.inserir(nome, chamada, curso, turma);
            if(r.erro)
                toast.error('Erro na inserção do aluno');
            else    
                toast.success('🚀 aluno inserido !!');    
        } else {
            let r = await api.alterar(idAlterando, nome, chamada, curso, turma);
            if(r.erro)
                toast.error(r.erro)
            else 
                toast.success('🚀 aluno alterado !!')       
        }    

        loading.current.complete();
        limpar();
        listar();
    }

    function limpar(){
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
    }

    async function remover(id){
        loading.current.continuousStart();

        await api.remover(id);
        toast.success('🚀 aluno removido !!')

        loading.current.complete();
        listar();
    }

    async function alterar(item){
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);
    }

    useEffect(() => {
        listar()
    }, [])

     return(
        <Container>
            <LoadingBar color="#E911C6" ref={loading}/>
            <ToastContainer />
            <Menu />
            <div className ="alunos">
                <Cabecalho />
                <div className="novo-aluno">
                    <div className="alinhando-titulo">
                        <Barra/>
                        <div className="Titulo"> {idAlterando === 0 ? "Novo Aluno" : `Alterando Aluno ${idAlterando}`} </div>
                    </div>
                    <div className="Alinhar-Aluno">
                        <div className="Alinhar-Inputs">
                            <label>
                                <div className="nome"> Nome: </div>
                                <Inputs className="input" type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                            </label>
                            <label>
                                <div> Chamada: </div> 
                                <Inputs className="input" type="text" value={chamada} onChange={e => setChamada(e.target.value)}/>
                            </label>
                        </div>
                        <div className="Alinhar-Inputs">
                            <label>
                                <div> Curso: </div>
                                <Inputs className="input" type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                            </label>
                            <label>
                                <div> Turma: </div>
                                <Inputs className="input" type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                            </label>
                        </div>
                        <button className="Botao-NovoAluno" onClick={inserir}> { idAlterando === 0 ? "Cadastrar" : "Alterando" } </button> 
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
                            {alunos.map((item, i) =>
                                <tr className={ i % 2 == 0 ? "Registro-Tabela" : ""}>
                                    <td className="Informacoes-Tabela"> {item.id_matricula} </td>
                                    <td className="Informacoes-Tabela"> {item.nm_aluno} </td>
                                    <td className="Informacoes-Tabela"> {item.nr_chamada} </td>
                                    <td className="Informacoes-Tabela"> {item.nm_turma} </td>
                                    <td className="Informacoes-Tabela"> {item.nm_curso} </td>
                                    <td className="coluna-acao"> <button className="button-edit" onClick={() => alterar(item)}> <img alt="edit" src="/assets/images/editar.svg"/>  </button> </td>
                                    <td className="coluna-acao"> <button className="button-remover" onClick={() => remover(item.id_matricula)}> <img alt="delete" src="/assets/images/delete.svg"/>  </button> </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>   
    );
}