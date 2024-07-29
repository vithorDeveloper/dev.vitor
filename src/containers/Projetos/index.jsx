import { CardProjeto } from "../../components/CardProjeto"
import { Container } from "./style"
import { ArrowUpRight, Folders } from "@phosphor-icons/react"

export const Projetos = () => {

  return(
    <Container>
      <div className="titulo">
        <div>
          <Folders size={25}/><span>Projetos</span>
        </div>

        <div className="saibaMais">
          <a href="#">Ver todos</a><ArrowUpRight size={18}/>
        </div>
      </div>

      <div className="projetos">

        <div className="ladoDireito">
          <CardProjeto 
            imagem={"/projetos/projeto1.png"}
            titulo={"FoodExplorer"}
            descricao={"O Food Explorer é um Web App que oferece um menu interativo para explorar pratos e bebidas com detalhes visuais."}
          />
        </div>

        <div className="ladoEsquerdo">
          <CardProjeto 
            imagem={"/projetos/projeto2.png"}
            titulo={"TypeWeather"}
            descricao={"Essa aplicação oferece informações detalhadas sobre o clima em qualquer cidade, incluindo temperatura, umidade, velocidade do vento e direção."}
          />
        </div>

        <div className="ladoDireito">
          <CardProjeto 
            imagem={"/projetos/projeto3.png"}
            titulo={"RocketMovies"}
            descricao={"O seu diário de filmes permite que você tome notas e classifique cada filme que assistir. Registre suas impressões, avalie a trama, os personagens e até mesmo adicione suas cenas favoritas. Nunca mais esqueça de um filme incrível!"}
          />
        </div>

        <div className="ladoEsquerdo">
          <CardProjeto 
            imagem={"/projetos/projeto4.png"}
            titulo={"Efood"}
            descricao={"Permite que os clientes explorem restaurantes, visualizem seus pratos e façam pedidos diretamente pela plataforma. Com fotos e descrições detalhadas, os usuários podem escolher seus pratos favoritos e até mesmo efetuar o pagamento online. Uma alternativa segura e conveniente para os amantes da gastronomia!"}
          />
        </div>
      </div>
    </Container>
  )
}