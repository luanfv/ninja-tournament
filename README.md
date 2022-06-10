<section align="center">
  <img src="./assets/icon.png" width="80" height="80" />

  <h3 align="center">Ninja Tournament</h3>
  
  <div align="center">
    <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white" />
    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
    <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" />
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

Aplicativo criado com **React Native + TypeScript + Firebase** para simular um torneio ninja do universo de Naruto Classico com a pontuação dos ninjas baseado nos tazos de 2009 da Elma. Através do aplicativo é possível iniciar um torneio com 8 participantes onde irá acontecer três rodadas para descobrir o vencedor, mas além disso, é possível realizar duelos e visualizar o histórico global de torneios.

Importante salientar que **Ninja Tournament** não possui o cálculo de pontos baseado em quem tiver mais vence, mas sim em um sistema de porcentagem, onde quem tiver mais pontos possui mais chances de vitória, sendo assim, os torneios se tornam dinâmicos.


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
Obs: Os passos de `Pré-requisitos` e `Configuração do firebase` só precisam ser executados na primeira vez que for rodar o projeto.

### Pré-requisitos

Tenha instalado e configurado em sua máquina as seguintes ferramentas: 

- [Node.js](https://nodejs.org/en/);
- [Yarn](https://yarnpkg.com/);
- [Android Studio](https://developer.android.com/studio) para utilizar o emulador do Android;
- [XCode](https://developer.apple.com/xcode/) para utilizar o emulador do iOS;
  
Obs: Caso não tenha experiência com a configuração de ambiente do React Native, [siga esta documentação](https://react-native.rocketseat.dev/).

### Configuração do firebase

É necessário fazer a configuração para conseguir conectar o projeto com o firebase.
Obs: Você pode fazer apenas a configuração da plataforma que irá utilizar.

#### Android

1. Entre na pasta `android/app` e crie um arquivo chamado `google-services.json` a partir do `google-services.example.json`.

2. Configure o json com as informações do seu projeto no firebase. 
Caso não tenha um projeto criado, crie a partir do [firebase](https://firebase.google.com/) e 
adicione o `google-services.json` no `android/app` 
conforme informa no [react-native-firebase](https://rnfirebase.io/#generating-android-credentials/).

Obs: Só é necessário fazer a configuração que está em `Generating Android credentials`, o [react-native-firebase](https://rnfirebase.io/).

#### iOS

1. Entre na past `ios` e crie um arquivo chamado `GoogleService-Info.plist` a partir do `GoogleService-Info.example.plist`.

2. Configure o json com as informações do seu projeto no firebase. 
Caso não tenha um projeto criado, crie a partir do [firebase](https://firebase.google.com/) e 
adicione o `GoogleService-Info.plist` no `ios` 
conforme informa no [react-native-firebase](https://rnfirebase.io/#generating-ios-credentials).

Obs: Só é necessário fazer a configuração que está em `Generating iOS credentials`, o [react-native-firebase](https://rnfirebase.io/).

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
