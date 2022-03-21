import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: String = 'http://localhost:8080/empresa';

  public email: string = '';
  public senha: string = '';

  constructor(private http: HttpClient) { }


  public login(email: string, senha: string){

    const headers = new HttpHeaders({Authorization: "Basic " + btoa(email + ":" + senha)})

     return this.http.get<void>(`${this.urlBase}/`,{headers, responseType: 'text' as 'json'} )

  }


  public logout(){

    return this.http.get(`${this.urlBase}/logout`)
  }

}

