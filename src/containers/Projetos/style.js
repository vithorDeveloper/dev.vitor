import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid rgba(130, 87, 229, .3);
  border-radius: .5rem;

  margin: 1.6rem 0 2rem 0;
  padding: 1.6rem;

  height: 116vh;

  @media screen and (max-width: 1024px) {
    height: 116vh;
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

    @media screen and (max-width: 768px) {
     display: none;
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

  .projetosMobile{
    display: none;
  }

  @media screen and (max-width: 768px) {
  
    .projetosMobile{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15rem;

      .infos{
        width: 25rem;

        text-align: center;

        span{
          margin-left: 2rem;
          opacity: 1;
        }

        p{
          margin-left: .5rem;
        }

        .buttons{
          display: flex;
          justify-content: center;
          margin-left: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
  
    .projetosMobile{
      gap: 12rem;

      img{
        display: none;
      }

      .infos{
        span{
          opacity: 0.6;
        }
      }
    }
  }
`