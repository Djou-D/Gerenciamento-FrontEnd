import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/components/models/cargo-model';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-listar-cargos-do-setor',
  templateUrl: './listar-cargos-do-setor.component.html',
  styleUrls: ['./listar-cargos-do-setor.component.css']
})
export class ListarCargosDoSetorComponent implements OnInit {

  cargos: Cargo[] = [];



  id_setor?: any

  constructor(private cargoService: CargoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')

    // this.cargos = this.route.snapshot.paramMap.get('id_cargo')

    this.mostrarTodosOsCargosDoSetor();
  }

  mostrarTodosOsCargosDoSetor(){
    this.cargoService.mostrarCargosDoSetor(this.id_setor).subscribe(resposta =>{

      console.log(resposta)
      this.cargos = resposta;

    })
  }

}
