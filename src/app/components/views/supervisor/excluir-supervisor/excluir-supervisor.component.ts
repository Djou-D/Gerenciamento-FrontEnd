import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/components/models/supervisor-model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-excluir-supervisor',
  templateUrl: './excluir-supervisor.component.html',
  styleUrls: ['./excluir-supervisor.component.css']
})
export class ExcluirSupervisorComponent implements OnInit {

  id_setor?: any

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



  constructor(private superService: SupervisorService, private route: ActivatedRoute, private router: Router) {

    this.super.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }

  ngOnInit(): void {

    this.mostrarSupervisor()

  }


  mostrarSupervisor(){
    this.superService.mostrarSupervisor(this.super.id_colaborador).subscribe((resulado) => {

      this.super = resulado
    })
  }

  excluirSupervisor(){
    this.superService.excluirSupervisor(this.super.id_colaborador).subscribe({
      next: () => { console.log("excluido com sucesso!")},

      complete: () => {
        alert("Supervisor excluido com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Ouve um erro ao excluir")
        this.voltar()
      }

    })
  }


  voltar(){
    this.router.navigate(['setores'])
  }
}
