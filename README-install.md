git init
npm init -y
npm i -D git-commit-msg-linter
npm cache clear --force (as vezes é necessário para limpar o cache)
npm i -D typescript @types/node

npm install --save-dev eslint@6 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@9 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript


** eslint: 
npm init @eslint/config
npm install eslint-config-standard
npm i --save-dev typescript @typescript-eslint/parser
npm i --save-dev @typescript-eslint/eslint-plugin