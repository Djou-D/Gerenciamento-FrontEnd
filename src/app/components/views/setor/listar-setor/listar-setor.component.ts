import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/components/models/setor-model';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-listar-setor',
  templateUrl: './listar-setor.component.html',
  styleUrls: ['./listar-setor.component.css']
})
export class ListarSetorComponent implements OnInit {

  setores: Setor[] = []

  setor: any = [];


  constructor(private setorService: SetorService, private route: ActivatedRoute) {

    this.setor.id_setor = this.route.snapshot.paramMap.get('id_setor')
    this.setor.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

   }

  ngOnInit(): void {

    this.mostrarTodosOsSetores();
  }


  mostrarTodosOsSetores(){

    this.setorService.mostrarSetorESupervisor().subscribe((result) => {

      result.forEach((setor: any[]) => {

        let superDoSetor: any = {

          id_setor: '',
          nome_setor: '',
          atribuicao_setor: '',
          id_colaborador: '',
          nome: '',
          email: ''

        }

        superDoSetor.id_setor = setor[0]
        superDoSetor.nome_setor = setor[1]
        superDoSetor.atribuicao_setor = setor[2]

        if(setor[3] != null){

        superDoSetor.id_colaborador = setor[3]
        superDoSetor.nome = setor[4]
        superDoSetor.email = setor[5]

        } else {

          superDoSetor.id_colaborador = 0
          superDoSetor.nome = "Sem supervisor"
          superDoSetor.email = "Sem supervisor"
        }

        this.setor.push(superDoSetor)

      });


      console.log(result)
    })
  }




}
