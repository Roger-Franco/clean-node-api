git init
npm init -y
npm i -D git-commit-msg-linter => gera um hook por "trás dos panos" que valida a msg dos commits, nao admitindo msgs despadronizadas.
npm cache clear --force (as vezes é necessário para limpar o cache)
npm i -D typescript @types/node


** eslint: 
npm init @eslint/config
npm install eslint-config-standard
npm i --save-dev typescript @typescript-eslint/parser
npm i --save-dev @typescript-eslint/eslint-plugin

* se eu me esquecer de fazer um commit de um arquivo especifico, eu posso reutilizar o ultimo commit:
gitt add .
git commit --amend --no-edit

npm i -D husky
npm i -D lint-staged

npm i -D jest @types/jest ts-jest
jest --init

npm i ts-node-dev  => o meu terminal pediu pra instalar isso tbem

jest --clearCache => as vezes é necessário limpar o cash;

npm install -g npm-check 
npm-check -s -u => comando verifica se existem bibliotecas desatualizadas

https://github.com/rmanguinho/clean-ts-api
estudo => NodeJs, Typescript, TDD, Clean Architecture e SOLID: 6/1