import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  border-right: 1px solid rgba(130, 87, 229, .3);

  padding: 0 1rem 0;

  height: 100vh;

  background: rgba( 0, 0, 0, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 13.5px );
  backdrop-filter: blur( 10px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media screen and (min-width: 1024px) {
    display: none;
  }

  .inicio{
    font-weight: bold;
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

    color: #ecf0f1;

    text-decoration: none;

    font-weight: bold;
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

      padding: .8rem .5rem .8rem 0;

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