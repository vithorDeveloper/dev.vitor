/* eslint-disable react/prop-types */
import { GithubLogo,Link } from "@phosphor-icons/react"
import { Container } from "./style"

export const CardProjeto = ({imagem, descricao, titulo}) => {

  return(
    <Container>
        <img src={imagem} alt="imagem do projeto" />

        <div className="descricao">
          <h4>{titulo}</h4>
          <p>
            {descricao}
          </p>
        </div>

        <div className="buttons">
          <a id="git" href=""><GithubLogo size={18}/>Código-fonte</a>
          <a href=""><Link size={18}/>Visitar</a>
        </div>
    </Container>
  )
}