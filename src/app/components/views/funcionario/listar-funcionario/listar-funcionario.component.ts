import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/components/models/funcionario-model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  id_cargo?: any

  funcionario: Funcionario = {

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

  funcionarios: Funcionario[] = []


  constructor(private funcService: FuncionarioService, private route: ActivatedRoute) {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
   }

  ngOnInit(): void {

    this.mostrarFuncPeloCargo()
    this.mostrarFuncionario()
  }


  mostrarFuncPeloCargo(){
    this.funcService.mostrarFuncionarioPeloCargo(this.id_cargo).subscribe((result) => {

      this.funcionarios = result
    })
  }


  mostrarFuncionario(){

    this.funcService.mostrarFuncionario(this.funcionario.id_colaborador).subscribe(result => {

      this.funcionario = result
    })
  }


  voltar(){
    window.history.go(-1)
  }

}
