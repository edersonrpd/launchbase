const express = require("express"); //Configurando o express
const nunjucks = require("nunjucks"); //Template Engine

const server = express(); //Iniciando a função express

server.use(express.static('public')) //pasta dos arquivos estaticos
server.set("view engine", "njk");

nunjucks.configure("views", { express: server });

server.get("/", (req, res) => {
  return res.render("about");  //chamando o index.html
});

server.get("/portfolio", (req, res) => {
  return res.render("portfolio");  //chamando o index.html
});


//configurando porta de escuta 3000
server.listen(3000, () => {
  console.log("Servidor Iniciado");
  //porta do servidor e mensagem de sucesso
});
