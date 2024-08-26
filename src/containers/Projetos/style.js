import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid rgba(130, 87, 229, .3);
  border-radius: .5rem;

  margin: 1.6rem 0 2rem 0;
  padding: 1.6rem;

  height: 126vh;

  @media screen and (max-width: 1024px) {
    height: 146vh;
  }

  .titulo{
    font-size: 1.3rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

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

  .projetos{
    display: flex;
    flex-direction: column;
    gap: 15rem;

    @media screen and (max-width: 1024px) {
     align-items: center;
    }

    .ladoDireito{

      .infos{
        text-align: right;
      }
    }

    .ladoEsquerdo{
      .infos{
        text-align: left;

        span{
          padding-left: 2rem;
        }

        .buttons{
          display: flex;
          justify-content: left;

          padding-left: 2rem;
        }
      }
    }
  }
`