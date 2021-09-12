import styled from 'styled-components'

const AlunosCabecalho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .alinhando-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .alinhando-usuario{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .image-user{
        height: 3em;
        width: 3em;
        border-radius: 50%;
    }

    .botoes-cabecalho{
        display: flex;
        flex-direction: row;
    }

    .alinhando-notificacao{
        display: flex;
        flex-direction: row;

        margin: 0.5em 0.8em;
    }

    .alunos-notificacoes{
        display: flex;
        justify-content: center;
        position: absolute;
        margin-left: 2.5em;
        width: 1.5em;

        background-color: #E911C6;
        border-radius: 50%;
        border: 2px solid white;

        font-family: sans-serif;
        font-size: .8em;
        color: white;
    }

    

    .notificacao{
        font-family: sans-serif;
        font-size: 0.9em;
    }

    .botoes-cabecalho{
        margin: 1em 2em;
    }

    .botoes-cabecalho > button {
        margin-right: 0.3em;
    }

    hr {
        width: 95%;
        margin: 0px;
        border: 1px solid #D9D9D9;
    }
    Botoes:hover{
        cursor: pointer;
    }

    .button:hover{
        cursor: pointer;
    }

    img {
        cursor: pointer;
    }

`

export { AlunosCabecalho }