import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';

import { LoginComponent } from './components/views/login/login.component';

import { HomeComponent } from './components/views/home/home.component';
import { Home2Component } from './components/views/home2/home2.component';

import { CadastrarSetorComponent } from './components/views/setor/cadastrar-setor/cadastrar-setor.component';
import { EditarSetorComponent } from './components/views/setor/editar-setor/editar-setor.component';
import { ExcluirSetorComponent } from './components/views/setor/excluir-setor/excluir-setor.component';
import { ListarSetorComponent } from './components/views/setor/listar-setor/listar-setor.component';


import { CadastrarCargoComponent } from './components/views/cargo/cadastrar-cargo/cadastrar-cargo.component';
import { EditarCargoComponent } from './components/views/cargo/editar-cargo/editar-cargo.component';
import { ExcluirCargoComponent } from './components/views/cargo/excluir-cargo/excluir-cargo.component';



import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from './components/views/funcionario/excluir-funcionario/excluir-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';


import { CadastrarSupervisorComponent } from './components/views/supervisor/cadastrar-supervisor/cadastrar-supervisor.component';
import { EditarSupervisorComponent } from './components/views/supervisor/editar-supervisor/editar-supervisor.component';
import { ExcluirSupervisorComponent } from './components/views/supervisor/excluir-supervisor/excluir-supervisor.component';
import { ListarSupervisorComponent } from './components/views/supervisor/listar-supervisor/listar-supervisor.component';
import { ListarCargosDoSetorComponent } from './components/views/cargo/listar-cargos-do-setor/listar-cargos-do-setor.component';
import { CadastrarHoleriteComponent } from './components/views/holerite/cadastrar-holerite/cadastrar-holerite.component';
import { EditarHoleriteComponent } from './components/views/holerite/editar-holerite/editar-holerite.component';
import { ExcluirHoleriteComponent } from './components/views/holerite/excluir-holerite/excluir-holerite.component';
import { ListarHoleriteComponent } from './components/views/holerite/listar-holerite/listar-holerite.component';
import { ListarHoleriteSupervisorComponent } from './components/views/holerite/listar-holerite-supervisor/listar-holerite-supervisor.component';
import { ListarHoleriteFuncionarioComponent } from './components/views/holerite/listar-holerite-funcionario/listar-holerite-funcionario.component';
import { ListarSupervisorSetorComponent } from './components/views/supervisor/listar-supervisor-setor/listar-supervisor-setor.component';

import { CommonModule, CurrencyPipe } from '@angular/common';

import { NgxCurrencyModule } from "ngx-currency";

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { EditarSupervisorDoSetorComponent } from './components/views/supervisor/editar-supervisor-do-setor/editar-supervisor-do-setor.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ListarSetorComponent,
    Home2Component,
    CadastrarCargoComponent,
    EditarCargoComponent,
    ExcluirCargoComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
    ExcluirFuncionarioComponent,
    ListarFuncionarioComponent,
    CadastrarSupervisorComponent,
    EditarSupervisorComponent,
    ExcluirSupervisorComponent,
    ListarSupervisorComponent,
    CadastrarSetorComponent,
    EditarSetorComponent,
    ExcluirSetorComponent,
    ListarCargosDoSetorComponent,
    CadastrarHoleriteComponent,
    EditarHoleriteComponent,
    ExcluirHoleriteComponent,
    ListarHoleriteComponent,
    ListarHoleriteSupervisorComponent,
    ListarHoleriteFuncionarioComponent,
    ListarSupervisorSetorComponent,
    EditarSupervisorDoSetorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxCurrencyModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
                  { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
                  CurrencyPipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
