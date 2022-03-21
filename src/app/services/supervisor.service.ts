import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supervisor } from '../components/models/supervisor-model';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  urlBase: String = `http://localhost:8080/empresa`

  constructor(private http:HttpClient) { }



  mostrarSupervisorDoSetor(id_setor: string):Observable<Supervisor>{

    const url = `${this.urlBase}/supervisor/setor/${id_setor}`

    return this.http.get<Supervisor>(url)
  }


  mostrarSupervisorSemSetor():Observable<Supervisor[]>{
    const url = `${this.urlBase}/supervisor/sem-setor`

    return this.http.get<Supervisor[]>(url)
  }


  mostrarSupervisor(id_supervisor: string):Observable<Supervisor>{
    const url = `${this.urlBase}/supervisor/${id_supervisor}`

    return this.http.get<Supervisor>(url)
  }


  mostrarTodosOsSupervisores():Observable<Supervisor[]>{
    const url = `${this.urlBase}/supervisor`

    return this.http.get<Supervisor[]>(url)
  }


  buscarSupervisorPeloNome(nome: string):Observable<Supervisor>{

    const url = `${this.urlBase}/colaborador-nome/${nome}`
    return this.http.get<Supervisor>(url)
  }


  cadastrarSupervisor(supervisor: Supervisor):Observable<Supervisor>{

    const url = `${this.urlBase}/supervisor`

    return this.http.post<Supervisor>(url, supervisor)
  }


  cadastrarSupervisorEmUmSetor(supervisor: Supervisor, id_setor: string):Observable<Supervisor>{

    const url = `${this.urlBase}/supervisor/add?setor=${id_setor}`

    return this.http.put<Supervisor>(url, supervisor)
  }


  editarSupervisorDoSetor(supervisor: Supervisor, id_setor: string):Observable<void>{

    const url = `${this.urlBase}/supervisor/${id_setor}/${supervisor.id_colaborador}`

    return this.http.put<void>(url, supervisor)
  }


  editarSupervisor(supervisor: Supervisor):Observable<void>{

    const url = `${this.urlBase}/supervisor/${supervisor.id_colaborador}`

    return this.http.put<void>(url, supervisor)
  }


  excluirSupervisor(id_supervisor: string):Observable<void>{

    const url = `${this.urlBase}/supervisor/${id_supervisor}`

    return this.http.delete<void>(url)
  }



}
