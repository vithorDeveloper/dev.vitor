/* eslint-disable react/prop-types */
import { GithubLogo, Link } from "@phosphor-icons/react"
import { Container } from "./style"

export const CardProjeto = ({imagem, descricao, titulo, urlProjeto, urlCodigo}) => {

  return(
    <Container>
        <img src={imagem} alt="imagem do projeto" />

        <div className="contain">
          <div className="descricao">
            <h4>{titulo}</h4>
            <p>
              {descricao}
            </p>
          </div>

          <div className="buttons">
            <a id="git" href={urlCodigo} target="_blank"><GithubLogo size={18}/>Código-fonte</a>
            <a href={urlProjeto} target="_blank"><Link size={18}/>Visitar</a>
          </div>
        </div>
    </Container>
  )
}