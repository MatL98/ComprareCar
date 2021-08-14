import styled from "styled-components";

export const CartStyle = styled.div`
    display: grid;
    margin: 2rem 1rem;
    grid-gap: 0.5rem;

    @media screen and (min-width: 768px) {
    {
    grid-template-areas: "item item";
    }
    }

    .pCart{
        font-size: 1.5rem;
    }
    .spanCart{
        font-weight: 600;
        font-size: 1.8rem;
        color: gold;
        
    }
`