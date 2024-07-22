import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img{
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    border: 2px solid #8257e5;
  }

  div{
    .empresa{
      font-size: .8rem;
      font-weight: bold;
    }

    .cargo{
      p{
        font-size: .7rem;

        padding-top: .3rem;

        opacity: .6;
      }
    }
  }
`