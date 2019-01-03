#Vue

pode ser adotado incrementalmente
facul de integrar com biblioteca ou projetos existentes
pode ser usado para cruar sofisticadas multi ou sinple page application

acesspivel
versátil
performático
manutenível
testável

#Componentes reusáveis

Acessível = só precisa de html, css e js

Versátil = Ecossistema co adoção incremental, escala d uma simples biblioteca a um framework completo

Performático = 20kb min + gzip


#Diretivas Vue

{{ nome da propriedade }} = chaves 2 são chamado de interpolação de strings e dentro inserir o nome da propriedade.

v-on = é escuta eventos nativos do html ex, de click ou de mousemove

[//]: # (Comentário com md)

<!--
(Comentário com md)
-->

```sh
(code)
```

#Entendendo os templats do vue

A estrutura do vue ele cria uma estrutura como uma "cópia" gera a estrutura e depois para fazer a renderização ele exibe como html5 puro.

#Como a instância vue se conecta ao template?

apenas você pode instânciar o vue junto com o elelment (el:) que será renderizado já consegue conectar com os elementos do vue.

```sh
new Vue({
  el: "#app", // elemento pai do aplicativo
  data: {
```

#Data Binding e atributos

Ao inv~es de usar {{ docs}} usar dentro da tag <a> por exemplo

usar o v-bind:href="" escolhendo o atributo a href e monitora-lo.

v-bind:href="docs"
v-bind:title="Teste"

#Desabilitando novas renderizações com v-once

v-once só renderiza uma vez ele desabilita as outras renderizações.
ela otimiza o desenpenho da aplicação em novas renderizações.

#Exibindo html puro com v-html

Internpreta o html puro dentro de uma variável. 

#manipulando eventos com v-bind 
Pegar os valores da instancia viu para levar para o template

#manipulando eventos com v-on 
Ela pega algo do template e leva para instancia vue para manipular

#Entendendo o objeto Event
prorpiedade de envetos para manipulação com javascript
links de referência:
  https://developer.mozilla.org/en-US/docs/Web/Events
  https://developer.mozilla.org/en-US/docs/Web/API/Event


#Passando seus próprios argumentos junto com o evento


