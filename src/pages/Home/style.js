import styled from "styled-components";

export const Principal = styled.main`
  display: flex;
  flex-direction: column;

  padding: 2rem 0 0 2rem;

  margin-right: 1rem;

  @media screen and (max-width: 1024px) {
    margin-right: 2rem;
  }
  
  .secoes{
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;

      section{
        width: 100%;
      }
    }
  }
`