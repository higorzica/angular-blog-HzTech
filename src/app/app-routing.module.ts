import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artigos/:id',
    component: ArtigosComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
