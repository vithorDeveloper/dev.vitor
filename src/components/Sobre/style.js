import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(130, 87, 229, .3);
  border-radius: .5rem;

  margin-top: 1.6rem;
  padding: 2rem;

  width: 100%;

  /* @media screen and (max-width: 1024px) {
    max-width: 90%;
  } */

  .titulo{
    font-size: 1.3rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    div{
      display: flex;
      align-items: center;

      gap: .4rem;
    }

    .saibaMais{
      display: flex;
      align-items: center;
      gap: .3rem;

      color: #8257e5;

      a{
        text-decoration: none;
        color: #8257e5;
  
        font-weight: normal;
        font-size: .8rem;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }

  .texto{
    font-weight: 100;
    font-size: .85rem;
    line-height: 1.5rem;

    width: 100%;

    /* @media screen and (max-width: 1024px) {
    max-width: 90%;
  } */
  }
`