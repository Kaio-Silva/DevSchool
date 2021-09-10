import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    background-color: #F5F5F5;

    .alunos{
        width: 100vw;
    }

    .novo-aluno {
        background-color: white;
        padding: 2em;
        margin: 2em
    }

    .alinhando-titulo{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .Titulo{
        font-family: sans-serif;
        font-size: 1.8em;
        font-weight: 700;
    }

    .Alinhar-Aluno{
        display: flex;
        flex-direction: row;
    }

    .Alinhar-Inputs{
        display: flex;
        flex-direction: column;

        margin-top: 2em;
    }

    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: sans-serif;
        font-size: 0.9em;

        margin: 0.5em;
    }

    label > div {
        margin-right: 1em
    }

    .nome {
        margin-left: 1.65em;
    }

    .Botao-NovoAluno{
        display: flex;
        align-self: flex-end;

        background-color: #E911C6;
        color: white;
        
        margin-left: 1em;
        padding: 0.8em 2em;
        
        border-radius: 5em;
        border: none;
    }

`

export { Container }