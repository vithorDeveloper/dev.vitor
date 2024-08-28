import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Inter", sans-serif;
    
    background-color: #020817;
    color: #ecf0f1;

    padding-top: 1rem;
  }

  .menu{
    margin-left: 2rem;
  }

  @media screen and (min-width: 1024px) {
    .menu{
      display: none;
    }
  }
`

export const Container = styled.main`
  width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 30% 70%;

  @media screen and (max-width: 1024px) {
   display: inline;
  }
`