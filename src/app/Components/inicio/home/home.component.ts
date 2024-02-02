import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(
    private title:Title,
    private MetaTagService:Meta, 
    private CanonicalService: CanonicalSeoService) { 
    
  }
  ngOnInit(): void {
      
   //METADATA

   this.title.setTitle('INICIO | SIMSA');
   this.CanonicalService.createLinkForCanonicalURL();
   this.MetaTagService.updateTag(
      {name:'description', content: 'SIMSA es una empresa de lider en construcción ubicada estrtegicamente en Managua, capital de Nicaragua.'}
    );
  }
}
