import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { CargoService } from 'src/app/services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/components/models/funcionario-model';
import { Cargo } from 'src/app/components/models/cargo-model';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  id_cargo?: any

  opcoes = {
    opsao1: 'ADMIN',
    opsao2: 'USER'
  }

  // cargo: Cargo[] = [{id_cargo: '', car_nome: '', car_atribuicao: ''}]
  cargo: Cargo[] = []

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


  funcionario: any = {

    id_colaborador: '',
    nome: '',
    cidade: '',
    cpf: '',
    email: '',
    foto: '',
    senha: '',
    id_cargo: '',
    nome_role: ''

  }


  constructor(private funcService: FuncionarioService, private cargoService: CargoService, private route: ActivatedRoute, private router: Router) {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
  }

  ngOnInit(): void {

    this.mostrarTodosOsCargos()
    this.mostrarColaboradorERole()
  }


  mostrarTodosOsCargos(){
    this.cargoService.mostrarTodosOsCargos().subscribe(resposta =>{
      this.cargo = resposta;
    })
  }


  mostrarColaboradorERole(){

    this.funcService.mostrarColaboradorERole().subscribe(result => {

      this.funcionario = result

      console.log("FUNCIONARIO ROLE" + result)
    })
  }


  cadastrarFunc(){
    this.funcService.cadastrarFuncionario(this.func, this.id_cargo).subscribe({
      next: () => {
        console.log("Funcionario cadastrado")
      },
      complete: () => {
        alert(`Funcionario cadastrado com o cargo: ${this.func.id_cargo}`)
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
