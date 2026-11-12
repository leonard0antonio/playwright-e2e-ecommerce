# Playwright E2E Ecommerce

[![Playwright](https://img.shields.io/badge/Playwright-Test-45BA4B?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

> Projeto concluído como estudo/prática de automação E2E com Playwright. A suíte cobre interações web reais em páginas de demonstração e validações de UI, com foco em aprendizado e execução em múltiplos navegadores.

## Visão geral

Este repositório reúne testes end-to-end escritos com **Playwright Test** e **TypeScript**, executados contra o site de demonstração [The Internet](https://the-internet.herokuapp.com/). Os cenários cobrem interações comuns em aplicações web, como formularios, uploads, alertas, frames, dropdowns, janelas, hover, tabelas, geolocalização, login e elementos dinâmicos.

## Status do projeto

- ✅ suíte de testes em crescimento e funcionando;
- ✅ execução em Chromium, Firefox e WebKit;
- ✅ relatórios HTML gerados pelo Playwright;
- ✅ organização por categorias de elementos e cenários;
- ⚠️ ainda não representa um e-commerce completo; o objetivo foi praticar automação de interface web.

## O que foi entregue

A base final do projeto inclui testes em diversas áreas:

- formulários e validações de interações;
- dropdowns, checkboxes e auto-waiting;
- alertas JavaScript e autenticação básica;
- drag and drop, iframes, window handling e hover;
- upload, download e mensagens de notificação;
- tabelas, Shadow DOM, geolocalização e scroll infinito;
- execução cross-browser com configuração do Playwright.

## Estrutura de testes

Os testes estão organizados em pastas temáticas dentro de `tests/`:

- `elementos -  Dropdowns, checkboxes e auto-waiting/`
- `elementos - Alertas, iframes e drag and drop/`
- `elementos - Downloads, login por formulário, elementos dinâmicos e exit intent/`
- `elementos - Extração de tabelas, Basic Auth e Shadow DOM/`
- `elementos - Interceptação de sensores, JavaScript, frames e locadores relativos/`
- `elementos - Interações de mouse e teclado, e controle de sliders/`
- `elementos - Upload de arquivos, múltiplas abas e hover/`

## Tecnologias

- Node.js
- npm
- TypeScript
- Playwright Test

## Pré-requisitos

- Node.js 18 ou superior
- npm instalado
- acesso à internet para as páginas de demonstração utilizadas nos testes

## Instalação

```bash
npm install
npx playwright install
```

Se o ambiente precisar dos binários do sistema para os navegadores:

```bash
npx playwright install --with-deps
```

## Execução

Executar todos os testes:

```bash
npx playwright test
```

Executar somente no Chromium:

```bash
npx playwright test --project=chromium
```

Executar somente no Firefox:

```bash
npx playwright test --project=firefox
```

Executar um arquivo específico:

```bash
npx playwright test "tests/elementos - Alertas, iframes e drag and drop/drag_and_drop.spec.ts"
```

Executar por termo no nome do teste:

```bash
npx playwright test --grep "login"
```

## Relatório

O Playwright gera relatório HTML automaticamente. Para abrir localmente:

```bash
npx playwright show-report
```

## Configuração do projeto

A configuração principal está em `playwright.config.ts` e inclui:

- `testDir: './tests'`
- execução em paralelo
- suporte a Chromium, Firefox e WebKit
- coleta de trace em falhas de retry
- relatório HTML

## Estrutura do repositório

```text
.
├── .github/
├── tests/
│   ├── elementos -  Dropdowns, checkboxes e auto-waiting/
│   ├── elementos - Alertas, iframes e drag and drop/
│   ├── elementos - Downloads, login por formulário, elementos dinâmicos e exit intent/
│   ├── elementos - Extração de tabelas, Basic Auth e Shadow DOM/
│   ├── elementos - Interceptação de sensores, JavaScript, frames e locadores relativos/
│   ├── elementos - Interações de mouse e teclado, e controle de sliders/
│   ├── elementos - Upload de arquivos, múltiplas abas e hover/
│   └── ...
├── playwright-report/
├── test-results/
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── ...
```

## O que ainda não faz parte do projeto

Mesmo finalizado como estudo de automação, este repositório ainda não contempla um fluxo completo de e-commerce, como:

- catálogo de produtos;
- filtros de busca;
- carrinho e checkout;
- autenticação real de usuário;
- integração com API/backend;
- page objects avançados e fixtures reutilizáveis;
- pipeline de CI/CD automatizado.

Esses itens são os próximos passos naturais para transformar o projeto em uma suíte de testes de e-commerce real.

## Conclusão

Este projeto conclui a etapa de prática de automação em front-end com Playwright, cobrindo uma grande variedade de cenários e demonstrando o uso de locators, esperas, ações no navegador e validações de comportamento. A base está pronta para ser expandida para um ambiente de e-commerce real ou para uma aplicação web própria.
