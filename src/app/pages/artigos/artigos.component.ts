import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/dados/post';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent implements OnInit {

  private id:string|null="0";
  titulo:string="";
  categoria:string="";
  descricao:string="";
  imagem:string="";
  autor:string="";
  ativo:string="";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"));

    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null) {
    const resultado = Post.filter(artigo => artigo.id == id)[0]
    console.log(resultado)

      this.titulo = resultado.titulo
      this.categoria = resultado.categoria
      this.descricao = resultado.descricao
      this.imagem = resultado.imagem
      this.autor = resultado.autor
      this.ativo = resultado.ativo

  }


}
