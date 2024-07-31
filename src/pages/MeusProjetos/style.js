import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0 2rem 2rem;

  font-size: 1.3rem;

  p{
    padding-top: 1rem;

    font-size: 1rem; 

    opacity: .6;

    line-height: 1.5rem;
  }

  a{
    cursor: pointer;

    color: rgb(130, 87, 250);

    font-weight: bold;
  }

  div{
  
    h3{
      padding: 2rem 0 1rem 0;
    }

    .projetos{
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
  }
`