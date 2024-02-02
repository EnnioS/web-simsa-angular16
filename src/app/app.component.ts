import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(private title:Title, private metaTagService: Meta){}

  ngOnInit(): void {
    this.title.setTitle('SIMSA');
    this.metaTagService.addTags([
      {name:'keywords', content:'Contruccion, mantenimiento, Ingenieria, remodelacion, fachada'},
      {name:'robot', content: 'index, follow'},
      {name:'author', content: 'Ennio Sáenz'},
      {name:'viewport', content: 'width=device-width, initial-scale=1'},
    ]);
  }
}
