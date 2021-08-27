import styled from "styled-components";

export const FormStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 2.2rem;
    }
    .totalFinal{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 0.5rem;
    }

    form{
        display: flex;
        flex-direction: column;
        height: 10rem;
        input{
            height: 3rem;
            width: 100%;
            margin: 0.2rem 0;
        }
        margin-bottom: 2rem; 
        button{
            width: 100%;
            border-radius: 50px;
            background-color: #31c704;
            height: 2.5rem;
            color: white;
            border: none;
            &:hover{
                background-color: #1d7702;
            }   

        }
    }



`