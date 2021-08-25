import styled from 'styled-components'


export const ItemStyle = styled.div`
{
  border-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid rgb(172, 172, 172);
}
&:hover {
  box-shadow: 0px 0px 8px black;
}
img{
  height: 100%px;
  width: 400px;
}
h2{
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
  margin: 0;
  color: black;
  
}
p{
	font-size: 1.3rem;
	font-family: 'Poppins', sans-serif;
	font-size: 400 italic;
  color: #000;
  
}
span{
  color: green;
}
`