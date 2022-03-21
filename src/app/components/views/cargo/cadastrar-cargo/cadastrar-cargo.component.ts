import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/components/models/cargo-model';
import { Setor } from 'src/app/components/models/setor-model';

import { CargoService } from 'src/app/services/cargo.service';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-cadastrar-cargo',
  templateUrl: './cadastrar-cargo.component.html',
  styleUrls: ['./cadastrar-cargo.component.css']
})
export class CadastrarCargoComponent implements OnInit {

  cargo:Cargo = {
    nome_cargo: "",
    atribuicao_cargo: ""
  }

  setor: Setor[] = []

  id_setor: any

  constructor(private cargoService: CargoService, private setorService: SetorService, private router: Router, private route: ActivatedRoute) {

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }

  ngOnInit(): void {
    this.mostrarTodosOsSetores()
  }


  mostrarTodosOsSetores(){

    this.setorService.mostrarTodosOsSetores().subscribe( resposta => {

      this.setor = resposta
    })

  }



  cadastrarCargo():void {
    this.cargoService.cadastrarCargoComSetor(this.cargo, this.id_setor).subscribe({
      next: () => {
        console.log('Cadastrado')
      },

      complete: () => {
        alert("Cargo cadastrada com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocoreu ao cadastrar o cargo!")
        this.voltar()
      }

    })
  }

  voltar(){
    this.router.navigate([`/cargos/setor/${this.id_setor}`])
  }

}
