import { Request, Response } from "express";
import connection from "../connection";
import {turma} from '../types'

export async function getAllTurma(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const result = await connection("Turma")

        const turma = result.map(toTurma)

        res.status(200).send(turma)
    
    }catch (error) {
        res.status(500).send("Internal server error")
    }
}

const toTurma = (input: any): turma => {
    return{
        id: input.id,
        name: input.name,
        docentes: input.docentes,
        estudantes: input.estudantes,
        modulo: input.modulo 
    }
}