import styled from "styled-components";

export const CartStyle = styled.div`
    {
        display: grid;
        margin: 2rem 1rem;
        grid-gap: 0.5rem;
    }    

    @media screen and (min-width: 768px) {
    {
    grid-template-areas: "item item";
    justify-content: center;
    }
    }
    h5{
        font-family: "Poppins", sans-serif;
        font-size: 70px;
    }
    .btnBack{
        height: 50px;
        width: 150px;
        font-size: 1.2rem;
        text-transform: lowercase;
        color: white;
        background-color: black;
        border-radius: 50px;
    }
    .btn-clean{
        height: 2rem;
        width: 100%;
        color: white;
        background-color: #fd6262;
        font-size: 1.2rem;
        border: none;
        border-radius: 50px;
        &: hover{
            background-color: #db2c2c;
        }
    }
    .pCart{
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    .spanCart{
        font-weight: 600;
        font-size: 1.8rem;
        color: dark;
        
    }
    .cartNoItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5rem;
    }
    
`