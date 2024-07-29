import { Container } from "./style"
import { Title } from "../../components/Title"
import { GraduationCap } from "@phosphor-icons/react"

export const Educacao = () => {

  return(

    <Container>
      <div className="titulo">
        <GraduationCap size={25}/><p>Educação</p>
      </div>

    <div className="educacao">
      <Title 
        imagem={"/ebac.webp"}
        empresa={"Escola Britânica de Artes Criativas & Tecnologia"}
        cargo={"Desenvolvedor Front-end"}
        data={"2023 - 2024 | 6 meses"}
      />

      <Title 
        imagem={"/roocket.png"}
        empresa={"Rocketseat"}
        cargo={"Desenvolvedor Full-Stack"}
        data={"2021 - 2022 | 1 ano"}
      />

      <Title 
        imagem={"/unip.png"}
        empresa={"Universidade Paulista"}
        cargo={"Análise e desenolvimento de sistemas"}
        data={"2020 - 2021 | 2 anos"}
      />
    </div>
    </Container>
  )
}