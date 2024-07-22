import { Container } from "./style"
import { Menu } from "./containers/Menu"
import { NavBar } from "./containers/NavBar"

export const App = () => {
  return (
      <Container>
        <NavBar/>

        <Menu/>
      </Container>
    )
}
