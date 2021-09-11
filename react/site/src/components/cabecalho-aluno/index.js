import './styled.js'

import { Botoes } from "../outros/styled.js";
import { AlunosCabecalho } from './styled.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function cabecalho(){

    async function emBreve(){
        toast.warning('Em breve...')
    }

    return(
        <AlunosCabecalho>
            <ToastContainer />
            <div className="alinhando-container">
                <div className="alinhando-usuario">
                    <div className="alinhando-notificacao">
                        <img alt="Logo DevSchool" src="/assets/images/Brunex.svg"/>
                        <div className="alunos-notificacoes"> 3 </div>
                    </div>    
                    <div className="notificacao"> Olá, Bruno de Oliveira </div>
                </div>
                <div className="botoes-cabecalho">
                    <Botoes onClick={emBreve}> <img className="button" alt="atualizar" src="/assets/images/Atualizar.png"/> </Botoes>
                    <Botoes onClick={emBreve}> <img className="button" alt="sair" src="/assets/images/Sair.png"/> </Botoes>
                </div>
            </div>    
            <hr/>
        </AlunosCabecalho>
    )
}