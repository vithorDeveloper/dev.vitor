/* eslint-disable react/prop-types */
import { Header } from "../../components/Header"
import { Sobre } from "../../components/Sobre"
import { Educacao } from "../Educacao"
import { Experiencia } from "../Experiencias"
import { Principal } from "./style"

export const Menu = () => {
  return(
    <Principal>
      <Header/>
      <Sobre/>

      <div className="secoes">
        <Experiencia/>
        <Educacao/>
      </div>
    </Principal>
  )
}