import styled from "styled-components";

export const Container = styled.div`
  height: 1rem;

  transition: transform .50s;

  cursor: pointer;

  &:hover{
    transform: rotate3d(1, 1, 0, 20deg);
  }

.banner{
  position: absolute;

  img{
    width: 102%;
  
    border-radius: .5rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
}

.infos{
  position: relative;
  top: 0;

  @media screen and (max-width: 1024px) {
    width: 37rem;
  }

  p{
    font-weight: bold;
    font-size: 1.5rem;

    padding: .7rem 2rem .7rem;
  }

  span{
    display: inline-block;
    width: 23rem;

    font-size: .8rem;
    font-weight: 200;

    padding-right: 2rem;

    opacity: .5;
  }

  .buttons{
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;

    padding: .7rem 2rem 0 0;

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
}
`