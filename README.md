
# Projeto de Criptomoeda
![Customer Insights](https://github.com/user-attachments/assets/fe3926da-cab4-409d-b9b9-0bb18f146823)

Este projeto é uma aplicação de criptomoeda que permite aos usuários visualizar informações sobre diferentes criptomoedas, incluindo preços, capitalização de mercado e gráficos históricos. A aplicação utiliza a API CoinGecko para obter dados em tempo real e exibir essas informações de forma intuitiva.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Uso](#uso)
- [APIs Utilizadas](#apis-utilizadas)
  - [CoinGecko API](#coingecko-api)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto utiliza React para a interface do usuário e axios para realizar requisições HTTP à API CoinGecko. Ele permite que os usuários vejam uma lista de criptomoedas, detalhes de uma moeda específica, gráficos históricos e tendências atuais do mercado.

## Instalação

Para começar a usar o projeto, siga estas etapas:

1. **Clone o repositório:**

   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Navegue até o diretório do projeto:**

   ```
   cd seu-repositorio
   ```
3. **Instale as dependências:**

   ```
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**

   ```
   npm start
   ```

   O projeto estará disponível em `http://localhost:3000`.

## Uso

A aplicação possui várias funcionalidades principais:

- **Lista de Criptomoedas**: Exibe uma lista de criptomoedas com informações como ranking, nome, símbolo, preço, capitalização de mercado e volume.
- **Detalhes da Moeda**: Fornece informações detalhadas sobre uma moeda específica, incluindo histórico de preços.
- **Gráficos Históricos**: Mostra gráficos de preços históricos para uma moeda selecionada.
- **Tendências Atuais**: Exibe as criptomoedas com maior alta nas últimas 24 horas.

## APIs Utilizadas

### CoinGecko API

A aplicação utiliza a API CoinGecko para obter dados sobre criptomoedas. Os principais endpoints utilizados são:

- **Lista de Criptomoedas**: Obtém uma lista de moedas com base em parâmetros como moeda base, ordem e número de itens por página.
- **Detalhes da Moeda**: Obtém detalhes sobre uma moeda específica pelo seu ID.
- **Gráficos Históricos**: Obtém dados de gráfico histórico para uma moeda específica.
- **Tendências Atuais**: Obtém uma lista de moedas ordenadas por porcentagem de mudança de preço nas últimas 24 horas.

## Estrutura do Projeto

A estrutura do projeto segue o padrão típico de uma aplicação React com a adição de módulos para a comunicação com a API e componentes visuais.

- **`src/`**: Diretório principal do código fonte.
  - **`components/`**: Componentes React reutilizáveis.
  - **`services/`**: Módulos para comunicação com a API.
  - **`pages/`**: Páginas principais da aplicação.
  - **`assets/`**: Imagens e outros recursos estáticos.
  - **`App.js`**: Componente principal da aplicação.
  - **`index.js`**: Ponto de entrada da aplicação.

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
