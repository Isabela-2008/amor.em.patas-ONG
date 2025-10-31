# 🐾 ONG Amor em Patas

Site desenvolvido como parte da **Experiência Prática – Linguagem de Estilo: Construindo Interfaces Web Modernas com CSS3**, com o objetivo de aplicar técnicas avançadas de **estilização, layout responsivo e design system**.

---

## 🎯 Objetivo do Projeto
O projeto tem como foco a criação de uma **interface web moderna, acessível e responsiva** para a ONG fictícia **Amor em Patas**, que promove a adoção responsável de animais.  
A aplicação demonstra o uso de **CSS3**, **Flexbox**, **Grid**, e **JavaScript** para navegação interativa e feedback visual.

---

## 🧱 Estrutura do Projeto

/ONG-Amor-em-Patas
│
├── /css
│ ├── variables.css # Design System (cores, tipografia e espaçamentos)
│ ├── layout.css # Sistema de grid, flexbox e breakpoints
│ ├── components.css # Botões, modais, toasts, badges e formulários
│ └── style.css # Arquivo mestre que importa os anteriores
│
├── /js
│ └── scripts.js # Lógica do menu, feedback visual e máscaras
│
├── /img # Imagens utilizadas no site
│
├── index.html # Página inicial
├── projetos.html # Galeria de projetos e campanhas
├── cadastro.html # Formulário de cadastro de voluntários
├── README.md # Documento de explicação e uso do projeto
└── .gitignore # Arquivos ignorados no GitHub

yaml
Copiar código

---

## 💅 Sistema de Design

- **🎨 Cores (8 no total):**
  - Primárias: `#ffc2d1`, `#ff8fab`
  - Secundárias: `#ffe5ec`, `#ffd6e0`
  - Neutras: `#fff8f9`, `#333`, `#777`, `#f5f5f5`

- **🔠 Tipografia:**
  - Fonte: *Poppins*, sans-serif  
  - Escala: 12px, 14px, 16px, 20px, 28px, 36px

- **📏 Espaçamento modular:**
  - 8px, 16px, 24px, 32px, 48px, 64px

---

## 📱 Responsividade

O site utiliza um **sistema de 12 colunas com CSS Grid** e **5 breakpoints principais**:

| Dispositivo | Largura Máxima | Exemplo de Ajuste |
|--------------|----------------|-------------------|
| Extra Large  | ≥ 1200px       | Layout completo em 12 colunas |
| Large        | ≤ 1200px       | Reduz espaçamentos |
| Medium       | ≤ 992px        | Galeria com 2 colunas |
| Small        | ≤ 768px        | Menu hambúrguer ativo |
| Extra Small  | ≤ 576px        | Layout empilhado |

---

## 🧭 Funcionalidades Principais

- ✅ **Menu principal responsivo** com submenu dropdown  
- ✅ **Menu hambúrguer** para navegação mobile  
- ✅ **Sistema de cards responsivos**  
- ✅ **Formulário com máscaras (CPF, telefone, CEP)**  
- ✅ **Feedback visual com modal e toast**  
- ✅ **Badges coloridas para categorização de projetos**  
- ✅ **Validação visual de campos obrigatórios**  
- ✅ **Layout baseado em grid 12 colunas e Flexbox**

---

## ⚙️ Tecnologias Utilizadas

- HTML5  
- CSS3 (Grid, Flexbox, variáveis customizadas)  
- JavaScript (DOM, eventos, interatividade)

---

## 🚀 Como Executar

1. Baixe o projeto ou clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/ONG-Amor-em-Patas.git
Abra a pasta do projeto:

bash
Copiar código
cd ONG-Amor-em-Patas
Abra o arquivo index.html no navegador.
