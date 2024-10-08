import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 0 2rem 2rem;

  font-size: 1.3rem;

  p{
    padding-top: 1rem;

    font-size: 1rem;

    opacity: .6;

    line-height: 1.5rem;
  }
`

export const Section = styled.div`
  @media screen and (max-width: 768px) {
    margin-right: .8rem
  }

  h3{
    padding: 2rem 0 1rem 0;
  }

  .grid{
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: .5rem;
    row-gap: .2rem;

    img{
      border-radius: .3rem;

      width: 180px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: auto auto auto;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: auto auto;
      column-gap: 0;
    }
  }
`