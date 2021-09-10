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

    .Botao-NovoAluno:hover{
        background-color: #cc47b6;
        transition: .5s;
    }


    .Alunos-Matriculados{
        background-color: white;

        margin: 2em;
        padding: 2em;
    }

    .alinhando-matricula{
        display: flex;
        flex-direction: row;

    }


    table {
        border-collapse: collapse;
        margin: 2em 1em;
        width: 95%;

        font-family: sans-serif;
    }

    thead {
        background-color: #986CDF;
        
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 


    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 2.5em;
        height: 2.5em;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover{
        cursor: pointer;
    }

    input{
        cursor: pointer;
    }

`

export { Container }