import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Setor } from 'src/app/components/models/setor-model';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-cadastrar-setor',
  templateUrl: './cadastrar-setor.component.html',
  styleUrls: ['./cadastrar-setor.component.css']
})
export class CadastrarSetorComponent implements OnInit {


  setor: Setor = {
    nome_setor: '',
    atribuicao_setor: ''
  }

  constructor(private setorService: SetorService, private router: Router) { }

  ngOnInit(): void {
  }



  cadastrarSetor(){
    this.setorService.cadastrarSetor(this.setor).subscribe({

      complete: () => {
        alert("Setor cadastrada com sucesso!")
        this.router.navigate(['/setores'])
      },

      error: () => {
        alert("Um erro ocoreu ao cadastrar o Setor!")
        this.router.navigate(['/setores'])
      }

    })
  }


}
