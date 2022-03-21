import { ListarHoleriteSupervisorComponent } from './components/views/holerite/listar-holerite-supervisor/listar-holerite-supervisor.component';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSetorComponent } from './components/views/setor/listar-setor/listar-setor.component';
import { Home2Component } from './components/views/home2/home2.component';

import { CadastrarCargoComponent } from './components/views/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { EditarCargoComponent } from './components/views/cargo/editar-cargo/editar-cargo.component';
import { ExcluirCargoComponent } from './components/views/cargo/excluir-cargo/excluir-cargo.component';
import { CadastrarSetorComponent } from './components/views/setor/cadastrar-setor/cadastrar-setor.component';
import { EditarSetorComponent } from './components/views/setor/editar-setor/editar-setor.component';
import { ExcluirSetorComponent } from './components/views/setor/excluir-setor/excluir-setor.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from './components/views/funcionario/excluir-funcionario/excluir-funcionario.component';
import { ListarSupervisorComponent } from './components/views/supervisor/listar-supervisor/listar-supervisor.component';
import { CadastrarSupervisorComponent } from './components/views/supervisor/cadastrar-supervisor/cadastrar-supervisor.component';
import { EditarSupervisorComponent } from './components/views/supervisor/editar-supervisor/editar-supervisor.component';
import { ExcluirSupervisorComponent } from './components/views/supervisor/excluir-supervisor/excluir-supervisor.component';
import { ListarCargosDoSetorComponent } from './components/views/cargo/listar-cargos-do-setor/listar-cargos-do-setor.component';
import { ListarSupervisorSetorComponent } from './components/views/supervisor/listar-supervisor-setor/listar-supervisor-setor.component';
import { CadastrarHoleriteComponent } from './components/views/holerite/cadastrar-holerite/cadastrar-holerite.component';
import { EditarHoleriteComponent } from './components/views/holerite/editar-holerite/editar-holerite.component';
import { ExcluirHoleriteComponent } from './components/views/holerite/excluir-holerite/excluir-holerite.component';
import { ListarHoleriteFuncionarioComponent } from './components/views/holerite/listar-holerite-funcionario/listar-holerite-funcionario.component';
import { EditarSupervisorDoSetorComponent } from './components/views/supervisor/editar-supervisor-do-setor/editar-supervisor-do-setor.component';


const routes: Routes = [

  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "home2", component: Home2Component},
  {path: "login", component: LoginComponent},


  {path: "setores", component: ListarSetorComponent},
  {path: "cadastrar/setor", component: CadastrarSetorComponent},
  {path: "editar/setor/:id_setor", component: EditarSetorComponent},
  {path: "excluir/setor/:id_setor", component: ExcluirSetorComponent},


  {path: "cargos/setor/:id_setor", component: ListarCargosDoSetorComponent},
  {path: "cadastrar/cargo", component: CadastrarCargoComponent},
  {path: "editar/cargo/:id_setor/:id_cargo", component: EditarCargoComponent},
  {path: "excluir/cargo/:id_cargo", component: ExcluirCargoComponent},


  {path:"cargo/funcionario/:id_cargo", component:ListarFuncionarioComponent},
  {path:"cadastrar/funcionario/:id_cargo", component:CadastrarFuncionarioComponent},
  {path:"editar/funcionario/:id_colaborador/:id_cargo", component:EditarFuncionarioComponent},
  {path:"excluir/funcionario/:id_colaborador", component:ExcluirFuncionarioComponent},


  {path: "supervisores", component:ListarSupervisorComponent},
  {path: "cadastrar/supervisor", component: CadastrarSupervisorComponent},
  {path: "editar/supervisor/:id_colaborador", component: EditarSupervisorComponent},
  {path: "editar/supervisor/:id_setor/:id_colaborador", component: EditarSupervisorDoSetorComponent},
  {path: "excluir/supervisor/:id_colaborador", component: ExcluirSupervisorComponent},
  {path: "supervisor/setor/:id_setor", component:ListarSupervisorSetorComponent},


  {path: "supervisor/holerite/:id_colaborador", component: ListarHoleriteSupervisorComponent},
  {path: "funcionario/holerite/:id_colaborador", component: ListarHoleriteFuncionarioComponent},

  {path: "cadastrar/holerite/:id_colaborador", component: CadastrarHoleriteComponent},
  {path: "editar/holerite/:codigo/:id_colaborador", component: EditarHoleriteComponent},
  {path: "excluir/holerite/:codigo/:id_colaborador", component: ExcluirHoleriteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
