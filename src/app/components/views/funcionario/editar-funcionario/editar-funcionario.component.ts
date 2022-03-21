import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/components/models/cargo-model';
import { Funcionario } from 'src/app/components/models/funcionario-model';

import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  id_cargo?: any

  foto: any
  // id_cadastrado: any

  opcoes = {
    opsao1: 'ADMIN',
    opsao2: 'USER'
  }


  cargos: Cargo[] = []

  cargo: Cargo = {
    id_cargo: '',
    nome_cargo: '',
    atribuicao_cargo: ''
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


  constructor(private funcService: FuncionarioService, private cargoService: CargoService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

    this.func.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
   }

  ngOnInit(): void {

    this.mostrarTodosOsCargos()
    this.mostrarFunc()
    this.mostrarCargo()
  }

  mostrarFunc(){
    this.funcService.mostrarFuncionario(this.func.id_colaborador).subscribe((resulado) => {

      this.func = resulado
    })
  }

  mostrarTodosOsCargos(){
    this.cargoService.mostrarTodosOsCargos().subscribe(resposta =>{
      this.cargos = resposta;
    })
  }

  mostrarCargo(){
    this.cargoService.mostrarCargo(this.id_cargo).subscribe(result => {

      this.cargo = result
    })
  }




  editarFunc(){

    this.funcService.editarFuncionario(this.func, this.id_cargo).subscribe({

      next: () => { console.log("Editado com sucesso!")},

      complete: () => {
        alert("Funcionario editado com sucesso!")
        this.voltar()
      },

      error: () => {
        alert("Um erro ocorreu ao editar!")
        this.voltar()
      }

    })
  }


  subirFoto(event: any){

    //Verificando se foi escolhido um arquivo
    if(event.target.files && event.target.files[0]){
      //Armazena a foto escolhida em foto
      this.func.foto = event.target.files[0]
      console.log(this.foto)
      //FormData permite a criação de uma estrutura com nome e valor como um objeto.
      const formData = new FormData
      //append inseri o conteudo dentro do formData
      formData.append("foto", this.func.foto)

      const nome: string = this.func.nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/enviar/imagem/${this.func.id_colaborador}?nome=${nome}`,formData).subscribe({

      complete: () => console.log("Foto enviada")
      })

      alert("Foto anexada ao funcionario")

    }
  }



  voltar(){
    window.history.go(-1)
  }


}
