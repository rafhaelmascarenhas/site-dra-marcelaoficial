
import { FileText, Activity, Shield, Syringe, Zap, UserCheck, Clock, Brain, Dna } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Protocolos', href: '#protocolos' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Sobre', href: '#bio' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const STATISTICS = [
  { value: '+2.000', label: 'Vidas transformadas' },
  { value: '+10.000kg', label: 'Gordura Eliminada' },
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
    image: "testeepigenetico.webp"
  },
  {
    title: 'Mapeamento Genético (DNA)',
    subtitle: 'A análise do "Imutável"',
    description: 'Um mapa profundo do seu código biológico para prever riscos e personalizar estratégias de longo prazo. Coleta simples via swab bucal.',
    details: [
      'Nutrigenética e metabolismo',
      'Sensibilidade alimentar',
      'Predisposição a doenças e longevidade',
    ],
    icon: Dna,
    image: "mapeamentogenetico.webp" 
  },
];

export const PROTOCOLS_DATA = [
  {
    title: 'Programa RESET SLIM®',
    description: 'Emagrecimento de alta performance de forma concreta e sustentável',
    fullDescription: 'Reeducação metabólica somada a terapias injetáveis para queima de gordura visceral.',
    tags: ['Emagrecimento', 'Sem Reganho'],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop", // Healthy food/Organic/Luxury
    colSpan: "md:col-span-2",
    tagsContainerClass: "",
  },
  {
    title: 'Tecnologia Transform X',
    description: 'Modulação Hormonal, Terapias Injetáveis e RESET SLIM (Programa de emagrecimento)',
    fullDescription: 'A mais avançada tecnologia para potencializar seus resultados.',
    tags: ['Alta Performance', 'Tecnologia'],
    icon: Brain,
    image: "https://images.unsplash.com/photo-1581093458791-9f30225d5d61?q=80&w=1000&auto=format&fit=crop", // Futuristic tech/Lab
    colSpan: "md:col-span-1",
    tagsContainerClass: "",
  },
  {
    title: 'Implantes Hormonais',
    description: 'Reposição bioidêntica com dosagem milimétrica.',
    fullDescription: 'Para menopausa, endometriose, SOP e recuperação da libido e massa magra.',
    tags: ['Menopausa', 'Andropausa', 'Queda de libido', 'Lipedema'],
    icon: UserCheck,
    image: "impanteshormonais.webp",
    colSpan: "md:col-span-1",
    tagsContainerClass: "",
  },
  {
    title: 'Terapias injetáveis',
    description: 'Nutrientes 100% absorvíveis na corrente sanguínea.',
    fullDescription: 'Protocolos exclusivos para beauty, performance cognitiva, detox e energia.',
    tags: ['Performance', 'Beleza', 'Detox', 'Disposição'],
    icon: Syringe,
    image: "soroterapias.webp",
    colSpan: "md:col-span-1",
    tagsContainerClass: "max-w-[250px]", 
  },
  {
    title: 'Imunoestimulante',
    description: 'Prevenção de doenças baseada em estratégias',
    fullDescription: 'Uma "faxina celular" que reativa suas defesas e restaura a saúde íntima.',
    tags: ['Imunidade', 'Saúde'],
    icon: Shield,
    image: "imunoestimulante.webp",
    colSpan: "md:col-span-1",
    tagsContainerClass: "",
  },
];

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Pré-Consulta',
    description: 'Anamnese profunda sobre sono, rotina e dieta, somada à Bioimpedância de alta precisão.',
    icon: Clock,
    image: "preconsulta.webp"
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
    description: 'Aplicação de protocolos e acompanhamentos multidisciplinar e contínuos',
    icon: Syringe,
    image: "execucao.webp"
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