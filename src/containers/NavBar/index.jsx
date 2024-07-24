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
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return(
    <Nav>
        <p className="inicio"><NavLink to="/" activeClassName="link-active"><House size={24}/>Inicio</NavLink></p>

        <ul>
          <p>Eu</p>
            <li>
              <NavLink to="/SobreMim" activeClassName="link-active"><BookOpen size={24}/>Sobre mim</NavLink>
            </li>
            <li>
              <NavLink to="/MeusProjetos"><FolderSimpleUser size={24}/>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/Tecnologias" activeClassName="link-active"><Laptop size={24}/>Tecnologias e Ferramentas</NavLink>
            </li>
        </ul>

        <ul>
          <p>meu hob</p>
            <li>
              <a><Book size={24}/>Leitura</a>
            </li>
        </ul>

        <ul>
          <p>Redes sociais</p>
            <li>
              <a><LinkedinLogo size={24}/>Linkedin</a>
            </li>
            <li>
              <a><GithubLogo size={24}/>Github</a>
            </li>
            <li>
              <a><Phone size={24}/>Wathsapp</a>
            </li>
            <li>
              <a><EnvelopeSimple size={24}/>Email</a>
            </li>
        </ul>
    </Nav>
  )
}