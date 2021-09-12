import Api from '../../service/api.js'
import { MenuContainer } from './styled.js'


export default function Menu(){
    return(
        <MenuContainer>
            <div className="menu-cabecalho">
                <img alt="Logo DevSchool" src="/assets/images/Logo.png"/>
                <div className="titulo-Menu"> <span>Dev</span>School </div>
            </div>
            <div className="back-Menu"></div>
            <div className="menu-itens">
                <div className="gerenciamento">
                    Gerenciamento
                    <img src="/assets/images/seta.png"/>
                </div>
                <div className="item-alunos"> Alunos </div>
            </div>
        </MenuContainer>
    )
}