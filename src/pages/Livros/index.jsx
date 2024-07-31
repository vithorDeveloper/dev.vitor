import { CardLivros } from "../../containers/CardLivros";
import { Container } from "./style";

export const Livros = () => {

  return(

    <Container>
      <h1>Livros</h1>
      <p>
        Ler é uma jornada fascinante, e cada livro nos leva a mundos diferentes, 
        personagens cativantes e ideias inspiradoras. Ao longo dos anos, mergulhei 
        em várias histórias relacionadas ao desenvolvimento pessoal e finanças. 
        Alguns dos livros que me marcaram incluem:
      </p>

      <CardLivros 
        imagemLivro={"/livros/1.png"}
        titulo={"Ultra-Aprendizado"}
        descricao={
          `O livro Ultra-aprendizado de Scott H. Young oferece métodos inovadores para 
          aprender novas habilidades de maneira mais eficaz. Young compartilha as estratégias 
          que usou para dominar quatro idiomas em um ano e concluir o currículo de ciência da 
          computação do MIT em metade do tempo.`
        }
        data={"15 de fevereiro de 2021"}       
        autor={"Scott Young"} 
        editora={"HarperCollins"}
        paginas={"304"}
        imagemAutor={"/livros/scott.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/2.png"}
        titulo={"Essencialismo"}
        descricao={
          `Ao tentar fazer tudo e agradar a todos, você acaba se afastando de seus 
          objetivos e perde o controle sobre sua própria vida. McKeown defende que, para 
          equilibrar trabalho e vida pessoal, é necessário reduzir e simplificar, mantendo o 
          foco apenas no que faz a diferença.`
        }
        data={"05 de maio de 2015"}       
        autor={"Greg Mckeown"} 
        editora={"Editora Sextante"}
        paginas={"272"}
        imagemAutor={"/livros/greg.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/3.png"}
        titulo={"O homem mais rico da Babilônia"}
        descricao={
          `George S. Clason, baseado na sabedoria financeira dos antigos babilônios, apresenta 
          estratégias atemporais para evitar a escassez financeira. Ele enfatiza a conservação de 
          recursos durante tempos prósperos, a busca pelo conhecimento em vez de mero lucro e garantia
          de renda futura.`
        }
        data={"04 de agosto de 2017"}       
        autor={"George S. Clason"} 
        editora={"HarperCollins"}
        paginas={"160"}
        imagemAutor={"/livros/george.jpeg"}
      />

      <CardLivros 
        imagemLivro={"/livros/4.png"}
        titulo={"Mais esperto que o diabo"}
        descricao={
          `Neste livro, Napoleon Hill revela uma entrevista secreta com o Diabo, desvendando aspectos 
          ocultos da mente humana e suas influências. Também aborda como os líderes religiosos e professores 
          são afetados por ele e apresenta estratégias para combater sua dominação.`
        }
        data={"10 de julho de 2014"}       
        autor={"Napoleon Hill"} 
        editora={"Citadel"}
        paginas={"208"}
        imagemAutor={"/livros/napoleon.jpg"}
      />
      
      <CardLivros 
        imagemLivro={"/livros/5.png"}
        titulo={"Quem pensa enriquece"}
        descricao={
          `O livro Quem Pensa Enriquece - O Legado é o 9 livro mais vendido de todos os tempos e 
          influencia líderes e empreendedores em todo o mundo. É um livro que não apenas muda o que 
          você pensa, mas também transforma o modo como você pensa.`
        }
        data={"28 de maio de 2018"}       
        autor={"Napoleon Hill"} 
        editora={"Citadel"}
        paginas={"368"}
        imagemAutor={"/livros/napoleon.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/6.png"}
        titulo={"Os segredos da mente milionária"}
        descricao={
          `T. Harv Eker propõe em seu livro que a riqueza não é apenas uma questão de sorte ou 
          oportunidade, mas sim o resultado de uma mentalidade específica. Segundo ele, existem 
          17 "arquivos de riqueza" que moldam a nossa relação com o dinheiro e determinam nosso 
          sucesso financeiro.`
        }
        data={"26 de julho de 2006"}       
        autor={"T. Harv Eker"} 
        editora={"Editora Sextante"}
        paginas={"176"}
        imagemAutor={"/livros/harv.jpeg"}
      />

      <CardLivros 
        imagemLivro={"/livros/7.png"}
        titulo={"Pai rico, Pai pobre"}
        descricao={
          `Em Pai Rico, Pai Pobre, Robert Kiyosaki destaca que a escola não prepara os jovens 
          para o mundo real. O autor questiona o conselho tradicional de buscar emprego seguro após 
          a escola e enfatiza a importância de aprender sobre dinheiro e investimentos.`
        }
        data={"26 de julho de 2017"}       
        autor={"Robert T. Kiyosaki"} 
        editora={"Alta Books"}
        paginas={"336"}
        imagemAutor={"/livros/robert.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/8.png"}
        titulo={"O poder do hábito"}
        descricao={
          `O livro O Poder do Hábito, escrito por Charles Duhigg, explora como os hábitos 
          influenciam nossas vidas e como podemos mudá-los. Portanto, o sucesso dessas pessoas está 
          intrinsecamente ligado à habilidade de transformar hábitos com perspicácia e determinação.`
        }
        data={"24 de setembro de 2012"}       
        autor={"Charles Duhigg"} 
        editora={"Objetiva"}
        paginas={"408"}
        imagemAutor={"/livros/charles.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/9.png"}
        titulo={"A sútil arte de liga o foda-se"}
        descricao={
          `A Sutil Arte de Ligar o F*da-se é uma obra que foge dos clichês típicos de autoajuda. 
          Mark Manson não promete soluções mágicas nem incentiva o leitor a ser extraordinário. 
          Com uma linguagem informal e revigorante, ele aborda temas como cultura de consumo, 
          exibicionismo e depressão.`
        }
        data={"06 de novembro de 2017"}       
        autor={"Mark Manson"} 
        editora={"Intrínseca"}
        paginas={"224"}
        imagemAutor={"/livros/mark.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/10.png"}
        titulo={"Hábitos atômicos"}
        descricao={
          `Com uma abordagem científica, Clear explora a neurociência por trás dos hábitos e 
          apresenta estratégias para transformar comportamentos. Ao longo da leitura, histórias 
          inspiradoras de atletas, artistas e líderes empresariais ilustram o poder dos pequenos 
          hábitos.`
        }
        data={"08 de agosto de 2019"}       
        autor={"James Clear"} 
        editora={"Alfa Life"}
        paginas={"320"}
        imagemAutor={"/livros/james.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/11.png"}
        titulo={"O milagre da manhã"}
        descricao={
          `Hal Elrod nos conduz por uma jornada de transformação pessoal e sucesso. Elrod sugere 
          acordar uma hora mais cedo para focar em seis atividades essenciais: silêncio, afirmações, 
          jvisualização, exercícios, leitura e escrita.`
        }
        data={"19 de julho de 2016"}       
        autor={"Hal Elrod"} 
        editora={"BestSeller"}
        paginas={"196"}
        imagemAutor={"/livros/hal.jpg"}
      />

      <CardLivros 
        imagemLivro={"/livros/12.png"}
        titulo={"Trabalhe 4 horas por semana"}
        descricao={
          `Tim Ferriss, autor deste livro, explora como viver uma vida rica e plena sem se prender ao 
          tradicional "plano de adiar a vida" de trabalho duro e aposentadoria. Ele compartilha sua 
          experiência em uma vida de aventuras, como pilotar motos pela Europa, esquiar nos Andes e 
          dançar tango em Buenos Aires.`
        }
        data={"15 de setembro de 2017"}       
        autor={"Timothy Ferriss"} 
        editora={"Planeta"}
        paginas={"416"}
        imagemAutor={"/livros/timoty.jpg"}
      />
    </Container>
  )
}