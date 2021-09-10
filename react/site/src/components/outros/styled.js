import styled from 'styled-components'

const Barra = styled.div`
    background-color: #986CDF;
    width: 6px;
    height: 2em;
    margin: 0em 1em;
    border-radius: 1em;
`

const Inputs = styled.input`
    border-radius: 0.2em;
    border: solid 0.8px;
    border-color: #A8A8A8;
    width: 13em;
    height: 2.2em;
    padding: .5em;
`

const Botoes = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #986CDF;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    border: none;

`


export { Barra, Inputs, Botoes }