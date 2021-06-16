# Estudos Cypress
Repositório para os meus estudos com Cypress

## Inicialização
- Criar um projeto node:

    `npm init --yes`

- Instalar o Cypress:

    `npm install -D cypress`

- Abrir o Cypres

    `npx cypress open`

## Estrutura
- **cypress.json**: Arquivo de configurações
- **cypress**: Pasta Padrão
    - **fixtures**: arquivos de mocks
    - **integration**: os arquivos de testes
    - **plugins**: instalação e config de plugins
    - **support**: arquivos de suporte aos testes. ex.: utilitários, comandos customizados, etc.
