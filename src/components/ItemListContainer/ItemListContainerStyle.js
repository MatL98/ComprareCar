import styled from 'styled-components'


export const ItemListStyles = styled.div`

  display: grid;
  grid-gap: 0.5rem;
  margin: 3.8rem 1.2rem;
  justify-content: center;

  img{
    height: 225px;
    width: 275px;
  }
	@media screen and (min-width: 480px) {
    {
      grid-template-areas: "items";
      img{
        height: 350px;
        width: 450px;
      }
    } 
  } 
  @media screen and (min-width: 768px) {
    {
      grid-template-areas: "items items";
      img{
        height: 300px;
        width: 430px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    {
      grid-template-areas: "items items items";
    }
    img{
      height: 350px;
      width: 550px;
    }
  }

`;

