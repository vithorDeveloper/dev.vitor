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

  .experiencias{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  a{
    display: flex;
    justify-content: center;

    padding: .5rem 0;
    margin-top: 5rem;

    border-radius: .3rem;

    background-color: #8257e5;
    color: #ecf0f1;

    font-weight: bold;
    font-size: .8rem;

    text-decoration: none;

    transition: all .2s;

    &:hover {
      background-color: rgba(130, 87, 229, .8);
    }
  }
`