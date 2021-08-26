import styled from "styled-components";

export const FormStyle = styled.div`

    h2{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 2.2rem;
    }

    form{
        display: flex;
        flex-direction: column;
        height: 10rem;
        input{
            height: 3rem;
            width: 50%;
            margin: 0.2rem 0;
        }
        button{
            width: 50%;
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