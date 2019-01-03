new Vue({
  el: "#app", // elemento pai do aplicativo
  data: {
    // data aonde estaram as variáveis do vue
    mensagem: "Olá VueJS",
    nome: "",
    estudante: "Fernando",
    curso: "VueJS",
    docs: "http://vuejs.org",
    teste: "asaTeste",
    test: "teste a ser escrito",
    cliques: 0
  },
  methods: {
    estudante: function (event) {
      return this.estudante;
    },

    mudarNome: function (event) {
      //acessa o objeto pai
      this.nome = event.target.value;
    },

    incrementar: function () {
      this.cliques++;
    },

    onClick: function (event) {
      console.log(`Botão ${event.button} pressionado.`);
    }
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    cores: ["vermelho", "verde", "amarelo", "azul"]
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    status: true,
    texto: true,
    titulo: "Eu estou aqui!"
  }
});

var app3b = new Vue({
  el: "#app3b",
  data: {
    usuario: {
      // variável que vira objeto
      id: 4,
      nome: "Rual Soarez",
      profissão: "Ator"
    }
  }
});

var app4 = new Vue({
  el: "#app4",
  data: {
    linguagens: [
      // array de objetos
      { nome: "js" },
      { nome: "php" },
      { nome: "c#" },
      { nome: "java" },
      { nome: "python" }
    ]
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    nome: "",
    telefone: "",
    novidades: "",
    interesses: [],
    conheceu: ""
  }
});

var app6 = new Vue({
  el: "#app6",
  data: {
    titulo: "Imagem",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbglh-j-1UvJ_6E9_27KyrJ4iDqMG3ny00YDuOfQfbflOq_gPtg",
    title: "Vuejs is awesome!"
  }
});

var app7 = new Vue({
  el: "#app7",
  data: {
    titulo: "Class e Style com v-bind",
    btnClassEnviar: "btn-primary small",
    btnClassLimpar: "btn-default lg"
  }
});

var app7b = new Vue({
  el: "#app7b",
  data: {
    titulo: "Class e Style com v-bind",
    btnClassLimpar: {

    },

    btnClassEnviar: "btn-primary small",
  }
});

new Vue({
  el: "#app14",
  data: {
    name: "Fernando Leonetti",
  },

  methods: {
    getName: function () {
      this.name = 'Fernando';
      return this.name;
    }
  }
});

new Vue({
  el: "#app15",
  data: {
    curso: 'Curso <span style="color:red">VueJS</span>',
  }
});

new Vue({
  el: "#app16",
  data: {
    cliques: 0,
  },

  methods: {
    incrementar: function () {
      console.log(event);
      this.cliques++;
    },
  }
});

new Vue({
  el: "#app17",
  data: {
    x: 0,
    y: 0
  },

  methods: {
    atualizarCoordenadas: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});

new Vue({
  el: "#app18",
  data: {
    nome: "",
    nome2: ""
  },

  methods: {
    exibirNome: function (event) {
      this.nome = event.target.value;
    },

    exibirNome2: function (texto, event) {
      this.nome2 = texto + event.target.value;
    }
  }
});



