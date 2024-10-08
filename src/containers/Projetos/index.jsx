import { NavLink } from "react-router-dom"
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
          <NavLink to="/MeusProjetos">Ver todos</NavLink><ArrowUpRight size={18}/>
        </div>
      </div>

      <div className="projetos">

        <div className="ladoDireito">
          <CardProjeto 
            imagem={"/projeto1.png"}
            titulo={"FoodExplorer"}
            descricao={"O Food Explorer é um Web App que oferece um menu interativo para explorar pratos e bebidas com detalhes visuais."}
            urlProjeto={"https://foodexpllorer.netlify.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/foodExplorerFront"}
          />
        </div>

        <div className="ladoEsquerdo">
          <CardProjeto 
            imagem={"/projeto2.png"}
            titulo={"TypeWeather"}
            descricao={"Essa aplicação oferece informações detalhadas sobre o clima em qualquer cidade, incluindo temperatura, umidade, velocidade do vento e direção."}
            urlProjeto={"https://type-weather-eight.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/typeWeather"}
          />
        </div>

        <div className="ladoDireito">
          <CardProjeto 
            imagem={"/projeto3.png"}
            titulo={"RocketMovies"}
            descricao={"O seu diário de filmes permite que você tome notas e classifique cada filme que assistir. Registre suas impressões, avalie a trama, os personagens e até mesmo adicione suas cenas favoritas. Nunca mais esqueça de um filme incrível!"}
            urlProjeto={"https://rocket-movies-front-seven.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/rocketMoviesFront"}
          />
        </div>

        <div className="ladoEsquerdo">
          <CardProjeto 
            imagem={"/projeto4.png"}
            titulo={"Efood"}
            descricao={"Permite que os clientes explorem restaurantes, visualizem seus pratos e façam pedidos diretamente pela plataforma. Com fotos e descrições detalhadas, os usuários podem escolher seus pratos favoritos e até mesmo efetuar o pagamento online. Uma alternativa segura e conveniente para os amantes da gastronomia!"}
            urlProjeto={"https://e-food-self.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/projeto-eFood"}
          />
        </div>
      </div>

      <div className="projetosMobile">

        <div className="card">
          <CardProjeto 
            imagem={"/public/projetos/pro/1.png"}
            titulo={"FoodExplorer"}
            descricao={"O Food Explorer é um Web App que oferece um menu interativo para explorar pratos e bebidas com detalhes visuais."}
            urlProjeto={"https://foodexpllorer.netlify.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/foodExplorerFront"}
          />
        </div>

        <div className="card">
          <CardProjeto 
            imagem={"/public/projetos/pro/2.png"}
            titulo={"TypeWeather"}
            descricao={"Essa aplicação oferece informações detalhadas sobre o clima em qualquer cidade, incluindo temperatura, umidade, velocidade do vento e direção."}
            urlProjeto={"https://type-weather-eight.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/typeWeather"}
          />
        </div>

        <div className="card">
          <CardProjeto 
            imagem={"/public/projetos/pro/3.png"}
            titulo={"RocketMovies"}
            descricao={"O seu diário de filmes permite que você tome notas e classifique cada filme que assistir. Registre suas impressões, avalie a trama, os personagens e até mesmo adicione suas cenas favoritas. Nunca mais esqueça de um filme incrível!"}
            urlProjeto={"https://rocket-movies-front-seven.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/rocketMoviesFront"}
          />
        </div>

        <div className="card">
          <CardProjeto 
            imagem={"/public/projetos/pro/4.png"}
            titulo={"Efood"}
            descricao={"Permite que os clientes explorem restaurantes, visualizem seus pratos e façam pedidos diretamente pela plataforma. Com fotos e descrições detalhadas, os usuários podem escolher seus pratos favoritos e até mesmo efetuar o pagamento online. Uma alternativa segura e conveniente para os amantes da gastronomia!"}
            urlProjeto={"https://e-food-self.vercel.app/"}
            urlCodigo={"https://github.com/vithorDeveloper/projeto-eFood"}
          />
        </div>
      </div>
    </Container>
  )
}