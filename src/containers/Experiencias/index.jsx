import { Container } from "./style"
import { Title } from "../../components/Title"
import { Briefcase } from "@phosphor-icons/react"

export const Experiencia = () => {

  return(

    <Container>
      <div className="titulo">
        <Briefcase size={25}/><p>Experiencia</p>
      </div>

      <div className="experiencias">
        <Title 
          imagem={"/alcateia.png"}
          empresa={"Alcatéia barbearia"}
          cargo={"Social media"}
          data={"2024 - Atual"}
        />

        <Title 
          imagem={"/brotto.png"}
          empresa={"Frutaria Brotto"}
          cargo={"Açougueiro"}
          data={"2015 - 2021 | 5 anos e 10 meses"}
        />
      </div>

        <a download href="/Carlos - CV.pdf">Meu Curriculo</a>
          
    </Container>
  )
}