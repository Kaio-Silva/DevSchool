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

    .botoes-cabecalho{
        display: flex;
        flex-direction: row;
    }

    .alinhando-notificacao{
        display: flex;
        flex-direction: row;

        margin: 0.5em 0.8em
    }

    .alunos-notificacoes{
    
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
`

export { AlunosCabecalho }