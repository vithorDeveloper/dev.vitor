import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0 2rem 2rem;

  font-size: 1.3rem;

  p{
    padding: 1rem 0 3rem;

    font-size: 1rem;

    opacity: .6;

    line-height: 1.5rem;
  }

  @media screen and (max-width: 1024px) {

    opacity: 1;

    section{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`