/* eslint-disable react/prop-types */
import { GithubLogo, Link } from "@phosphor-icons/react"
import { Container } from "./style"

export const CardProjeto = ({imagem, titulo, descricao, urlProjeto, urlCodigo}) => {

  return(
    <Container>
      <div className="banner">
        <img src={imagem} alt="imagem do projeto" className="imagemDesktop"/>
      </div>

      <div className="infos">
        <p>{titulo}</p>
        <span>{descricao}</span>

        <div className="buttons">
          <a id="git" href={urlCodigo} target="_blank"><GithubLogo size={18}/>Código-fonte</a>
          <a href={urlProjeto} target="_blank"><Link size={18}/>Visitar</a>
        </div>
      </div>

    </Container>
  )
}