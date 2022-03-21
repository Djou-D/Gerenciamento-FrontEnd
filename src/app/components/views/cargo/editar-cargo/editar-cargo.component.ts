import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/components/models/cargo-model';
import { Setor } from 'src/app/components/models/setor-model';

import { CargoService } from 'src/app/services/cargo.service';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: "",
    nome_cargo: "",
    atribuicao_cargo: ""
  }

  setor: Setor[] = []

  id_setor: any

  constructor(private cargoService: CargoService, private setorService: SetorService, private route: ActivatedRoute, private router: Router) {

    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id_cargo')

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }

  ngOnInit(): void {

    this.mostrarCargo()
    this.mostrarTodosOsSetores()
  }


  mostrarTodosOsSetores(){

    this.setorService.mostrarTodosOsSetores().subscribe( resposta => {

      this.setor = resposta
    })

  }

  mostrarCargo(){
    this.cargoService.mostrarCargo(this.cargo.id_cargo).subscribe((resultado) => {
      this.cargo = resultado
    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo, this.id_setor).subscribe({
      complete: () => {
        alert("Edição feita com sucesso!")
        this.voltar()
      },
      error: () => {
        alert("Erro ao editar!")
        this.voltar()
      }
    })

  }

  voltar(){
    this.router.navigate([`/cargos/setor/${this.id_setor}`])
  }


}
