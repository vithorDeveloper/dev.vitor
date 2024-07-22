/* eslint-disable react/prop-types */
import { 
  Book, 
  BookOpen, 
  EnvelopeSimple, 
  FolderSimpleUser, 
  GithubLogo, 
  House, 
  Laptop, 
  LinkedinLogo, 
  Phone 
} from "@phosphor-icons/react"
import { Nav } from "./style"

export const NavBar = () => {
  return(
    <Nav>
        <p className="inicio"><a><House size={24}/>Inicio</a></p>

        <ul>
          <p>Eu</p>
            <li><a><BookOpen size={24}/>Sobre mim</a></li>
            <li><a><FolderSimpleUser size={24}/>Projetos</a></li>
            <li><a><Laptop size={24}/>Tecnologias e Ferramentas</a></li>
        </ul>

        <ul>
          <p>meu hob</p>
            <li><a><Book size={24}/>Leitura</a></li>
        </ul>

        <ul>
          <p>Redes sociais</p>
            <li><a><LinkedinLogo size={24}/>Linkedin</a></li>
            <li><a><GithubLogo size={24}/>Github</a></li>
            <li><a><Phone size={24}/>Wathsapp</a></li>
            <li><a><EnvelopeSimple size={24}/>Email</a></li>
        </ul>
    </Nav>
  )
}