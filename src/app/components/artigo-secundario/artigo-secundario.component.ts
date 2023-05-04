import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/dados/post';

@Component({
  selector: 'app-artigo-secundario',
  templateUrl: './artigo-secundario.component.html',
  styleUrls: ['./artigo-secundario.component.scss']
})
export class ArtigoSecundarioComponent implements OnInit {

  posts: any;
  cardSecundario: any;
  @Input()
  id:string="0";
  @Input()
  titulo:string="";
  @Input()
  categoria:string="";
  @Input()
  descricao:string="";
  @Input()
  imagem:string="";
  @Input()
  autor:string="";

  constructor (){}

  ngOnInit(): void {
    // const arrayPosts = Post;
    // this.posts = arrayPosts;
    // console.warn(this.posts)
    // this.artigoSecundario();
  }

  // artigoSecundario() {
  //   const artigoSecundario = this.posts.filter((res:any) => res.cardPrincipal == 'Não')
  //   console.log(artigoSecundario);
  //   this.cardSecundario = artigoSecundario;
  // }

}
