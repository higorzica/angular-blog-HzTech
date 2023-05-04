import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardTituloComponent } from './components/card-titulo/card-titulo.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtigoPrincipalComponent } from './components/artigo-principal/artigo-principal.component';
import { ArtigoSecundarioComponent } from './components/artigo-secundario/artigo-secundario.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardTituloComponent,
    HomeComponent,
    ArtigoPrincipalComponent,
    ArtigoSecundarioComponent,
    CategoriasComponent,
    ArtigosComponent,
    SobreComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
