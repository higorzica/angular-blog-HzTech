import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/dados/post';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  posts: any;
  cardSecundario: any;
  private id:string|null="0";
  titulo:string="";
  categoria:string="";
  descricao:string="";
  imagem:string="";
  autor:string="";
  ativo:string="";

  constructor () {}

  ngOnInit(): void {
    const arrayPosts = Post;
    this.posts = arrayPosts;
  }

  filtrarProgramacao() {
    const artigoSecundarioCategoria = this.posts.filter((res:any) => res.categoria == 'Programação')
    console.log(artigoSecundarioCategoria);
    this.cardSecundario = artigoSecundarioCategoria;
  }

  filtrarViagens() {
    const artigoSecundarioCategoria = this.posts.filter((res:any) => res.categoria == 'Viagens')
    console.log(artigoSecundarioCategoria);
    this.cardSecundario = artigoSecundarioCategoria;
  }

  filtrarInformatica() {
    const artigoSecundarioCategoria = this.posts.filter((res:any) => res.categoria == 'Informatica')
    console.log(artigoSecundarioCategoria);
    this.cardSecundario = artigoSecundarioCategoria;
  }

}
