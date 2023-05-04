import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/dados/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any;
  cardPrincipal: any;
  cardSecundario: any;

  id:string|null="0";
  titulo:string="";
  categoria:string="";
  descricao:string="";
  imagem:string="";
  autor:string="";
  ativo:string="";

  constructor() {}

  ngOnInit(): void {
    const arrayPosts = Post;
    this.posts = arrayPosts;

    this.artigoPrincipal();
    this.artigoSecundario();
  }

  artigoPrincipal() {
    const artigoPrincipal = this.posts.filter((res:any) => res.cardPrincipal == 'Sim')
    console.log(artigoPrincipal);
    this.cardPrincipal = artigoPrincipal;
   }

  artigoSecundario() {
    const artigoSecundario = this.posts.filter((res:any) => res.cardPrincipal == 'Não')
    console.log(artigoSecundario);
    this.cardSecundario = artigoSecundario;
  }



}
