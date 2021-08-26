import styled from 'styled-components'


export const ItemListStyles = styled.div`
{
  display: grid;
  grid-gap: 0.5rem;
  margin: 3.8rem 1rem;

	@media screen and (min-width: 480px) {
  {
    grid-template-areas: "items";
  } 
} 
  @media screen and (min-width: 768px) {
  {
    grid-template-areas: "items items";
  }
  }
  @media screen and (min-width: 1024px) {
  {
    grid-template-areas: "items items items";
  }
  }
  
  
}


`;

