<img src="https://build.appcenter.ms/v0.1/apps/ac6a0fe2-93b9-4897-9de4-f29bea7abac0/branches/master/badge" />

<section align="center">
  <img src="./assets/icon.png" width="80" height="80" />

  <h3 align="center">Torneio Shinobi</h3>

  <p align="center">
    Torneio shinobi do universo Naruto, aplicativo desenvolvido com React-Native + TypeScript
  </p>
  
  <div align="center">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"   />
    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"   />
    <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white"   />
  </div>
  
  <br />
  
  <div align="center">
    <a href="https://play.google.com/store/apps/details?id=com.narutoshuriken">
      <img src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"   />
    </a>
  </div>
</section>

<br />
<br />

<div align="center">
  <img src="./assets/presentation.gif" height="500" />
</div>

<br />
<br />


## SOBRE O PROJETO

Aplicativo criado com **React Native + TypeScript** para simular um torneio shinobi de Naruto Classico baseado nos tazos de 2009 da Elma. Para iniciar o torneio o usuário precisa selecionar 8 competidores e ordenar de forma que achar melhor, após fazer isso, haverá três rodadas diferentes para descobrir quem é o vencedor no final.

Importante salientar que Torneio Shinobi não possui o cálculo de pontos baseado em quem tiver mais vence, mas sim em um sistema de porcentagem, onde quem tiver mais pontos possui mais chances de vitória, sendo assim, os torneios se tornam dinâmicos.


## EXTENSÕES DO VSCODE

Para o desenvolvimento desse projeto é altamente recomendado que utilize o VSCode e as extensões abaixo:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [GitLens (opcional)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Color Highlight (opcional)](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)


## INICIANDO O PROJETO
Para executar o projeto em sua maquina siga os passos abaixo.

### Pré-requisitos

Tenha instalado e configurado em sua máquina as seguintes ferramentas: 
- [Node.js](https://nodejs.org/en/);
- [Yarn](https://yarnpkg.com/);
- [Android Studio](https://developer.android.com/studio) para utilizar o emulador do Android;
- [XCode](https://developer.apple.com/xcode/) para utilizar o emulador do iOS;

Caso não tenha experiência com a configuração de ambiente do React Native, [siga esta documentação](https://react-native.rocketseat.dev/).

### Comandos

Para executar os comandos abaixos você precisar estar na raiz do projeto.

#### Instalar as dependências
 ```sh
$ yarn
```

#### Iniciar o projeto no Android

1. Rode o projeto:
 ```sh
$ yarn start
```

2. Execute o projeto no emulador emulador:
 ```sh
$ yarn android
```

#### Iniciar o projeto no iOS

1. Instale as dependências nativas
 ```sh
$ cd ios && pod install && cd ..
```

2. Abra o arquivo `ios/NarutoShuriken.xcworkspace` do projeto no XCode e execute.


## PADRÃO DE COMMIT

1. Selecione suas alterações
2. Realize o commit:

```bash
  # Inicia o commit
  $ yarn commit
```

3. Subir para o repositório:

```bash
  # Sobe para o repositório
  $ git push
```
