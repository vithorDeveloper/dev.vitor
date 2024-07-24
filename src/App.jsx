import { BrowserRouter } from 'react-router-dom'

import { Container } from "./style"
import { NavBar } from "./containers/NavBar"
import { Rotas } from "/src/routes/route"

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <div>
          <NavBar/>
        </div>
        <Rotas/>
      </Container>
    </BrowserRouter>
    )
}
