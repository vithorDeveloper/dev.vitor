import { CardProjeto } from "../../containers/CardProjetos"
import { Container } from "./style"

export const MeusProjeto = () => {

  return(
    <Container>
      <h1>Meus Projetos</h1>
      <p>
        Nesta pagina estão listados alguns dos projetos que desenvolvi, se quiser
        ver mais, é só acessar meu <a href="http://">Github</a>
      </p>

    <div>
      <h3>Front-end</h3>

      <div className="projetos">
        <CardProjeto 
          imagem={"/src/assets/projetos/gcc.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/2.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/3.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/4.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/5.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/6.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/7.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/8.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/9.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/10.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/11.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
        <CardProjeto 
          imagem={"/src/assets/projetos/12.png"}
          titulo={"FindAFriend"}
          descricao={`Uma aplicação sobre uma Ong de proteção e adoção de animais,
                      desenvolvida em um desafio na Rocketseat, ela é totalmente
                      responsiva.`
                    }
        />
      </div>
    </div>
    </Container>
  )
}