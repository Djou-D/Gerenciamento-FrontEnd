import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Holerite } from 'src/app/components/models/holerite-model';
import { HoleriteService } from 'src/app/services/holerite.service';

@Component({
  selector: 'app-excluir-holerite',
  templateUrl: './excluir-holerite.component.html',
  styleUrls: ['./excluir-holerite.component.css']
})
export class ExcluirHoleriteComponent implements OnInit {

  id_cargo: any

  holerite: Holerite = {

    codigo: '',
    data_holerite: '',
    valor_holerite: 0,
    status_holerite: ''
  }




  constructor(private holeriteService: HoleriteService, private route: ActivatedRoute, private router: Router) {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
  }

  ngOnInit(): void {

    this.mostrarHolerite()
  }



  mostrarHolerite(){

    this.holeriteService.mostrarHolerite(this.holerite.codigo).subscribe(resposta => {

      this.holerite = resposta

    })
  }

  excluirHolerite(){
    this.holeriteService.excluirHolerite(this.holerite.codigo).subscribe({
      next: () => { console.log("Holerite excluido!")},

      complete: () => {
        alert("Holerite excluido com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Ouve um erro ao excluir")
        this.voltar()
      }

    })
  }


  voltar(){
    // this.router.navigate([`cargo/funcionario/${this.id_cargo}`])

    window.history.go(-1)
  }



}
