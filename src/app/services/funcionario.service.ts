import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../components/models/funcionario-model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  localUrl: string = 'http://localhost:8080/empresa'


  constructor(private http: HttpClient) { }



  mostrarTodosOsFuncionarios():Observable<Funcionario>{

    const url = `${this.localUrl}/funcionario`
    return this.http.get<Funcionario>(url)

  }


  mostrarFuncionarioPeloCargo(id_cargo: string):Observable<Funcionario[]>{

    const url = `${this.localUrl}/funcionario/cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }


  mostrarFuncionario(id_funcionario: string):Observable<Funcionario>{

    const url = `${this.localUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }


  mostrarFuncionarioECargo():Observable<void>{

    const url = `${this.localUrl}/funcionario-cargo`
    return this.http.get<void>(url)
  }


  mostrarColaboradorERole():Observable<void>{

    const url = `${this.localUrl}/colaborador-role`
    return this.http.get<void>(url)
  }


  cadastrarFuncionario(funcionario: Funcionario, id_cargo: string):Observable<Funcionario>{

    const url = `${this.localUrl}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url, funcionario)
  }


  editarFuncionario(funcionario: Funcionario, id_cargo: string):Observable<void>{

    const url = `${this.localUrl}/funcionario/${funcionario.id_colaborador}/${id_cargo}`
    return this.http.put<void>(url, funcionario)
  }


  trocarCargoDoFuncionario(funcionario: Funcionario, id_cargo: string):Observable<void>{

    const url = `${this.localUrl}/funcionario/trocar-cargo/${funcionario.id_colaborador}/${id_cargo}`
    return this.http.put<void>(url, funcionario)

  }


  excluirFuncionario(id_funcionario: string):Observable<void>{

    const url = `${this.localUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }



}
