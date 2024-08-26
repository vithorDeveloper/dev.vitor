import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  height: 100px;
  width: 100%;

  img{
    width: 100px;
    height: 100px;

    border-radius: .6rem;
  }

  section{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
      padding-left: .2rem;
      font-size: 1rem;
      opacity: .7;
    }
  
    h1{
      font-size: 2rem;
    }

    .tecnologias{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;

      span{
        background-color: rgba(130, 87, 229, .2);

        padding: .3rem .6rem;

        border-radius: .3rem;

        font-size: .7rem;
        font-weight: bold;
      }
    }
  }

`