import { EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react"
import { Container, Section } from "./style"

export const SobreMim = () => {

  return(
    <Container>
      <h1>Sobre Mim</h1>
      <p>
        Olá, fico feliz em tê-lo aqui no meu portfólio e agradeço pelo seu 
        interesse em querer saber um pouco mais da minha história. Vamos lá!
      </p>

      <ul>
        <li>Localização: <span>Campinas, São Paulo - Brasil</span></li>
        <li>Idade: <span>26</span></li>
        <li>Cargo: <span>Desenvolvedor Front-end</span></li>
        <li>Stack principal: <span>ReactJS, NodeJS, JavaScript, TypeScript</span></li>
        <li>Hobs: <span>Ler livro, Escrever, Ouvir música e Cozinhar</span></li>
        <li>Meus livros preferidos:</li>
          <div className="livros">
            <img src="/livros/1.png" alt="foto da capa do livro essencialismo" />
            <img src="/livros/2.png" alt="foto da capa do livro ultra-aprendizado" />
            <img src="/livros/3.png" alt="foto da capa do livro O homem mais rico da babilonia" />
          </div>
      </ul>

      <Section>
        <div className="fotoTurma">
          <img src="/fotos/turma.jpeg" alt="foto da turna"/>
          <i>foto da turma de ADS, de 2020 na <a href="https://www.unip.br/" target="_blank">UNIP</a></i>
        </div>

        <div className="texto">
          <h3>Como começou</h3>

          <p>
            Como vocês já perceberam, meu nome é Carlos Santos, mas todo mundo me chama de Vitor. 
            Não entendeu nada, né? É que entre o Carlos e o Santos, tem um Vitor (risos). Meu desejo 
            de ser programador surgiu em 2014, durante uma feira municipal de tecnologia no Piauí. Sim, 
            sou natural do Piauí, mas estou em Campinas desde 2015. Mudei-me para cá em busca de uma vida
            melhor, como tantos outros. Após aquela feira, aproveitei o desejo que nasceu em mim e prestei
            vestibular para o curso técnico em informática no <a href="https://www.ifpi.edu.br/" target="_blank">Instituto Federal do Piauí (IFPI)</a>. Passei e
            comecei o curso em 2015.
            <br />
            <br />
            Logo após iniciar o curso, surgiu uma oportunidade de trabalho como açougueiro aqui em Campinas. 
            Essa oferta me fez deixar a casa dos meus pais e buscar novos horizontes. No entanto, após três 
            anos nesse emprego, percebi que não era a vida que eu havia imaginado. Decidi tomar uma iniciativa 
            e correr atrás do tempo perdido.
          </p>
        </div>

        <div className="fotoAcougue">
          <img src="/fotos/acougue.jpeg" alt="foto minha no açougue"/>
          <i>foto da equipe de açougueiros da <a href="https://www.instagram.com/frutaria.brotto/" target="_blank">Frutaria Brotto</a>, em 2019</i>
        </div>

        <div className="texto">
          <h3>Os Estudos</h3>

          <p>
            Depois de um longo período afastado da área de tecnologia, retornei em 2019, estudando desenvolvimento 
            de jogos 2D e 3D na Cyberzukas. A febre de criar seus próprios jogos estava em alta, e busquei aprimorar
            minhas habilidades na área de games para seguir carreira. No entanto, minha verdadeira paixão sempre 
            foi a programação e o front-end. Decidi voltar à área e fiz o curso de desenvolvedor web na Next_U, 
            que me proporcionou uma sólida base e direcionamento para trilhar meu caminho.
              <br />
              <br />
            Após concluir o curso, decidi formalizar minha trajetória e ingressei na faculdade em 2020. Foi um ano
            desafiador para começar os estudos universitários, especialmente porque precisei conciliar o trabalho,
            que consumia 12 horas do meu dia, com as aulas. Foram dois anos intensos, mas graças a Deus, em 2021,
            me formei. Durante esse período, ampliei minha visão sobre arquitetura de projetos, segurança, banco
            de dados e programação em geral.
              <br />
              <br />
            Meu Trabalho de Conclusão de Curso (TCC) foi aprovado, embora eu não saiba exatamente onde ele está 
            agora. Quem ficou responsável por ele não foi muito cuidadoso e acabou perdendo-o. No TCC, desenvolvemos 
            uma aplicação para a gestão de um hotel, incluindo funcionalidades como check-in, check-out e reservas.
          </p>
        </div>

        <div className="fotoUnip">
          <div>
            <img src="/fotos/unip.png" alt="foto minha na formatura"/>
            <i>foto do dia da minha formatura na <a href="https://www.unip.br/" target="_blank">UNIP</a>, em 2021</i>
          </div>
        </div>

        <div className="texto">

          <p>
            Após me formar, houve um grande aumento nas vagas de programação. Decidi pedir demissão para me 
            dedicar integralmente à programação, mas essa escolha não deu muito certo. Tive que correr atrás 
            para pagar minhas contas. Nesse momento de desilusão, enquanto pesquisava soluções para bugs em 
            projetos pessoais, conheci a Rocketseat. Essa plataforma se tornou a base que me transformou em um 
            verdadeiro programador. Participei de diversos eventos chamados ‘NLW’ promovidos por eles e, mesmo 
            estando desempregado, consegui adquirir um dos cursos. Foi um investimento que valeu cada centavo. 
            A Rocketseat oferece um curso fenomenal, com excelente didática, projetos práticos, uma plataforma 
            impecável e suporte de alta qualidade. Mesmo assim, continuei em busca de oportunidades, mas ainda 
            sem sucesso.
              <br />
              <br />
            Mas não me deixei desanimar, recentemente, concluí o curso da EBAC, onde aprimorei meus conhecimentos 
            já consolidados e aprendi novas tecnologias essenciais para o front-end. Cheguei à conclusão de que o 
            que me falta não é conhecimento técnico, mas sim a bendita experiência. Por isso, estou focando em 
            trabalhos como freelancer. Meu objetivo é acumular projetos e experiências reais para mostrar ao 
            mercado e, quem sabe,finalmente ouvir o tão esperado ‘Você está contratado!
          </p>
        </div>

        <div className="fotoRocket">
          <img src="/fotos/rocketseat.jpeg" alt="foto minha no açougue"/>
          <i>
            foto minha estudando no  <a href="https://app.rocketseat.com.br/journey/full-stack/overview" target="_blank">Program Explorer</a>, 
            da <a href="https://app.rocketseat.com.br/" target="_blank">Rocketseat</a> em 2022.
          </i>
        </div>

        <div className="texto">
          <h3>Meus Interesses</h3>

          <p>
            Adoro ler. É meu refúgio, minha calmaria. As palavras me envolvem, me transportando para outros mundos. 
            E foi lendo que descobri o prazer de escrever. Cada história, cada personagem, é como um convite para 
            criar meu próprio universo. A escrita se tornou meu escape, minha paixão. E assim, entre páginas e 
            letras, encontro minha paz.
              <br />
              <br />
            Muito obrigado! Sua atenção e interesse significam muito para mim. Espero que tenha gostado do que compartilhei 
            e que possamos continuar essa jornada juntos. <br />
            Se você quiser entrar em contato, estou à disposição! Espero que possamos trabalhar juntos no futuro. Estou pronto 
            para ajudar e colaborar em qualquer projeto que possa surgir.
          </p>
        </div>

        <div className="redesSocias">
          <a id="git" href="https://www.linkedin.com/in/vithor-santos/" target="_blank"><LinkedinLogo size={18}/>Linkedin</a>
          <a id="git" href="https://wa.me/5519993016396" target="_blank"><Phone size={18}/>Wathsapp</a>
          <a id="git" href="mailto:vithorsantos1029@gmail.com" target="_blank"><EnvelopeSimple size={18}/>Email</a>
          <a id="git" href="https://github.com/vithorDeveloper" target="_blank"><GithubLogo size={18}/>Github</a>
        </div>
      </Section>
    </Container>
  )
}