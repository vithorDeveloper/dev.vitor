import { CardProjeto } from "../../containers/CardProjetos"
import { Container } from "./style"

export const MeusProjeto = () => {

  return(
    <Container>
      <h1>Meus Projetos</h1>
      <p>
        Nesta pagina estão listados alguns dos projetos que desenvolvi, se quiser
        ver mais, é só acessar meu <a href="https://github.com/vithorDeveloper" target="_blank">Github</a>
      </p>

    <div>
      <h3>Front-end</h3>

      <div className="projetos">
        <CardProjeto 
          imagem={"/projetos/gcc.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/FindAFriend"}
          urlProjeto={"https://find-a-friend-pi.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/2.png"}
          titulo={"EbacSports"}
          descricao={`Uma loja virtual de artigos esportivos, produzido
                      como projeto de uns dos exrcicios do curso da EBAC.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/ebac_sports"}
          urlProjeto={"https://ebac-sports-steel.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/3.png"}
          titulo={"To-Do Tarefas"}
          descricao={`Essa aplicação é um agenda do tipo to-do, para
                      lhe auxiliar na organização, de suas tarefas e do
                      seu dia. `
                    }
          urlCodigo={"https://github.com/vithorDeveloper/minhas-tarefas"}
          urlProjeto={"https://minhas-tarefas-ten-liart.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/4.png"}
          titulo={"RocketPay"}
          descricao={`O Rocketpay é um componente que simula o formulário de 
                      preenchimento de cartão de crédito, onde é possível adicionar 
                      máscara aos inputs e atualizar elementos.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/RocketCard"}
          urlProjeto={"https://rocket-card-omega.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/5.png"}
          titulo={"Formulário"}
          descricao={`formulário de inscrição para algum evento especifico, 
                      nele voce pode colocar seus dados, se o evento é ou 
                      não privado, e data e hora do evento.`
                    }
          urlCodigo={""}
          urlProjeto={""}
        />
        <CardProjeto 
          imagem={"/projetos/6.png"}
          titulo={"Food Explorer"}
          descricao={`O Food Explorer é um Web App que oferece um menu 
                      interativo para explorar pratos e bebidas com detalhes visuais.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/foodExplorerFront"}
          urlProjeto={"https://food-explorer-front-nine.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/7.png"}
          titulo={"Lista de contatos"}
          descricao={`Que tal um lista de contatos pra salvar seu numeros,
                      é justamente o que esse projeto faz, simula uma agenda
                      pra slavar seus contatos.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/EBAC_projeto_2"}
          urlProjeto={"https://ebac-projeto-2-ashy.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/8.png"}
          titulo={"Burger"}
          descricao={`Um site de uma lanchonete fictícia, nele contém suas 
                      informações básicas, cardápio e com entrar em contato, 
                      além de se adequar a qualquer tela.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/EBAC_projeto_5/tree/main"}
          urlProjeto={"https://ebac-projeto-5.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/9.png"}
          titulo={"Omega"}
          descricao={`Clone da página inicial do streamming da Disney,
                      fiz afim de praticar uma nova tecnologia que estava
                      aprendendo.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/EBAC_Projeto_6"}
          urlProjeto={"https://ebac-projeto-6.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/10.png"}
          titulo={"RocketMovies"}
          descricao={`O seu diário de filmes permite que você tome notas 
                      e classifique cada filme que assistir. Nunca mais 
                      esqueça de um filme incrível!`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/rocketMoviesFront"}
          urlProjeto={"https://rocket-movies-front-seven.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/11.png"}
          titulo={"Efood"}
          descricao={`Permite que os clientes explorem restaurantes, 
                      visualizem seus pratos e façam pedidos diretamente 
                      pela plataforma.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/projeto-eFood"}
          urlProjeto={"https://projeto-e-food.vercel.app/"}
        />
        <CardProjeto 
          imagem={"/projetos/12.png"}
          titulo={"TypeWeather"}
          descricao={`Essa aplicação oferece informações detalhadas sobre 
                      o clima em qualquer cidade, incluindo temperatura, 
                      umidade, velocidade do vento e direção.`
                    }
          urlCodigo={"https://github.com/vithorDeveloper/typeWeather"}
          urlProjeto={"https://type-weather-eight.vercel.app/"}
        />
      </div>
    </div>
    </Container>
  )
}