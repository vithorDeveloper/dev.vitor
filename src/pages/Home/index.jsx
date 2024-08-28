/* eslint-disable react/prop-types */
import { Header } from "../../components/Header"
import { Sobre } from "../../components/Sobre"
import { Educacao } from "../../containers/Educacao"
import { Experiencia } from "../../containers/Experiencias"
import { Projetos } from "../../containers/Projetos"
import { Principal } from "./style"

export const Home = () => {

  return(
    <Principal>
      <Header/>
      <Sobre/>

      <div className="secoes">
        <Experiencia/>
        <Educacao/>
      </div>

      <Projetos/>
    </Principal>
  )
}