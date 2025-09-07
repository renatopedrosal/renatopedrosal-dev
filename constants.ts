import { AiOutlineApi } from 'react-icons/ai';
import { FaAngular, FaBug, FaDocker, FaGitAlt, FaJava, FaJs, FaNodeJs, FaPalette, FaPhp, FaReact, FaRocket } from 'react-icons/fa';
import { SiN8N, SiPostgresql, SiSpringboot, SiTypescript } from 'react-icons/si';
import type { Badge, ExperienceItem, Project, Skill } from './types';

export const skills: Skill[] = [
    { name: 'Java', icon: FaJava, color: '#f89820', usage: 'Desenvolvimento backend robusto e sistemas de larga escala.', level: 95 },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', usage: 'Criação de APIs RESTful seguras para 100+ usuários simultâneos.', level: 90 },
    { name: 'PHP', icon: FaPhp, color: '#777BB4', usage: 'Manutenção e modernização de sistemas legados.', level: 60 },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', usage: 'Interatividade e dinamismo em interfaces web modernas.', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', usage: 'Aplicações front-end e back-end com tipagem estática.', level: 85 },
    { name: 'Angular', icon: FaAngular, color: '#DD0031', usage: 'Desenvolvimento de SPAs complexas para o setor corporativo.', level: 90 },
    { name: 'React', icon: FaReact, color: '#61DAFB', usage: 'Criação de UIs reativas e componentes reutilizáveis.', level: 60 },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', usage: 'Construção de microserviços e ferramentas de build.', level: 50 },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', usage: 'Containerização de aplicações para garantir consistência entre ambientes.', level: 55 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', usage: 'Modelagem e otimização de bancos de dados relacionais.', level: 85 },
    { name: 'n8n', icon: SiN8N, color: '#6A23B7', usage: 'Automação de workflows e integração entre diferentes APIs.', level: 75 },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', usage: 'Versionamento de código e colaboração em equipe.', level: 95 },
];

export const experience: ExperienceItem[] = [
    {
        period: '2023 - Atual',
        company: 'Casa Publicadora Brasileira',
        description: 'Desenvolvimento e manutenção de sistemas internos críticos para a operação da empresa, utilizando Java com Spring Boot. Foco em APIs RESTful, integração de sistemas e modernização de aplicações legadas.',
    },
    {
        period: '2024 - Atual',
        company: 'Freelancer',
        description: 'Desenvolvimento de projetos sob demanda, incluindo sistemas de gestão empresarial (ERP), gestão de condomínios, cofres de senhas seguros e landing pages otimizadas para conversão.',
    },
    {
        period: '2021 - 2023',
        company: 'Suporte Técnico',
        description: 'Atuação na área de suporte técnico, realizando diagnóstico de problemas, manutenção de hardware e software, e oferecendo suporte a usuários em ambientes corporativos.',
    },
];

export const projects: Project[] = [
    {
        id: 1,
        title: 'Gestão Empresarial',
        description: 'Sistema ERP completo para gestão de finanças, estoque e clientes.',
        longDescription: 'Uma solução robusta para pequenas e médias empresas, projetada para otimizar processos de negócios. Inclui módulos de faturamento, controle de estoque, CRM e relatórios financeiros detalhados. A interface é intuitiva e responsiva.',
        stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
        image: '/images/sgc.png',
        results: 'Aumento de 30% na eficiência operacional dos clientes piloto e redução de 15% nos custos de gestão de estoque.',
        link: 'https://sgc.net.br'
    },
    {
        id: 2,
        title: 'Gestão de Condomínio',
        description: 'Plataforma para administração de condomínios, com portal para síndicos e moradores.',
        longDescription: 'Facilita a comunicação e a gestão de condomínios. Moradores podem reservar áreas comuns e relatar problemas, enquanto síndicos gerenciam finanças, comunicados e manutenções. Segurança e usabilidade são os pilares do projeto.',
        stack: ['PHP', 'Laravel', 'React', 'MySQL'],
        image: '/images/reserva-ypes-2.png',
        results: 'Melhora de 50% na comunicação interna e 40% de redução no tempo gasto com tarefas administrativas do síndico.',
        link: 'https://reservadosypes2.com.br'
    },
    {
        id: 3,
        title: 'Cofre de Senhas',
        description: 'Aplicação segura para armazenamento e gerenciamento de credenciais.',
        longDescription: 'Uma aplicação desktop e mobile para armazenar senhas e informações sensíveis com criptografia de ponta a ponta. Oferece geração de senhas fortes, auto-preenchimento e auditoria de segurança das credenciais salvas.',
        stack: ['TypeScript', 'React Native', 'Node.js', 'SQLite'],
        image: '/images/decor-design.png',
        results: 'Aplicação com alto nível de adoção em nicho de segurança, com feedback positivo sobre a interface e a robustez da criptografia.',
    },
    {
        id: 4,
        title: 'Landing Pages',
        description: 'Criação de landing pages de alta conversão para diversos nichos.',
        longDescription: 'Desenvolvimento de páginas de aterrissagem focadas em performance e experiência do usuário. Cada projeto envolve análise de público-alvo, design responsivo, otimização de SEO e testes A/B para maximizar as taxas de conversão.',
        stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        image: '/images/relucode-site.png',
        results: 'Média de aumento de 25% na taxa de conversão para clientes em campanhas de marketing digital.',
        link: 'https://relucode.com.br'
    },
    {
        id: 5,
        title: 'Automação n8n',
        description: 'Workflow de automação para integração de sistemas e processos.',
        longDescription: 'Criação de fluxos de trabalho automatizados usando n8n para conectar diferentes APIs e serviços. As automações variam desde a sincronização de dados entre plataformas até a orquestração de processos de marketing e vendas complexos.',
        stack: ['n8n', 'JavaScript', 'REST APIs', 'Webhooks'],
        image: '/images/automacao.webp',
        results: 'Redução de até 80% do tempo gasto em tarefas manuais e repetitivas, liberando equipes para focarem em atividades estratégicas.',
    },
];

export const badges: Badge[] = [
    { name: 'Mestre de APIs', icon: AiOutlineApi, description: 'Design e implementação de APIs RESTful escaláveis e seguras.' },
    { name: 'Caçador de Bugs', icon: FaBug, description: 'Habilidade em depuração e resolução de problemas complexos.' },
    { name: 'Designer de UI', icon: FaPalette, description: 'Criação de interfaces intuitivas e esteticamente agradáveis.' },
    { name: 'Foguete de Performance', icon: FaRocket, description: 'Otimização de aplicações para máxima velocidade e eficiência.' },
];
