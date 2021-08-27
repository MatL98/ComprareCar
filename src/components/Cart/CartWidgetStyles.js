import styled from "styled-components";

export const CartWidgetStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;

  .cartImg{
    height: 40px;
    width: 40px;
  }
  
  .pCartWidget{
    display: flex;
    margin: 0 0.2rem;
    height: 1.4rem;
    width: 1rem;;
    justify-content: center;
    background-color: #a8a8a8;
    text-shadow: 0px 0px 3px black;
    border-radius: 3px;
  }
  @media screen and (min-width: 768px) {
    .cartImg{ 
      height: 60px;
      width: 60px;
		}
    .pCartWidget{
      height: 2rem;
      width: 1.3rem;;
    }
	} 
`