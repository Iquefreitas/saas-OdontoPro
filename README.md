# 🦷 SaaS OdontoPro

**SaaS OdontoPro** é uma aplicação moderna desenvolvida com **Next.js 15**, **Prisma ORM** e **Stripe**, voltada para gerenciamento de planos, assinaturas e funcionalidades de automação para clínicas odontológicas.

---

## 🚀 Tecnologias Principais

- **[Next.js 15](https://nextjs.org/)** — Framework React de alto desempenho para aplicações web modernas.  
- **[React 19](https://react.dev/)** — Biblioteca principal da interface do usuário.  
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e produtividade.  
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Estilização rápida e responsiva.  
- **[Shadcn/UI](https://ui.shadcn.com/)** — Componentes acessíveis e elegantes baseados em Radix.  
- **[Prisma ORM](https://www.prisma.io/)** — Mapeamento objeto-relacional para bancos de dados SQL.  
- **[NextAuth v5](https://authjs.dev/)** — Autenticação completa e segura.  
- **[Stripe](https://stripe.com/)** — Integração de pagamentos e assinaturas.  
- **[TanStack Query](https://tanstack.com/query/latest)** — Gerenciamento de cache e dados assíncronos.  
- **[Framer Motion](https://www.framer.com/motion/)** — Animações fluidas e modernas para React.  

---

## ⚙️ Funcionalidades Principais

- 🔐 Autenticação segura com **NextAuth** e **Prisma Adapter**  
- 💳 Integração com **Stripe** para cobrança e planos de assinatura  
- 📅 Agendamento e gerenciamento de lembretes com **date-fns** e **react-datepicker**  
- ☁️ Upload de imagens via **Cloudinary**  
- 📊 Gerenciamento de dados com **TanStack React Query**  
- 💅 Estilo responsivo com **Tailwind CSS** e **Shadcn/UI**  
- 🧩 Formulários com **React Hook Form** + **Zod** para validação  
- 🔔 Notificações com **Sonner**  

---

## 🧠 Estrutura do Projeto

saas-odontopro/
│
├── prisma/ # Esquema e migrações do banco de dados
├── src/
│ ├── app/ # Rotas e páginas (Next.js App Router)
│ ├── components/ # Componentes reutilizáveis da UI
│ ├── lib/ # Configurações e utilitários globais
│ ├── utils/ # Funções auxiliares
│ └── api/ # Endpoints internos (Stripe, Auth, etc)
│
├── public/ # Imagens e assets estáticos
├── .env # Variáveis de ambiente (não versionadas)
└── package.json

---

## 🧩 Scripts Disponíveis

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção e aplica as migrações do Prisma |
| `npm run start` | Inicia o servidor em modo produção |
| `npm run lint` | Executa o linter para verificar o código |
| `npm run stripe:listen` | Escuta eventos da Stripe e encaminha para o webhook local |
| `npm install` | Instala as dependências do projeto |

---

## 🧱 Configuração do Banco de Dados

O projeto utiliza **Prisma ORM**. Antes de rodar a aplicação, configure o `.env` com sua string de conexão:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/odontopro"

## Em seguida, gere o cliente Prisma e aplique as migrações:

npx prisma generate
npx prisma migrate deploy

## 💳 Integração com Stripe

Para o ambiente local, configure no .env:

STRIPE_SECRET_KEY="sua_chave_secreta"
STRIPE_WEBHOOK_SECRET="seu_webhook_secret"

E inicie o listener local:

npm run stripe:listen

📦 Deploy

O projeto pode ser hospedado facilmente em plataformas como Vercel, Railway, Render ou em uma VPS com Node.js e banco PostgreSQL/MySQL.

✨ Autor
Este projeto foi desenvolvido durante meus estudos no curso FullStack Sujeito Programador, como parte da minha jornada de aprendizado em desenvolvimento web moderno.

