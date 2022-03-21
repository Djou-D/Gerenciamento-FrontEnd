import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/components/models/setor-model';
import { Supervisor } from 'src/app/components/models/supervisor-model';
import { SetorService } from 'src/app/services/setor.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-cadastrar-supervisor',
  templateUrl: './cadastrar-supervisor.component.html',
  styleUrls: ['./cadastrar-supervisor.component.css']
})
export class CadastrarSupervisorComponent implements OnInit {


  id_setor?: any

  // supervisores: any
  // id_supervisor: any


  setor: Setor[] = []

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

  opcoes = {
    opsao1: 'ADMIN',
    opsao2: 'USER'
  }


  constructor(private superService: SupervisorService, private setorService: SetorService, private route: ActivatedRoute, private router: Router) {

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }

  ngOnInit(): void {
  }


  mostrarTodosOsSetores(){

    this.setorService.mostrarTodosOsSetores().subscribe( resposta => {

      this.setor = resposta;
    })
  }


  cadastrarSupervisor(){

    this.superService.cadastrarSupervisor(this.super).subscribe({

      next: () => {
        console.log("Supervisor cadastrado")
      },

      complete: () => {
        alert('Supervisor cadastrado no setor')

        this.voltar()
      },

      error: () => {
        alert("Um erro aconteceu ao cadastrar")

        this.voltar()
      }

    })
  }


  voltar(){
    window.history.go(-1)
  }

}
