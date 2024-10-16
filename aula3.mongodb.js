//use("Nome Banco")
use("fecinavidb")
db.dropDatabase("fecinavidb")
use("fecinavidb")


db.createCollection("trabalhos");
db.trabalhos.insertMany([
    {
    título: "Cyberbullying no IFMS",
    área: "humanas",
    autores:[
        {
            nome: "Clara",
            email: "clara.larsen@estudante.ifms.edu.br",
        },
    ],
    dataEnvio: "10/08/2024",
    avaliadores:[
    {
          cpf:"08637875173",
          nome: "Gabriela",
          nota: "8",
    },
    ],
    mediaAvaliacoes:"8"
 },
 {
    título: "bliblioteca autonôma",
    área: "humanas",
    autores:[
        {
            nome: "Katiely",
            email: "Katiely.santos@estudante.ifms.edu.br",
        },
    ],
    dataEnvio: "05/07/2024",
    avaliadores:[
    {
          cpf:"03893310150",
          nome: "Edy",
          nota: "10",
    },
    ],
    mediaAvaliacoes: "10"
 },
 {
    título: "Mulheres em ação",
    área: "humanas",
    autores:[
        {
            nome: "Nicolle",
            email: "Nicolle.ferreira@estudante.ifms.edu.br",
        },
    ],
    dataEnvio: "09/08/2023",
    avaliadores:[
    {
          cpf:"07003553163",
          nome: "Jozil",
          nota: "10",
    },
    ],
    mediaAvaliacoes:"10"
 },
 {
    título: "Filmes para o aprendizado",
    área: "humanas",
    autores:[
        {
            nome: "Narriane",
            email: "Narriane.aparecida@estudante.ifms.edu.br",
        },
    ],
    dataEnvio: "20/08/2024",
    avaliadores:[
    {
          cpf:"08655575180",
          nome: "Tenani",
          nota: "9",
    },
    ],
    mediaAvaliacoes: "9"
 },
])
db.trabalhos.insertOne({
    título: "Plantas Medicinais",
    área: "Biológicas",
    autores:[
        {
            nome: "Ana Luiza",
            email: "Ana.silva@estudante.ifms.edu.br",
        },
    ],
    dataEnvio: "30/09/2024",
    avaliadores:[
    {
          cpf:"08658575190",
          nome: "Terenciani",
          nota: "7",
    },
    ],
    mediaAvaliacoes: "7"
})
db.trabalhos.find({area: "Biológicas"}).pretty()
db.trabalhos.find().pretty()