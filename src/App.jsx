import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  CloudCog,
  Gauge,
  Globe2,
  LineChart,
  Mic2,
  PhoneCall,
  RadioTower,
  Sparkles,
  Target,
  UserCheck,
  Volume2,
} from 'lucide-react';
import heroImage from './assets/call-center-automation.png';
import './App.css';

const dialerModels = [
  {
    id: 'discador-preditivo',
    name: 'Discador Preditivo',
    label: 'Modelo preditivo',
    eyebrow: 'Alta escala',
    title: 'Antecipe chamadas e mantenha seus agentes sempre em conversa.',
    description:
      'O algoritmo acompanha disponibilidade, abandono e taxa de atendimento para disparar no ritmo certo da sua operação.',
    icon: Bot,
    accent: 'aqua',
  },
  {
    id: 'discador-power',
    name: 'Discador Power',
    label: 'Modelo power',
    eyebrow: 'Ritmo constante',
    title: 'Uma chamada por agente, sem intervalo improdutivo.',
    description:
      'Ideal para times comerciais e cobrança que precisam de cadência automática com controle operacional simples.',
    icon: RadioTower,
    accent: 'coral',
  },
  {
    id: 'discador-preview',
    name: 'Discador Preview',
    label: 'Modelo preview',
    eyebrow: 'Contexto antes da ligação',
    title: 'Dê ao agente os dados certos antes de iniciar o contato.',
    description:
      'Perfeito para negociações consultivas, carteiras sensíveis e operações onde contexto aumenta conversão.',
    icon: UserCheck,
    accent: 'violet',
  },
];

const performanceMetrics = [
  {
    value: '0.7s',
    title: 'Conexão imediata com cliente real',
    description: 'Reduza tempo morto e aumente conversas produtivas.',
    badge: 'O mais rápido do mercado',
    icon: Gauge,
  },
  {
    value: '20s',
    title: 'Menos tempo ocioso, mais tempo vendendo',
    description: 'Operação mais eficiente sem aumentar equipe.',
    badge: 'Eficiência comprovada',
    icon: Clock3,
  },
  {
    value: '99%',
    title: 'Fale só com quem atende você',
    description: 'Elimine tentativas improdutivas e economize recursos.',
    badge: 'Economia de tempo e recursos',
    icon: Target,
  },
  {
    value: '24/7',
    title: 'Estabilidade para escalar com segurança',
    description: 'Infraestrutura pronta para picos de campanha.',
    badge: 'Monitoramento contínuo',
    icon: Globe2,
  },
];

const platformBenefits = [
  {
    title: 'Inteligência em cada chamada',
    description:
      'Seu agente só recebe ligações atendidas, sem caixa postal e sem tempo perdido.',
    icon: Sparkles,
  },
  {
    title: 'Performance garantida',
    description: 'Escale sua operação sem aumentar equipe.',
    icon: LineChart,
  },
  {
    title: 'Visibilidade total da operação',
    description:
      'Controle taxa de contato, produtividade por agente e desempenho de campanhas em tempo real.',
    icon: BarChart3,
  },
  {
    title: 'Discadores em uma plataforma',
    description:
      'Ajuste regras de discagem, segmentação e URA conforme sua estratégia de vendas ou cobrança.',
    icon: CloudCog,
  },
];

const voiceFeatures = [
  {
    id: 'discador-preditivo',
    title: 'Discador Preditivo',
    description:
      'O algoritmo dispara chamadas antes do agente ficar livre. Resultado: até 300 ligações por agente por dia com ociosidade de até 15s.',
    icon: Bot,
  },
  {
    id: 'discador-power',
    title: 'Discador Power',
    description:
      'Uma chamada por agente de forma sequencial e automática. O agente encerra um contato e o próximo já é discado.',
    icon: RadioTower,
  },
  {
    id: 'discador-preview',
    title: 'Discador Preview',
    description:
      'O agente visualiza os dados do lead antes da chamada ser iniciada. Ideal para operações onde contexto aumenta conversão.',
    icon: UserCheck,
  },
  {
    title: 'Transcrição com IA',
    description:
      'Cada ligação transcrita automaticamente com análise de sentimento, resumo da conversa e pontos de melhoria.',
    icon: Mic2,
  },
  {
    title: 'Gravação de Chamadas',
    description:
      'Grave, armazene e acesse qualquer ligação com filtros por agente, campanha ou resultado.',
    icon: Volume2,
  },
  {
    title: 'Telefonia VoIP Integrada',
    description:
      'Discador e telefonia em um único contrato, sem hardware. Bina local e origem verificada aumentam a taxa de atendimento.',
    icon: PhoneCall,
  },
];

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeModel = dialerModels[activeSlide];

  const carouselStyle = useMemo(
    () => ({
      '--slide-accent':
        activeModel.accent === 'coral'
          ? '#ff7a59'
          : activeModel.accent === 'violet'
            ? '#7c5cff'
            : '#00cdb7',
    }),
    [activeModel],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % dialerModels.length);
    }, 6200);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    window.alert('Contato recebido. Em breve retornaremos para conversar.');
  };

  const ActiveIcon = activeModel.icon;

  return (
    <main className="site-shell">
      <section className="hero-section" aria-label="Soluções em discadores">
        <img className="hero-image" src={heroImage} alt="" />
        <div className="hero-overlay" />

        <header className="topbar">
          <a className="brand" href="#inicio" aria-label="BRZ Solutions">
            <span className="brand-mark">B</span>
            <span>BRZ Dialer</span>
          </a>
          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#performance">Performance</a>
            <a href="#plataforma">Plataforma</a>
            <a href="#voz">Módulo de Voz</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <div id="inicio" className="hero-content">
          <div className="hero-copy">
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
                onClick={() => scrollToSection(activeModel.id)}
              >
                Conhecer modelo
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <a className="secondary-button" href="#contato">
                Falar com especialista
              </a>
            </div>
          </div>

          <div className="dialer-carousel" style={carouselStyle}>
            <div className="carousel-media">
              <span className="model-icon">
                <ActiveIcon size={30} aria-hidden="true" />
              </span>
              <p>{activeModel.eyebrow}</p>
              <h2>{activeModel.name}</h2>
            </div>
            <div className="carousel-copy">
              <span>{activeModel.label}</span>
              <h3>{activeModel.title}</h3>
              <p>{activeModel.description}</p>
              <button
                className="text-button"
                type="button"
                onClick={() => scrollToSection(activeModel.id)}
              >
                Conhecer modelo
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
            <div className="carousel-controls" aria-label="Selecionar modelo">
              {dialerModels.map((model, index) => (
                <button
                  key={model.id}
                  className={index === activeSlide ? 'is-active' : ''}
                  type="button"
                  aria-label={`Ver ${model.name}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
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

        <div className="benefits-list">
          {platformBenefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article className="benefit-item" key={benefit.title}>
                <span>
                  <BenefitIcon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="voz" className="section section-dark">
        <div className="section-heading">
          <p className="eyebrow">Funcionalidades do módulo de Voz</p>
          <h2>Ferramentas de discagem automática e preditiva para call center.</h2>
        </div>

        <div className="features-grid">
          {voiceFeatures.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <article
                className="feature-card"
                id={feature.id}
                key={feature.title}
              >
                <FeatureIcon size={25} aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Próximo passo</p>
          <h2>Vamos desenhar a discagem ideal para sua operação.</h2>
          <p>
            Conte o tamanho do seu time, o tipo de campanha e o objetivo da
            operação. A partir disso, indicamos o melhor modelo de discador.
          </p>
          <ul>
            <li>
              <CheckCircle2 size={19} aria-hidden="true" />
              Diagnóstico de operação comercial ou cobrança
            </li>
            <li>
              <CheckCircle2 size={19} aria-hidden="true" />
              Regras de discagem, URA e telefonia VoIP
            </li>
            <li>
              <CheckCircle2 size={19} aria-hidden="true" />
              Métricas para gestão em tempo real
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" type="text" placeholder="Seu nome" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" placeholder="voce@empresa.com" required />
          </label>
          <label>
            Telefone
            <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
          </label>
          <label>
            Mensagem
            <textarea
              name="message"
              placeholder="Conte rapidamente sobre sua operação"
              rows="4"
              required
            />
          </label>
          <button className="primary-button full-width" type="submit">
            Solicitar contato
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <span>BRZ Solutions</span>
        <span>Soluções em atendimento ao cliente e performance operacional.</span>
      </footer>
    </main>
  );
}

export default App;
