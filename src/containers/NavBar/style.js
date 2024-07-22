import styled from "styled-components";

export const Nav = styled.nav`

  .inicio{
    font-weight: 300;
    font-size: .9rem;

    padding: .8rem 0;

    border-radius: .5rem;

    &:hover{
      background-color: #1e293b;

      svg{
        fill: #8257e5;
      }
    }
  }

  svg{
    padding-left: .5rem;
  }

  a{
    display: flex;
    align-items: center;
    gap: .3rem;

    cursor: pointer;
  }

  ul{
    list-style: none;
    margin-top: 2rem;

    p{      
      margin-bottom: .5rem;

      font-weight: bold;
      font-size: .8rem;

      color: #6c7d8f;
    }

    li{
      font-weight: 300;
      font-size: .9rem;

      padding: .8rem 0;

      &:hover{
        background-color: #1e293b;

        border-radius: .5rem;

        svg{
          fill: #8257e5;
        }
      }
    }
  }
`