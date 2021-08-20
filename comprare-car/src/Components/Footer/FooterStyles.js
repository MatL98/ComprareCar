import styled from "styled-components";

export const FooterStyle = styled.div`
    background-color: black;
    .footerNav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: rgb(99, 99, 99);
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footerLink{
        padding: 0 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        list-style: none;
    }
    .footerA{
        color: white;
    }
`
