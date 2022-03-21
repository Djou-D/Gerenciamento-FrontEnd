import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/components/models/setor-model';
import { Supervisor } from 'src/app/components/models/supervisor-model';

import { SupervisorService } from 'src/app/services/supervisor.service';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-editar-supervisor',
  templateUrl: './editar-supervisor.component.html',
  styleUrls: ['./editar-supervisor.component.css']
})
export class EditarSupervisorComponent implements OnInit {

  id_setor?: any

  foto: any
  id_cadastrado: any

  supervisores: any
  id_supervisor: any

  opcoes = {
    opsao1: 'ADMIN',
    opsao2: 'USER'
  }

  setores: Setor[] = []

  setor: Setor = {

    id_setor: '',
    nome_setor: '',
    atribuicao_setor: ''
  }

  super: Supervisor = {

    id_colaborador: '',
    nome: '',
    cidade: '',
    cpf: '',
    email: '',
    foto: '',
    senha: '',
    id_setor: '',
    role: [{
      id_role: '',
      nome_role: ''
    }]
  }


  constructor(private SuperService: SupervisorService, private http: HttpClient, private setorService: SetorService, private route: ActivatedRoute, private router: Router) {

    this.super.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }


  ngOnInit(): void {

    this.mostrarSupervisor()
    this.mostrarSetorSemSupervisor()
    this.mostrarSetor()

  }


  mostrarSetorSemSupervisor(){

    this.setorService.mostrarSetorSemSupervisor().subscribe(resposta => {

      this.setores = resposta
    })
  }


  mostrarSetor(){

    this.setorService.mostrarSetor(this.id_setor).subscribe(result => {

      this.setor = result
    })
  }



  mostrarSupervisor(){

    this.SuperService.mostrarSupervisor(this.super.id_colaborador).subscribe( resultado => {

      this.super = resultado
    })
  }



  editarSupervisor(){

    this.SuperService.editarSupervisor(this.super).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Supervisor editado com sucesso")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar")
        this.voltar()
      }
    })

  }


  subirFoto(event: any){

    //Verificando se foi escolhido um arquivo
    if(event.target.files && event.target.files[0]){
      //Armazena a foto escolhida em foto
      this.super.foto = event.target.files[0]
      console.log(this.super.foto)
      //FormData permite a criação de uma estrutura com nome e valor como um objeto.
      const formData = new FormData
      //append inseri o conteudo dentro do formData
      formData.append("foto", this.super.foto)

      const nome: string = this.super.nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/enviar/imagem/${this.super.id_colaborador}?nome=${nome}`,formData).subscribe({

      complete: () => console.log("Foto enviada")
      })

      alert("Foto anexada ao Supervisor")

    }
  }



  voltar(){

    this.router.navigate(['setores'])
  }



}
