import { Usuarios } from "./Usuarios";

export class Estudantes extends Usuarios{
    hobbies: Hobbies[];

    constructor(id:string, nome:string, email:string, data_nasc:string, turma_id:string, hobbies:Hobbies[]){
        super(id, nome, email, data_nasc, turma_id)
        this.hobbies = hobbies;
    }
    
}