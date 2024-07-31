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
              imagem={"/public/tecnologias/1.png"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/2.png"}
              url={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/3.png"}
              url={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/4.png"}
              url={"https://www.typescriptlang.org/docs/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/6.png"}
              url={"https://legacy.reactjs.org/docs/getting-started.html"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/8.png"}
              url={"https://v2.tailwindcss.com/docs"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/9.png"}
              url={"https://styled-components.com/docs"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/10.png"}
              url={"https://sass-lang.com/documentation/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/11.png"}
              url={"https://redux.js.org/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/13.png"}
              url={"https://api.jquery.com/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/16.png"}
              url={"https://gulpjs.com/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/19.png"}
              url={"https://getbootstrap.com/docs/4.1/getting-started/introduction/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/20.png"}
              url={"https://axios-http.com/docs/intro"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/21.png"}
              url={"https://api.jquery.com/category/ajax/"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/vite.png"}
              url={"https://vitejs.dev/"}
            />
          </div>
        </div>

        <div>
          <h3>Testes</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://testing-library.com/docs/react-testing-library/intro/"} 
              imagem={"/public/tecnologias/7.png"}
            />
            <CardTecnologias 
              imagem={"/public/tecnologias/14.png"}
              url={"https://jestjs.io/docs/getting-started"}
            />
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Design</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://help.figma.com/hc/en-us"} 
              imagem={"/public/tecnologias/17.png"}
            />
            <CardTecnologias 
              url={"https://www.canva.com/docs/"} 
              imagem={"/public/tecnologias/canva.png"}
            />
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Back-end</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/public/tecnologias/1.png"}
            />
            <CardTecnologias 
              url={"https://nodejs.org/docs/latest/api/"} 
              imagem={"/public/tecnologias/5.png"}
            />
            <CardTecnologias 
              url={"https://expressjs.com/"} 
              imagem={"/public/tecnologias/18.png"}
            />
            <CardTecnologias 
              url={"https://www.typescriptlang.org/docs/"} 
              imagem={"/public/tecnologias/4.png"}
            />
          </div>
        </div>

        <div>
          <h3>Banco de dados</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://dev.mysql.com/doc/"} 
              imagem={"/public/tecnologias/12.png"}
            />
            <CardTecnologias 
              url={"https://www.sqlite.org/docs.html"} 
              imagem={"/public/tecnologias/sql.png"}
            />
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Infraestrutura</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://docs.docker.com/"} 
              imagem={"/public/tecnologias/vercel.png"}
            />
            <CardTecnologias 
              url={"https://vercel.com/docs"} 
              imagem={"/public/tecnologias/docker.png"}
            />
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Versionamento</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://docs.github.com/pt"} 
              imagem={"/public/tecnologias/15.png"}
            />
            <CardTecnologias 
              url={"https://git-scm.com/doc"} 
              imagem={"/public/tecnologias/git.png"}
            />
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/public/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Extensões e plugins</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://fluenticons.co/"} 
              imagem={"/public/tecnologias/30.png"}
            />
            <CardTecnologias 
              url={"https://github.com/rose-pine/neovim"} 
              imagem={"/public/tecnologias/31.png"}
            />
            <CardTecnologias 
              url={"https://docs.thunderclient.com/"} 
              imagem={"/public/tecnologias/32.png"}
            />
            <CardTecnologias 
              url={"https://www.npmjs.com/package/live-server"} 
              imagem={"/public/tecnologias/33.png"}
            />
            <CardTecnologias 
              url={"https://editorconfig.org/"} 
              imagem={"/public/tecnologias/34.png"}
            />
            <CardTecnologias 
              url={"https://prettier.io/docs/en/"} 
              imagem={"/public/tecnologias/35.png"}
            />
          </div>
        </div>

        <div>
          <h3>Aplicativos</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://code.visualstudio.com/docs"} 
              imagem={"/public/tecnologias/41.png"}
            />
            <CardTecnologias 
              url={"https://phosphoricons.com/"} 
              imagem={"/public/tecnologias/42.png"}
            />
            <CardTecnologias 
              url={"https://docs.beekeeperstudio.io/"} 
              imagem={"/public/tecnologias/43.png"}
            />
            <CardTecnologias 
              url={"https://docs.insomnia.rest/"} 
              imagem={"/public/tecnologias/44.png"}
            />
            <CardTecnologias 
              url={"https://www.notion.so/"} 
              imagem={"/public/tecnologias/45.png"}
            />
            <CardTecnologias 
              url={"https://learning.postman.com/docs/introduction/overview/"} 
              imagem={"/public/tecnologias/46.png"}
            />
            <CardTecnologias 
              url={"https://brave.com/pt-br/download/"} 
              imagem={"/public/tecnologias/47.png"}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}