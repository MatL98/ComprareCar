import styled from 'styled-components'


export const ItemListStyles = styled.div`
{
  display: grid;
  grid-template-areas: "items";
  grid-gap: 0.5rem;
  margin: 2rem 1rem;

	@media screen and (min-width: 480px) {
  {
    display: grid;
    grid-template-areas: "items";
    margin: 5rem 2rem;
  }
} 
@media screen and (min-width: 720px) {
  {
    grid-template-areas: "items items items";
  }
}
}

`;
