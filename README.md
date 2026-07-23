# 🚀 SocialFlow

<p align="center">
  <strong>Uma plataforma completa para gerenciamento de redes sociais, clientes, posts e agendamentos.</strong>
</p>

<p align="center">
  Construído com React, TypeScript, Node.js, Express, Prisma e PostgreSQL.
</p>

---

## 📌 Sobre o Projeto

O **SocialFlow** é uma aplicação SaaS criada para facilitar o gerenciamento de redes sociais para profissionais, agências e criadores de conteúdo.

A plataforma permite organizar clientes, planejar conteúdos, acompanhar publicações e controlar um calendário editorial completo em um único lugar.

O projeto foi desenvolvido com foco em:

- Arquitetura escalável
- Código organizado
- Boas práticas de desenvolvimento
- Separação entre Frontend e Backend
- Experiência profissional de usuário

---

# 🎯 Objetivo

Criar uma ferramenta semelhante às plataformas utilizadas por agências de marketing digital, permitindo:

✅ Gerenciar clientes  
✅ Criar e organizar posts  
✅ Planejar conteúdos  
✅ Controlar calendário editorial  
✅ Visualizar métricas  
✅ Centralizar arquivos e informações  

---

# 🏗️ Arquitetura do Projeto

             Usuário

                |
                ↓

      React + TypeScript
         (Frontend)

                |
                ↓

          Axios API

                |
                ↓

      Node.js + Express
         (Backend)

                |
                ↓

        Prisma ORM

                |
                ↓

      PostgreSQL Database

---

# 🛠️ Tecnologias Utilizadas

## Frontend

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🧭 React Router DOM
- 🔥 Context API
- 📅 FullCalendar
- 🔗 Axios
- 🎯 Lucide React


## Backend

- 🟢 Node.js
- 🚂 Express
- 🔐 JWT Authentication
- 🗄️ Prisma ORM
- 🐘 PostgreSQL


---

# ✨ Funcionalidades

## 🔐 Autenticação

- Login de usuários
- Geração de token JWT
- Rotas protegidas
- Controle de acesso


---

## 👥 Clientes

CRUD completo:

- Criar clientes
- Listar clientes
- Editar informações
- Remover clientes


Informações:

- Empresa
- Instagram
- Nicho
- Dados personalizados


---

## 📝 Posts

Sistema de gerenciamento de conteúdos:

- Criar posts
- Editar posts
- Excluir posts
- Associar cliente
- Controle de status


---

## 📅 Calendário Editorial

Integração com FullCalendar:

- Visualização mensal
- Criação de eventos
- Edição de agendamentos
- Exclusão de eventos
- Organização por datas


---

## 📊 Dashboard

Painel administrativo contendo:

- Total de clientes
- Posts agendados
- Indicadores
- Métricas


---

## 🎨 Interface

Recursos:

- Layout moderno
- Sidebar profissional
- Tema escuro
- Componentes reutilizáveis
- Design responsivo


---

# 📂 Estrutura do Projeto

SocialFlow

├── frontend
│
│ ├── src
│ │
│ ├── components
│ ├── pages
│ ├── context
│ ├── services
│ └── routes
│

├── backend
│
│ ├── src
│ │
│ ├── controllers
│ ├── routes
│ ├── middleware
│ ├── prisma
│ └── server.ts


---

# 🚀 Instalação

## Clone o projeto

```bash
git clone https://github.com/SEU-USUARIO/socialflow.git
