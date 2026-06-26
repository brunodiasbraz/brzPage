import { ArrowRight, CheckCircle2, CloudCog, Code2, Sparkles } from 'lucide-react';
import BenefitList from '../components/BenefitList';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SolutionCard from '../components/SolutionCard';
import { homeHero, solutions } from '../data/site-data';
import { scrollToSection } from '../utils/navigation';
import { getThemeStyle } from '../utils/theme';

const workBenefits = [
  {
    title: 'Produto com contexto',
    description:
      'Entendemos o processo antes de desenhar telas ou definir funcionalidades.',
    icon: Sparkles,
  },
  {
    title: 'Arquitetura pragmática',
    description:
      'Escolhemos tecnologias e integrações pensando em evolução, custo e manutenção.',
    icon: CloudCog,
  },
  {
    title: 'Implantação acompanhada',
    description:
      'Apoiamos configuração, ajustes e leitura dos primeiros resultados.',
    icon: CheckCircle2,
  },
];

function HomePage() {
  return (
    <main className="site-shell" style={getThemeStyle('aqua')}>
      <section className="hero-section home-hero" aria-label="BRZ Solutions Software House">
        <img className="hero-image" src={homeHero.image} alt="" />
        <div className="hero-overlay" />
        <Header />

        <div id="inicio" className="hero-content home-hero-content">
          <div className="hero-copy">
            <p className="eyebrow">{homeHero.eyebrow}</p>
            <h1>{homeHero.title}</h1>
            <p className="hero-description">{homeHero.description}</p>
            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => scrollToSection('solucoes')}
              >
                Ver soluções
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={() => scrollToSection('contato')}
              >
                Falar sobre projeto
              </button>
            </div>
          </div>

          <div className="software-panel">
            <span className="panel-icon">
              <Code2 size={30} aria-hidden="true" />
            </span>
            <p>Produtos digitais</p>
            <h2>Da estratégia ao software funcionando.</h2>
            <div className="panel-stack">
              <span>Discovery</span>
              <span>UX/UI</span>
              <span>Desenvolvimento</span>
              <span>Implantação</span>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section section-muted">
        <div className="section-heading">
          <p className="eyebrow">Nossas soluções</p>
          <h2>Produtos para simplificar processos e dar mais controle à operação.</h2>
          <p>
            Cada solução resolve uma frente específica, mas todas seguem a mesma
            lógica: interfaces claras, dados organizados e implantação objetiva.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <SolutionCard key={solution.name} solution={solution} />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading align-left">
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Software com foco em operação real, não só em tela bonita.</h2>
          <p>
            Unimos visão de produto, desenvolvimento e implantação para criar
            soluções que funcionam no dia a dia da equipe.
          </p>
        </div>

        <BenefitList benefits={workBenefits} />
      </section>

      <ContactSection context="seu projeto" />
      <Footer />
    </main>
  );
}

export default HomePage;
