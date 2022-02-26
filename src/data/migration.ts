import connection from "../connection";
import estudantes from './estudantes.json';
import docentes from './docentes.json';
import turma from './turma.json'

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

const createTable = () => connection
    .raw(`
    
        CREATE TABLE IF NOT EXISTS Estudantes (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            data_nascimento VARCHAR(255),
            turma_id VARCHAR(255),
            hobbies VARCHAR(255)
        );
        
        CREATE TABLE IF NOT EXISTS  Turma (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            docentes VARCHAR(255),
            estudantes VARCHAR(255),
            modulo VARCHAR(255) 
        )`)

.then(() => {console.log("Tabela criada")})
.catch(printError)

const insertEstudantes = () => connection("Estudantes")
.insert(estudantes)
.then(() => {console.log("Estudante criado")})
.catch(printError)

const closeConnection = () => {connection.destroy()}

createTable()
.then(insertEstudantes)
.finally(closeConnection)

