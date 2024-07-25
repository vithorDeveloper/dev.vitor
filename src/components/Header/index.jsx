import { Container } from "./style"

export const Header = () => {
  return(
    <Container>
      <img src="/public/perfill.png" alt="foto de perfil" />
    
      <section>
        <div>
          <h1>Carlos Santos</h1>
          <p>Desenvolvedor Front-end</p>
        </div>

        <div className="tecnologias">
          <span>ReactJS</span>
          <span>NodeJS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Jest</span>
          <span>Figma</span>
        </div>
      </section>
    </Container>
  )
}