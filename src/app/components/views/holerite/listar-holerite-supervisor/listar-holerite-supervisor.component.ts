import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Holerite } from 'src/app/components/models/holerite-model';
import { HoleriteService } from 'src/app/services/holerite.service';
import { Supervisor } from 'src/app/components/models/supervisor-model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-listar-holerite-supervisor',
  templateUrl: './listar-holerite-supervisor.component.html',
  styleUrls: ['./listar-holerite-supervisor.component.css']
})
export class ListarHoleriteSupervisorComponent implements OnInit {

  holerites: Holerite[] = []

  holerite: Holerite = {

    codigo: '',
    data_holerite: '',
    valor_holerite: 0,
    status_holerite: ''

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


  id_colaborador: any

  constructor(private holeriteService: HoleriteService, private superService: SupervisorService, private route: ActivatedRoute, private router: Router) {

    this.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

   }

  ngOnInit(): void {

    this.mostrarHoleriteDoSupervisor()
    this.mostrarSupervisor()
  }


  mostrarHoleriteDoSupervisor(){

    this.holeriteService.mostrarHoleriteDoSupervisor(this.id_colaborador).subscribe(resposta => {

      this.holerites = resposta
    })
  }


  mostrarSupervisor(){

    this.superService.mostrarSupervisor(this.super.id_colaborador).subscribe(resultado => {

      this.super = resultado
    })
  }


  editarStatusPago(){

    this.holeriteService.editarStatusPago(this.holerite.codigo).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Status editado com sucesso")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar")
        this.voltar()
      }
    })
  }


  editarStatusCancelado(){

    this.holeriteService.editarStatusCancelado(this.holerite.codigo).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Status editado com sucesso")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar")
        this.voltar()
      }
    })
  }



  voltar(){

    this.router.navigate(['supervisores'])
  }

}
