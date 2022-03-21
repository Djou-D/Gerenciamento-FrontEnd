import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/components/models/funcionario-model';

import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir-funcionario',
  templateUrl: './excluir-funcionario.component.html',
  styleUrls: ['./excluir-funcionario.component.css']
})
export class ExcluirFuncionarioComponent implements OnInit {

  id_cargo?: any

  func: Funcionario = {

    id_colaborador: '',
    nome: '',
    cidade: '',
    cpf: '',
    email: '',
    foto: '',
    senha: '',
    id_cargo: '',
    role: [{
      id_role: '',
      nome_role: ''
    }]
  }


  constructor(private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router) {

    this.func.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
  }

  ngOnInit(): void {

    this.mostrarFunc()
  }

  mostrarFunc(){
    this.funcService.mostrarFuncionario(this.func.id_colaborador).subscribe((resulado) => {

      this.func = resulado
    })
  }

  excluirFunc(){
    this.funcService.excluirFuncionario(this.func.id_colaborador).subscribe({
      next: () => { console.log("Funcionario excluido!")},

      complete: () => {
        alert("Funcionario excluido com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Ouve um erro ao excluir")
        this.voltar()
      }

    })
  }


  voltar(){
    window.history.go(-1)
  }

}
