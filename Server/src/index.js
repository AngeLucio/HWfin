const express = require("express");
const router = require('./routers/index');
const { conn } = require("./DB_connection");


//middlewares 
const server = express();
const PORT = 3001;

//es un middleware
//cors
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty" , router);

conn.sync({force: true}).then(()=>{
  server.listen(PORT, () => {
    console.log(`Server listen into ${PORT}`);
  });
});

