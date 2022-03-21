export interface Supervisor{


  id_colaborador?: any;
  cpf: string;
  cidade: string;
  email: string;
  nome: string;
  foto: string;
  senha: string;
  id_setor: string;
  role: [{
    id_role: any,
    nome_role: any
  }];

}
