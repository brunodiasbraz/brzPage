import {
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CloudCog,
  EyeOff,
  Gauge,
  Globe2,
  Inbox,
  Layers3,
  LineChart,
  Mail,
  MessageCircle,
  Mic2,
  PhoneCall,
  RadioTower,
  ShieldCheck,
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
  title: 'BRZ Solutions. Soluções digitais para operações que precisam evoluir.',
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
    title: 'WhatsApp, Webchat e e-mail em um só sistema de atendimento.',
    description:
      'Responda o WhatsApp e o chat do seu site na mesma tela, com e-mail e contatos integrados.',
    icon: MessageCircle,
    theme: 'coral',
    bullets: ['WhatsApp e Webchat juntos', 'E-mail integrado', 'Contatos unificados'],
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
    title: 'WhatsApp, o chat do seu site e o e-mail no mesmo lugar.',
    description:
      'No BrzOne, as conversas de WhatsApp e Webchat chegam em uma única tela, em tempo real. E-mail, contatos e notificações fazem parte do mesmo sistema.',
    icon: MessageCircle,
    theme: 'coral',
    image: brzOneHeroImage,
    features: [
      {
        title: 'Conversas em uma só tela',
        description:
          'Atenda todas as caixas de WhatsApp e Webchat juntas, com busca, filtro por caixa, favoritas e arquivadas.',
        icon: Inbox,
      },
      {
        title: 'WhatsApp',
        description:
          'Conecte um ou mais números por QR code e troque textos, arquivos e áudios direto pelo navegador.',
        icon: MessageCircle,
      },
      {
        title: 'Webchat no seu site',
        description:
          'Instale o balão de atendimento com uma linha de código e personalize título, cor e boas-vindas.',
        icon: Globe2,
      },
      {
        title: 'E-mail integrado',
        description:
          'Cadastre caixas IMAP ou POP3, leia, responda e escreva e-mails, com aviso de novas mensagens.',
        icon: Mail,
      },
      {
        title: 'Contatos unificados',
        description:
          'Um cadastro para os canais, alimentado pelas conversas e pela agenda do WhatsApp.',
        icon: Users,
      },
      {
        title: 'Notificações em tempo real',
        description:
          'Som, aviso do sistema operacional e contadores para nenhuma mensagem passar despercebida.',
        icon: Bell,
      },
    ],
    details: {
      eyebrow: 'Em detalhes',
      title: 'O que o BrzOne faz hoje.',
      groups: [
        {
          title: 'Conversas',
          icon: Inbox,
          items: [
            'Abas de não lidas, favoritas, todas e arquivadas',
            'Busca por nome, número ou mensagem',
            'Filtro por caixa, com o nome da caixa em cada conversa',
            'Indicador de “digitando” e status de envio e leitura',
          ],
        },
        {
          title: 'WhatsApp',
          icon: MessageCircle,
          items: [
            'Conexão via Evolution Go, com pareamento por QR code',
            'Vários números, cada um em sua própria caixa',
            'Importação do histórico recente ao parear o número',
            'Fotos, documentos e áudios gravados na própria tela (anexos de até 16 MB)',
            'Respostas com citação, reações e fotos de perfil',
          ],
        },
        {
          title: 'Webchat',
          icon: Globe2,
          items: [
            'Instalação com um único script, sem depender de serviço externo',
            'Visitante informa nome, telefone e e-mail e vira contato',
            'Lista de sites autorizados em cada caixa',
            'Título, cor, mensagem de boas-vindas e posição do balão',
            'Conversa por texto, com “digitando” e confirmação de leitura',
          ],
        },
        {
          title: 'E-mail',
          icon: Mail,
          items: [
            'Várias caixas por IMAP ou POP3, com teste de conexão',
            'Leitura das mensagens recentes, resposta e novo e-mail',
            'Aviso imediato via IMAP IDLE (em POP3, verificação a cada minuto)',
            'Conteúdo HTML exibido em área isolada',
            'Gmail compatível por senha de app',
          ],
        },
        {
          title: 'Contatos',
          icon: Users,
          items: [
            'Nome, telefone, e-mail, documento e endereço',
            'Cadastro automático a partir do WhatsApp e do Webchat',
            'Importação da agenda do WhatsApp conectado',
            'Envio por WhatsApp ou e-mail direto do contato',
          ],
        },
        {
          title: 'Notificações',
          icon: Bell,
          items: [
            'Som e notificação do sistema com a aba fora de foco',
            'Foto ou iniciais do contato no aviso de conversa',
            'Menus separados para conversas e e-mails',
            'Total de não lidas no título da aba',
          ],
        },
        {
          title: 'Privacidade e aparência',
          icon: EyeOff,
          items: [
            'Modo privado que desfoca nomes, fotos e mensagens das conversas',
            'Tema claro ou escuro',
            'Tamanho da fonte de 70% a 130%',
            'Menu lateral recolhível',
          ],
        },
        {
          title: 'Segurança e implantação',
          icon: ShieldCheck,
          items: [
            'Conta de usuário com ativação por e-mail',
            'Senhas de e-mail e tokens de WhatsApp criptografados (AES-256-GCM)',
            'Webchat com acesso restrito por site e limite de requisições',
            'Implantação com Docker Compose: banco, API e interface',
          ],
        },
      ],
      note: 'Próximos canais no planejamento: Telegram e Instagram.',
    },
    metrics: ['WhatsApp', 'Webchat', 'E-mail', 'Tempo real'],
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
