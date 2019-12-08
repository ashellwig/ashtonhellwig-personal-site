# Ashton Hellwig's Personal Site

[![Netlify Status][Netlify]](https://app.netlify.com/sites/ashtonhellwig/deploys)

## Development Usage

The following are instructions for developing on this website/application
locally.

### Local Project Development

#### *(Optional)* Development Environment

The following extensions are recommended for use with Visual Studio Code:

* **Theme**
  1. *Editor Font*: [FiraCode]
  2. *Color Theme*: [One Dark Pro]
  3. *Icon Theme*: [VS Code Icons]

* **Extensions**
  1. *Syntax*: [Babel JavaScript], [Vetur]
  2. *Helpers*: [NPM], [NPM Intellisense], [Markdown All-in-One]
  3. *Linting*: [ESLint], [MarkdownLint]

#### Clone Application and Install Dependencies

```bash
git clone https://github.com/ashellwig/ashtonhellwig-personal-site.git
cd ashtonhellwig-personal-site
yarn
```

### Development Scripts

```bash
# All-in-One Commands
yarn run start         # Serves client in development mode with netlify server.
yarn run build         # Compiles and minifies **all** for production.

# Individual Commands
yarn run build:client  # Compiles and minifies client side for production.
yarn run build:server  # Compiles and minifies server side for production.
yarn run start:client  # Runs client in development (debugging) mode.
yarn run start:server  # Starts `netlify-lambda` server.
```

[Babel JavaScript]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[FiraCode]: https://github.com/tonsky/FiraCode
[Netlify]: https://api.netlify.com/api/v1/badges/5c90fcfb-22af-43b7-9146-554da1df5e97/deploy-status
[NPM]: https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script
[NPM Intellisense]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
[Markdown All-in-One]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[MarkdownLint]: https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint
[One Dark Pro]: https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.material-theme
[Vetur]: https://marketplace.visualstudio.com/items?itemName=octref.vetur
[VS Code Icons]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icon