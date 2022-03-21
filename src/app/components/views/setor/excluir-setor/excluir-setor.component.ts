import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/components/models/setor-model';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-excluir-setor',
  templateUrl: './excluir-setor.component.html',
  styleUrls: ['./excluir-setor.component.css']
})
export class ExcluirSetorComponent implements OnInit {

  setor: Setor = {
    id_setor: "",
    nome_setor: "",
    atribuicao_setor: ""
  }


  constructor(private setorService: SetorService, private route: ActivatedRoute, private router: Router) {

    this.setor.id_setor = this.route.snapshot.paramMap.get('id_setor')
  }

  ngOnInit(): void {

    this.mostrarSetor()
  }


  mostrarSetor(){
    this.setorService.mostrarSetor(this.setor.id_setor).subscribe((resultado) => {

      this.setor = resultado
      console.log(resultado)
    })
  }


  excluirSetor(){
    this.setorService.excluirSetor(this.setor.id_setor).subscribe({
      complete: () => {
        alert("Setor excluida com sucesso!")
        this.router.navigate(['/setores'])
      },

      error: () => {
        alert("Houve um erro ao excluir o setor!")
        this.router.navigate(['/setores'])
      }
    })
  }

}
