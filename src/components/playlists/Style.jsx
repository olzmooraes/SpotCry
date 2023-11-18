import Styled from 'styled-components'

export const CardPlaylist = Styled.li`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding-left: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 250px;
    transition: all 0.3s ease-out;
    button:hover{
        transform: translateY(-1px);
        cursor: pointer;
    }
`