import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from 'src/app/components/models/setor-model';
import { Supervisor } from 'src/app/components/models/supervisor-model';
import { SetorService } from 'src/app/services/setor.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-listar-supervisor-setor',
  templateUrl: './listar-supervisor-setor.component.html',
  styleUrls: ['./listar-supervisor-setor.component.css']
})
export class ListarSupervisorSetorComponent implements OnInit {

  id_setor?: any

  supervisorCadastrado: boolean = false
  id_cadastrado: any

  foto: any

  supervisores: Supervisor[] = []
  id_supervisor: any

  supervisorAtivo: boolean = false

  opcoes = {
    opsao1: 'ADMIN',
    opsao2: 'USER'
  }

  // setor: Setor[] = []

  supervisor: Supervisor = {
    id_colaborador: '',
    nome: '',
    cidade: '',
    email: '',
    cpf: '',
    foto: '',
    senha: '',
    id_setor: '',
    role: [{
      id_role: '',
      nome_role: ''
    }]
  }

  constructor(private superService: SupervisorService, private setorService: SetorService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

    this.id_setor = this.route.snapshot.paramMap.get('id_setor')

    this.supervisor.id_colaborador = this.route.snapshot.paramMap.get('id_colaborador')

  }

  ngOnInit(): void {

    this.mostrarSupervisorDoSetor()
    this.mostrarSupervisorSemSetor()
    this.mostrarSupervisor()
  }


  editarSupervisorDoSetor(){

    this.superService.editarSupervisorDoSetor(this.supervisor, this.id_setor).subscribe({

      next: () => {},
      complete: () => {
        alert("Editado com Sucesso!")
        this.router.navigate(['/setores'])
      },
      error: () => {
        alert("Um erro ocorreu!")
        this.router.navigate(['/setores'])
      }
    })
  }


  cadastrarSupervisor(){

    this.superService.cadastrarSupervisorEmUmSetor(this.supervisor, this.id_setor).subscribe({

      next: () => {
        console.log("Cadastrado!")
      },

      complete: () => {

        alert("Supervisor Cadastrado!"),

        this.superService.buscarSupervisorPeloNome(this.supervisor.nome).subscribe(result => {

          this.id_cadastrado = result.id_colaborador
          this.supervisorCadastrado = true

        })

      },

      error: () => {

        alert("Houve um erro ao cadastrar!")
      }
    })
  }


  subirFoto(event: any){

    //Verificando se foi escolhido um arquivo
    if(event.target.files && event.target.files[0]){
      //Armazena a foto escolhida em foto
      this.supervisor.foto = event.target.files[0]
      console.log(this.foto)
      //FormData permite a criação de uma estrutura com nome e valor como um objeto.
      const formData = new FormData
      //append inseri o conteudo dentro do formData
      formData.append("foto", this.supervisor.foto)

      const nome: string = this.supervisor.nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/enviar/imagem/${this.supervisor.id_colaborador}?nome=${nome}`,formData).subscribe({

      complete: () => console.log("Foto enviada")
      })

      alert("Foto anexada ao Professor")

    }
  }


  // mostarTodosOsSetores(){

  //   this.setorService.mostrarTodosOsSetores().subscribe( resposta => {

  //     this.setor = resposta
  //   })
  // }





  mostrarSupervisorDoSetor(){
    this.superService.mostrarSupervisorDoSetor(this.id_setor).subscribe((resultado) => {

      if(resultado == undefined){
        alert("Não a um supervisor ativo nesse setor!")
        this.supervisorAtivo = false
      } else {

        this.supervisor = resultado
        this.supervisorAtivo = true

        console.log("ROLE " + resultado.role)
        console.log(resultado)
      }


    })
  }


  mostrarSupervisorSemSetor(){
    this.superService.mostrarSupervisorSemSetor().subscribe((resultado) => {

      this.supervisores = resultado
      console.log(resultado)
    })
  }


  mostrarSupervisor(){
    this.superService.mostrarSupervisor(this.supervisor.id_colaborador).subscribe((resultado) => {

      this.supervisor = resultado
    })
  }

}
