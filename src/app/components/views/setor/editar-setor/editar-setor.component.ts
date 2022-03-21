import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/components/models/setor-model';
import { SetorService } from 'src/app/services/setor.service';

@Component({
  selector: 'app-editar-setor',
  templateUrl: './editar-setor.component.html',
  styleUrls: ['./editar-setor.component.css']
})
export class EditarSetorComponent implements OnInit {

  setor: Setor = {
    id_setor: '',
    nome_setor: '',
    atribuicao_setor: ''
  }

  constructor(private setorService: SetorService, private route: ActivatedRoute, private router: Router) {

    this.setor.id_setor = this.route.snapshot.paramMap.get('id_setor')

  }

  ngOnInit(): void {

    this.mostrarSetor()
  }

  mostrarSetor(){

    this.setorService.mostrarSetor(this.setor.id_setor).subscribe(resultado => {

      this.setor = resultado

    })
  }



  editarSetor(){
    this.setorService.editarSetor(this.setor).subscribe({

      next: () => {
        console.log("Editado com sucesso")
      },

      complete: () => {
        alert("Edição feita com sucesso!")
        this.router.navigate(['/setores'])
      },
      error: () => {
        alert("Erro ao editar!")
        this.router.navigate(['/setores'])
      }
    })

  }


}
