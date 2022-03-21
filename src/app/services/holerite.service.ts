import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Holerite } from '../components/models/holerite-model';

@Injectable({
  providedIn: 'root'
})
export class HoleriteService {

  localUrl: string = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }


  mostrarTodosOsHolerites():Observable<Holerite>{

    const url = `${this.localUrl}/holerite`
    return this.http.get<Holerite>(url)

  }


  mostrarHolerite(codigo: string):Observable<Holerite>{

    const url = `${this.localUrl}/holerite/${codigo}`
    return this.http.get<Holerite>(url)
  }


  mostrarHoleriteDoFuncionario(id_funcionario: string):Observable<Holerite[]>{

    const url = `${this.localUrl}/funcionario/holerite/${id_funcionario}`
    return this.http.get<Holerite[]>(url)
  }


  mostrarHoleriteDoSupervisor(id_supervisor: string):Observable<Holerite[]>{

    const url = `${this.localUrl}/supervisor/holerite/${id_supervisor}`
    return this.http.get<Holerite[]>(url)
  }


  mostrarHoleriteEFuncionario():Observable<void>{

    const url = `${this.localUrl}/holerite-funcionario`
    return this.http.get<void>(url)
  }


  mostrarHoleriteESupervisor():Observable<void>{

    const url = `${this.localUrl}/holerite-supervisor`
    return this.http.get<void>(url)
  }



  cadastrarHolerite(holerite: Holerite,  id_colaborador: string):Observable<Holerite>{

    const url = `${this.localUrl}/holerite/funcionario/${id_colaborador}`
    return this.http.post<Holerite>(url, holerite)
  }


  // cadastrarHoleriteSupervisor(holerite: Holerite,  id_supervisor: string):Observable<Holerite>{

  //   const url = `${this.localUrl}/holerite/supervisor/${id_supervisor}`
  //   return this.http.post<Holerite>(url, holerite)
  // }


  editarHolerite(holerite: Holerite, id_colaborador: string):Observable<void>{

    const url = `${this.localUrl}/holerite/funcionario/${holerite.codigo}/${id_colaborador}`
    return this.http.put<void>(url, holerite)
  }


  // editarHoleriteSupervisor(holerite: Holerite, id_supervisor: string):Observable<void>{

  //   const url = `${this.localUrl}/holerite/supervisor/${holerite.codigo}/${id_supervisor}`
  //   return this.http.put<void>(url, holerite)
  // }


  editarStatusPago(holerite: Holerite):Observable<any>{

    const url = `${this.localUrl}/holerite-pago/${holerite.codigo}`
    return this.http.put<any>(url, holerite)
  }


  editarStatusCancelado(holerite: Holerite):Observable<any>{

    const url = `${this.localUrl}/holerite-cancelado/${holerite.codigo}`
    return this.http.put<any>(url, holerite)
  }


  excluirHolerite(codigo: string):Observable<void>{

    const url = `${this.localUrl}/holerite/${codigo}`
    return this.http.delete<void>(url)

  }

}
