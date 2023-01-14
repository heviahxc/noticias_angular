import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias : any[] = [];
  loading = false;
  constructor(private _noticiasServices: NoticiasService){}
  buscarNoticias(parametros:any){
    this.loading = true
    this.listNoticias = [];

    setTimeout (() =>{


    this._noticiasServices.getNoticias(parametros).subscribe(data =>{
      this.loading = false;
      this.listNoticias = data.articles;

    }, error =>{
      console.log(error);
      this.loading = false;
    })
  }, 1000);
  }
}
//f5a9c9e63ef243529252725ac0f86be1
