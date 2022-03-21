import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Holerite } from 'src/app/components/models/holerite-model';
import { HoleriteService } from 'src/app/services/holerite.service';

@Component({
  selector: 'app-editar-holerite',
  templateUrl: './editar-holerite.component.html',
  styleUrls: ['./editar-holerite.component.css']
})
export class EditarHoleriteComponent implements OnInit {


  id_colaborador: any

  holerite: Holerite = {

    codigo: '',
    data_holerite: '',
    valor_holerite: 0,
    status_holerite: ''
  }


  constructor(private holeriteService: HoleriteService, private route: ActivatedRoute, private router: Router) {

    this.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')
  }

  ngOnInit(): void {

    this.mostrarHolerite()
  }


  mostrarHolerite(){

    this.holeriteService.mostrarHolerite(this.holerite.codigo).subscribe(result => {

      this.holerite = result
    })
  }


  editarHolerite(){

    this.holeriteService.editarHolerite(this.holerite, this.id_colaborador).subscribe({

      next: () => { console.log("Editado com sucesso!")},

      complete: () => {
        alert("Holerite editado com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar!")
        this.voltar()
      }

    })
  }


  voltar(){

    window.history.go(-1)

  }



}
