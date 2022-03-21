import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../components/models/setor-model';



@Injectable({
  providedIn: 'root'
})
export class SetorService {

  urlBase: String = 'http://localhost:8080/empresa';

  constructor(private http: HttpClient) { }


  mostrarTodosOsSetores():Observable<Setor[]>{

    const url = `${this.urlBase}/setor`;
    return this.http.get<Setor[]>(url);
  }


  mostrarSetor(id_setor: string):Observable<Setor>{

    const url = `${this.urlBase}/setor/${id_setor}`;
    return this.http.get<Setor>(url);
  }


  mostrarSetorESupervisor():Observable<any>{

    const url = `${this.urlBase}/setor/supervisor`;
    return this.http.get<any>(url);

  }


  mostrarSetorSemSupervisor():Observable<any>{

    const url = `${this.urlBase}/setor/sem-supervisor`;
    return this.http.get<any>(url);
  }


  mostrarSetorSemCargo():Observable<Setor>{

    const url = `${this.urlBase}/setor/sem-cargo`;
    return this.http.get<Setor>(url);
  }



  cadastrarSetor(setor: Setor):Observable<Setor>{

    const url = `${this.urlBase}/setor`;
    return this.http.post<Setor>(url, setor);
  }


  editarSetor(setor: Setor):Observable<void>{

    const url = `${this.urlBase}/setor/${setor.id_setor}`;
    return this.http.put<void>(url, setor);
  }


  deixarSetorSemSupervisor(setor: Setor, id_supervisor: string):Observable<void>{

    const url = `${this.urlBase}/setor/${setor.id_setor}/retirar-supervisor/${id_supervisor}`;
    return this.http.put<void>(url, setor);

  }


  atribuirSupervisorAoSetor(setor: Setor, id_supervisor: string):Observable<void>{

    const url = `${this.urlBase}/setor/${setor.id_setor}/definir-supervisor/${id_supervisor}`;
    return this.http.put<void>(url, setor);

  }



  excluirSetor(id_setor: string):Observable<void>{

    const url = `${this.urlBase}/setor/${id_setor}`;
    return this.http.delete<void>(url);
  }


}
