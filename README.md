
# Portfólio Moderno e Animado - Renato Pedrosa Leite

https://renatopedrosal.github.io/renatopedrosal-dev/

## 📜 Descrição

Este é um portfólio web moderno, interativo e totalmente responsivo, construído para apresentar as habilidades, experiência e projetos de um Desenvolvedor Full-Stack. O projeto foi desenvolvido com tecnologias de ponta do ecossistema frontend, focando em uma experiência de usuário (UX) fluida, design atraente (UI) e performance.

O design incorpora um sutil efeito de **neumorfismo**, criando uma interface limpa e tátil, e é enriquecido com animações performáticas utilizando **Framer Motion**.

---

## ✨ Funcionalidades Principais

- **🎨 Design Moderno e Responsivo:** Interface elegante que se adapta perfeitamente a qualquer tamanho de tela, de desktops a dispositivos móveis.
- **🌗 Tema Claro e Escuro:** Alternância de tema com persistência no `localStorage`, respeitando a preferência do sistema do usuário.
- **🚀 Animações Fluidas:** Animações e transições suaves em toda a aplicação, criadas com Framer Motion para uma experiência de navegação envolvente.
- ** parallax Efeitos de Scroll Parallax:** Elementos decorativos e texturas se movem em velocidades diferentes durante o scroll, adicionando profundidade à página.
- **🃏 Componentes Interativos:**
  - **Cartões de Projeto 3D:** Os cartões reagem ao movimento do mouse, criando um efeito de profundidade.
  - **Linha do Tempo Alternável:** A seção de experiência possui um layout de linha do tempo que pode ser alternado pelo usuário.
- **💻 Terminal Interativo:** Um terminal acessível via atalho (`Ctrl + K`) que permite ao usuário interagir com o portfólio através de comandos (`help`, `skills`, `projetos`, etc.).
- **🔧 Arquitetura Robusta:** O projeto é construído com React e TypeScript, garantindo um código bem estruturado, tipado e de fácil manutenção.

---

## 🛠️ Habilidades e Tecnologias Demonstradas

Este projeto é uma vitrine de diversas competências essenciais no desenvolvimento frontend moderno.

### **Core Frontend**

- **React:** Utilização extensiva de hooks (`useState`, `useEffect`, `useRef`, `useContext`) para criar uma aplicação reativa e componentizada.
- **TypeScript:** Aplicação de tipagem estática para garantir a robustez, escalabilidade e manutenibilidade do código.
- **HTML5 Semântico:** Estrutura de página bem definida para melhor acessibilidade e SEO.

### **Estilização e UI/UX**

- **Tailwind CSS:** Desenvolvimento rápido e consistente da UI com uma abordagem *utility-first*. O tema (cores, fontes, sombras) é totalmente customizado e preparado para o modo escuro.
- **Design System:** Definição de um sistema de design coeso, com paletas de cores, tipografia e espaçamentos consistentes para os temas claro e escuro.
- **UI/UX Focado no Usuário:** Atenção aos detalhes, micro-interações, hierarquia visual clara e uma navegação intuitiva para proporcionar a melhor experiência possível.
- **Neumorfismo:** Uso sutil de sombras para criar uma interface tátil e moderna.

### **Animação e Interatividade**

- **Framer Motion:** Biblioteca de animação líder para React, utilizada para:
  - Animações de entrada (`initial`, `animate`).
  - Animações baseadas em scroll (`useScroll`, `useTransform`).
  - Animações de hover e tap (`whileHover`, `whileTap`).
  - Gerenciamento de presença de componentes (`AnimatePresence`).

### **Gerenciamento de Estado**

- **React Context API:** Gerenciamento de estado global de forma eficiente para o tema da aplicação, evitando *prop drilling*.
- **State Lifting:** Padrão utilizado para compartilhar e controlar o estado entre componentes (ex: abrir o modal de projeto a partir do clique no card).

### **Acessibilidade (A11y)**

- **Atributos ARIA:** Uso de `aria-label`, `aria-invalid`, `aria-describedby` para tornar os componentes, especialmente formulários, mais acessíveis para leitores de tela.
- **Navegação via Teclado:** A aplicação é navegável utilizando o teclado.
- **Contraste de Cores:** As cores foram escolhidas para garantir boa legibilidade em ambos os temas.

### **Boas Práticas de Desenvolvimento**

- **Estrutura de Projeto Modular:** Código organizado em uma estrutura de pastas lógica (`components`, `contexts`, `constants`, `types`), facilitando a localização e manutenção de arquivos.
- **Componentes Reutilizáveis:** Criação de componentes genéricos (`SectionWrapper`, `ProjectCard`) para evitar repetição de código e manter a consistência.
- **Otimização de Performance:**
  - Script de tema inline no `<head>` para evitar FOUC (*Flash of Unstyled Content*).
  - Animações otimizadas com `will-change` e `transform`.
  - Carregamento assíncrono de fontes.

---

## 🚀 Como Executar Localmente

Para executar este projeto em sua máquina, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/renatopedrosal/renatopedrosal-dev.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd seu-repositorio
   ```

3. **Instale as dependências:**
   (Assumindo que você está usando npm)
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
