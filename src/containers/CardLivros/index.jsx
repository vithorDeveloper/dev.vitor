/* eslint-disable react/prop-types */
import { Container } from "./style";

export const CardLivros = ({
  imagemLivro, 
  imagemAutor, 
  titulo, 
  descricao, 
  data, 
  editora, 
  autor, 
  paginas}) => {

  return(

    <Container>
      <section>
        <img src={imagemLivro} alt="imagem da capa do livro" />

        <div className="infosLivro">
          <div>
            <h2>{titulo}</h2>
            <span>{descricao}</span>
          </div>

          <div className="infos">
            <p>data de lançamento: <span>{data}</span></p>
            <p>Autor: <span>{autor}</span></p>
            <p>Editor: <span>{editora}</span></p>
            <p>Páginas: <span>{paginas}</span></p>
          </div>
        </div>
      </section>

      <img src={imagemAutor} alt="imagem do autor" className="imgAutor"/>
    </Container>
  )
}