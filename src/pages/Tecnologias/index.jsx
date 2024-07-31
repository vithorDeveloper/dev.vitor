import { CardTecnologias } from "../../components/CardTecnologia"
import { Container, Section } from "./style"

export const Tecnologias = () => {

  return(
    <Container>
      <h1>Tecnologias e Ferramentas</h1>
      <p>
      Estas são as tecnologias e ferramentas que aprendi ao longo da minha carreira, 
      durante a faculdade, cursos e projetos pessoais. Fique à vontade para explorar e 
      conhecer as tecnologias que aprimoraram minha expertise em desenvolvimento.
      </p>

      <Section>
        <div>
          <h3>Front-end</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/tecnologias/1.png"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/2.png"}
              url={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/3.png"}
              url={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/4.png"}
              url={"https://www.typescriptlang.org/docs/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/6.png"}
              url={"https://legacy.reactjs.org/docs/getting-started.html"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/8.png"}
              url={"https://v2.tailwindcss.com/docs"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/9.png"}
              url={"https://styled-components.com/docs"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/10.png"}
              url={"https://sass-lang.com/documentation/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/11.png"}
              url={"https://redux.js.org/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/13.png"}
              url={"https://api.jquery.com/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/16.png"}
              url={"https://gulpjs.com/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/19.png"}
              url={"https://getbootstrap.com/docs/4.1/getting-started/introduction/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/20.png"}
              url={"https://axios-http.com/docs/intro"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/21.png"}
              url={"https://api.jquery.com/category/ajax/"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/vite.png"}
              url={"https://vitejs.dev/"}
            />
          </div>
        </div>

        <div>
          <h3>Testes</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://testing-library.com/docs/react-testing-library/intro/"} 
              imagem={"/tecnologias/7.png"}
            />
            <CardTecnologias 
              imagem={"/tecnologias/14.png"}
              url={"https://jestjs.io/docs/getting-started"}
            />
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Design</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://help.figma.com/hc/en-us"} 
              imagem={"/tecnologias/17.png"}
            />
            <CardTecnologias 
              url={"https://www.canva.com/docs/"} 
              imagem={"/tecnologias/canva.png"}
            />
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Back-end</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/tecnologias/1.png"}
            />
            <CardTecnologias 
              url={"https://nodejs.org/docs/latest/api/"} 
              imagem={"/tecnologias/5.png"}
            />
            <CardTecnologias 
              url={"https://expressjs.com/"} 
              imagem={"/tecnologias/18.png"}
            />
            <CardTecnologias 
              url={"https://www.typescriptlang.org/docs/"} 
              imagem={"/tecnologias/4.png"}
            />
          </div>
        </div>

        <div>
          <h3>Banco de dados</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://dev.mysql.com/doc/"} 
              imagem={"/tecnologias/12.png"}
            />
            <CardTecnologias 
              url={"https://www.sqlite.org/docs.html"} 
              imagem={"/tecnologias/sql.png"}
            />
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Infraestrutura</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://docs.docker.com/"} 
              imagem={"/tecnologias/vercel.png"}
            />
            <CardTecnologias 
              url={"https://vercel.com/docs"} 
              imagem={"/tecnologias/docker.png"}
            />
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Versionamento</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://docs.github.com/pt"} 
              imagem={"/tecnologias/15.png"}
            />
            <CardTecnologias 
              url={"https://git-scm.com/doc"} 
              imagem={"/tecnologias/git.png"}
            />
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Extensões e plugins</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://fluenticons.co/"} 
              imagem={"/tecnologias/30.png"}
            />
            <CardTecnologias 
              url={"https://github.com/rose-pine/neovim"} 
              imagem={"/tecnologias/31.png"}
            />
            <CardTecnologias 
              url={"https://docs.thunderclient.com/"} 
              imagem={"/tecnologias/32.png"}
            />
            <CardTecnologias 
              url={"https://www.npmjs.com/package/live-server"} 
              imagem={"/tecnologias/33.png"}
            />
            <CardTecnologias 
              url={"https://editorconfig.org/"} 
              imagem={"/tecnologias/34.png"}
            />
            <CardTecnologias 
              url={"https://prettier.io/docs/en/"} 
              imagem={"/tecnologias/35.png"}
            />
          </div>
        </div>

        <div>
          <h3>Aplicativos</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://code.visualstudio.com/docs"} 
              imagem={"/tecnologias/41.png"}
            />
            <CardTecnologias 
              url={"https://phosphoricons.com/"} 
              imagem={"/tecnologias/42.png"}
            />
            <CardTecnologias 
              url={"https://docs.beekeeperstudio.io/"} 
              imagem={"/tecnologias/43.png"}
            />
            <CardTecnologias 
              url={"https://docs.insomnia.rest/"} 
              imagem={"/tecnologias/44.png"}
            />
            <CardTecnologias 
              url={"https://www.notion.so/"} 
              imagem={"/tecnologias/45.png"}
            />
            <CardTecnologias 
              url={"https://learning.postman.com/docs/introduction/overview/"} 
              imagem={"/tecnologias/46.png"}
            />
            <CardTecnologias 
              url={"https://brave.com/pt-br/download/"} 
              imagem={"/tecnologias/47.png"}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}