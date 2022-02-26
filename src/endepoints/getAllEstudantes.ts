import { Request, Response } from "express";
import connection from "../connection";
import {estudantes} from '../types'

export async function getAllEstudantes(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const result = await connection("Estudantes")

        const estudantes = result.map(toEstudantes)

        res.status(200).send(estudantes)
    
    }catch (error) {
        res.status(500).send("Internal server error")
    }
}

const toEstudantes = (input: any): estudantes => {
    return{
        id: input.id,
        name: input.name,
        email: input.email,
        data_nascimento: input.data_nascimento,
        turma_id: input.turma_id,
        hobbies: input.hobbies
    }
}