import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0 2rem 2rem;

  font-size: 1.3rem;

  p, span{
    padding-top: 1rem;

    font-size: 1rem;

    opacity: .6;

    line-height: 1.5rem;
  }

  ul{
    margin: 1.6rem 0 0 1rem;
    line-height: 2.2rem;

    li{
      font-size: 1rem;
      font-weight: bold;

      span{
        font-weight: normal;
      }
    }

    .livros{
      display: flex;
      gap: 2rem;

      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin-right: 1rem;

        align-items: center;
        justify-content: center;
      }

      img{
        width: 9rem;
        height: 12rem;

        background-color: gray;

        border-radius: .2rem;
      }
    }
  }
`

export const Section = styled.section`
  a{
    color: rgb(130, 87, 229);
  }

  i{
    font-size: .8rem;
  }

  .texto{
    margin-top: 2rem;
    
    p{
      padding-top: 1.6rem;
    
      font-size: 1rem;
      line-height: 1.7rem;
    
      opacity: .9;
    }
  }

  .fotoTurma{
    text-align: center;

    img{
      width: 100%;
  
      border-radius: .3rem;
  
      margin-top: 4rem;
    }
  }

  .fotoAcougue{

    img{
      display: block;

      width: 52%;
  
      border-radius: .3rem;
  
      margin-top: 4rem;
    }
  }

  .fotoUnip{
    display: flex;
    flex-direction: row-reverse;

    img{
      display: block;

      width: 100%;
  
      border-radius: .3rem;
  
      margin-top: 4rem;
    }
    
    i{
      padding-left: .3rem;
    }
  }

  .fotoRocket{

    img{
      display: block;

      width: 60%;
  
      border-radius: .3rem;
  
      margin-top: 4rem;
    }
  }

  .redesSocias{
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;

    a{
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3rem;
  
        text-decoration: none;
  
        font-weight: bold;
        font-size: .8rem;
  
        padding: .4rem .6rem;
  
        border-radius: .3rem;
        border: 1px solid rgba(130, 87, 229, .8);
  
        background-color: transparent;
        color: #ecf0f1;
  
        transition: all .2s;
  
        &:hover {
          background-color: rgba(130, 87, 229, .6);
        }
    }
  }
`