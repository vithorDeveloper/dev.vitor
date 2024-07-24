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
              imagem={"/src/assets/tecnologias/1.png"}
            />
            <CardTecnologias imagem={"/src/assets/tecnologias/2.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/3.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/4.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/6.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/8.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/9.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/10.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/11.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/13.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/16.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/19.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/20.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/21.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/vite.png"}/>
          </div>
        </div>

        <div>
          <h3>Testes</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/7.png"}
            />
            <CardTecnologias imagem={"/src/assets/tecnologias/14.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Design</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/17.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/canva.png"}
            />
            <CardTecnologias 
              imagem={"/src/assets/tecnologias/blur.png"}
            />
            <CardTecnologias 
              imagem={"/src/assets/tecnologias/blur.png"}
            />
          </div>
        </div>

        <div>
          <h3>Back-end</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/1.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/5.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/18.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/4.png"}
            />
          </div>
        </div>

        <div>
          <h3>Banco de dados</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/12.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/sql.png"}
            />
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Infraestrutura</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/vercel.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/docker.png"}
            />
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Versionamento</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/15.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/git.png"}
            />
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
            <CardTecnologias imagem={"/src/assets/tecnologias/blur.png"}/>
          </div>
        </div>

        <div>
          <h3>Extensões e plugins</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/30.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/31.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/32.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/33.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/34.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/35.png"}
            />
          </div>
        </div>

        <div>
          <h3>Aplicativos</h3>

          <div className="grid">
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/41.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/42.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/43.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/44.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/45.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/46.png"}
            />
            <CardTecnologias 
              url={"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"} 
              imagem={"/src/assets/tecnologias/47.png"}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}