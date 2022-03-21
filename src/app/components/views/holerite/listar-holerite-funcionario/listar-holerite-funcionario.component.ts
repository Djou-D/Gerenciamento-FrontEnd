import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/components/models/funcionario-model';
import { Holerite } from 'src/app/components/models/holerite-model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { HoleriteService } from 'src/app/services/holerite.service';

@Component({
  selector: 'app-listar-holerite-funcionario',
  templateUrl: './listar-holerite-funcionario.component.html',
  styleUrls: ['./listar-holerite-funcionario.component.css']
})
export class ListarHoleriteFuncionarioComponent implements OnInit {

  holerites: Holerite[] = []

  holerite: Holerite = {

    codigo: '',
    data_holerite: '',
    valor_holerite: 0,
    status_holerite: ''

  }


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


  constructor(private holeriteService: HoleriteService, private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router) {

    this.holerite.codigo = this.route.snapshot.paramMap.get('codigo')

    this.func.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')
   }

  ngOnInit(): void {

    this.mostrarHoleriteDoFuncionario()
    this.mostrarFuncionario()
    this.mostrarHolerite()

  }


  mostrarHoleriteDoFuncionario(){

    this.holeriteService.mostrarHoleriteDoFuncionario(this.func.id_colaborador).subscribe(resposta => {

      this.holerites = resposta
    })
  }

  mostrarHolerite(){

    this.holeriteService.mostrarHolerite(this.holerite.codigo).subscribe(result => {

      this.holerite = result
    })
  }


  mostrarFuncionario(){

    this.funcService.mostrarFuncionario(this.func.id_colaborador).subscribe(resultado => {

      this.func = resultado
    })
  }


  editarStatusPago(){

    this.holeriteService.editarStatusPago(this.holerite.codigo).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Status editado com sucesso")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar")
        this.voltar()
      }
    })
  }


  editarStatusCancelado(){

    this.holeriteService.editarStatusCancelado(this.holerite.codigo).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Status editado com sucesso")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar")
        this.voltar()
      }
    })
  }



  voltar(){
    window.history.go(-1)
  }

}
