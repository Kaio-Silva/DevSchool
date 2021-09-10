import './styled.js'

import { Botoes } from "../outros/styled.js";
import { AlunosCabecalho } from './styled.js';

export default function cabecalho(){
    return(
        <AlunosCabecalho>
            <div className="alinhando-container">
                <div className="alinhando-usuario">
                    <div className="alinhando-notificacao">
                        <img alt="Logo DevSchool" src="/assets/images/Brunex.svg"/>
                        <div className="alunos-notificacoes"> 3 </div>
                    </div>    
                    <div className="notificacao"> Olá, Bruno de Oliveira </div>
                </div>
                <div className="botoes-cabecalho">
                    <Botoes> <img alt="atualizar" src="/assets/images/Atualizar.png"/> </Botoes>
                    <Botoes> <img alt="atualizar" src="/assets/images/Sair.png"/> </Botoes>
                </div>
            </div>    
            <hr/>
        </AlunosCabecalho>
    )
}