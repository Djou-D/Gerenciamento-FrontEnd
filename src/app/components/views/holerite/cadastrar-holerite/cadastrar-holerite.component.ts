import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Holerite } from 'src/app/components/models/holerite-model';
import { HoleriteService } from 'src/app/services/holerite.service';

@Component({
  selector: 'app-cadastrar-holerite',
  templateUrl: './cadastrar-holerite.component.html',
  styleUrls: ['./cadastrar-holerite.component.css']
})
export class CadastrarHoleriteComponent implements OnInit {

  id_colaborador: any

  holerite: Holerite = {

    codigo: '',
    data_holerite: '',
    valor_holerite: 0,
    status_holerite: ''
  }

  constructor(private holeriteService: HoleriteService, private route: ActivatedRoute) {

    this.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')
   }

  ngOnInit(): void {
  }


  cadastrarHolerite(){
    this.holeriteService.cadastrarHolerite(this.holerite, this.id_colaborador).subscribe({
      next: () => {
        console.log("Holerite cadastrado")
      },
      complete: () => {
        alert(`Holerite cadastrado com sucesso!`)
        this.voltar()
      },

      error: () => {
        alert("Aconteceu um erro ao cadastrar!")
        this.voltar()
      }
    })
  }


  voltar(){
    window.history.go(-1)
  }

}
