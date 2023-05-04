import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/dados/post';

@Component({
  selector: 'app-artigo-principal',
  templateUrl: './artigo-principal.component.html',
  styleUrls: ['./artigo-principal.component.scss']
})
export class ArtigoPrincipalComponent implements OnInit {

  posts: any;
  cardPrincipal: any;
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

  constructor() {}

  ngOnInit(): void {
    // const arrayPosts = Post;
    // this.posts = arrayPosts;
    // console.warn(this.posts)
    // this.artigoPrincipal();
  }

  // artigoPrincipal() {
  //  const artigoPrincipal = this.posts.filter((res:any) => res.cardPrincipal == 'Sim')
  // //  console.log(artigoPrincipal);
  //  this.cardPrincipal = artigoPrincipal;
  // }

}
