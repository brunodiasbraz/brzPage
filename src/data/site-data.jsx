import {
  BarChart3,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CloudCog,
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
import brookzHeroImage from '../assets/brookz-hero.png';
import brzClinicHeroImage from '../assets/brzclinic-hero.png';
import brzOneHeroImage from '../assets/brzone-hero.png';
import dialerHeroImage from '../assets/call-center-automation.png';
import softwareHouseHeroImage from '../assets/software-house-hero.png';
import { routes } from '../utils/navigation';

export const homeHero = {
  image: softwareHouseHeroImage,
  eyebrow: 'Software House',
  title: 'BRZ Solutions cria soluções digitais para operações que precisam evoluir.',
  description:
    'Desenvolvemos produtos próprios e sistemas sob medida para atendimento, automação, gestão clínica, bibliotecas digitais e performance operacional.',
};

export const solutions = [
  {
    route: routes.dialer,
    name: 'BrzDialer',
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
    name: 'BrzClinic',
    eyebrow: 'Gestão médica',
    title: 'Sistema de agendamento para clínicas médicas.',
    description:
      'Organize agenda, profissionais, pacientes e confirmações com uma rotina clara para recepção e gestão.',
    icon: Stethoscope,
    theme: 'green',
    bullets: ['Agenda por profissional', 'Cadastro de pacientes', 'Confirmações'],
  },
];

export const productPages = {
  [routes.brookz]: {
    name: 'Brookz',
    eyebrow: 'Estante de livros virtuais',
    title: 'Uma biblioteca digital simples para publicar, organizar e consultar livros online.',
    description:
      'O Brookz ajuda escolas, empresas, autores e projetos editoriais a manterem um acervo digital organizado, acessível e fácil de consultar.',
    icon: BookOpen,
    theme: 'violet',
    image: brookzHeroImage,
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
    image: brzOneHeroImage,
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
    name: 'BrzClinic',
    eyebrow: 'Agenda para clínica médica',
    title: 'Agendamentos médicos com rotina mais clara para pacientes, recepção e profissionais.',
    description:
      'O BrzClinic organiza agenda, pacientes, profissionais e horários disponíveis para reduzir conflito de agenda e melhorar o fluxo da clínica.',
    icon: Stethoscope,
    theme: 'green',
    image: brzClinicHeroImage,
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

export const dialerPage = {
  image: dialerHeroImage,
  theme: 'aqua',
};

export const dialerModels = [
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

export const performanceMetrics = [
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

export const platformBenefits = [
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

export const voiceFeatures = [
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
