<p align="center">
  <a href="https://aluiziodeveloper.com.br/">
    <img alt="Aluizio Developer" src="https://aluiziodeveloper.com.br/assets/img/icon.png" width="200" />
  </a>
</p>
<h2 align="center">
Informação sobre tecnologia, dicas, tutoriais, mini-cursos e muito mais.
</h2>

## API Restful com Node.js, Express, Typescript, TypeORM, SQLite, ...

Seja muito bem-vindo e bem-vinda ao curso de criação de aplicativos para dispositivos móveis com React Native, Expo Bare Workflow, Typescript, Styled-Components, React Hook Form e várias outras bibliotecas.

Acesse a [página do curso na Udemy](https://www.udemy.com/course/react-native-typescript/?referralCode=57DB748A99E85CBD3D6F) para conferir o conteúdo.

Neste repositório encontra-se o código da API Back-end desenvolvida com Node.js, que será consumida no curso de desenvolvimento de App Mobile com React Native.

## Rodando a API Node.js no seu PC

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```bash
git clone https://github.com/aluiziodeveloper/api-node-devprofile.git
```

Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

```bash
cd api-node-devprofile

npm install

# OU

yarn
```

> É preciso criar o arquivo de variáveis de ambiente `.env`, copiando o arquivo de exemplo `.env.example` e preenchendo as informações de cada variável de acordo com o seu ambiente de desenvolvimento.

O projeto está configurado para usar o banco de dados SQLite. Execute o script para rodar as migrações e criar as tabelas e toda a estrutura do banco de dados:

```bash
npm run typeorm migration:run

# OU

yarn typeorm migration:run
```

Por fim, execute a aplicação com o comando `npm run dev` ou `yarn dev`. O servidor estará em execução no endereço `http://localhost:3333`.

## Redes Sociais

[Site Aluizio Developer](https://aluiziodeveloper.com.br)

[YouTube](https://www.youtube.com/jorgealuizio)

[Servidor no Discord](https://discord.gg/3J87BMz5fD)

[LinkedIn](https://www.linkedin.com/in/jorgealuizio/)
