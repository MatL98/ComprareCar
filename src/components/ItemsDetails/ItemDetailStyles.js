import styled from "styled-components";


export const ItemDetailStyle = styled.div`

{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	{
		@media screen and (min-width: 480px) {
  {
		display: flex;
    flex-direction: column;
  }
	}
	@media screen and (min-width: 768px) {
  {
    display: flex;
    flex-direction: column;
  }
  }
  @media screen and (min-width: 1024px) {
  {
    display: flex;
    flex-direction: row;
  }
  }
}

.itemDetail{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.2rem  0.3rem 5rem 0.3rem;
}

.itemImg {
    height: 70%;
    width: 70%;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
		text-align: center;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }
  h3{
	font-size: 1.5rem;
  }
  h5 {
    color: green;
    font-size: 1.1rem;
  }


.plus,
.minus {
  color: white;
  background-color: black;
	border-radius: 50%;
  height: 60px;
  width: 60px;
  margin: 0 1.2rem; 
	font-size: 2rem;
}

.counter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
	margin-top: 0.5rem;
}

.btn-buy{
	margin-top: 0.5rem;
	height: 50px;
	width: 100px;
	background-color: lightgreen;
	border: none;
	color: white;
	border-radius: 50px;
	font-size: 1.2rem;
	&:hover{
		background-color: darkgreen;
	}
	
}
.btn-agree, .btn-edit{
	margin-top: 0.5rem;
	height: 50px;
	width: 200px;
	background-color: lightgreen;
	border: none;
	color: white;
	border-radius: 50px;
	font-size: 1.2rem;
	&:hover{
		background-color: #72be72;
	}
	
}
.btn-edit{
	background-color: red;
		&:hover{background-color: #c50101;}
	}

`
