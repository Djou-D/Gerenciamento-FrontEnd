
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cargo } from '../components/models/cargo-model';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  localUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }



  mostrarTodosOsCargos():Observable<Cargo[]>{

    const url = `${this.localUrl}/cargo`

    return this.http.get<Cargo[]>(url)
  }


  mostrarCargo(id_cargo: string):Observable<Cargo>{
    const url = `${this.localUrl}/cargo/${id_cargo}`
    return this.http.get<Cargo>(url)
  }


  mostrarCargoESetor():Observable<void>{

    const url = `${this.localUrl}/cargo/com-setor`;
    return this.http.get<void>(url);
  }


  mostrarCargosSemSetor():Observable<Cargo>{

    const url = `${this.localUrl}/cargo/sem-setor`;
    return this.http.get<Cargo>(url);
  }


  mostrarCargosDoSetor(id_setor: string):Observable<Cargo[]>{

    const url = `${this.localUrl}/setor/cargos/${id_setor}`;
    return this.http.get<Cargo[]>(url);
  }


  cadastrarCargo(cargo:Cargo):Observable<Cargo>{

    const url = `${this.localUrl}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }


  cadastrarCargoComSetor(cargo: Cargo, id_setor: string):Observable<Cargo>{

    const url = `${this.localUrl}/cargo/setor?setor=${id_setor}`
    return this.http.post<Cargo>(url, cargo)
  }


    //Editar cargo vinculado a um setor
  editarCargo(cargo: Cargo, id_setor: string):Observable<void>{

    const url = `${this.localUrl}/cargo/${id_setor}/${cargo.id_cargo}`
    return this.http.put<void>(url, cargo)
  }


  excluirCargo(id_cargo:string):Observable<void>{

    const url = `${this.localUrl}/cargo/${id_cargo}`
    return this.http.delete<void>(url)
  }


}
