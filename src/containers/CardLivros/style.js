import styled from "styled-components";

export const Container = styled.main`
 display: flex;
 flex-direction: column;

 border: 1px solid rgba(130, 87, 229, .3);
 border-radius: .5rem;

 position: relative;

 padding: 2rem;
 margin-bottom: 3rem;

 opacity: .5;

 transition: all 0.5s;

 @media screen and (max-width: 1024px) {
    opacity: 1;
  }

 &:hover{
  opacity: 1;
  scale: 1.03;
 }

 section{
  display: flex;
  gap: 1rem;

  img{
    object-fit: contain;

    width: 20rem;
    height: 20rem;

    border-radius: .5rem;

    @media screen and (max-width: 1024px) {
      text-align: initial;
    }
  }

  .infosLivro{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
      font-size: 1.5rem;
      padding-bottom: .5rem;
    }

    span{
      padding-top: 1rem;
  
      font-size: .9rem;
  
      opacity: .6;
    }
  
    .infos{      
      p{
        padding: 0;
        font-size: .9rem;
      }
    }
   }
  }

 .imgAutor{
    width:4rem;
    height:4rem;

    object-fit: cover;

    border-radius: .5rem;

    position: absolute;
    bottom: 2rem;
    right: 2rem;
 }
`