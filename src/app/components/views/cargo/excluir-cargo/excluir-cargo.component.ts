import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/components/models/cargo-model';

import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-excluir-cargo',
  templateUrl: './excluir-cargo.component.html',
  styleUrls: ['./excluir-cargo.component.css']
})
export class ExcluirCargoComponent implements OnInit {

  cargo:Cargo = {
    id_cargo: "",
    nome_cargo: "",
    atribuicao_cargo: "",
    id_setor: ''
  }

  // activateRoute = pegar informações passadas na url
  constructor(private cargoService: CargoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id_cargo')

    this.mostrarCargo()

  }


  mostrarCargo(){
    this.cargoService.mostrarCargo(this.cargo.id_cargo).subscribe((resultado) => {

      this.cargo = resultado
      console.log(resultado)
    })
  }


  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
      complete: () => {
        alert("Cargo excluida com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Esse cargo não pode ser excluida por que existem funcionarios vinculados a ele!")
        this.voltar()
      }
    })
  }


  voltar(){
    this.router.navigate([`cargos/setor/${this.cargo.id_setor}`])
  }

}
