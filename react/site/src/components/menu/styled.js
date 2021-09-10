import styled from "styled-components";



const MenuContainer = styled.div`

    background-color: #2B3031;
    width: 25em;

    .menu-cabecalho{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        height: 7em;
    }

    .titulo-Menu{
        font-family: sans-serif;
        font-size: 1.5em;
        font-weight: 700;

        margin-left: 0.5em;
        color: white
    }

    span{
        color: #DB21BD;
    }

    .back-Menu{
        background-color: #262626;
        height: 2.5em;
    }

    .menu-itens{

    }

    .gerenciamento{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        font-family: sans-serif;
        font-weight: 600;
        color: white;

        height: 4em;
    }

    .item-alunos{
        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: white;
        border-left: solid 4px #E911C6;

        font-family: sans-serif;
        font-weight: 600;
        color: black;

        height: 3em;
    }

    .item-alunos > div{
        margin-left: 3.2em;
    }
`

export { MenuContainer }