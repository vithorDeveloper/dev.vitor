import { Routes, Route } from 'react-router-dom'

import { Home } from "../../pages/Home/index"
import { Tecnologias } from '../../pages/Tecnologias'
import { MeusProjeto } from '../../pages/MeusProjetos'
import { SobreMim } from '../../pages/SobreMim'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Tecnologias" element={<Tecnologias/>} />
    <Route path="/SobreMim" element={<SobreMim/>} />
    <Route path="/MeusProjetos" element={<MeusProjeto/>} />
  </Routes>
)