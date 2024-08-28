import { BrowserRouter } from 'react-router-dom'

import { Container } from "./style"
import { NavBar } from "./containers/NavBar"
import { NavBarMobile } from './containers/NavBarMobile'
import { Rotas } from "/src/routes/route"
import { DotsThreeCircle } from '@phosphor-icons/react'
import { useState } from 'react'

export const App = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  } 

  return (
    <BrowserRouter>
      <DotsThreeCircle
        size={30}
        onClick={handleClick}
        className='menu'
      />
      <Container>
        <div>
          <NavBar/>
          {
            click && (<NavBarMobile/>)
          }
        </div>
        <Rotas/>
      </Container>
    </BrowserRouter>
    )
}
