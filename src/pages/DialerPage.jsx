import { ArrowLeft, ArrowRight } from 'lucide-react';
import BenefitList from '../components/BenefitList';
import ContactSection from '../components/ContactSection';
import DialerCarousel from '../components/DialerCarousel';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  dialerModels,
  dialerPage,
  performanceMetrics,
  platformBenefits,
  voiceFeatures,
} from '../data/site-data';
import { scrollToSection } from '../utils/navigation';
import { getThemeStyle } from '../utils/theme';

function DialerPage() {
  return (
    <main className="site-shell" style={getThemeStyle(dialerPage.theme)}>
      <section className="hero-section" aria-label="Soluções em discadores">
        <img className="hero-image" src={dialerPage.image} alt="" />
        <div className="hero-overlay" />
        <Header />

        <div id="inicio" className="hero-content">
          <div className="hero-copy">
            <a className="back-link" href="#/">
              <ArrowLeft size={17} aria-hidden="true" />
              Voltar para soluções
            </a>
            <p className="eyebrow">Discadores para call center</p>
            <h1>Mais conversas reais, menos tempo perdido na operação.</h1>
            <p className="hero-description">
              Plataforma de voz para operações comerciais, cobrança e atendimento
              com discadores power, preditivo e preview em uma estrutura pronta
              para escalar.
            </p>
            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => scrollToSection(dialerModels[0].id)}
              >
                Conhecer modelo
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={() => scrollToSection('contato')}
              >
                Falar com especialista
              </button>
            </div>
          </div>

          <DialerCarousel />
        </div>
      </section>

      <section id="performance" className="section section-muted">
        <div className="section-heading">
          <p className="eyebrow">Performance comprovada</p>
          <h2>Operações de discagem automatizada com métricas que impactam sua taxa de contato.</h2>
          <p>
            Acompanhe velocidade, produtividade e estabilidade com indicadores
            que fazem diferença direta no resultado da campanha.
          </p>
        </div>

        <div className="metrics-grid">
          {performanceMetrics.map((metric) => {
            const MetricIcon = metric.icon;

            return (
              <article className="metric-card" key={metric.title}>
                <MetricIcon size={24} aria-hidden="true" />
                <strong>{metric.value}</strong>
                <h3>{metric.title}</h3>
                <p>{metric.description}</p>
                <span>{metric.badge}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="plataforma" className="section split-section">
        <div className="section-heading align-left">
          <p className="eyebrow">Controle operacional</p>
          <h2>Inteligência em cada chamada, visibilidade em cada campanha.</h2>
          <p>
            Discadores para Call Center: Preditivo, Power e Preview em uma
            plataforma que se adapta à sua estratégia de vendas ou cobrança.
          </p>
        </div>

        <BenefitList benefits={platformBenefits} />
      </section>

      <section id="voz" className="section section-dark">
        <div className="section-heading">
          <p className="eyebrow">Funcionalidades do módulo de Voz</p>
          <h2>Ferramentas de discagem automática e preditiva para call center.</h2>
        </div>

        <div className="features-grid">
          {voiceFeatures.map((feature) => (
            <FeatureCard feature={feature} id={feature.id} key={feature.title} />
          ))}
        </div>
      </section>

      <ContactSection context="sua operação de discagem" />
      <Footer />
    </main>
  );
}

export default DialerPage;
