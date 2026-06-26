import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CloudCog,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  MessageCircle,
  Mic2,
  PhoneCall,
  RadioTower,
  Sparkles,
  Stethoscope,
  Target,
  UserCheck,
  Users,
  Volume2,
} from 'lucide-react';
import heroImage from './assets/call-center-automation.png';
import './App.css';

const routes = {
  home: '',
  dialer: 'dialer',
  brookz: 'brookz',
  brzOne: 'brzone',
  brzClinic: 'brzclinic',
};

const solutions = [
  {
    route: routes.dialer,
    name: 'Dialer',
    eyebrow: 'Operações de voz',
    title: 'Discadores power, preditivo e preview para call centers.',
    description:
      'Automatize chamadas, reduza ociosidade e acompanhe performance de campanhas em tempo real.',
    icon: PhoneCall,
    theme: 'aqua',
    bullets: ['Discagem automática', 'VoIP integrado', 'Performance operacional'],
  },
  {
    route: routes.brookz,
    name: 'Brookz',
    eyebrow: 'Biblioteca digital',
    title: 'Estante de livros virtuais para organizar acervos digitais.',
    description:
      'Controle publicações, categorias, usuários e leitura digital em uma experiência simples e centralizada.',
    icon: BookOpen,
    theme: 'violet',
    bullets: ['Acervo digital', 'Organização por categorias', 'Acesso online'],
  },
  {
    route: routes.brzOne,
    name: 'BrzOne',
    eyebrow: 'Multiatendimento',
    title: 'Atendimento unificado por Email, Chat, Telegram e WhatsApp.',
    description:
      'Centralize conversas, distribua filas e acompanhe produtividade sem espalhar sua equipe em várias telas.',
    icon: MessageCircle,
    theme: 'coral',
    bullets: ['Filas de atendimento', 'Canais integrados', 'Histórico do cliente'],
  },
  {
    route: routes.brzClinic,
    name: 'brzClinic',
    eyebrow: 'Gestão médica',
    title: 'Sistema de agendamento para clínicas médicas.',
    description:
      'Organize agenda, profissionais, pacientes e confirmações com uma rotina clara para recepção e gestão.',
    icon: Stethoscope,
    theme: 'green',
    bullets: ['Agenda por profissional', 'Cadastro de pacientes', 'Confirmações'],
  },
];

const productPages = {
  [routes.brookz]: {
    name: 'Brookz',
    eyebrow: 'Estante de livros virtuais',
    title: 'Uma biblioteca digital simples para publicar, organizar e consultar livros online.',
    description:
      'O Brookz ajuda escolas, empresas, autores e projetos editoriais a manterem um acervo digital organizado, acessível e fácil de consultar.',
    icon: BookOpen,
    theme: 'violet',
    features: [
      {
        title: 'Acervo centralizado',
        description:
          'Cadastre livros, capas, autores, categorias e metadados em um ambiente único.',
        icon: Layers3,
      },
      {
        title: 'Leitura online',
        description:
          'Entregue acesso digital ao conteúdo sem depender de processos manuais de distribuição.',
        icon: BookOpen,
      },
      {
        title: 'Gestão de usuários',
        description:
          'Controle permissões, grupos de acesso e disponibilidade do acervo por perfil.',
        icon: Users,
      },
    ],
    metrics: ['Acervo digital', 'Acesso 24/7', 'Gestão simples'],
  },
  [routes.brzOne]: {
    name: 'BrzOne',
    eyebrow: 'Ferramenta multiatendimento',
    title: 'Todos os canais de atendimento conectados em uma única operação.',
    description:
      'O BrzOne reúne Email, Chat, Telegram e WhatsApp para melhorar tempo de resposta, histórico de atendimento e gestão da equipe.',
    icon: MessageCircle,
    theme: 'coral',
    features: [
      {
        title: 'Canais integrados',
        description:
          'Unifique mensagens de diferentes canais sem perder contexto do cliente.',
        icon: MessageCircle,
      },
      {
        title: 'Email e chat operacional',
        description:
          'Organize conversas, acompanhe filas e distribua demandas por equipe.',
        icon: Mail,
      },
      {
        title: 'Gestão de atendimento',
        description:
          'Veja produtividade, histórico e status das conversas em tempo real.',
        icon: BarChart3,
      },
    ],
    metrics: ['Email', 'Chat', 'Telegram', 'WhatsApp'],
  },
  [routes.brzClinic]: {
    name: 'brzClinic',
    eyebrow: 'Agenda para clínica médica',
    title: 'Agendamentos médicos com rotina mais clara para pacientes, recepção e profissionais.',
    description:
      'O brzClinic organiza agenda, pacientes, profissionais e horários disponíveis para reduzir conflito de agenda e melhorar o fluxo da clínica.',
    icon: Stethoscope,
    theme: 'green',
    features: [
      {
        title: 'Agenda inteligente',
        description:
          'Visualize horários por profissional, especialidade e disponibilidade.',
        icon: CalendarDays,
      },
      {
        title: 'Cadastro de pacientes',
        description:
          'Centralize dados, contatos e histórico de agendamentos dos pacientes.',
        icon: Users,
      },
      {
        title: 'Fluxo da recepção',
        description:
          'Facilite marcações, remarcações e acompanhamento da agenda diária.',
        icon: CheckCircle2,
      },
    ],
    metrics: ['Agenda online', 'Pacientes', 'Profissionais', 'Confirmações'],
  },
};

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

const getRouteFromHash = () => window.location.hash.replace(/^#\/?/, '');

const getThemeColor = (theme) => {
  const themeColors = {
    aqua: '#00cdb7',
    coral: '#ff7a59',
    green: '#39c985',
    violet: '#7c5cff',
  };

  return themeColors[theme] ?? themeColors.aqua;
};

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const handleContactSubmit = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  window.alert('Contato recebido. Em breve retornaremos para conversar.');
};

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#/" aria-label="BRZ Solutions">
        <span className="brand-mark">B</span>
        <span>BRZ Solutions</span>
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#/brookz">Brookz</a>
        <a href="#/brzone">BrzOne</a>
        <a href="#/brzclinic">brzClinic</a>
        <a href="#/dialer">Dialer</a>
      </nav>
    </header>
  );
}

function ContactSection({ context = 'sua operação' }) {
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-copy">
        <p className="eyebrow">Próximo passo</p>
        <h2>Vamos entender {context} e indicar o melhor caminho.</h2>
        <p>
          Conte rapidamente o cenário atual, o objetivo do projeto e quais
          processos você quer melhorar. A partir disso, retornamos com uma
          proposta mais alinhada.
        </p>
        <ul>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Diagnóstico do fluxo atual
          </li>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Sugestão de arquitetura e funcionalidades
          </li>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Próximos passos para implantação
          </li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleContactSubmit}>
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
            placeholder="Conte rapidamente sobre sua necessidade"
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
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>BRZ Solutions</span>
      <span>Software House para produtos digitais, atendimento e operações.</span>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-section home-hero" aria-label="BRZ Solutions Software House">
        <img className="hero-image" src={heroImage} alt="" />
        <div className="hero-overlay" />
        <Header />

        <div id="inicio" className="hero-content home-hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Software House</p>
            <h1>BRZ Solutions cria soluções digitais para operações que precisam evoluir.</h1>
            <p className="hero-description">
              Desenvolvemos produtos próprios e sistemas sob medida para
              atendimento, automação, gestão clínica, bibliotecas digitais e
              performance operacional.
            </p>
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
          {solutions.map((solution) => {
            const SolutionIcon = solution.icon;

            return (
              <a
                className={`solution-card theme-${solution.theme}`}
                href={`#/${solution.route}`}
                key={solution.name}
              >
                <span className="solution-icon">
                  <SolutionIcon size={28} aria-hidden="true" />
                </span>
                <p>{solution.eyebrow}</p>
                <h3>{solution.name}</h3>
                <strong>{solution.title}</strong>
                <span className="solution-description">{solution.description}</span>
                <ul>
                  {solution.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="solution-link">
                  Conhecer solução
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
              </a>
            );
          })}
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

        <div className="benefits-list">
          {[
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
          ].map((benefit) => {
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

      <ContactSection context="seu projeto" />
      <Footer />
    </main>
  );
}

function DialerPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeModel = dialerModels[activeSlide];

  const carouselStyle = useMemo(
    () => ({
      '--slide-accent': getThemeColor(activeModel.accent),
    }),
    [activeModel],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % dialerModels.length);
    }, 6200);

    return () => window.clearInterval(intervalId);
  }, []);

  const ActiveIcon = activeModel.icon;

  return (
    <main className="site-shell">
      <section className="hero-section" aria-label="Soluções em discadores">
        <img className="hero-image" src={heroImage} alt="" />
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
                onClick={() => scrollToSection(activeModel.id)}
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

      <ContactSection context="sua operação de discagem" />
      <Footer />
    </main>
  );
}

function ProductPage({ product }) {
  const ProductIcon = product.icon;
  const productStyle = {
    '--product-accent': getThemeColor(product.theme),
  };

  return (
    <main className="site-shell" style={productStyle}>
      <section className={`product-hero theme-${product.theme}`}>
        <Header />
        <div className="product-hero-content">
          <div className="product-copy">
            <a className="back-link dark" href="#/">
              <ArrowLeft size={17} aria-hidden="true" />
              Voltar para soluções
            </a>
            <p className="eyebrow">{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => scrollToSection('contato')}
              >
                Conversar sobre {product.name}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="product-visual">
            <span className="product-icon">
              <ProductIcon size={38} aria-hidden="true" />
            </span>
            <h2>{product.name}</h2>
            <div className="product-metrics">
              {product.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Funcionalidades</p>
          <h2>Uma solução pensada para deixar a rotina mais simples.</h2>
        </div>

        <div className="features-grid product-features">
          {product.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <article className="feature-card light" key={feature.title}>
                <FeatureIcon size={25} aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ContactSection context={`o uso do ${product.name}`} />
      <Footer />
    </main>
  );
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === routes.dialer) {
    return <DialerPage />;
  }

  if (productPages[route]) {
    return <ProductPage product={productPages[route]} />;
  }

  return <HomePage />;
}

export default App;
