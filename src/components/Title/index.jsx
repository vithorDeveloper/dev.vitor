/* eslint-disable react/prop-types */
import { Container } from "./style"

export const Title = ({imagem, empresa, cargo, data}) => {

  return(
    <Container>
      <img src={imagem} alt="logo da instituição" />

      <div>
        <p className="empresa">{empresa}</p>

        <div className="cargo">
          <p>{cargo}</p>
          <p>{data}</p>
        </div>
      </div>
    </Container>
  )
}