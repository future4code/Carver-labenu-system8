import { Usuarios } from "./Usuarios";

export class Docentes extends Usuarios{
    especialidades: especialidades[];

    constructor(id:string, nome:string, email:string, data_nasc:string, turma_id:string, especialidades:especialidades[]){
        super(id, nome, email, data_nasc, turma_id)
        this.especialidades = especialidades;
    }
    
}