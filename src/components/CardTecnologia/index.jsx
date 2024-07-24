/* eslint-disable react/prop-types */
import { Container } from "./style"

export const CardTecnologias = ({imagem, url}) => {

  return(
    <Container>
      <a href={url} target="_blank">
        <img src={imagem} alt="logo da tecnologia" />
      </a>
    </Container>
  )
}