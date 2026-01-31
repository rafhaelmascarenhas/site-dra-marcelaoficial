
import { FileText, Activity, Shield, Syringe, Zap, UserCheck, Clock, Brain, Dna } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Protocolos', href: '#protocolos' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Sobre', href: '#bio' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const STATISTICS = [
  { value: '+2.000', label: 'Pacientes Atendidos' },
  { value: '+1.000kg', label: 'Gordura Eliminada' },
  { value: '95%', label: 'Taxa de Fidelização' },
  { value: '< 2%', label: 'Taxa de Reganho' },
];

export const DIAGNOSTICS_DATA = [
  {
    title: 'Teste Epigenético (S-Drive)',
    subtitle: 'A análise do "Agora"',
    description: 'Deciframos como seu estilo de vida (sono, estresse, dieta) está afetando a expressão dos seus genes hoje. Resultado em 15 minutos via bulbo capilar.',
    details: [
      'Necessidades nutricionais atuais',
      'Detecção de metais tóxicos e radiação',
      'Análise da microbiota e sensibilidades',
    ],
    icon: Activity,
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop" // Abstract cell/biological luxury
  },
  {
    title: 'Mapeamento Genético (DNA)',
    subtitle: 'A análise do "Imutável"',
    description: 'Um mapa profundo do seu código biológico para prever riscos e personalizar estratégias de longo prazo. Coleta simples via swab bucal.',
    details: [
      'Nutrigenética e metabolismo',
      'Farmacogenética (resposta a remédios)',
      'Predisposição a doenças e longevidade',
    ],
    icon: Dna,
    // IMAGE REMOVED to trigger Pure Glass Effect in Diagnostics.tsx
    image: "" 
  },
];

export const PROTOCOLS_DATA = [
  {
    title: 'Programa RESET SLIM®',
    description: 'Emagrecimento de alta performance com foco na não-recuperação do peso.',
    fullDescription: 'Reeducação metabólica somada a terapias injetáveis para queima de gordura visceral.',
    tags: ['Emagrecimento', 'Sem Reganho'],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop", // Healthy food/Organic/Luxury
    colSpan: "md:col-span-2",
  },
  {
    title: 'Implantes Hormonais',
    description: 'Reposição bioidêntica com dosagem milimétrica.',
    fullDescription: 'Para menopausa, endometriose, SOP e recuperação da libido e massa magra.',
    tags: ['Bioidênticos', 'Menopausa', 'Libido'],
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop", // Woman confident/sunlight
    colSpan: "md:col-span-1",
  },
  {
    title: 'Soroterapia (Injetáveis)',
    description: 'Nutrientes 100% absorvíveis na corrente sanguínea.',
    fullDescription: 'Protocolos exclusivos para beauty, performance cognitiva, detox e energia.',
    tags: ['Performance', 'Beleza', 'Detox'],
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", // Spa/Clinic Luxury
    colSpan: "md:col-span-1",
  },
  {
    title: 'Imunoestimulante',
    description: 'Tratamento focado para Candidíase de Repetição.',
    fullDescription: 'Uma "faxina celular" que reativa suas defesas e restaura a saúde íntima.',
    tags: ['Imunidade', 'Saúde da Mulher'],
    icon: Shield,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop", // Yoga/Peace/Wellness
    colSpan: "md:col-span-2",
  },
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Pré-Consulta',
    description: 'Anamnese profunda sobre sono, rotina e dieta, somada à Bioimpedância de alta precisão.',
    icon: Clock,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" // High end consultation
  },
  {
    step: '02',
    title: 'Diagnóstico',
    description: 'Cruzamento de dados clínicos, exames laboratoriais e mapeamento genético/epigenético.',
    icon: Activity,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" // Lab/Science/Data
  },
  {
    step: '03',
    title: 'Estratégia',
    description: 'Desenvolvimento do plano terapêutico personalizado: não adivinhamos, mapeamos.',
    icon: Brain,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" // Strategy/iPad/Plan
  },
  {
    step: '04',
    title: 'Execução',
    description: 'Aplicação dos protocolos (injetáveis, implantes) e acompanhamento contínuo.',
    icon: Syringe,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" // Clinic/Treatment
  },
];

export const TESTIMONIALS = [
  {
    quote: "Após meses tentando engravidar e sofrendo perdas, o tratamento focado recuperou minha fertilidade. Hoje realizo meu sonho.",
    name: 'Lais Rezende',
    designation: 'Programa de Fertilidade',
    src: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop" // Elegant woman portrait
  },
  {
    quote: "Senti a melhora do sono e disposição logo no primeiro dia de reposição hormonal. Minha qualidade de vida mudou da água para o vinho.",
    name: 'Cinthya Carrara',
    designation: 'Implantes Hormonais (Menopausa)',
    src: "https://images.unsplash.com/photo-1581055990573-77790999b961?q=80&w=2000&auto=format&fit=crop" // REPLACED: Confident mature woman (working URL)
  },
  {
    quote: "O que mais me impressionou foi a explicação científica detalhada aliada a uma empatia que nunca vi. Não é só estética, é saúde real.",
    name: 'Maria Cristina',
    designation: 'Reset Slim®',
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop" // Professional woman
  },
  {
    quote: "Eu não tinha energia nem para brincar com meus filhos. Após a soroterapia, recuperei minha vitalidade e minha massa muscular.",
    name: 'Roberto Alvarez',
    designation: 'Soroterapia de Performance',
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" // Healthy man
  },
];