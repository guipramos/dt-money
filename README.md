# DT Money

Este repositório é um **projeto de estudo em Angular**. O layout original é da [Rocketseat](https://www.rocketseat.com.br/); aqui ele é recriado na tela para praticar o framework.

DT Money é um dashboard de controle financeiro pessoal. Na interface você acompanha **entradas**, **saídas** e o **saldo total**. O código usa componentes standalone, SCSS e TypeScript, gerados com o [Angular CLI](https://github.com/angular/angular-cli) 20.3.

## O que já existe na tela

- Cabeçalho com logo e botão **Nova transação**
- Três cards de resumo: Entradas, Saídas e Total
- Valores em Real (R$), no layout em container
- Componentes separados: `header`, `botao` e `card`

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (instalado junto com o Node)

Na pasta `dt-money`, instale as dependências:

```bash
npm install
```

## Servidor de desenvolvimento

Sobe o app localmente. Qualquer alteração nos arquivos de origem recarrega o navegador sozinha:

```bash
ng serve
```

Abra `http://localhost:4200/`. O comando `npm start` faz a mesma coisa.

## Estrutura do código

Os arquivos da interface ficam em `src/app/`:

| Caminho | Função |
| --- | --- |
| `app.component` | Tela principal: junta o header e a lista de cards |
| `components/header` | Barra superior com logo e botão |
| `components/botao` | Botão **Nova transação** |
| `components/card` | Card de valor (entrada, saída ou total) |
| `models/card.model.ts` | Tipo `Card` e variante visual (`default` ou `total`) |

Imagens e logo estão em `src/assets` e `public/assets`.

## Gerar código (scaffolding)

O Angular CLI cria arquivos novos a partir de um comando. Para um componente:

```bash
ng generate component nome-do-componente
```

Outros geradores comuns: `directive`, `pipe`, `service`. Lista completa:

```bash
ng generate --help
```

## Build de produção

Compila o projeto e grava os artefatos em `dist/dt-money`. O build de produção minifica e otimiza o bundle:

```bash
ng build
```

Para recompilar a cada mudança, sem otimização de produção:

```bash
npm run watch
```

## Testes unitários

Roda os testes com [Karma](https://karma-runner.github.io) e Jasmine:

```bash
ng test
```

Os arquivos `*.spec.ts` ficam ao lado de cada componente. O Karma abre o Chrome e reexecuta os testes quando você salva um arquivo.

## Testes end-to-end

O Angular CLI **não** inclui um framework de e2e por padrão. Se precisar de testes de fluxo no navegador, escolha uma ferramenta (Cypress, Playwright ou similar) e configure à parte.

O comando abaixo só funciona depois dessa configuração:

```bash
ng e2e
```

## Referências

- [Angular CLI — visão geral e comandos](https://angular.dev/tools/cli)
- [Documentação do Angular](https://angular.dev)
- [Rocketseat](https://www.rocketseat.com.br/)
