import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <section className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Vitor Diamantino</h1>
          <p className="text-lg text-gray-600">Desenvolvedor Full Stack | Estudante de Sistemas de Informação</p>
          <div className="flex justify-center gap-4 pt-2">
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:seuemail@gmail.com">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </header>

        {/* Sobre mim */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
          <p className="text-gray-700">
            Sou apaixonado por tecnologia e desenvolvimento de soluções digitais. Atualmente estudo Sistemas de Informação na FIAP School e trabalho com TI, atuando com análise de mercado, modelagem de projetos e desenvolvimento web.
          </p>
        </section>

        {/* Habilidades Técnicas */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 list-disc list-inside">
            <li>JavaScript / TypeScript</li>
            <li>React.js / Next.js</li>
            <li>Python</li>
            <li>Git e GitHub</li>
            <li>Banco de Dados (MySQL / MongoDB)</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        {/* Projetos */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Lurking Below</h3>
                <p className="text-gray-600">Jogo roguelike com mecânicas de construção e combate inspirado em Dave the Diver e Cult of the Lamb.</p>
                <a href="https://github.com/seuusuario/lurking-below" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Ver no GitHub</Button>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Sistema Robocup 2025</h3>
                <p className="text-gray-600">Plataforma para organização e gerenciamento de projetos com ClickUp e IA.</p>
                <a href="https://github.com/seuusuario/robocup" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Ver no GitHub</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificações */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certificações e Cursos</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Formação em Social e Sustentabilidade - Fundação Estudar (2024)</li>
            <li>Curso de React.js Avançado - Rocketseat</li>
            <li>Curso de Banco de Dados SQL - Alura</li>
          </ul>
        </section>

        {/* Contato */}
        <footer className="text-center pt-12 text-gray-500">
          <p>© 2025 Vitor Diamantino. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
