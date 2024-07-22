import styled from "styled-components";

export const Container = styled.section`
  width: 80%;

  padding: 2rem;
  margin-top: 1.5rem;

  border: 1px solid rgba(130, 87, 229, .3);
  border-radius: .5rem;

  .titulo{
    display: flex;
    align-items: center;
    gap: .5rem;

    font-size: 1.3rem;
    font-weight: bold;

    margin-bottom: 2rem;
  }

  .educacao{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`