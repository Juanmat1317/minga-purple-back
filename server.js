import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import indexRouter from "./router/index.js"
import cors from 'cors'
import morgan from 'morgan';

const server = express(); // se crea el servidor
const PORT = process.env.PORT || 8080;// se define el puerto
const ready = () => console.log('server ready on port: ' + PORT);

//middlewarwes
server.use(express.json())                              //permite entradas y también trabajar con formato json
server.use(express.urlencoded({ extended:true }))       //permite capturar consultas complejas
server.use(cors())                                      //para permitir orígenes cruzados (front/back)
server.use(morgan('dev'))                               ////para registrar peticiones HTTP

//router + server
server.use("/api",indexRouter)
server.listen(PORT,ready)// iniciar servidor



// console.log(process.env.NODE_ENV);