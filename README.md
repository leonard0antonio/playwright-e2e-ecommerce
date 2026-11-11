# Playwright E2E Ecommerce

> **Status: em desenvolvimento.** Este repositório ainda não contém uma suíte completa de e-commerce. No momento, reúne testes E2E de prática com Playwright em páginas de demonstração; o escopo será ampliado ao longo do projeto.

## Sobre o projeto

Projeto de automação de testes end-to-end usando **Playwright Test** e **TypeScript**. Os testes atuais exercitam interações comuns em aplicações web no site [The Internet](https://the-internet.herokuapp.com/).

## Cenários implementados

Os testes ficam em `tests/elementos-complexos/`:

- **Drag and drop:** arrastar a coluna A para a coluna B.
- **Hovers:** revelar informações ao passar o mouse sobre um perfil.
- **Iframes:** preencher e validar o conteúdo de um editor dentro de um iframe.
- **Alertas JavaScript:** aceitar um alerta de confirmação e validar o resultado.
- **Upload:** enviar um arquivo criado em memória e validar a confirmação.
- **Nova janela:** abrir uma nova aba e validar seu conteúdo.

## Tecnologias

- Node.js e npm
- TypeScript
- Playwright Test

## Pré-requisitos

- Node.js em uma versão compatível com as dependências do projeto.
- npm.

## Como executar

Instale as dependências e os navegadores usados pelo Playwright:

```bash
npm ci
npx playwright install
```

Execute todos os testes em todos os navegadores configurados (Chromium, Firefox e WebKit):

```bash
npx playwright test
```

Para executar somente no Chromium:

```bash
npx playwright test --project=chromium
```

Para executar um arquivo específico:

```bash
npx playwright test tests/elementos-complexos/drag_and_drop.spec.ts
```

## Relatório de execução

O Playwright gera um relatório HTML em `playwright-report/`. Depois de uma execução, abra-o com:

```bash
npx playwright show-report
```

Os testes acessam um site externo, portanto a execução depende de conexão com a internet e da disponibilidade de `the-internet.herokuapp.com`.

## Estrutura atual

```text
.
├── tests/
│   └── elementos-complexos/
│       ├── drag_and_drop.spec.ts
│       ├── hovers.spec.ts
│       ├── iframe.spec.ts
│       ├── javascript_alerts.spec.ts
│       ├── upload.spec.ts
│       └── windows.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Próximos passos

A suíte está em construção. A cobertura de fluxos de e-commerce e a organização de novos cenários serão adicionadas conforme o projeto evoluir.
