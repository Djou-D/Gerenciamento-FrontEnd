import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/components/models/supervisor-model';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-listar-supervisor',
  templateUrl: './listar-supervisor.component.html',
  styleUrls: ['./listar-supervisor.component.css']
})
export class ListarSupervisorComponent implements OnInit {

  supervisor: Supervisor[] = []

  id_setor: any

  constructor(private superService: SupervisorService, private route: ActivatedRoute) {

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')

   }

  ngOnInit(): void {

    this.mostrarTodosOsSupervisores()

    this.mostrarSupervisorDoSetor()
  }


  mostrarTodosOsSupervisores(){
    this.superService.mostrarTodosOsSupervisores().subscribe((resultado) => {

      this.supervisor = resultado

      console.log("Resultado" + resultado)
    })
  }


  mostrarSupervisorDoSetor(){

    this.superService.mostrarSupervisorDoSetor(this.id_setor).subscribe(result => {

      this.id_setor = result.id_setor

      console.log("id do setor" + result.id_setor)
    })
}

}
