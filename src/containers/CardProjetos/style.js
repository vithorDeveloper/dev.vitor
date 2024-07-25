import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid rgba(130, 87, 229, .3);
  border-radius: .5rem;

  font-size: 1.3rem;

  width: 20rem;

  &:hover{

    img{
      transition: all .8s;
      transform: scale(1.05);
      opacity: 1;
      border-radius: 0;
    }
  }

  img{
    text-align: center;
    width: 16rem;

    border-radius: .5rem;

    margin: 2rem 0 1rem 2rem;

    opacity: .5;
  }

  p{
    padding-top: 1rem;

    font-size: 1rem;

    opacity: .6;

    line-height: 1.5rem;
  }

  .descricao{
    margin-left: 2rem;
  }

  .buttons{
    display: flex;
    gap: 1rem;

    padding: .7rem 2rem 0 0;
    margin: 0 0 2rem 2rem;

    a{
      display: flex;
      align-items: center;
      gap: .3rem;

      text-decoration: none;

      font-weight: bold;
      font-size: .8rem;

      padding: .4rem .6rem;

      border-radius: .3rem;

      background-color: #8257e5;
      color: #ecf0f1;

      transition: all .2s;

      &:hover {
        background-color: rgba(130, 87, 229, .6);
      }
    }

    #git{
      background-color: transparent;

      border: 1px solid rgba(130, 87, 229, .8);

      &:hover{
        background-color: rgba(130, 87, 229, .8);
      }
    }
  }
`