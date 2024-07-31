import { ArrowUpRight, IdentificationBadge } from "@phosphor-icons/react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

export const Sobre = () => {

  return(
    <Container>
      <div className="titulo">
        <div>
          <IdentificationBadge size={25}/><span>Sobre mim</span>
        </div>

        <div className="saibaMais">
          <NavLink to="/SobreMim">Saiba mais</NavLink><ArrowUpRight size={18}/>
        </div>
      </div>

      <div className="texto">
        <p>
        Olá, eu sou o Carlos Santos, um desenvolvedor Front-end, formado em 
        Análise e desenvolvimento de sistemas pela UNIP. Sempre busco aprender 
        e me adaptar ao ambiente em que estou. Tenho um sólido conhecimento das 
        tecnologias que compõem a stack Front-end, além de experiência com 
        bancos de dados, APIs e Back-end que adquirir por meio dos projetos e 
        cursos concluídos.
        </p>
      </div>
    </Container>
  )
}